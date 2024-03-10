import React from 'react'
import Flex from '../components/Flex'
import { RxCross2 } from "react-icons/rx";
import Img from '../assets/speimg-4.png'
import { LuPlus, LuMinus } from "react-icons/lu";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { decrementProduct, incrementProduct, removeProduct } from '../components/slice/singleSlice';


const Cart = () => {

  let data = useSelector((state)=>state.single.cartItem)
  let dispatch = useDispatch()


const {totalPrice, totalQuantity} = data. reduce((acc,item)=>{

  acc.totalPrice += item.price * item.qun
  acc.totalQuantity += item.qun
  return acc;

},{totalPrice:0, totalQuantity:0})

  
 
 
  return (
  <>
  
  <div className="container mx-auto">
    <span className='font-dm text-[#262626] font-bold text-[40px] pt-6 inline-block'>Cart</span>
    <h2 className='font-dm text-[#6D6D60] font-bold text-[16px] pb-5'><Link to='/'>Home/Cart</Link></h2>
    
    <Flex className='justify-between bg-[#F4F4F2] py-10'>
      <div className="font-dm text-[#262626] font-bold text-[16px]"><h2>Product</h2></div>
      <div className="font-dm text-[#262626] font-bold text-[16px]"><h3>Price</h3></div>
      <div className="font-dm text-[#262626] font-bold text-[16px]"><h4>Quantity</h4></div>
      <div className="font-dm text-[#262626] font-bold text-[16px]"><h5>Total</h5></div>
    </Flex>

   {data.map((item,index)=>(
    <div className="flex justify-between items-center py-10">

    <div className="flex items-center gap-x-3">
    <i onClick={()=>dispatch(removeProduct(index))}><RxCross2 /></i>
    <img className='h-[70px] w-[70pxpx]' src={item.thumbnail} alt="" />
    <h2 className="font-dm text-[#262626] font-bold text-[16px]">{ item.title}</h2>
    </div>
  <div className="">
    <h2 className="font-dm text-[#262626] font-bold text-[20px] ml-[-120px]">${ item.price}</h2>
  </div>

  <div className="flex items-center gap-x-3 ml-[-50px] border border-[#262626]">
  <i onClick={()=>dispatch(incrementProduct(index))}><LuPlus /></i>
  <h3>{item.qun}</h3>
  <i onClick={()=>dispatch(decrementProduct(index))}><LuMinus /></i>
  </div>

  <div className="">
    <h2 className="font-dm text-[#262626] font-bold text-[20px]">$ { item.price * item.qun }</h2>
  </div>

  </div>
   ))}

   <div className="text-end">
   <h2 className="font-dm text-[#262626] font-bold text-[20px]">Total Quantity : {totalQuantity}</h2>
   <h2 className="font-dm text-[#262626] font-bold text-[20px]">Subtotal : $ {totalPrice}</h2>
   <div className="z-50"> < Link to='/checkout'><button  className='h-[40px] w-[100px] text-dm border border-[#994AFF]
    hover:bg-black hover:text-white duration-500 '>Checkout</button></Link></div>
   </div>
    

  </div>
  
  
  
  </>
  )
}

export default Cart
