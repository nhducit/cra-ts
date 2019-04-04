import Header from '@app/components/Header'
import { UI } from '@app/constants'
import { css } from 'emotion'
import * as React from 'react'
import { Fragment } from 'react'

const Devtools =
  process.env.NODE_ENV !== 'production'
    ? // tslint:disable-next-line
      require('mobx-react-devtools').default
    : Fragment
// export interface AppLayoutProps {}

export default class AppLayout extends React.Component<{}, any> {
  public render() {
    return (
      <div
        className={css`
          margin-top: ${UI.HEADER_HEIGHT}px;
        `}
      >
        <Devtools />
        <Header />
        {this.props.children}
      </div>
    )
  }
}
