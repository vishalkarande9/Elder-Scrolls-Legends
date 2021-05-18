import { useEffect, useState } from 'react';
import axios from 'axios';
const constants = require("./utils/constants");


export default function useCardSearch(query, pageNumber) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [cards, setCards] = useState([])
  const [hasMore, setHasMore] = useState(false)

  // set cards list to empty array everytime query string changes, so that we don't show any old card results
  useEffect(() => {
    setCards([])
  }, [query])

  // fetch card data whenever the 2nd param of useEffect change i:e query or pageNumber 
  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancel
    axios({
      method: 'GET',
      url: `${constants.BASE_URL}cards`,
      params: { name: query, page: pageNumber, pageSize: constants.PAGESIZE },
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setCards(prevCards => {
        return [...prevCards, ...res.data.cards.map(b => b)];
      })
      setHasMore(res.data.cards.length > 0)
      setLoading(false)
    }).catch(e => {
      if (axios.isCancel(e)) return
      setError(true)
    })

    // Used CancelToken in cleanup function to avoid sending query every single time we want to cancel our old query if we are typing Information 
    return () => cancel()
  }, [query, pageNumber])

  return { loading, error, cards, hasMore }
}
