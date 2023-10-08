import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const SecoundryContainer = () => {
    const movies = useSelector((store) => store.movies);
    // console.log(movies);

  return (movies.nowPlayingMovies && movies.PopularMovies &&  movies.trendingMovies &&(

    <div className='bg-black'>
      <div className='-mt-40 relative z-20'>
         <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
         <MovieList title={"Trending"} movies={movies.trendingMovies}/>
         <MovieList title={"Popular"} movies={movies.PopularMovies}/>
         
      </div>
    </div>
   
  )
  )
}

export default SecoundryContainer