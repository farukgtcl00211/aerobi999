import React from 'react'

const PaginationNum = ({pageNumber,paginate,next,prev,currentPage}) => {
 
         
  return (
    <>
    

<nav aria-label="Page navigation example">
  <ul class="flex items-center -space-x-px h-8 text-sm py-32 justify-center">
    <li onClick={prev}>
      <a  class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-white bg-[#203340] border border-e-0 border-gray-300 rounded-s-lg  ">
        <span class="sr-only">Previous</span>
        <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
        </svg>
      </a>
    </li>

    {pageNumber.map((item,i)=>(

<li onClick={()=>paginate(item)} className={currentPage == i+1 ? 'flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-[#414A97] border border-gray-300'  : 'flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300'} >


<a>{item + 1}</a>
</li>
    ))}


   
    
    <li onClick={next}>
      <a  class="flex items-center justify-center px-3 h-8 leading-tight text-white bg-[#203340] border border-gray-300 rounded-e-lg ">
        <span class="sr-only">Next</span>
        <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
      </a>
    </li>
  </ul>
</nav>
<nav aria-label="Page navigation example">
  <ul class="flex items-center -space-x-px h-10 text-base">
    
  </ul>
</nav>

    
    
    </>
  )
}

export default PaginationNum