import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addUpcomingMovies } from '../utils/movieSlice';

const useUpcomingMovies = () => {

    const dispatch = useDispatch();

    const upcomingMovies = useSelector((store)=>store.movies.upcomingMovies);

    const getUpComingMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',API_OPTIONS)
      const json = await data.json();
      dispatch(addUpcomingMovies(json.results))
    //   console.log(json.results)
    }

    useEffect(()=>{
      if(!upcomingMovies) getUpComingMovies()
    },[])

}

export default useUpcomingMovies