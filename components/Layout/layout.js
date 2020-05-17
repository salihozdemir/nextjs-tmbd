import Header from '../Header/header'
import Head from 'next/head'
import { useReducer } from 'react'

export const ThemeContext = React.createContext()

const initialState = 'theme-dark';

const reducer = (state, action) => {
  switch (action) {
    case 'theme-dark':
      return 'theme-light'
    case 'theme-light':
      return 'theme-dark'
    default:
      return state
  }
}

const Layout = ({ children }) => {

  const [theme, dispatch] = useReducer(reducer, initialState)

  return (
    <ThemeContext.Provider value={{ themeState: theme, themeDispatch: dispatch }}>
      <Head>
        <title>Discover My Sample</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@400;700&display=swap" rel="stylesheet"></link>
      </Head>
      <main id="app-root" className={theme}>
        <div className="background">
          <Header></Header>
          {children}
        </div>
      </main>
    </ThemeContext.Provider>
  )
}

export default Layout
