import React, { useEffect, useState } from 'react'
import Container from './Container' 
import { FaHeart } from "react-icons/fa";
import { IoMdGitCompare } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";
import axios from 'axios';
import Slider from "react-slick";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className='next'
        
        onClick={onClick}
      ><IoIosArrowForward className='ml-3 mt-3 text-white'/></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className='prev'
        
        onClick={onClick}
      ><IoIosArrowBack className='ml-3 mt-3 text-white' /></div>
    );
  }


const Newarrival = () => {

    const settings = {
         
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
               
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    let [info, setInfo] = useState([])

    useEffect(()=>{
      let getdata = ()=>{

            axios.get('https://dummyjson.com/products').then((response)=>{
                setInfo(response.data.products);
            })
      }
      getdata()
    },[])
 
  return (
    <Container>
        <h2 className='font-dm text-[#000] font-bold text-[39px]'>New Arrivals</h2>
        

            <Slider {...settings}>
            
                {info.map((item)=>(
            <div className='!w-[95%] pl-5 sm:pl-28'>
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
                         <p className='font-dm text-[#767676] font-bold text-[16px]'>{item.price}</p>
                     </div>
                 </div>
            </div>
                ))}               
             
              </Slider>
        
    </Container>
  )
}

export default Newarrival