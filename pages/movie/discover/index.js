import unfetch from 'isomorphic-unfetch'
import Link from 'next/link'
import slug from 'slug'
import { Card, Row, Col, Progress } from 'antd'

const { Meta } = Card

export default ({ movies }) => (
  <Row justify="center" type="flex" gutter={[16, 16]}>
    {movies.results.map((movie) => (
      <Col xs={12} sm={8} md={6} lg={4} key={movie.id}>
        <Link
          href="/movie/[slug]"
          as={`/movie/${slug(movie.title)}-${movie.id}`}
        >
          <a>
            <Card
              bodyStyle={{ position: 'relative' }}
              cover={
                <img
                  alt={movie.original_title}
                  src={`http://image.tmdb.org/t/p/w300${movie.poster_path}`}
                />
              }
            >
              <p>
                <strong>{movie.original_title}</strong>
              </p>
              <p>{movie.release_date}</p>
              <Progress
                type="circle"
                width="42px"
                strokeColor={{
                  '0%': '#108ee9',
                  '100%': '#87d068'
                }}
                percent={90}
              />
            </Card>
          </a>
        </Link>
      </Col>
    ))}
    <style jsx>{``}</style>
  </Row>
)

export async function getServerSideProps() {
  const data = await unfetch(
    'https://api.themoviedb.org/3/discover/movie?api_key=148a68d49e546737c3a830d5df60f0d2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
  )

  const movies = await data.json()
  return {
    props: {
      movies
    }
  }
}
