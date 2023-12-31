import React from 'react'
import GptSearch from './GptSearch'
import GptMovieSuggestions from './GptMovieSuggestions'
import Header from './Header'

const GptContainer = () => {
  return (
    <div>
        <Header />
        <div className='fixed -z-10'>
           <img src='https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg' />
        </div>
        <div>
          <GptSearch />
          <GptMovieSuggestions />
        </div>

    </div>
  )
}

export default GptContainer