import Link from 'next/link'
import { MdMovieFilter } from 'react-icons/md'
import { FaMoon } from 'react-icons/fa'
import { useRouter } from 'next/router'

const ActiveLink = ({ href, children }) => {
  const router = useRouter()
  
  let className = children.props.className || ''
  if (router.pathname === href) {
    className = `${className} selected`
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>
}

const Header = ({ theme, setTheme }) => {
  return (
    <div className="container">
      <nav>
        <ActiveLink href="/">
          <a className="nav-brands">
            <MdMovieFilter className="logo" />
            <div className="text">Discover</div>
          </a>
        </ActiveLink>
        <div className="nav-items">
          <ActiveLink href="/">
            <a className="nav-item">Movies</a>
          </ActiveLink>
          <ActiveLink href="/tv">
            <a className="nav-item">TV Shows</a>
          </ActiveLink>
        </div>
        <div className="nav-theme">
          <button
            onClick={() =>
              setTheme(theme === 'theme-dark' ? 'theme-light' : 'theme-dark')
            }
          >
            <FaMoon size="1.6rem" />
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Header
