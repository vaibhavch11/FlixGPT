import React, { useEffect } from 'react'
import Header from './Header'
import {useNowPlayMovies} from "../hooks/useNowPlayMovies"
import MainContainer from './MainContainer';


const Browse = () => {

 //Custom hook
   useNowPlayMovies();

  return (
    <div>
      <Header />
      <MainContainer />

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