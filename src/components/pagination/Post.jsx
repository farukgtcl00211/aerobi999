import React from 'react'
import { FaHeart } from "react-icons/fa";
import { IoMdGitCompare } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Post = ({post}) => {
  return (
   <>
   
   {post.map((item)=>(

<div className='w-[32%] pl-5 sm:pl-28'>
    <Link to={`/product/${item.id}`}>
    <div className="py-3">
         <div className="relative group">
             <img src={item.thumbnail} className='h-[300px]' alt="" />
             
             <div className="absolute bottom-0 left-0 bg-[#fff] w-full h-[0px] opacity-0 group-hover:h-[200px]
              duration-500 ease-in group-hover:opacity-100">
                 <div className="">
                     <ul className='px-10 py-10'>
                         <li className=' text-end'>Add to Wish List <FaHeart className='inline-block' /></li>
                         <li className='text-end'>Compare <IoMdGitCompare className='inline-block' /></li>
                         <li className='text-end'>Add to Cart <FaCartPlus className='inline-block' /></li>
                     </ul>
                 </div>
              </div>
         </div>
         <div className="flex justify-between ">
             <h2 className='font-dm text-[#000] font-bold text-[16px]'>{item.title}</h2>
             <p className='font-dm text-[#767676] font-bold text-[16px]'>${item.price}</p>
         </div>
     </div>
    </Link>
         
</div>
))}
   
   </>
  )
}

export default Post