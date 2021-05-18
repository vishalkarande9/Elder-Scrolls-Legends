import React, { useState, useRef, useCallback } from 'react';
import Card from './components/Card/Card';
import Search from './components/Search/Search';
import Loader from './components/Loader/Loader';
import useCardSearch from './useCardSearch';
import classes from './App.module.css';

const constants = require('./utils/constants');


export default function App() {
  const [query, setQuery] = useState('')
  const [pageNumber, setPageNumber] = useState(constants.INITIAL_PAGENUMBER)

  const {
    cards,
    hasMore,
    loading,
    error
  } = useCardSearch(query, pageNumber)

  const observer = useRef()
  const lastCardElementRef = useCallback(node => {
    // if we are loading our cards we don't want to trigger infinite scrolling
    if (loading) return

    // disconnect the observer from the previous last element so that new last element is hooked up correctly
    if (observer.current) observer.current.disconnect()

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prevPageNumber => prevPageNumber + 1)
      }
    })
    
    if (node) observer.current.observe(node)
  }, [loading, hasMore])

  function handleSearch(e) {
    setQuery(e.target.value);
    // for new query we want the page to start at 1
    setPageNumber(constants.INITIAL_PAGENUMBER)
  }

  return (
    <React.Fragment>

      <div className={classes.search__container}>
        <Search query={query} inputChange={handleSearch}/>
      </div>

      <div className={classes.card__container}>
        {cards.map((card, index) => {
          if (cards.length === index + 1) {
            return <Card ref={lastCardElementRef} key={index} card={card}/>
          } else {
            return <Card key={index} card={card}/>
          }
        })}
      </div>

      <div>{loading && <Loader />}</div>
      <div>{error && 'Error'}</div>
    </React.Fragment>
  )
}

