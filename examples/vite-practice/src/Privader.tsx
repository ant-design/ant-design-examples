import { App } from 'antd'
import { createGlobalStyle, ThemeProvider } from 'antd-style'
import * as React from 'react'

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
