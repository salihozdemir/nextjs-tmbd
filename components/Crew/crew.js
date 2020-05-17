const crew = ({ name, profile_path, character }) => (
  <div className="cast-card">
    <div className="card-img">
      <img
        src={`https://image.tmdb.org/t/p/w185${profile_path}`}
        title={name}
        alt={name}
      />
    </div>
    <div className="card-body">
      <p className="name">{name}</p>
      <p className="character">{character}</p>
    </div>
  </div>
)

export default crew
