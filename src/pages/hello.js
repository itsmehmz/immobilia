import React from 'react'
import homeback from '../Assets/homeback.jpg'
const Hello = () => {
  return (
   <div className='h-60 w-screen bg-red-600 flex space-x-10 justify-center items-center'>
      <div className='bg-blue-700 h-40 w-40'>
        <img src={homeback} alt="" />
      </div>
      <div className='bg-yellow-700 h-40 w-40'></div>
      <div className='bg-green-600 h-40 w-40'></div>
   </div>
  )
}

export default Hello