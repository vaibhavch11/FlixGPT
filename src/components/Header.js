import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {

  const user = useSelector(store => store.user);
  const navigate = useNavigate();
  
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
    <div className='absolute bg-gradient-to-b from-black w-full z-30 flex justify-between'>
        <img className='w-60' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo' />

        {user && <div className='flex p-5'>
         <img className='w-12 h-12' alt='user_logo' src= {user?.photoURL} />
         <button onClick={handleSignOut} className='text-white'>(Sign Out)</button>
        </div>}
    </div>
  )
}

export default Header