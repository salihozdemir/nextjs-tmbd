import Header from './header'
import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>My Sample</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main id="app-root" className="theme-dark">
        <Header></Header>
        {children}
      </main>
    </div>
  )
}

export default Layout
