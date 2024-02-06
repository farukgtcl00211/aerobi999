import React, { useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import Logo from '../assets/logo.png'
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";

const Header = () => {

    let [show, setShow] = useState(false)
    let handleShow = ()=>{
      setShow(!show)
    }

  return (
    <Container>
      <Flex className='justify-between py-5'>

        <div className="">
            <img src={Logo} alt="" />
        </div>
        <div className=" justify-start mx-auto text-center ">

            <ul className={`lg:flex gap-x-6 absolute top-0 left-0  lg:static ml-[100px]
             ${show == true ?'bg-[#1F1F1F] w-[200px] h-[200px] rounded   z-50 top-[50px] left-[0px] duration-500' :'bg:[green] top-[50px] left-[-200px] duration-500' }`}>

                <li className='font-dm text-[#767676] font-bold text-[16px] hover:text-[#fff] py-2 text-center'><a href="#">Home</a></li>
                <li className='font-dm text-[#767676] font-bold text-[16px] hover:text-[#fff] py-2'><a href="#">Shop</a></li>
                <li className='font-dm text-[#767676] font-bold text-[16px] hover:text-[#fff] py-2'><a href="#">About</a></li>
                <li className='font-dm text-[#767676] font-bold text-[16px] hover:text-[#fff] py-2'><a href="#">Contact</a></li>
                <li className='font-dm text-[#767676] font-bold text-[16px] hover:text-[#fff] py-2'><a href="#">Journal</a></li>
            </ul>
        </div>

        <div className="" onClick={handleShow}>
         {show ?<RxCross2 /> : <FaBars />} 
        </div>
      </Flex>
        
    </Container>
  )
}

export default Header