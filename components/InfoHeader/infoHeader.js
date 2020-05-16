import VoteChart from 'components/VoteChart/voteChart'

const infoHeader = ({movie}) => (
  <div id="infoHeader">
    <div
      className="bg-image"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/w1280${movie.backdrop_path}')`
      }}
    >
      <div className="bg-color"></div>
    </div>
    <div className="container">
      <div className="row middle-xs">
        <div className="col-xs-4 col-sm-3">
          <img
            className="poster"
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
          />
        </div>
        <div className="col-sm-9">
          <h2 className="title">
            {movie.title} <span>({movie.release_date.slice(0, 4)})</span>
          </h2>
          <div className="info-group">
            <div className="release-date">{movie.release_date}</div>
            <div className="genres">
              {movie.genres.map((genre) => (
                <span key={genre.id}>{genre.name},</span>
              ))}
            </div>
            <div className="runtime">{movie.runtime}</div>
          </div>
          <div className="votechart">
            <VoteChart voteAverage={movie.vote_average * 10} className={'vote-chart-details'} />
            <div className="text">
              User <br /> Score
            </div>
          </div>
          <h3 className="tagline">{movie.tagline}</h3>
          <h3 className="overview-title">Overview</h3>
          <p className="overview">{movie.overview}</p>
        </div>
      </div>
    </div>
  </div>
)

export default infoHeader
