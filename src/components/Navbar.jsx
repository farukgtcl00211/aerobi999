import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaBars } from "react-icons/fa"
import { FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { BsFillStopwatchFill } from "react-icons/bs";


const Navbar = () => {

    let [cartshow, setCartshow] = useState(false)
    let [cartacc, setCartacc] = useState(false)
    let [cartpp, setCartpp] = useState(false)

    let categoryRef = useRef()
    let cataccRef = useRef()
    let catppRef = useRef()
    

   useEffect(()=>{
    document.addEventListener('click',(e)=>{

         
         if(categoryRef.current.contains(e.target)== true){
            setCartshow(!cartshow)

         }else{
            setCartshow(false)
         }
        if(cataccRef.current.contains(e.target)== true){
            setCartacc(!cartacc)
        }else{
            setCartacc(false)
        }
        if(catppRef.current.contains(e.target)== true){
            setCartpp(!cartpp)
        }else{
            setCartpp(false)
        }               
         
    })
   },[cartshow, cartacc,cartpp ])

  return (
    
    <Container>
    <Flex className='items-center bg-[#F5F7F9]'>
     
        <div className="w-full py-2 lg:w-1/4 relative">
            
            <div className="flex items-center" ref = {categoryRef} >
                <FaBars />                    
                <p className='pl-4 font-dm'>Shop by Category</p>
            </div>

            {cartshow ==true && <div className="bg-[#262626] absolute top-[50px] left-0 w-[200px] z-50">
                <ul>
                    <li className='text-[rgba(255,255,255,0.7)] py-3 pl-3
                     hover:text-white hover:pl-6 duration-500'>Accesories</li>

                    <li className='text-[rgba(255,255,255,0.7)] py-3 pl-3
                     hover:text-white hover:pl-6 duration-500'>Furniture</li>

                    <li className='text-[rgba(255,255,255,0.7)] py-3 pl-3
                     hover:text-white hover:pl-6 duration-500'>Electronics</li>

                    <li className='text-[rgba(255,255,255,0.7)] py-3 pl-3
                     hover:text-white hover:pl-6 duration-500'>Clothes</li>

                    <li className='text-[rgba(255,255,255,0.7)] py-3 pl-3
                     hover:text-white hover:pl-6 duration-500'>Bags</li>

                    <li className='text-[rgba(255,255,255,0.7)] py-3 pl-3
                     hover:text-white hover:pl-6 duration-500'>Home appliances</li>
                </ul>
            </div>}

        </div>

        <div className="w-full  py-2 lg:w-1/2">
            <div className="relative ">
                <input type="search" placeholder='search.....' className='w-full py-4 px-2' />
                <div className="absolute top-[50%] right-0 translate-y-[-50%] pr-4 text-[30px] "><IoMdSearch /></div>
            </div>
        </div>

        <div className="w-full  py-2 lg:w-1/4 flex lg:justify-end gap-x-5 relative">
            <div className="flex" ref={cataccRef}>
            <FaUser />
            <IoMdArrowDropdown /></div>

            {cartacc &&  <div className=" border border-[#B885FD] w-[200px] absolute top-[50px] right-0 z-50">
                    <ul>
                       <li className='bg-[#262626] text-center text-[rgba(255,255,255,0.7)] py-3 pl-3
                     hover:text-white hover:pl-6 duration-500'>My Account</li>
                       <li className=' text-center text-[#262626] py-3 pl-3
                     hover:text-black hover:pl-6 duration-500'>Log Out</li>
                    </ul>
                </div>}

                

            <div className="" ref={catppRef}><FaShoppingCart />
                 {cartpp &&  <div className="absolute top-[50px] right-0">
                 <div className="flex items-center ">

                <div className="h-[50px] w-[50px] bg-[#D8D8D8] relative">
                <BsFillStopwatchFill className='absolute top-[20%] left-[20%] text-[30px]' />
                </div>
                <div className="flex items-center z-50"><p className='pl-[20px] pr-[20px] text-dm font-bold'>Black Smart Watch <br />
                                        $44.00</p>
                                        <RxCross2 />
                                        </div>

                </div>
                <div className="py-5 bg-[#fff]"><p className='text-dm text-dm text-[#767676]'>subtotal:<span className='font-bold pl-5'>$44.00</span> </p></div>


                <div className="flex gap-x-1 py-2 px-2 bg-[#fff] ">
                    <div className="z-50"><button className='h-[40px] w-[100px] text-dm border border-[#994AFF] hover:bg-black hover:text-white duration-500 '>View Cart</button></div>
                    <div className="z-50"> <button  className='h-[40px] w-[100px] text-dm border border-[#994AFF] hover:bg-black hover:text-white duration-500 '>Checkout</button></div>
                            
                
                </div>

                    </div>   } 

                       
            
            </div>
            
        </div>
    
    </Flex>
</Container>


   
    
  )
}

export default Navbar