import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const  navigate = useNavigate()
  return (
    <>
    <div className='w-full flex justify-between items-center font-semibold'>
       <div className='flex items-center gap-2' >
      <img onClick={()=>navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src ={assets.arrow_left}/>
      <img onClick={()=>navigate(1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src ={assets.arrow_right}/>
      </div>
      <div className='flex items-center gap-4'>
        <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block'>Explore Premium</p>
        <p className='bg-black py-1 px-3 text-[15px] rounded-2xl hidden md:block'>Install App</p>
        <p className='bg-purple-500 w-7 h-7 text-black text=[15px] rounded-full flex  items-center justify-center'>P</p>
      </div> 
    </div>
    <div className='flex items-center gap-2 mt-4'>
          <p className='bg-white text-black px-4 py-1 rounded-2xl'>All</p>
          <p className='bg-black px-4 py-1 rounded-2xl'>Podcasts</p>
          <p className='bg-black px-4 py-1 rounded-2xl'>Songs</p>
    </div>
    </>
  )
}

export default Navbar