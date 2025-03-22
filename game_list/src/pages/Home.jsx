import React, { useEffect, useState } from 'react'
import Genrelist from '../components/Genrelist'
import CreateApi from '../apis/CreateApi'
import Banner from '../components/Banner'

const Home = () => {

  const [gamesarray,setGamesarray]=useState([])

  useEffect(()=>{
    games();

  },[])

  const games=()=>{
    CreateApi.getgames.then((resp)=>{
      console.log(resp.data.results)
      setGamesarray(resp.data.results)
    })
  }

  return (
    <div>
      <div className='grid grid-cols-4 px-8 p-1 mt-0'>
        <div className=' hidden md:block '>
          <Genrelist/>
        </div>
        <div className='  col-span-4 md:col-span-3'> 
         {gamesarray.length>0?<Banner  bannerimage={gamesarray[0]}/>:null}
        </div>
      </div>
    </div>
  )
}

export default Home