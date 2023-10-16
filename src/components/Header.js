import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/firebase';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANG } from '../utils/constant';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {

  const location = useLocation();

  const user = useSelector(store => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleToggleGpt = () => {
       dispatch(toggleGptSearchView())
  }

  const handleLanguage = (e) => {
    dispatch(changeLanguage(e.target.value))
  }
  
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  return (
    <div className='absolute bg-gradient-to-b from-black w-full z-30 flex justify-between items-center'>
        <img className='w-60' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo' />

        {location.pathname == "/browse" && <div>
          

       <Link to="/searchGpt">
         <button className='text-white bg-purple-600 rounded-lg m-4 py-3 px-4'
          onClick={handleToggleGpt}>Search GPT</button>
       </Link> 

       </div>
       }

       {/* --------------------------Supported Languages --------------------------------------*/}
       {location.pathname == "/searchGpt" && <div>
          <select className=' px-3 py-2 rounded-sm mx-4 opacity-80' onChange={handleLanguage}>
            {SUPPORTED_LANG.map((language)=>(<option key={language.identifier} value={language.identifier}>{language.name}</option>))}
          </select>
          </div>
        }

       


        {user && <div className='flex p-5'>
         <img className='w-12 h-12 ' alt='user_logo' src= {user?.photoURL} />
         <button onClick={handleSignOut} className='text-white'>(Sign Out)</button>
        </div>}

        
        
    </div>
  )
}

export default Header