import axios from 'axios'

const MovieDetail = ({ movie }) => (
  <div id="detail">
    <div className="header">
      <div className="custom-bg"></div>
    </div>
    <div className="container">
      <div className="row middle-xs">
        <div className="col-xs-4 col-sm-3">
          <img
            className="poster"
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
          />
        </div>
        <div className="col-xs-8 col-sm-9">
          <h2 className="title">
            {movie.title} <span>({movie.release_date.slice(0, 4)})</span>
          </h2>
          <div className="info">
            <div className="release-date">
              {movie.release_date}
            </div>
            <div className="genres">
              {movie.genres.map((genre) => (
                <span>{genre.name}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    <style jsx>
      {`
        .header {
          background-image: url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path});
        }
      `}
    </style>
  </div>
)

export async function getServerSideProps(context) {
  const movieId = context.params.slug.split('-').slice(-1)[0]
  const data = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=148a68d49e546737c3a830d5df60f0d2&language=en-US`
  )

  return {
    props: {
      movie: data.data
    }
  }
}

export default MovieDetail
