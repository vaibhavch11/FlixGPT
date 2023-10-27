import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { auth } from '../utils/firebase';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {

    const[isSignUp,setIsSignUp] = useState(false);
    const [errorMessage,setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    

    const handleButtonClick = () => {
      //form data validation --> utilies

      const message = checkValidData(email.current.value,password.current.value);


    //   console.log(email.current.value); //.current.value points to the input box current value.
    //   console.log(password.current.value);

      setErrorMessage(message); //settig error

    
      if (message) return;

      if(isSignUp){
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value , photoURL: "https://avatars.githubusercontent.com/u/66193463?v=4"
        }).then(() => {
          // Profile updated!
          const {uid,email,displayName, photoURL} = auth.currentUser;
          dispatch(addUser({uid : uid,email : email, displayName : displayName, photoURL : photoURL}));

          navigate("/browse");
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
        });
        
        // ...
        })
       .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
      }
      else{

        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate("/browse");
        // ...
        })
       .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       setErrorMessage(errorCode + "-" + errorMessage);
      });
      }
    }

  return (
    <div >
        <Header />
        <div className='fixed'>
           <img src='https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='background login img' />
        </div>

        
        <form onSubmit={(e)=>{e.preventDefault()}} className='absolute bg-black w-1/3 p-16 my-36 mx-auto right-0 left-0 text-white  bg-opacity-80'>
            <h1 className='font-bold text-3xl p-2'>{isSignUp ? "Sign Up" : "Sign In" }</h1>

            {isSignUp && <input ref={name} type='text' placeholder='Full Name' className='p-4  my-2 w-full rounded-lg bg-gray-700' />}
            <input ref={email} type='email' placeholder='Email Address' className='p-4  my-2 w-full rounded-lg bg-gray-700' />
            <input ref={password} type='password' placeholder='Password' className='p-4 my-2 w-full rounded-lg  bg-gray-700' />

            <p className='text-red-500 '>{errorMessage}</p> 

            <button className='p-4 my-6 text-white  w-full rounded-lg bg-red-600' onClick={handleButtonClick} >{isSignUp ? "Sign Up" : "Sign In" }</button>
            <Link to="/browse">
              <button className='p-4 my-1 text-white  w-full rounded-lg bg-red-600'>Guest Free ⭐</button>
            </Link>

            <p className='py-4 cursor-pointer ' onClick={()=>{setIsSignUp(!isSignUp)}}>New to FlixGPT? Sign up now.</p>
        </form>
       

        
    </div>
  )
}

export default Login