import React from 'react'
import Flex from '../components/Flex'
import { RxCross2 } from "react-icons/rx";
import Img from '../assets/speimg-4.png'
import { LuPlus, LuMinus } from "react-icons/lu";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {

  let data = useSelector((state)=>state.single.cartItem)
 
  console.log(data);
  return (
  <>
  
  <div className="container mx-auto">
    <span className='font-dm text-[#262626] font-bold text-[40px] pt-6 inline-block'>Cart</span>
    <h2 className='font-dm text-[#6D6D60] font-bold text-[16px] pb-5'><Link to='/'>Home/Cart</Link></h2>
    
    <Flex className='justify-between bg-[#F4F4F2] py-5 py-10'>
      <div className="font-dm text-[#262626] font-bold text-[16px]"><h2>Product</h2></div>
      <div className="font-dm text-[#262626] font-bold text-[16px]"><h3>Price</h3></div>
      <div className="font-dm text-[#262626] font-bold text-[16px]"><h4>Quantity</h4></div>
      <div className="font-dm text-[#262626] font-bold text-[16px]"><h5>Total</h5></div>
    </Flex>

   {data.map((item)=>(
    <div className="flex justify-between items-center py-10">

    <div className="flex items-center gap-x-3">
    <RxCross2 />
    <img className='h-[70px] w-[70pxpx]' src={item.thumbnail} alt="" />
    <h2 className="font-dm text-[#262626] font-bold text-[16px]">{item.title}</h2>
    </div>
  <div className="">
    <h2 className="font-dm text-[#262626] font-bold text-[20px] ml-[-120px]">${item.price}</h2>
  </div>

  <div className="flex items-center gap-x-3 ml-[-50px] border border-[#262626]">
  <LuPlus />
  <h3>1</h3>
  <LuMinus />
  </div>

  <div className="">
    <h2 className="font-dm text-[#262626] font-bold text-[20px]">$44.00</h2>
  </div>

  </div>
   ))}
    

  </div>
  
  
  
  </>
  )
}

export default Cart
