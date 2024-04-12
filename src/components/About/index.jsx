import Container from "../Container";
import gif from "../../assets/gif/aboutGif.gif";
import bgAbout from "../../assets/images/about.webp";

import { motion } from "framer-motion";

export default function About() {
  const texts = [
    "Nosso restaurante é um espaço onde os sabores se encontram para    criar momentos inesquecíveis. Com uma equipe dedicada e uma    cozinha que exala criatividade, cada prato é uma obra de arte    culinária.",
    "Somos apaixonados por comida e por proporcionar experiências    gastronômicas memoráveis. No coração de nossa cozinha, buscamos    ingredientes frescos e sazonais, combinando técnicas    tradicionais com uma abordagem criativa. Nosso objetivo é    oferecer pratos que não apenas alimentem o corpo, mas também    alimentem a alma.",
  ];

  return (
    <>
      <div className="flex justify-center  items-end my-20">
        <img src={gif} alt="gif de talheres" />
      </div>

      <motion.section
        initial="offscreen"
        whileInView="onscreen"
        className="relative py-20  overflow-hidden "
        id="about"
      >
        <Container>
          <div className="relative z-20  pb-20 max-[420px]:pb-14">
            <motion.h3
              initial={{ y: 400 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="mb-16 mt-5 max-[420px]:mt-0 max-[420px]:mb-10"
            >
              Mi Restaurante
            </motion.h3>

            <motion.div
              initial={{ y: 400 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-2  gap-56 max-xl:gap-32 max-lg:grid-cols-1 max-lg:gap-14 max-md:gap-10"
            >
              {texts.map((text, index) => (
                <p
                  key={index}
                  className="text-lg leading-10 text-[#33533] max-lg:text-base max-lg:leading-8 max-sm:text-xs max-sm:leading-6"
                >
                  {text}
                </p>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-[#BA181B] h-2 rounded-sm w-32 absolute bottom-0 left-0 max-[420px]:h-1"
            ></motion.div>
          </div>
        </Container>
        <img
          src={bgAbout}
          alt="imagem de fundo da seção de sobre"
          className="absolute left-0 top-0 w-full h-full  object-cover opacity-30"
        />
      </motion.section>
    </>
  );
}
