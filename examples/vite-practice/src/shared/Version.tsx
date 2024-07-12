import React, { version as reactVersion } from 'react'
import { ConfigProvider, Typography, version as antdVersion, theme, version } from 'antd'
import { useAntdToken } from 'antd-style'

export interface VersionProps {
  type?: 'antd' | 'react'
}

const consoled = Symbol.for(crypto.randomUUID())

function Version(props: VersionProps) {
  const { type = 'antd' } = props

  React.useEffect(() => {
    if ((globalThis as any)[consoled]) {
      return
    }
    (globalThis as any)[consoled] = true
    globalThis.console.table({
      antd: antdVersion,
      react: reactVersion,
    })
  }, [])

  const token = useAntdToken()

  return (
    <ConfigProvider theme={{ algorithm: theme.compactAlgorithm }}>
      <Typography.Text code style={{ color: token.colorWhite }}>
        {
          (function () {
            switch (type) {
              case 'antd':
                return antdVersion
              case 'react':
                return reactVersion
              default:
                return version
            }
          }())
        }
      </Typography.Text>
    </ConfigProvider>
  )
}

export default Version
