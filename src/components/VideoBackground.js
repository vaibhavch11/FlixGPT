import React, { useEffect, useState } from 'react'
import { API_OPTIONS } from '../utils/constant'

const VideoBackground = ({movieId}) => {

    const[trailerId,setTrailerId] = useState(null);

    const getMovieVideos = async () => {
        const data = await fetch( "https://api.themoviedb.org/3/movie/" +movieId +"/videos?language=en-US", API_OPTIONS);
        const json = await data.json();
        // console.log(json);
        const filterData = json.results.filter((video)=> video.type == "Trailer")
        //If we find trailer then get filterdata, if we don't then take any first video from json.
        const trailer = filterData.length ? filterData[0] : json.results[0];
        setTrailerId(trailer.key);
    }
    useEffect(() => { 
      getMovieVideos()}
      ,[])
    
  return (
    <div >
        <iframe className='w-screen aspect-video' src={"https://www.youtube.com/embed/" + trailerId + "?autoplay=1&mute=1"} 
           title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; 
           clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
           allowfullscreen>
        </iframe>
    </div>
  )
}

export default VideoBackground