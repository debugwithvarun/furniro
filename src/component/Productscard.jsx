import React from "react";
import { motion } from "framer-motion";
const Productscard = ({
  product,
  cardcolor,
  hovercolor,
  darktext,
  lighttext,
  index,
}) => {
  return (
    <motion.div
    variants={{
        hidden: { opacity: 0  },
        visible: { opacity: 1},
    }}
    initial="hidden"
    whileInView={"visible"}
    transition={{ duration: 1 ,delay: index*0.2 }}
      className={`bg-${cardcolor} hover:bg-${hovercolor} min-w-[24%] pb-4  max-md:min-w-[45%] hover:scale-[1.02] transition-all duration-300 hover:shadow-lg `}
      style={{ backgroundColor: cardcolor, color: darktext }}
    >
      <img
        src={product.imgSrc}
        alt={product.name}
        className="w-full h-68 object-cover mb-4 "
      />
      <div className="flex flex-col px-4 gap-2">
        <h2 className={`text-${darktext} font-poppins-bold `}>
          {product.name}
        </h2>
        <p className={`text-${lighttext} text-sm `}>{product.category}</p>
        <p className={`text-${darktext} font-poppins-bold`}>${product.price}</p>
      </div>
    </motion.div>
  );
};

export default Productscard;
