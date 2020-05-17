import VoteChart from 'components/VoteChart/voteChart'

const infoHeader = ({
  genres,
  backdrop_path,
  poster_path,
  title,
  release_date,
  runtime,
  vote_average,
  tagline,
  overview
}) => {
  const genresName = genres.map((genre) => genre['name'])
  return (
    <div id="infoHeader">
      <div
        className="bg-image"
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/w1280${backdrop_path}')`
        }}
      >
        <div className="bg-color"></div>
      </div>
      <div className="container">
        <div className="row middle-xs">
          <div className="col-xs-4 col-sm-3">
            <img
              className="poster"
              src={`https://image.tmdb.org/t/p/w342${poster_path}`}
            />
          </div>
          <div className="col-xs-8 d-xs-none">
            <h2 className="title">
              {title} <span>({release_date.slice(0, 4)})</span>
            </h2>
            <div className="info-group">
              <div className="release-date">{release_date}</div>
              <div className="genres">
                <span>{genresName.join(', ')}</span>
              </div>
              <div className="runtime">
                {Math.floor(runtime / 60) + 'h ' + (runtime % 60) + 'm'}
              </div>
            </div>
            <div className="votechart">
              <VoteChart
                voteAverage={vote_average * 10}
                className={'vote-chart-details'}
              />
              <div className="text">
                User <br /> Score
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <h2 className="title d-xs-none-o">
              {title} <span>({release_date.slice(0, 4)})</span>
            </h2>
            <div className="info-group d-xs-none-o">
              <div className="release-date">{release_date}</div>
              <div className="genres">
                <span>{genresName.join(', ')}</span>
              </div>
              <div className="runtime">
                {Math.floor(runtime / 60) + 'h ' + (runtime % 60) + 'm'}
              </div>
            </div>
            <div className="votechart d-xs-none-o">
              <VoteChart
                voteAverage={vote_average * 10}
                className={'vote-chart-details'}
              />
              <div className="text">
                User <br /> Score
              </div>
            </div>
            <h3 className="tagline">{tagline}</h3>
            <h3 className="overview-title">Overview</h3>
            <p className="overview">{overview}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default infoHeader
