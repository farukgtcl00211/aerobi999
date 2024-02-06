import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Speimg1 from '../assets/speimg-1.png'
import Speimg2 from '../assets/speimg-2.png'
import Speimg3 from '../assets/speimg-3.png'
import Speimg4 from '../assets/speimg-4.png'

const Special = () => {
  return (
    <Container>
        <div className="py-10">
        <h2 className='font-dm text-[#000] font-bold text-[39px] px-5 lg:px-0'>Special Offers</h2>
        <Flex className='justify-between'>
            <div className="w-full lg:w-[23%] relative">
                <div className="sm:pl-[200px] lg:pl-0"><img src={Speimg1} alt="" /> 
                <div className="absolute top-[20px] left-[20px] h-[40px] w-[100px] bg-[#262626] text-center
                 text-white items-center pt-2 sm:ml-[200px] lg:ml-0">New</div>
                </div>

                <div className="flex justify-between px-5 lg:px-0">
                    <div className="">
                        <h2 className='font-dm text-[#000] font-bold text-[16px]'>Basic Crew Neck Tee</h2>
                        <h3 className='font-dm text-[#767676] font-bold text-[16px] py-3'>Black</h3></div>
                        <div className="font-dm text-[#767676] font-bold text-[16px] "><p>$44.00</p></div>
                    
                    </div>       
                </div>
            <div className="w-full lg:w-[23%] relative">
                <div className="sm:pl-[200px] lg:pl-0 "><img src={Speimg2} alt="" /> 
                <div className="absolute top-[20px] left-[20px] h-[40px] w-[100px] bg-[#262626] text-center text-white items-center pt-2 sm:ml-[200px] lg:ml-0 ">New</div>
                </div>

                <div className="flex justify-between px-5 lg:px-0">
                    <div className="">
                        <h2 className='font-dm text-[#000] font-bold text-[16px]'>Basic Crew Neck Tee</h2>
                        <h3 className='font-dm text-[#767676] font-bold text-[16px] py-3'>Black</h3></div>
                        <div className="font-dm text-[#767676] font-bold text-[16px]"><p>$44.00</p></div>
                    
                    </div>       
                </div>
            <div className="w-full lg:w-[23%] relative">
                <div className="sm:pl-[200px] lg:pl-0 "><img src={Speimg3} alt="" /> 
                <div className="absolute top-[20px] left-[20px] h-[40px] w-[100px] bg-[#262626] text-center text-white items-center pt-2 sm:ml-[200px] lg:ml-0 ">New</div>
                </div>

                <div className="flex justify-between px-5 lg:px-0">
                    <div className="">
                        <h2 className='font-dm text-[#000] font-bold text-[16px]'>Basic Crew Neck Tee</h2>
                        <h3 className='font-dm text-[#767676] font-bold text-[16px] py-3'>Black</h3></div>
                        <div className="font-dm text-[#767676] font-bold text-[16px]"><p>$44.00</p></div>
                    
                    </div>       
                </div>
            <div className="w-full lg:w-[23%] relative">
                <div className="sm:pl-[200px] lg:pl-0 "><img src={Speimg4} alt="" /> 
                <div className="absolute top-[20px] left-[20px] h-[40px] w-[100px] bg-[#262626] text-center text-white items-center pt-2 sm:ml-[200px] lg:ml-0 ">New</div>
                </div>

                <div className="flex justify-between px-5 lg:px-0">
                    <div className=" ">
                        <h2 className='font-dm text-[#000] font-bold text-[16px]'>Basic Crew Neck Tee</h2>
                        <h3 className='font-dm text-[#767676] font-bold text-[16px] py-3'>Black</h3></div>
                        <div className="font-dm text-[#767676] font-bold text-[16px]"><p>$44.00</p></div>
                    
                    </div>       
                </div>


            
            
        </Flex>
        </div>
    </Container>
  )
}

export default Special