import React from 'react'
import Data from "../furniture/Data.jsx"
import Productscard from './Productscard.jsx';
import {motion} from "framer-motion"
const Products = ({ cardcolor, hovercolor, darktext, lighttext }) => {
    console.log(Data);
  return (
    <div className='mt-20 flex justify-center items-center w-full'>
        <div className='flex w-[80%] flex-col gap-7 justify-center items-center'>
            <h1 className='text-[40px] text-center font-poppins-bold' style={{color:darktext}}>Our Products</h1>
            <div className='  flex flex-wrap justify-center gap-4 items-center font-poppins' style={{color:lighttext}}>
                {Data.map((product,index)=>(
                    <Productscard key={index} product={product} cardcolor={cardcolor} hovercolor={hovercolor} darktext={darktext} lighttext={lighttext} index={index}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Products