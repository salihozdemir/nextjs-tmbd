import axios from 'axios'
import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import Card from '../components/card'

export default () => {
  const [movieList, setMovieList] = useState([])
  const [hasMore, setHasMore] = useState(true)

  const fetchMore = (page) => {
    if (page >= 500) {
      setHasMore(false)
    }

    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=148a68d49e546737c3a830d5df60f0d2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
      )
      .then((res) => {
        setMovieList(movieList.concat(res.data.results))
      })
  }

  return (
    <div className="container">
      <InfiniteScroll
        pageStart={1}
        loadMore={fetchMore.bind(this)}
        hasMore={hasMore}
        threshold={1000}
        loader={<h4 key={0}>Loading...</h4>}
      >
        <div className="row center-xs">
          {movieList.map((movie) => (
            <div className="col-xs" key={movie.id}>
              <Card
                card_type="movie"
                id={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
                release_date={movie.release_date}
                overview={movie.overview}
                vote_average={movie.vote_average}
              />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  )
}
