import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addTrendingMovie } from '../utils/movieSlice';

const useTrendingMovies = () => {

    const dispatch = useDispatch();

    const getTrendingMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1',API_OPTIONS)
      const json = await data.json();
      dispatch(addTrendingMovie(json.results))
      // console.log(json.results)
    }

    useEffect(()=>{
      getTrendingMovies()
    },[])

}

export default useTrendingMovies