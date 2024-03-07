import React from 'react'
import Img from '..//assets/Img_2 (4).png'
import { FaHeart } from "react-icons/fa";
import { IoMdGitCompare } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";

const Basic = () => {
  return (
    <div className='container mx-auto'>
        <div className="flex gap-5 py-28">

            <div className="w-[24%]">

                <div className="relative group">
                <img src={Img} alt="" />
                <div className=" absolute top-[20px] left-[20px] h-[40px] w-[100px] bg-black">
                    <h2 className='text-white text-center pt-2 '>New</h2>   </div>         
                    
                    <div className="absolute bottom-0 left-0 h-[200px] w-full opacity-0 group-hover:bg-white group-hover:opacity-100">
                    
                    <div className="">
                        <ul className='px-10 py-10 '>
                            <li className=' text-end'>Add to Wish List <FaHeart className='inline-block' /></li>
                            <li className='text-end'>Compare <IoMdGitCompare className='inline-block' /></li>
                            <li className='text-end'>Add to Cart <FaCartPlus className='inline-block' /></li>
                        </ul>
                    </div>
                    </div>               
                </div>

                <div className="flex justify-between">
                    <div className="">
                        <h2>Basic Crew Neck Tee</h2>
                        <p>Black</p>
                        </div>
                        <div className="">
                            <p>$44.00</p>
                        </div>           
                </div>                
            </div>
            <div className="w-[24%]">

                <div className="relative group">
                <img src={Img} alt="" />
                <div className=" absolute top-[20px] left-[20px] h-[40px] w-[100px] bg-black">
                    <h2 className='text-white text-center pt-2 '>New</h2>   </div>         
                    
                    <div className="absolute bottom-0 left-0 h-[200px] w-full opacity-0 group-hover:bg-white group-hover:opacity-100">
                    
                    <div className="">
                        <ul className='px-10 py-10 '>
                            <li className=' text-end'>Add to Wish List <FaHeart className='inline-block' /></li>
                            <li className='text-end'>Compare <IoMdGitCompare className='inline-block' /></li>
                            <li className='text-end'>Add to Cart <FaCartPlus className='inline-block' /></li>
                        </ul>
                    </div>
                    </div>               
                </div>

                <div className="flex justify-between">
                    <div className="">
                        <h2>Basic Crew Neck Tee</h2>
                        <p>Black</p>
                        </div>
                        <div className="">
                            <p>$44.00</p>
                        </div>           
                </div>                
            </div>
            <div className="w-[24%]">

                <div className="relative group">
                <img src={Img} alt="" />
                <div className=" absolute top-[20px] left-[20px] h-[40px] w-[100px] bg-black">
                    <h2 className='text-white text-center pt-2 '>New</h2>   </div>         
                    
                    <div className="absolute bottom-0 left-0 h-[200px] w-full opacity-0 group-hover:bg-white group-hover:opacity-100">
                    
                    <div className="">
                        <ul className='px-10 py-10 '>
                            <li className=' text-end'>Add to Wish List <FaHeart className='inline-block' /></li>
                            <li className='text-end'>Compare <IoMdGitCompare className='inline-block' /></li>
                            <li className='text-end'>Add to Cart <FaCartPlus className='inline-block' /></li>
                        </ul>
                    </div>
                    </div>               
                </div>

                <div className="flex justify-between">
                    <div className="">
                        <h2>Basic Crew Neck Tee</h2>
                        <p>Black</p>
                        </div>
                        <div className="">
                            <p>$44.00</p>
                        </div>           
                </div>                
            </div>
            <div className="w-[24%]">

                <div className="relative group">
                <img src={Img} alt="" />
                <div className=" absolute top-[20px] left-[20px] h-[40px] w-[100px] bg-black">
                    <h2 className='text-white text-center pt-2 '>New</h2>   </div>         
                    
                    <div className="absolute bottom-0 left-0 h-[200px] w-full opacity-0 group-hover:bg-white group-hover:opacity-100">
                    
                    <div className="">
                        <ul className='px-10 py-10 '>
                            <li className=' text-end'>Add to Wish List <FaHeart className='inline-block' /></li>
                            <li className='text-end'>Compare <IoMdGitCompare className='inline-block' /></li>
                            <li className='text-end'>Add to Cart <FaCartPlus className='inline-block' /></li>
                        </ul>
                    </div>
                    </div>               
                </div>

                <div className="flex justify-between">
                    <div className="">
                        <h2>Basic Crew Neck Tee</h2>
                        <p>Black</p>
                        </div>
                        <div className="">
                            <p>$44.00</p>
                        </div>           
                </div>                
            </div>
        </div>       
    </div>
  )
}

export default Basic