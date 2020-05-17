import Header from '../Header/header'
import Head from 'next/head'
import { useState } from 'react'

const Layout = ({ children }) => {
  const [theme, setTheme] = useState('theme-dark')

  return (
    <div>
      <Head>
        <title>Discover My Sample</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main id="app-root" className={theme}>
        <div className="background">
          <Header theme={theme} setTheme={setTheme}></Header>
          {children}
        </div>
      </main>
    </div>
  )
}


export default Layout
