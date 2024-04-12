import ProductSlider from "./ProductSlider";
import gif from "../../assets/gif/productGif.gif";

import { motion } from "framer-motion";

const cardVariant = {
  offscreen: {
    y: 400,
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 2.5,
    },
  },
};

export default function Products() {
  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      className="my-96 relative scroll-mt-40 max-sm:my-52 max-sm:scroll-mt-0"
      id="products"
    >
      <motion.div
        variants={cardVariant}
        className="text-center flex gap-12 flex-col  max-md:px-2"
      >
        <h3>Descubra diversas opções deliciosas.</h3>
        <p className="text-xl font-light text-center text-[#333533] mb-32 max-lg:text-lg max-md:text-base  max-sm:text-xs max-sm:mb-24">
          Aqui está apenas um gostinho do que você encontrará em nosso
          restaurante.
        </p>
      </motion.div>

      <motion.div variants={cardVariant}>
        <ProductSlider />
      </motion.div>
      <div className="flex justify-center">
        <img src={gif} alt="texto alt" className="brightness-150" />
      </div>
    </motion.section>
  );
}
