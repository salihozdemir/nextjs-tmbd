const crew = ({ casts }) => {
  return (
    <div id="crew">
      <div className="container">
        <div className="row middle-xs">
          {casts.map((cast) => (
            <div className="col-xs" id={cast.id}>
              <div className="cast-card">
                <div className="card-img">
                  <img
                    src={`https://image.tmdb.org/t/p/w185${cast.profile_path}`}
                    title={cast.name}
                    alt={cast.name}
                  />
                </div>
                <div className="card-body">
                  <p className="name">{cast.name}</p>
                  <p className="character">{cast.character}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default crew
