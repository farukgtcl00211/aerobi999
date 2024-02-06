import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Sale1 from '../assets/sale-1.png'
import Sale2 from '../assets/sale-2.png'
import Sale3 from '../assets/sale-3.png'


const Sale = () => {
  return (
    <Container>
        <Flex className='py-5 justify-between'>
        <div className="w-[48%]  ">
                <img src={Sale1} alt="" />
            </div>
            <div className="w-[48%]">
                <div className="">
                <img src={Sale2} alt="" />
                </div>
                <div className="mt-10">
                <img src={Sale3} alt="" />
                </div>
            </div>
        </Flex>
    </Container>
  )
}

export default Sale
