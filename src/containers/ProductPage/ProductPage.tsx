import * as React from 'react'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export interface IProductPageProps {
  test: string
}

const TEST = gql`
  query {
    allCompanies {
      name
    }
  }
`


export default class ProductPage extends React.Component<
  IProductPageProps,
  {}
> {
  public render() {
    return (
      <Query query={TEST}>
        {({data, loading, error}) => {
          if (loading) return (<div> loading</div>);
          console.log(data, error)
          return (
            <div>product page</div>
          )
        }}
      </Query>
    )
  }
}
