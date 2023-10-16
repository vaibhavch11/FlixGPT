import React from 'react'
import Header from './Header'
import lang from '../utils/languageConstant'
import { useSelector } from 'react-redux'

const GptSearch = () => {



  const langKey = useSelector(store => store.config.lang)

  // console.log(lang[langKey].gptSearchPlaceholder)  NOTE***
  
  return (
    <div className=''>
        <Header />
        <div className='absolute'>
           <img src='https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg' />
        </div>

        <form className=' flex absolute bg-black w-1/2 p-16 my-36 mx-auto right-0 left-0 text-white  bg-opacity-80'>
            <input type='email' placeholder={lang[langKey].gptSearchPlaceholder} className='p-4  my-2 w-full rounded-l-lg bg-gray-700' />
            <button className='p-4 my-2 text-white  w-1/2 rounded-r-lg bg-red-600'>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearch


//NOTE: Note that we will not able to get  placeholder={lang.langKey.gptSearchPlaceholder} langKey is undefine here , alng will unable to find it.
// so, to solve this use placeholder={lang[langKey].gptSearchPlaceholder}