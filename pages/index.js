import axios from 'axios'
import { useState } from 'react'
import Link from 'next/link'
import slug from 'slug'
import InfiniteScroll from 'react-infinite-scroller'

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
              <div className="card" >
                <div className="card-img">
                  <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} />
                </div>
                <div className="card-body">
                  <Link
                    href="/movie/[slug]"
                    as={`/movie/${slug(movie.title)}-${movie.id}`}
                  >
                    <h2>
                      {movie.original_title}
                    </h2>
                  </Link>
                  <p>{movie.release_date}</p>
                </div>
              </div>
            </div>

          ))}
        </div>
      </InfiniteScroll>
    </div>
  )
}
