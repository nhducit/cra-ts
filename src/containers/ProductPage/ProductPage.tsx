import * as React from 'react'

export interface IProductPageProps {
  test: string
}

export default class ProductPage extends React.Component<
  IProductPageProps,
  {}
> {
  public render() {
    return <div>product page</div>
  }
}
