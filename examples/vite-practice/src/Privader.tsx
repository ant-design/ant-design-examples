import * as React from 'react'
import { App } from 'antd'
import { ThemeProvider, createGlobalStyle } from 'antd-style'

const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: ${props => props.theme.colorBgContainer};
  }
`

function Provider({ children }: React.PropsWithChildren) {
  return (
    <ThemeProvider themeMode="auto">
      <GlobalStyle />
      <App>
        {children}
      </App>
    </ThemeProvider>
  )
}

export default Provider
