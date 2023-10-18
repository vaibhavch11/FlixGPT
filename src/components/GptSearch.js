import React, { useRef } from 'react'
import Header from './Header'
import lang from '../utils/languageConstant'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openai'
import { API_OPTIONS } from '../utils/constant'
import { addGptMovieResult } from '../utils/gptSlice'

const GptSearch = () => {

  const dispatch = useDispatch();

  const searchText = useRef(null);

  const langKey = useSelector(store => store.config.lang)
  // console.log(lang[langKey].gptSearchPlaceholder)  NOTE***

  const handleGptSearch = async() => {
    // console.log(searchText.current.value);

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

      const gptResults = await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-3.5-turbo',
      });

      if(!gptResults.choices){
        return <p>Error no movies!!</p>
      }

      //"Hera Pheri, 3 Idiots, Andaz Apna Apna, Chennai Express, Welcome"
      //if i apply .split(',') -> ['Hera Pheri', ' 3 Idiots', ' Andaz Apna Apna', ' Chennai Express', ' Welcome']

      const gptMovies = gptResults.choices?.[0]?.message?.content.split(',');

      //for each movie I will search TMDB API
      const PromiseArray = gptMovies.map((movie)=> searchMovieTMDB(movie)); 
      //NOTE: it will give us promises of array [Promise, Promise, Promise, Promise, Promise]

      const tmdbResults = await Promise.all(PromiseArray);

      //***********************************************Passing Object in Redux***************************************** */
      dispatch(addGptMovieResult({moviesNames: gptMovies,movieResults: tmdbResults}));
  }

  //It will take movies name from OpenAI and search it in TMDB 
  const searchMovieTMDB = async(movie) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS);
    const json = await data.json();

    return json.results;
  }

  return (
    <div className='pt-[15%] md:pt-[10%] flex justify-center '>

        <form className=' flex md:p-[3] bg-black w-1/2 p-[5%] my-[5%] mx-auto right-0 left-0 text-white  bg-opacity-80' onSubmit={(e)=>(e.preventDefault())}>
            <input ref={searchText} type='text' placeholder={lang[langKey].gptSearchPlaceholder} className='p-4  my-2 w-full rounded-l-lg bg-gray-700' />
            <button className='p-4 my-2 text-white  w-1/2 rounded-r-lg bg-red-600' onClick={handleGptSearch}>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearch


//NOTE: Note that we will not able to get  placeholder={lang.langKey.gptSearchPlaceholder} langKey is undefine here , alng will unable to find it.
// so, to solve this use placeholder={lang[langKey].gptSearchPlaceholder}