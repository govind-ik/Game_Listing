import React from 'react'
import Genrelist from '../components/Genrelist'

const Home = () => {
  return (
    <div>
      <div className='grid grid-cols-4'>
        <div className='bg-blue-600 hidden md:block'>
          <Genrelist/>
        </div>
        <div className=' bg-amber-600 col-span-4 md:col-span-3'> Game list</div>
      </div>
    </div>
  )
}

export default Home