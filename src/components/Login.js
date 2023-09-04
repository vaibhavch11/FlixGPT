import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';

const Login = () => {

    const[isSignUp,setIsSignUp] = useState(false);

    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
      //form data validation --> utilies

      const message = checkValidData(email.current.value,password.current.value);

    //   console.log(email.current.value); //.current.value points to the input box current value.
    //   console.log(password.current.value);

    console.log(message);
    }


  return (
    <div >
        <Header />
        <div className='absolute'>
           <img src='https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='background login img' />
        </div>

        
        <form onSubmit={(e)=>{e.preventDefault()}} className='absolute bg-black w-1/3 p-16 my-36 mx-auto right-0 left-0 text-white  bg-opacity-80'>
            <h1 className='font-bold text-3xl p-2'>{isSignUp ? "Sign Up" : "Sign In" }</h1>

            {isSignUp && <input type='text' placeholder='Full Name' className='p-4  my-2 w-full rounded-lg bg-gray-700' />}
            <input ref={email} type='text' placeholder='Email Address' className='p-4  my-2 w-full rounded-lg bg-gray-700' />
            <input ref={password} type='password' placeholder='Password' className='p-4 my-2 w-full rounded-lg  bg-gray-700' />

            <button className='p-4 my-6 text-white  w-full rounded-lg bg-red-600' onClick={handleButtonClick} >{isSignUp ? "Sign Up" : "Sign In" }</button>

            <p className='py-4 cursor-pointer ' onClick={()=>{setIsSignUp(!isSignUp)}}>New to FlixGPT? Sign up now.</p>
        </form>
       

        
    </div>
  )
}

export default Login