import { Flex, Tooltip } from 'antd'
import { createStyles } from 'antd-style'
import { PlusOutlined } from '@ant-design/icons'
import reactSVG from '@/assets/react.svg'
import antSVG from '@/assets/antd.svg'
import type { VersionProps } from '@/shared/Version'
import Version from '@/shared/Version'

const useStyle = createStyles(
  ({ token }) => ({
    a: {
      color: token.colorLink,
    },
    img: {
      'width': 100,
      'height': 100,
      'margin': 10,
      '&:hover': {
        transform: 'scale(1.0618)',
        transition: 'transform 0.618s',
      },
    },
  }),
)

interface Source {
  key: VersionProps['type']
  href: string
  uri: string
  alt: string
}

function Brands() {
  const { styles, theme } = useStyle()

  const source: Source[] = [
    {
      key: 'antd',
      href: 'https://ant.design',
      uri: antSVG,
      alt: 'Ant Design',
    },
    {
      key: 'react',
      href: 'https://react.dev',
      uri: reactSVG,
      alt: 'React',
    },
  ]

  const reduceHandler = (
    nodes: React.ReactNode[],
    { href, uri, alt, key }: Source,
    idx: number,
  ) => {
    nodes.push(
      <Tooltip
        key={key}
        title={<Version type={key} />}
        trigger={['hover', 'focus']}
        placement="top"
      >
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className={styles.a}
        >
          <img
            src={uri}
            alt={alt}
            className={styles.img}
          />
        </a>
      </Tooltip>,
    )
    if (idx === 0) {
      nodes.push(
        <PlusOutlined
          key={`plus_${idx}`}
          style={{ fontSize: theme.fontSizeXL }}
        />,
      )
    }
    return nodes
  }

  return (
    <Flex gap={theme.marginMD}>
      {source.reduce(reduceHandler, [])}
    </Flex>
  )
}

export default Brands
