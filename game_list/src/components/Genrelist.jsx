import React, { useContext, useEffect, useState } from 'react'
import CreateApi from '../apis/CreateApi'
import { Themecolor } from '../context/Theme';


const Genrelist = () => {
  const {theme,setTheme}=useContext(Themecolor);
  const [genremp,setGenremp]=useState([])
    useEffect(()=>{
        genrelist();

    },[])
    const genrelist=()=>{
        CreateApi.getgenre.then((resp)=>{
            console.log(resp.data.results)
            setGenremp(resp.data.results)
        })
    }
  return (
    <div >
      <h1 className= {`font-bold  ${theme} ${theme==='light'?'text-black':' text-amber-50'}  text-3xl ml-4 mt-2 mb-2 `}>Genres</h1>
      {genremp.map((resp)=>(
        <div className='flex gap-2 items-centre hover:bg-gray-300 rounded-2xl group  mb-1  cursor-pointer '>
          <img src={resp.image_background} className='w-[40px] h-[40px]   ml-5 rounded-2xl object-cover mb-2 mt-2 group-hover:scale-120 transition-all ease-out duration-300'/>
          <h1 className={`mt-4 ml-3  ${theme} ${theme==='light'?'text-black':' text-amber-50' } font-bold group-hover:scale-120 transition-all ease-out duration-300`} >{resp.name}</h1>
        </div>

      ))}
      

    </div>
  )
}

export default Genrelist
