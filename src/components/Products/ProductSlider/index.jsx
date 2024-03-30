import { useEffect, useRef, useState } from "react";
import Container from "../../Container";
import { motion } from "framer-motion";

const data = {
  imgs: [
    "/public/images/productsImg/product1.png",
    "/public/images/productsImg/product2.png",
    "/public/images/productsImg/product3.png",
    "/public/images/productsImg/product4.png",
    "/public/images/productsImg/product5.jpg",
    "/public/images/productsImg/product6.png",
    "/public/images/productsImg/product7.png",
    "/public/images/productsImg/product8.png",
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
