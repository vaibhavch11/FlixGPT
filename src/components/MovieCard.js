import React from 'react'
import { Movie_IMG_URL } from '../utils/constant'

const MovieCard = ({posterPath}) => {
   
  return (
    <div>
        <div className='w-52 px-4'>
            <img alt='movie' src={Movie_IMG_URL + posterPath} className='rounded-lg' />
        </div>

    </div>
  )
}

export default MovieCard