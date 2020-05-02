import axios from 'axios'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import slug from 'slug'
import InfiniteScroll from 'react-infinite-scroll-component'

export default () => {
  const [movieList, setMovieList] = useState([])
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=148a68d49e546737c3a830d5df60f0d2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
      )
      .then((res) => {
        setMovieList(movieList.concat(res.data.results))
      })
    return () => {
      if (page >= 500) {
        setHasMore(false)
      }
    }
  }, [page])

  return (
    <InfiniteScroll
      dataLength={movieList.length}
      next={() => {
        setPage((prvPage) => prvPage + 1)
      }}
      hasMore={hasMore}
      scrollThreshold="0px"
      loader={<h4>Loading...</h4>}
    >
      <div>
        {/* {movieList.map((movie) => (
          <ul key={movie.id}>
            <Link
              // href="/movie/[slug]"
              // as={`/movie/${slug(movie.title)}-${movie.id}`}
            >
              <a className="btn btn-link">
                <li>
                  <strong>{movie.original_title}</strong>
                </li>
              </a>
            </Link>
          </ul>
        ))} */}
      </div>
    </InfiniteScroll>
  )
}
