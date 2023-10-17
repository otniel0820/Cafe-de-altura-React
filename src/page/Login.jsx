import React, { useState,useEffect } from 'react'
import Spinner from '../components/spinner/Spinner'
import Log from '../components/log/Log'
import { Navigate } from 'react-router-dom';
import bgLogin from '../assets/bgLogin.jpg'

const Login = () => {
  const [isLoading, setIsLoading]=useState(false)
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setRedirect(true);
      }, 3000);
    }
  }, [isLoading]);

  const handleClick = () => {
    setIsLoading(true);
  };
  
  return (
    <div className='bg-cover bg-no-repeat bg-center' style={{backgroundImage:`url(${bgLogin})`}} >
      {redirect ? (
        <Navigate to="/inicio" />
      ) : isLoading ? (
        <div className=''>

          <Spinner />
        </div>
      ) : (
        <Log click={handleClick} />
      )}
    </div>
  )
}

export default Login
