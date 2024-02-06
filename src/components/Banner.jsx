import React from 'react'
import Ban from '../assets/banner.png'
import Slider from "react-slick";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows:false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,

    appendDots: dots => (
      <div
        style={{
          position:'absolute',
          top:'50%',
          transform:'translateY(-50%)',
           
          left:'0',
          borderRadius: "10px",
          padding: "10px"
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "30px",
          color: "blue",
          border: "1px #fff solid"
        }}
      >
        0{i + 1}
      </div>
    )
  };
    

  return (
   
    <Slider {...settings}    >
 <div className="">
        <img src={Ban} alt="" />
       </div>
 <div className="">
        <img src={Ban} alt="" />
       </div>
 <div className="">
        <img src={Ban} alt="" />
       </div>
 <div className="">
        <img src={Ban} alt="" />
       </div>
    </Slider>
      
       
   
  )
}

export default Banner