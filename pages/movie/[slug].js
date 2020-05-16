import axios from 'utils/axios'
import Crew from 'components/Crew/crew'
import InfoHeader from 'components/InfoHeader/infoHeader'

const MovieDetail = ({ movie, casts }) => (
  <div id="detail">
    <InfoHeader movie={movie} />
    <Crew casts={casts} />
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
      casts: creditData.data.cast.filter(c => c.profile_path != null)
    }
  }
}

export default MovieDetail
