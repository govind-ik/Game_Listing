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
      <h1 className= {`font-bold  ${theme} ${theme==='light'?'text-black':' text-amber-50'}  text-3xl ml-4 mt-0`}>Genres</h1>
      {genremp.map((resp)=>(
        <img src={resp.image_background} className='w-[60px] h-[60px] mt-5 ml-5 rounded-2xl'/>

      ))}
      

    </div>
  )
}

export default Genrelist
