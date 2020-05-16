import Link from '../Link/link'
import { useContext } from 'react'
import { ThemeContext } from '../Layout/layout'
import { MdMovieFilter } from 'react-icons/md'
import { FaMoon } from 'react-icons/fa'

const Header = () => {
  const themeContext = useContext(ThemeContext)
  return (
    <nav>
      <div className="nav-brands">
        <MdMovieFilter className="logo" />
        <div className="text">My Sample</div>
      </div>
      <div className="nav-items">
        <Link href="/">
          <a className="nav-item">Movies</a>
        </Link>
        <Link href="/tv">
          <a className="nav-item">TV Shows</a>
        </Link>
      </div>
      <div className="nav-theme">
        <button onClick={() => themeContext.themeDispatch(themeContext.themeState)}>
          <FaMoon size="1.6rem" />
        </button>
      </div>
    </nav>
  )
}

export default Header
