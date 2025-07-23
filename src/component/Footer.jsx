import React from 'react'

const Footer = ({ lighttext ,darktext}) => {
  return (
    <div className='w-full font-poppins p-4 flex justify-center items-center mt-20 mb-10'>
        <div className='w-[90%] flex justify-between flex-wrap border-b-2 p-8 pb-10 max-md:flex-col max-md:gap-8' style={{borderColor:lighttext}}>
            <div className='flex flex-col gap-6'>
                <h1 className='font-montserrat-bold text-3xl' style={{color:darktext}}>Furino</h1>
                <p style={{color:lighttext}}>Dhampur Uttar Pradesh</p>
                <p style={{color:lighttext}}>9760246256</p>
            </div>
            <div className='flex flex-col gap-6'>
                <h1 className='font-poppins text-xl' style={{color:lighttext}}>Links</h1>
                <ul className='list-none flex flex-col gap-4 font-poppins-bold'>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='flex flex-col gap-6'>
                <h1 className='font-poppins text-xl' style={{color:lighttext}}>Help</h1>
                <ul className='list-none flex flex-col gap-4 font-poppins-bold'>
                    <li>Payment Options</li>
                    <li>Returns</li>
                    <li>Privacy Policies</li>
               
                </ul>
            </div>
            <div className='flex flex-col gap-6'>
                <h1 className='font-poppins text-xl' style={{color:lighttext}}>Newsletter</h1>
                <ul className='list-none flex gap-4'>
                    <input type="text" name="" id="" className='border-0 border-b-2' placeholder='Enter Your Email Address' style={{borderColor:darktext,color:lighttext}}/>
                    <button className=' px-2 py-2 border-0 border-b-2' style={{borderColor:darktext,color:darktext}}>Subscribe</button>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer