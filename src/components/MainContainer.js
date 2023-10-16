import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies);

    if(movies == null) return; //doing early return, while fetching data it takes time.
    const mainMovie = movies[0];
    // console.log(mainMovie) got 1st movie.

    const {original_title,overview,id} = mainMovie;

    

  return (
    <div >
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieId={id}/>   
    </div>
  )
}

export default MainContainer