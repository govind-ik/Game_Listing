import React from 'react'
import Genrelist from '../components/Genrelist'

const Home = () => {
  return (
    <div>
      <div className='grid grid-cols-4  p-1 mt-0'>
        <div className=' hidden md:block '>
          <Genrelist/>
        </div>
        <div className='  col-span-4 md:col-span-3'> Game list</div>
      </div>
    </div>
  )
}

export default Home