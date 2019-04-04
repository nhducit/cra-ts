import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  NormalizedCacheObject
} from "apollo-boost";
import { persistCache } from "apollo-cache-persist";
import { PersistedData, PersistentStorage } from "apollo-cache-persist/types";
import { setContext } from "apollo-link-context";
import { createUploadLink } from "apollo-upload-client";
import cookie from "cookie";
import localForage from "localforage";

function create({ getToken }: { getToken: any }) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  const cache = new InMemoryCache();

  persistCache({
    cache,
    storage: localForage as PersistentStorage<
      PersistedData<NormalizedCacheObject>
    >
  });

  const httpLink = createUploadLink({
    credentials: "same-origin", // Additional fetch() options like `credentials` or `headers`
    uri: "http://localhost:9002/graphql" // Server URL (must be absolute)
  });

  // TODO: add subscription link.

  const authLink = setContext((_, { headers }) => {
    const token = getToken();
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : ""
      }
    };
  });

  return new ApolloClient({
    cache,
    connectToDevTools: true,
    link: ApolloLink.from([authLink.concat(httpLink)])
  });
}
function parseCookies(options = {}) {
  return cookie.parse(
    // eslint-disable-next-line no-undef
    document.cookie,
    options
  );
}

export default function initApollo(options: any): ApolloClient<any> {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  // Reuse client on the client-side
  options.getToken = () => parseCookies().token;
  return create(options);
}
