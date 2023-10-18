import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {

    console.log(movies)
  return (
    <div>
        <h1 className='text-3xl text-white py-5 pl-4 font-bold'>{title}</h1>
      <div className='flex overflow-scroll'>
        
        <div className='flex'>
            {movies.map((movie)=><MovieCard posterPath={movie.poster_path}/>)}
        </div>

    </div>
    </div>
    
  )
}

export default MovieList