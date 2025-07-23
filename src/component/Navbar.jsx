import React from "react";
import { FaUser } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="w-full justify-center items-center flex ">
      <div className="w-[90%] justify-between items-center flex ">
        <div className="font-montserrat-bold flex gap-2 items-center">
          <h1 className="text-[34px] max-md:text-[24px] ">Furniro</h1>
        </div>
        <div className="font-poppins text-[16px] flex gap-[65px] items-center max-md:gap-[30px] max-sm:hidden ">
          <a href="/">Home</a>
          <a href="/">Shop</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
        </div>
        <div className="flex gap-5 items-center text-[16px] max-md:gap-4 max-md:text-[12.8px]">
          <FaUser />
          <IoSearchOutline />
          <FaRegHeart />
          <BsCart3 />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
