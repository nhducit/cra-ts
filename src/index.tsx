import createBrowserHistory from 'history/createBrowserHistory'
import { Provider } from 'mobx-react'
import { syncHistoryWithStore } from 'mobx-react-router'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Helmet } from 'react-helmet'
import { ApolloProvider } from 'react-apollo';
import { Route, Router } from 'react-router'
import AppLayout from './components/AppLayout'
import App from './containers/App/App'
import ProductPage from './containers/ProductPage/ProductPage'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import stores from './store'
import { routingStore } from './store/RouteStore'
import initApollo from '@app/lib/initApollo'
const browserHistory = createBrowserHistory()

const history = syncHistoryWithStore(browserHistory, routingStore)

const apolloClient = initApollo({})

ReactDOM.render(
  <Provider {...stores}>
    <Router history={history}>
      <ApolloProvider client={apolloClient}>
        <AppLayout>
          <Helmet title="Awesome App" />
          <Route exact={true} path="/" component={App} />
          <Route path="/product" component={ProductPage} />
        </AppLayout>
      </ApolloProvider>
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()
