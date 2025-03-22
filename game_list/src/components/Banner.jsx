import React from 'react'

const Banner = (props) => {
    console.log(props.bannerimage)
  return (
    <div>
        <img  src={props.bannerimage.background_image
} className='w-full object-cover rounded-xl h-[500px] mt-4' />
    </div>
  )
}

export default Banner