import React from 'react'
import banner from "../assets/banner/banner.jpg"
import {motion} from "framer-motion"
const Banner = ({ creamcolor, creamcombo, darktext }) => {
  return (
    <div className='w-full relative flex h-[600px] font-poppins justify-end items-center p-10 max-md:h-[450px]' style={{backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
       
        <motion.div className='px-6 py-6 pt-8 flex flex-col gap-3  items-start w-[500px] top-[50%] max-md:w-[300px] max-md:p-4' style={{backgroundColor:creamcolor,color:darktext}}
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: "0%" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        >
            <h3 className='text-md font-bold '>New Arrival</h3>
            <h1 style={{color:creamcombo}} className='text-[52px] font-poppins-bold max-md:text-[30px]'>Discover Our New Collection</h1>
            <p className='max-md:text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>

            <button style={{backgroundColor:creamcombo,color:creamcolor}} className='py-2 px-4 flex justify-center items-center hover:scale-[1.02]'>Buy Now</button>
        </motion.div>
    </div>
  )
}

export default Banner