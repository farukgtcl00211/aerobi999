import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='container mx-auto'>
      
        <h2 className='font-dm text-[#262626] font-bold text-[49px]'>Contacts</h2>
        <h3 className='font-dm text-[#767676] font-bold text-[16px]'><Link to='/'>Home / Contacts</Link></h3>
        
        <div className="py-10"><h2 className='font-dm text-[#262626] font-bold text-[39px]'>Fill up a Form</h2></div>
    
    <form>
    <div className="w-[40%]">
        
        <label className='font-dm text-[#262626] font-bold text-[16px]'>Name</label>
        <input  className='w-full px-2 py-3 font-dm text-[#767676] font-normal text-[16px]' type="text" placeholder='Your name here' />
    </div>

    <div className="w-[40%]">
        
        <label className='font-dm text-[#262626] font-bold text-[16px]'>Email</label>
        <input  className='w-full px-2 py-3 font-dm text-[#767676] font-normal text-[16px]' type="text" placeholder='Your email here' />
    </div>
    <div className="w-[40%]">
        
        <label className='font-dm text-[#262626] font-bold text-[16px]'>Message</label>
        <input  className='w-full px-2 py-3 font-dm text-[#767676] font-normal text-[16px]' type="text" placeholder='Your message here' />
    </div>
    
    </form>
    <div className="py-10">
       <Link className='px-[80px] py-3 bg-black font-dm text-[#fff] font-bold text-[16px] hover:ring-2 ring-[#24ACF2]'>Post</Link> 
    </div>

    <div className="w-full">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14608.036955466388!2d90.3655622497439!3d23.747049949787122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b33cffc3fb%3A0x4a826f475fd312af!2sDhanmondi%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1709793590945!5m2!1sen!2sbd" width="100%" height="500"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>   
    </div>
    




    </div>
  )
}

export default Contact