import * as React from 'react'
import { css } from '../../node_modules/emotion'
import { UI } from '../constants'

const wrapper = css`
  background-color: green;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${UI.HEADER_HEIGHT}px;
`

// export interface IHeaderProps {}

export default class Header extends React.Component<{}, any> {
  public render() {
    return <div className={wrapper}>header</div>
  }
}
