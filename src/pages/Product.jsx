import React, { useContext, useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Flex from '../components/Flex'
import { FaHeart } from "react-icons/fa";
import { IoMdGitCompare } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";
import Img from '../assets/Img_2 (4).png'
import { Apidata } from '../components/ContexApi';
import Post from '../components/pagination/Post';
import PaginationNum from '../components/pagination/PaginationNum';
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";




const Product = () => {

    let data = useContext(Apidata)

    let [currentPage, setCurrentPage] = useState(1)
    let [perPage, setPerPage] = useState(6)

    let [showIcon, setShowIcon] = useState(false)
    let [show,setShow] = useState(false)

    let cat2 =useRef()

    let pageNumber =[]
    for(let i= 0; i < Math.ceil(data.length / perPage); i++){
        pageNumber.push(i)
    }

    let lastPage = currentPage * perPage
    let firtsPage = lastPage - perPage
    let allPage = data.slice(firtsPage, lastPage)
   
   
    let paginate = (pageNumber)=>{
      setCurrentPage(pageNumber + 1)
    }

    let next = ()=>{
      if(currentPage < pageNumber.length){
        setCurrentPage((state)=> state + 1)
      }
    }

    let prev = ()=>{
      if(currentPage > 1){
        setCurrentPage((state)=> state - 1)
      }
    }

    useEffect(()=>{
      document.addEventListener('click',(e)=>{
  
           
           if(cat2 ?.current ?.contains(e.target)== true){
            setShow(!show)
            setShowIcon(!showIcon)
  
           }else{
            setShow(false)
            setShowIcon(false)
           }                          
           
      })
     },[show])
    

  return (

    <div className="py-10">
        
    <div className='container mx-auto'>
    <span className='font-dm text-[#767676] font-bold text-[16px]'><Link to='/'>Home</Link>/Product</span>
    <Flex>
    <div className="w-[20%]">
    
    <h2 className='font-dm text-[#262626] font-bold text-[20px] pt-4'>Shop by Category</h2>
   <div ref={cat2} className="flex justify-between items-center">
    <h3 className='font-dm text-[#262626] font-bold text-[16px] pt-2'>Category 1</h3>
    
    {showIcon ? <FiMinus /> : <FaPlus />}  
   
   </div>
   {show && 
   <ul className='bg-[gray]'>
    <li className='font-dm text-[#000] font-bold text-[16px]  pt-2'>Category one</li>
    <li className='font-dm text-[#000] font-bold text-[16px] pt-2'>Category two</li>
    <li className='font-dm text-[#000] font-bold text-[16px] pt-2'>Category three</li>
    <li className='font-dm text-[#000] font-bold text-[16px] pt-2'>Category four</li>     
   </ul>
    }

    </div>
    <div className="w-[80%]">

        <div className="flex justify-between flex-wrap">

         <Post post={allPage}/>
            
    </div>
    <PaginationNum pageNumber={pageNumber} paginate={paginate} next={next} prev={prev} currentPage={currentPage}/>
        </div>
    </Flex>

       
    </div>
    </div>
  )
}

export default Product