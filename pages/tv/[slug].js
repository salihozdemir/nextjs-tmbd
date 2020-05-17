import axios from 'utils/axios'
import Crew from 'components/Crew/crew'
import InfoHeader from 'components/InfoHeader/infoHeader'

const TvDetails = ({ tv, casts }) => (
  <div id="detail">
    <InfoHeader
      genres={tv.genres}
      backdrop_path={tv.backdrop_path}
      poster_path={tv.poster_path}
      title={tv.name}
      release_date={tv.first_air_date}
      runtime={tv.episode_run_time[0]}
      vote_average={tv.vote_average}
      tagline={tv.original_name}
      overview={tv.overview}
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
  const tvId = context.params.slug.split('-').slice(-1)[0]
  const tvData = await axios.get(`tv/${tvId}`, {
    params: { api_key: process.env.API_KEY }
  })
  const creditData = await axios.get(`tv/${tvId}/credits`, {
    params: { api_key: process.env.API_KEY }
  })

  return {
    props: {
      tv: tvData.data,
      casts: creditData.data.cast.filter((c) => c.profile_path != null)
    }
  }
}

export default TvDetails
