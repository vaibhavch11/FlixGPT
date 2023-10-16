import React, { useEffect } from 'react'
import Header from './Header'
import {useNowPlayMovies} from "../hooks/useNowPlayMovies"
import MainContainer from './MainContainer';
import SecoundryContainer from './SecoundryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
// import { useSelector } from 'react-redux';
// import searchGpt from './searchGpt';


const Browse = () => {

  // const showGptSearch = useSelector((store)=> store.gpt.showGptSearch)

 //Custom hook
   useNowPlayMovies();
   usePopularMovies();
   useTrendingMovies();
   useUpcomingMovies();

  return (
    <div className='Browse'>
      <Header />
      <MainContainer />
      <SecoundryContainer />

      {/* MainContainer
         - VideoBackground
         - VideoTitle
      SecoundryContainer
         - MovieList * n
         - cards * n */}
    </div>  
  )
}

export default Browse