import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Logo from '../assets/logo.png'
import { FaFacebookF } from "react-icons/fa";
import { FaInstalod } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <Container>
        <Flex>
            <div className="lg:w-full flex flex-wrap px-5">
            <div className="w-[33%] lg:w-[13%]  ">
                <ul>
                    <li className='font-dm text-[#000] font-bold text-[16px] mb-5'>MENU</li>
                    <li className='font-dm text-[#6D6D6D] font-bold text-[14px]'>Home</li>
                    <li className='font-dm text-[#6D6D6D] font-bold text-[14px]'>Shop</li>
                    <li className='font-dm text-[#6D6D6D] font-bold text-[14px]'>About</li>
                    <li className='font-dm text-[#6D6D6D] font-bold text-[14px]'>Contact</li>
                    <li className='font-dm text-[#6D6D6D] font-bold text-[14px]'>Journal</li>
                    
                </ul>
            </div>
            <div className="w-[33%] lg:w-[13%]">
                <ul>
                    <li className='font-dm text-[#000] font-bold text-[16px] mb-5'>SHOP</li>
                    <li className='font-dm text-[#6D6D6D] font-bold text-[14px]'>Category-1</li>
                    <li className='font-dm text-[#6D6D6D] font-bold text-[14px]'>Category-2</li>
                    <li className='font-dm text-[#6D6D6D] font-bold text-[14px]'>Category-3</li>
                    <li className='font-dm text-[#6D6D6D] font-bold text-[14px]'>Category-4</li>
                    <li className='font-dm text-[#6D6D6D] font-bold text-[14px]'>Category-5</li>
                    
                </ul>
            </div>
            <div className="w-[33%] lg:w-[13%]">
                <ul>
                    <li className='font-dm text-[#000] font-bold text-[16px] mb-5'>HELP</li>
                    <li className='font-dm text-[#6D6D6D] font-bold text-[14px]'>Privacy Policy</li>
                    <li className='font-dm text-[#6D6D6D] font-bold text-[14px]'>Terms & Conditions</li>
                    <li className='font-dm text-[#6D6D6D] font-bold text-[14px]'>Special E-shop</li>
                    <li className='font-dm text-[#6D6D6D] font-bold text-[14px]'>Shipping</li>
                    <li className='font-dm text-[#6D6D6D] font-bold text-[14px]'>Secure Payments</li>
                    
                </ul>
            </div>

 
            <div className="w-[50%] lg:w-[31%]  justify-center mx-auto text-center inline-block py-10">
                <h2 className='font-dm text-[#262626] font-bold text-[16px]'>(052) 611-5711</h2>
                <h3 className='font-dm text-[#262626] font-bold text-[16px]'>company@domain.com</h3>
                <p className='font-dm text-[#6D6D6D] font-bold text-[14px]'>575 Crescent Ave. Quakertown, PA 18951</p>
            </div>

            <div className=" w-[50%] lg:w-[30%] pl-20 py-10 inline-bloc"><img src={Logo} alt="" /></div>          
            </div>
          
            <div className="w-full flex py-20 px-2 lg:px-0">
                <div className="w-[50%] flex gap-x-5">
                <FaFacebookF />
                <FaInstalod />
                <FaInstagram />
                </div>
                <div className="w-[50%] font-dm text-[#767676] font-bold text-[14px] text-end inline-block"><h2>2020 Orebi Minimal eCommerce Figma Template by Adveits</h2></div>
            </div>

            
        </Flex>
    </Container>
  )
}

export default Footer