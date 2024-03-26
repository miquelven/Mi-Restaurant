import Container from "../Container";

export default function About() {
  return (
    <>
      <div className="flex justify-center items-end my-20">
        <img src="/public/gif/aboutGif.gif" alt="gif de talheres" />
      </div>

      <section className="relative py-20 overflow-hidden" id="about">
        <Container>
          <div className="relative z-20 pb-20 max-[420px]:pb-14">
            <h3 className="mb-16 mt-5 max-[420px]:mt-0 max-[420px]:mb-10">
              Mi Restaurante
            </h3>

            <div className="grid grid-cols-2 gap-56 max-xl:gap-32 max-lg:grid-cols-1 max-lg:gap-14 max-md:gap-10">
              <p className="text-lg leading-10 text-[#33533] max-lg:text-base max-lg:leading-8 max-sm:text-sm max-sm:leading-6">
                Nosso restaurante é um espaço onde os sabores se encontram para
                criar momentos inesquecíveis. Com uma equipe dedicada e uma
                cozinha que exala criatividade, cada prato é uma obra de arte
                culinária.
              </p>
              <p className="text-lg leading-10 text-[#33533] max-lg:text-base max-lg:leading-8 max-sm:text-sm max-sm:leading-6">
                Somos apaixonados por comida e por proporcionar experiências
                gastronômicas memoráveis. No coração de nossa cozinha, buscamos
                ingredientes frescos e sazonais, combinando técnicas
                tradicionais com uma abordagem criativa. Nosso objetivo é
                oferecer pratos que não apenas alimentem o corpo, mas também
                alimentem a alma.
              </p>
            </div>
            <div className="bg-[#BA181B] h-2 rounded-sm w-32 absolute bottom-0 left-0 max-[420px]:h-1"></div>
          </div>
        </Container>
        <img
          src="/public/images/about.png"
          alt="imagem de fundo da seção de sobre"
          className="absolute left-0 top-0 w-full h-full  object-cover opacity-30"
        />
      </section>
    </>
  );
}
