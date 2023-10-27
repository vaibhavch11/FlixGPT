import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addTrendingMovie } from '../utils/movieSlice';

const useTrendingMovies = () => {

    const dispatch = useDispatch();

    const trendingMovies = useSelector((store)=>store.movies.trendingMovies);

    const getTrendingMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1',API_OPTIONS)
      const json = await data.json();
      dispatch(addTrendingMovie(json.results))
      // console.log(json.results)
    }

    useEffect(()=>{
      if(!trendingMovies) getTrendingMovies();
    },[])

}

export default useTrendingMovies