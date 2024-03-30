import { useEffect, useRef, useState } from "react";
import Container from "../../Container";
import { motion } from "framer-motion";

import product1 from "/public/images/productsImg/product1.webp";
import product2 from "/public/images/productsImg/product2.webp";
import product3 from "/public/images/productsImg/product3.webp";
import product4 from "/public/images/productsImg/product4.webp";
import product5 from "/public/images/productsImg/product5.webp";
import product6 from "/public/images/productsImg/product6.webp";
import product7 from "/public/images/productsImg/product7.webp";
import product8 from "/public/images/productsImg/product8.webp";

const data = {
  imgs: [
    product1,
    product2,
    product3,
    product4,
    product5,
    product6,
    product7,
    product8,
  ],
};

export default function ProductSlider() {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <Container>
      <motion.div
        ref={carousel}
        className="overflow-hidden cursor-grab"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="flex gap-4"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          once={true}
          transition={{ duration: 1.5 }}
        >
          {data.imgs.map((img, imgIndex) => (
            <div
              key={imgIndex}
              className="h-[400px] min-w-[600px] max-sm:w-full max-sm:max-w-[600px] max-sm:min-w-[224px] max-sm:h-[300px]"
            >
              <img
                src={img}
                alt="texto alt"
                className="h-5/6 w-full pointer-events-none object-cover object-center  rounded-xl "
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </Container>
  );
}
