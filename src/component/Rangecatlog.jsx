import React from "react";
import bedroom from "../assets/categories/bedroom.png";
import dining from "../assets/categories/dinning.png";
import living from "../assets/categories/living.png";
import {motion} from "framer-motion";
const Rangecatlog = ({ darktext, lighttext }) => {
  const categories = [
    { name: "Dining", imgSrc: dining },
    { name: "Living", imgSrc: living },
    { name: "Bedroom", imgSrc: bedroom },
  ];
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[80%] flex flex-col font-poppins gap-6 mt-10">
        <h1
          className="text-[32px] text-center font-poppins-bold max-md:text-[24px]"
          style={{ color: darktext }}
        >
          Browse The Range
        </h1>
        <h4 className="text-[20px] text-center max-md:text-[16px]" style={{ color: lighttext }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h4>

        <div className="flex justify-between items-center gap-4 max-md:flex-col">
          {categories.map((category, index) => (
            <motion.div key={index} className="flex flex-col justify-around items-center text-center gap-4 hover:scale-[1.02] transition-all duration-300"
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{ duration: 1, delay: index * 0.2 }}
            
            >
              <img src={category.imgSrc} alt={category.name} className="w-[300px] h-[400px] max-md:w-[200px] max-md:h-[300px] "/>
              <h1 className="text-[24px] font-poppins-semibold max-md:text-[18px]">{category.name}</h1>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rangecatlog;
