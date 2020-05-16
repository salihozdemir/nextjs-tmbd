import VoteChart from 'components/VoteChart/voteChart'
import moment from 'moment'

const infoHeader = ({ movie }) => {
  const genres = movie.genres.map((genre) => genre['name'])
  return (
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
          <div className="col-xs-8 d-xs-none">
            <h2 className="title">
              {movie.title} <span>({movie.release_date.slice(0, 4)})</span>
            </h2>
            <div className="info-group">
              <div className="release-date">
                {moment(movie.release_date).format('MM/DD/YYYY')}
              </div>
              <div className="genres">
                <span>{genres.join(', ')}</span>
              </div>
              <div className="runtime">
                {Math.floor(movie.runtime / 60) +
                  'h ' +
                  (movie.runtime % 60) +
                  'm'}
              </div>
            </div>
            <div className="votechart">
              <VoteChart
                voteAverage={movie.vote_average * 10}
                className={'vote-chart-details'}
              />
              <div className="text">
                User <br /> Score
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <h2 className="title d-xs-none-o">
              {movie.title} <span>({movie.release_date.slice(0, 4)})</span>
            </h2>
            <div className="info-group d-xs-none-o">
              <div className="release-date">
                {moment(movie.release_date).format('MM/DD/YYYY')}
              </div>
              <div className="genres">
                <span>{genres.join(', ')}</span>
              </div>
              <div className="runtime">
                {Math.floor(movie.runtime / 60) +
                  'h ' +
                  (movie.runtime % 60) +
                  'm'}
              </div>
            </div>
            <div className="votechart d-xs-none-o">
              <VoteChart
                voteAverage={movie.vote_average * 10}
                className={'vote-chart-details'}
              />
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
}
export default infoHeader
