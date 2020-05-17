import axios from 'utils/axios'
import Crew from 'components/Crew/crew'
import InfoHeader from 'components/InfoHeader/infoHeader'
import Head from 'next/head'

const MovieDetail = ({ movie, casts }) => (
  <div id="detail">
    <Head>
      <title>{movie.title}</title>
    </Head>
    <InfoHeader
      genres={movie.genres}
      backdrop_path={movie.backdrop_path}
      poster_path={movie.poster_path}
      title={movie.title}
      release_date={movie.release_date}
      runtime={movie.runtime}
      vote_average={movie.vote_average}
      tagline={movie.tagline}
      overview={movie.overview}
    />
    <div id="crew">
      <div className="container">
        <div className="row middle-xs">
          {casts.map((cast) => (
            <div key={cast.id} className="col-xs">
              <Crew
                name={cast.name}
                profile_path={cast.profile_path}
                character={cast.character}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export async function getServerSideProps(context) {
  const movieId = context.params.slug.split('-').slice(-1)[0]
  const movieData = await axios.get(`movie/${movieId}`, {
    params: { api_key: process.env.API_KEY }
  })
  const creditData = await axios.get(`movie/${movieId}/credits`, {
    params: { api_key: process.env.API_KEY }
  })

  return {
    props: {
      movie: movieData.data,
      casts: creditData.data.cast.filter((c) => c.profile_path != null)
    }
  }
}

export default MovieDetail
