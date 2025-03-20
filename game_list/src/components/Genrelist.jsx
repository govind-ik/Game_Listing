import React, { useEffect } from 'react'
import CreateApi from '../apis/CreateApi'


const Genrelist = () => {
    useEffect(()=>{
        genrelist();

    },[])
    const genrelist=()=>{
        CreateApi.getgenre.then((resp)=>{
            console.log(resp.data.results)
        })
    }
  return (
    <div>
      genrelist----
    </div>
  )
}

export default Genrelist
