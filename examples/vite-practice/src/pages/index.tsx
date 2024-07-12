import { useState } from 'react'
import { Button, Divider, Flex, Space, Statistic, Tooltip, Typography } from 'antd'
import { createStyles } from 'antd-style'
import { AntDesignOutlined, GithubFilled, PlusOutlined } from '@ant-design/icons'
import Version from '@/shared/Version'
import Brands from '@/shared/Brands'

const useStyle = createStyles(
  ({ token }) => ({
    textLinearGradient: {
      background: `linear-gradient(45deg, ${token.colorPrimary}, ${token.colorPrimaryActive})`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginInlineStart: '.5rem',
    },
  }),
)

function App() {
  const [count, setCount] = useState(() => Math.floor(Math.random() * 100))
  const { styles, theme } = useStyle()

  return (
    <Flex
      vertical
      style={{ height: '100dvh' }}
      justify="center"
      align="center"
    >
      <Flex vertical gap={theme.marginMD} align="center">
        <Brands />
        <Typography.Title level={2}>
          Hello,
          <Tooltip title={<Version />} placement="right" defaultOpen>
            <span className={styles.textLinearGradient}>
              Ant Design!
            </span>
          </Tooltip>
        </Typography.Title>
      </Flex>

      <Divider>
        <Statistic value={count} />
      </Divider>

      <Flex gap={32}>
        <Space.Compact size="large">
          <Tooltip title="Example Source Code">
            <Button
              icon={<GithubFilled />}
              onClick={
                () => window.open(
                  'https://github.com/ant-design/ant-design-examples/blob/main/vite-practice',
                  '_blank',
                )
              }
            />
          </Tooltip>
          <Tooltip title="Ant Design GitHub">
            <Button
              icon={<AntDesignOutlined />}
              onClick={
                () => window.open(
                  'https://github.com/ant-design/ant-design',
                  '_blank',
                )
              }
            />
          </Tooltip>
        </Space.Compact>
        <Button
          type="primary"
          size="large"
          icon={<PlusOutlined />}
          onClick={() => setCount(prev => prev + 1)}
        >
          Add Count
        </Button>
      </Flex>
    </Flex>
  )
}

export default App
