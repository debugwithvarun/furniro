import React from 'react'
import Navbar from '../component/Navbar';
import Banner from '../component/Banner';
import Rangecatlog from '../component/Rangecatlog';
import Products from '../component/Products';
import Footer from '../component/Footer';

const Home = ({ creamcolor, creamcombo, lightcream, discountcolor, newcolor, darktext, lighttext,cardcolor,hovercolor}) => {
  return (
    <div className='w-full min-h-screen '>
        <Navbar/>
        <Banner creamcolor={creamcolor} creamcombo={creamcombo} darktext={darktext}/>
        <Rangecatlog darktext={darktext} lighttext={lighttext}/>
      <Products cardcolor={cardcolor} hovercolor={hovercolor} darktext={darktext} lighttext={lighttext}/>
     <Footer lighttext={lighttext} darktext={darktext}/>
    </div>
  )
}

export default Home;