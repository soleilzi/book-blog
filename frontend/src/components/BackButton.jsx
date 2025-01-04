import React from 'react'
import { useNavigate } from 'react-router-dom'

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <button className='bg-blue-300 px-4 py-2 rounded-md  hover:bg-blue-200 transition duration-150'
      onClick={handleBack}>
      Back
    </button>
  )
}

export default BackButton