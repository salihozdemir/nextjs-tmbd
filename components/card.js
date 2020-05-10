import Link from 'next/link'
import slug from 'slug'

const Card = ({ id, title, release_date, poster_path, overview }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img
          src={`https://image.tmdb.org/t/p/w342${poster_path}`}
          title={title}
          alt={title}
        />
      </div>
      <div className="card-body">
        <Link href="/movie/[slug]" as={`/movie/${slug(title)}-${id}`}>
          <h2>{title}</h2>
        </Link>
        <p className="release-data">{release_date}</p>
        <div className="overview">
          <p>{overview}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
