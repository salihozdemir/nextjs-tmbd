import '../style/reset.css'
import { Layout, Menu } from 'antd'
import 'antd/dist/antd.css'
import Link from 'next/link'

const { Header, Content } = Layout
const { SubMenu } = Menu

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal">
          <SubMenu title="Movies">
            <Menu.Item key="1">
              <Link href="/movie/discover" as="/movie/discover">
                <a>Discover</a>
              </Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="2">TV Shows</Menu.Item>
          <Menu.Item key="3">People</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '10px 10px' }}>
        <Component {...pageProps} />
      </Content>
    </Layout>
  )
}
