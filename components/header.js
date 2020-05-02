import Link from './link'

const Header = () => {
  return (
    <nav>
      <div>Brand Logo</div>
      <div>
        <Link href="/">
          <a className="nav-item">Movies</a>
        </Link>
        <Link href="/tv">
          <a className="nav-item">TV Shows</a>
        </Link>
      </div>
      <div>Theme Change</div>
    </nav>
  )
}

export default Header
