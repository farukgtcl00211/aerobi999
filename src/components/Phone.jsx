import React from 'react'
import Phone1 from '../assets/phone-1.png'
import Phone2 from '../assets/phone-2.png'
import Container from './Container'
import Flex from './Flex'

const Phone = () => {
  return (
   <Container >
    <Flex className='py-10'>
    <div className="w-[50%]"><img src={Phone1} alt="" /></div>
        <div className="w-[50%]"><img src={Phone2} alt="" /></div>
    </Flex>
   </Container>
  )
}

export default Phone