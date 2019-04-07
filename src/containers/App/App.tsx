import { STORE } from '@app/constants'
import '@app/setup'
import { css } from 'emotion'
import { inject, observer } from 'mobx-react'
import { RouterStore } from 'mobx-react-router'
import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import logo from '../../assets/logo.svg'
import './App.css'

export interface IAppProps extends RouteComponentProps<any> {
  routing: RouterStore
}

@inject(STORE.ROUTING)
@observer
class App extends React.Component<IAppProps, {}> {
  public render() {
    const { location, push, goBack } = this.props.routing

    return (
      <div
        className={css`
          text-align: center;
        `}
      >
        <div>
          <span>Current pathname: {location.pathname}</span>
          <button onClick={() => push('/product')}>Change url</button>
          <button onClick={() => goBack()}>Go Back</button>
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div
          className={css`
            height: 1000px;
            background-color: blue;
          `}
        />
      </div>
    )
  }
}

export default App
