import React from 'react'

const Banner = (props) => {
    console.log(props.bannerimage)
  return (
    <div className='relative '>
      <div className='absolute bottom-0 p-5  bg-gradient-to-t from-slate-900 to-transparent w-full'>
        <h2 className='text-[24px] font-bold'> {props.bannerimage.name} </h2>
        <button className='bg-blue-600 rounded-lg w-[100px] h-[30px] font-bold'>Get Game</button>
      </div>
        <img  src={props.bannerimage.background_image
} className='w-full object-cover rounded-xl h-[500px] mt-4' />
    </div>
  )
}

export default Banner