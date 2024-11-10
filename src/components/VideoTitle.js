import React from 'react'

const VideoTitle = ({title,overview}) => {
   
  return (
    <div className='pt-36 px-12'>
      <h1 className=' font-bold text-2xl '>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div>
        <button className='bg-gray-200 h-12 w-32 text-2xl rounded-xl'>▶️ Play</button>


        <button className='bg-gray-200 h-12  w-44 text-2xl rounded-xl m-2 opacity-8'>ℹ️ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
