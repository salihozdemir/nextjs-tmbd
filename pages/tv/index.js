import axios from 'axios'
import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import Card from '../../components/card'

export default () => {
  const [tvList, setTvList] = useState([])
  const [hasMore, setHasMore] = useState(true)

  const fetchMore = (page) => {
    if (page >= 500) {
      setHasMore(false)
    }

    axios
      .get(
        `https://api.themoviedb.org/3/discover/tv?api_key=148a68d49e546737c3a830d5df60f0d2&language=en-US&sort_by=popularity.desc&page=${page}&timezone=America%2FNew_York&include_null_first_air_dates=false`
      )
      .then((res) => {
        setTvList(tvList.concat(res.data.results))
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
          {tvList.map((tv) => (
            <div className="col-xs" key={tv.id}>
              <Card
                card_type="tv"
                id={tv.id}
                title={tv.name}
                poster_path={tv.poster_path}
                release_date={tv.first_air_date}
                overview={tv.overview}
                vote_average={tv.vote_average}
              />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  )
}
