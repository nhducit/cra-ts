import { UI } from '@app/constants'
import { css } from 'emotion'
import * as React from 'react'

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
