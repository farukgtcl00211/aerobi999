import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Flex from './Flex';
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { addToCart } from './slice/singleSlice';
import { FaRegStar } from "react-icons/fa";



const ProductDetails = () => {

    let dispatch = useDispatch()

let [data, setdata] = useState([])

let productId = useParams()
console.log(productId);

let dataId = ()=>{
axios.get(`https://dummyjson.com/products/${productId.id}`).then((response)=>{

    setdata(response.data);

})
}

console.log(data);
useEffect(()=>{
    dataId()
},[])

let handleproduct =(item)=>{
    dispatch(addToCart({...item, qun:1}))
}

let clientRating = Array.from({length:5},(elm,index)=>{
let number = index + 0.5;
return(
    data.rating >= index + 1 ? <IoStar /> : data.rating >= number ? <IoStarHalf /> : <FaRegStar />
)
})

  return (
   <>
   <div className="container mx-auto">
    <Flex className='justify-between'>
        {data ?.images ?.map((item)=>(
        <div className="  ">
    <img src={item} alt="" />
        </div>
   ))}
    </Flex>
    <div className="py-28">
        <h2 className='font-dm text-[#262626] font-bold text-[20px]'>Product</h2>
        <div className="flex  items-center">
            
        {clientRating}
       
        {data.rating}
        <div className="">  <h2 className='font-dm text-[#262626] font-normal text-[16px] ml-4 py-3'>1 Review</h2></div>     
        </div>
        <div className="flex gap-x-4">
            <del className='font-dm text-[#767676] font-bold text-[16px]'>$88.00</del>
            <h2 className='font-dm text-[#262626] font-bold text-[16px]'>$44.00</h2>
        </div>     
     
            <div className="py-10">

                <ul>
                    <li className='px-5 py-2 bg-[#161616] text-white inline-block mr-5'>Add to Wish List</li>

                    <Link to ='/Cart'>

                    <li onClick={()=>handleproduct(data)} className='px-5 py-2 bg-[#161616] text-white inline-block mr-5'>Add to Cart</li>

                    </Link>
                    
                </ul>

               
            </div>

            <div className="">
                <h2 className='font-dm text-[#262626] font-bold text-[16px]'>FEATURES  & DETAILS</h2>
                <h3 className='font-dm text-[#262626] font-bold text-[16px] py-5'>SHIPPING & RETURNS</h3>
                <h4 className='font-dm text-[#767676] font-bold text-[16px] py-5 w-[780px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>

                <div className="flex items-center gap-x-5 py-10">
                    <h2 className='font-dm text-[#767676] font-bold text-[20px]'>Description</h2>
                    <h3 className='font-dm text-[#262626] font-bold text-[20px]'>Reviews (1)</h3>
                </div>


            </div>
            

    </div>

   </div>

   
   
   
   </>
  )
}

export default ProductDetails