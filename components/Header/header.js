import Link from '../Link/link'
import { useContext } from 'react'
import { ThemeContext } from '../Layout/layout'
import { MdMovieFilter } from 'react-icons/md'
import { FaMoon } from 'react-icons/fa'

const Header = () => {
  const themeContext = useContext(ThemeContext)
  return (
    <div className="container">
      <nav>
        <Link href="/">
          <a className="nav-brands">
            <MdMovieFilter className="logo" />
            <div className="text">Discover</div>
          </a>
        </Link>
        <div className="nav-items">
          <Link href="/">
            <a className="nav-item">Movies</a>
          </Link>
          <Link href="/tv">
            <a className="nav-item">TV Shows</a>
          </Link>
        </div>
        <div className="nav-theme">
          <button
            onClick={() => themeContext.themeDispatch(themeContext.themeState)}
          >
            <FaMoon size="1.6rem" />
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Header
