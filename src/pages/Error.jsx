import React from 'react'
import { IoMdSearch } from "react-icons/io";
import {Link} from 'react-router-dom'

const Error = () => {
  return (
    <div className='container mx-auto py-28'>
      <div className='w-[620px]'>
       <h1 className='font-dm font-[700] text-[#262626] text-[200px]'>404</h1>
       <p className='font-dm font-[400] text-[#767676] text-[16px] '>The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?</p>
       <div className="flex items-center mx-auto justify-between py-10 relative">

        <input type="text"  placeholder='Type to search' className='h-[40px] w-full p-3'/>
       <div className="absolute top-[50%] right-[5px] translate-y-[-50%]"><IoMdSearch className='text-[#262626]' /></div>
        
       </div>
       <div className="">
       <Link to='/'>
      <button className='h-[40px] w-[150px] bg-black'><h2 className='font-dm font-[700] text-[#fff] text-[14px]'>Back to Home</h2></button>
      </Link>
      </div>
      </div>

    </div>
       
    
  )
}

export default Error