import React from 'react'

const VideoTitle = ({title,overview}) => {
   
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute  text-white bg-gradient-to-r'>
      <h1 className=' font-bold text-2xl '>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div>
        <button className=' bg-white h-12 w-32 text-2xl rounded-xl text-black hover:opacity-50'>▶️ Play</button>

 
        <button className='bg-gray-500 h-12  w-44 text-2xl rounded-xl m-2 opacity-18 text-white'>ℹ️ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
