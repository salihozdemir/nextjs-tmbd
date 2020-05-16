import axios from 'axios'
import Crew from 'components/Crew/crew'
import InfoHeader from 'components/InfoHeader/infoHeader'

const MovieDetail = ({ movie }) => (
  <div id="detail">
    <InfoHeader movie={movie} />
    <Crew />
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
