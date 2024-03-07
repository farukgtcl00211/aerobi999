import React from 'react'
import Img1 from '../assets/newone.png'
import Img2 from '../assets/newtwo.png'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='container mx-auto'>
      
        <h2 className='font-dm text-[#262626] font-bold text-[49px]'>About</h2>
        <h3 className='font-dm text-[#767676] font-bold text-[16px]'><Link to='/'>Home / About</Link></h3>
       
     <div className="flex justify-center items-center "> 
            <div className="W-[50%]">
                <div className='relative'><img className="h-[627px] w-[627px]" src={Img1} alt="" />
                <div className="absolute top-[500px] left-[250px] h-[40px] w-[150px] bg-black" ><h2 className='font-dm text-[#fff] font-bold text-[16px] justify-center items-center mx-auto flex mt-2'>Our Brands</h2></div> 
                </div>             
            </div>

            <div className="W-[50%]">
                <div className='relative'><img className="h-[527px] w-[527px]" src={Img2} alt="" />
                <div className="absolute top-[450px] left-[200px] h-[40px] w-[150px] bg-black" ><h2 className='font-dm text-[#fff] font-bold text-[16px] justify-center items-center mx-auto flex mt-2'>Our Stores</h2></div> 
                </div>             
            </div>            
    </div> 
    

    <div className="">
        <h2 className='font-dm text-[#262626] font-normal text-[30px] w-[1500px]'>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</h2>
    </div>

<div className="flex justify-between py-10">
    <div className="w-[30%]">
        <h2 className='font-dm text-[#262626] font-bold text-[25px]'>Our Vision</h2>
        <h3 className='font-dm text-[#767676] font-normal text-[16px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</h3>
    </div>
    <div className="w-[30%]">
        <h2 className='font-dm text-[#262626] font-bold text-[25px]'>Our Story</h2>
        <h3 className='font-dm text-[#767676] font-normal text-[16px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</h3>
    </div>
    <div className="w-[30%]">
        <h2 className='font-dm text-[#262626] font-bold text-[25px]'>Our Brands</h2>
        <h3 className='font-dm text-[#767676] font-normal text-[16px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</h3>
    </div>
</div>

    </div>
  )
}

export default About
