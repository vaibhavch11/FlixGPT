import React, { useEffect } from 'react'
import Header from './Header'
import {useNowPlayMovies} from "../hooks/useNowPlayMovies"
import MainContainer from './MainContainer';
import SecoundryContainer from './SecoundryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';


const Browse = () => {

 //Custom hook
   useNowPlayMovies();
   usePopularMovies();
   useTrendingMovies();

  return (
    <div>
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