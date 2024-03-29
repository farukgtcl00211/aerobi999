import React, { useState,useEffect } from 'react'
import { createContext } from 'react'
import axios from 'axios';
 

let Apidata = createContext()

const ContexApi = ({children}) => {

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
    <>
 <Apidata.Provider value={info}>{children}</Apidata.Provider>
    
    </>
  )
}

export {ContexApi,Apidata} 