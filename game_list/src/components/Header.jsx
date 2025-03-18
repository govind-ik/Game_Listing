import React, { useState } from 'react'
//import { CiSearch } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { LuSunMoon } from "react-icons/lu";
import { IoMoonSharp } from "react-icons/io5";

const Header = () => {
    const [toggle, setToggle] = useState(false) 
    function f(){
        setToggle(!toggle)
    }
  return (
    <nav  className='fixed top-0 left-0 w-full ' >
        <div className='flex items-center space-between'>
        <img  width={90} height={90}  className='mr-2'
        src='https://github.com/rrs301/game-listing-demo/blob/master/src/assets/Images/logo1.png?raw=true' ></img>
        
        <div className="bg-slate-50 w-full flex items-center rounded-full">
            <FaSearch className=' ml-4 left-10 text-gray-500 text-xl caret-amber-400' />
            <input  className='  rounded-2xl w-7xl bg-transparent  outline-none
             text-black font-bold h-10 ml-3 ' placeholder='  Search Games'/>
             
        </div>
        {toggle?<LuSunMoon className='text-[35px] bg-slate-200 text-black p-1 rounded-full ml-5' onClick={f} />:
        <IoMoonSharp className='text-[35px] bg-slate-200 text-black p-1 rounded-full ml-5' onClick={f}/>}

        
        
        
        </div>

    </nav>
    
  )
}

export default Header