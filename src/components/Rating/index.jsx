import { Carousel } from "flowbite-react";
import Container from "../Container";

const data = [
  {
    peoples: [
      {
        name: "Lucas Silva",
        img: "/public/images/people.png",
        text: "Uma experiência gastronômica incrível! Equipe atenciosa, ambiente acolhedor e pratos deliciosos. Recomendo!",
      },
      {
        name: "Lucas Silva",
        img: "/public/images/people.png",
        text: "Uma experiência gastronômica incrível! Equipe atenciosa, ambiente acolhedor e pratos deliciosos. Recomendo!",
      },
    ],
  },

  {
    peoples: [
      {
        name: "Lucas Silva",
        img: "/public/images/people.png",
        text: "Uma experiência gastronômica incrível! Equipe atenciosa, ambiente acolhedor e pratos deliciosos. Recomendo!",
      },
      {
        name: "Lucas Silva",
        img: "/public/images/people.png",
        text: "Uma experiência gastronômica incrível! Equipe atenciosa, ambiente acolhedor e pratos deliciosos. Recomendo!",
      },
    ],
  },
  {
    peoples: [
      {
        name: "Lucas Silva",
        img: "/public/images/people.png",
        text: "Uma experiência gastronômica incrível! Equipe atenciosa, ambiente acolhedor e pratos deliciosos. Recomendo!",
      },
      {
        name: "Lucas Silva",
        img: "/public/images/people.png",
        text: "Uma experiência gastronômica incrível! Equipe atenciosa, ambiente acolhedor e pratos deliciosos. Recomendo!",
      },
    ],
  },
];

const themeCarousel = {
  indicators: {
    active: {
      off: "bg-black/10 hover:bg-black",
      on: "bg-black",
    },
  },
};

export default function Rating() {
  return (
    <Container>
      <section className="mb-96 scroll-mt-20 max-sm:scroll-mt-10" id="rating">
        <span className="font-medium text-[#333533] max-md:text-sm">
          Avaliações
        </span>
        <h3 className="max-sm:mt-10 max-sm:text-center">
          O que dizem sobre nós
        </h3>

        <div className="relative flex justify-end max-lg:flex-col ">
          <div className="max-w-[1050px] flex relative z-30 max-md:h-[680px]">
            <Carousel
              slideInterval={5000}
              theme={themeCarousel}
              leftControl=" "
              rightControl=" "
            >
              {data.map((d, index) => (
                <>
                  <div
                    key={index}
                    className="w-full mt-20 h-96 max-xl:mt-40 max-lg:mt-20 max-lg:h-80 "
                  >
                    <div className="flex gap-5 max-xl:justify-center max-md:flex-col max-md:gap-14">
                      {d.peoples.map((people, peopleIndex) => (
                        <>
                          <div
                            className="flex flex-col justify-center gap-5 max-md:items-center"
                            key={peopleIndex}
                          >
                            <div className="w-[500px] h-[225px] rounded-xl bg-[#DEDEDF] flex text-center text-[#333] items-center font-light text-xl leading-9 max-2xl:w-[400px] max-2xl:h-[175px] max-2xl:text-lg max-lg:text-sm max-lg:leading-7 max-lg:w-[350px] max-lg:h-[150px] max-[420px]:w-[300px] max-[420px]:text-xs max-[420px]:leading-6 max-[420px]:px-5">
                              {people.text}
                            </div>

                            <div className="flex items-center pl-10 max-md:pl-0">
                              <img
                                src={people.img}
                                alt="imagem de uma pessoa que fez uma avalização"
                                className="w-20 h-20 rounded-full object-cover object-center max-2xl:w-16 max-2xl:h-16 max-lg:w-12 max-lg:h-12 max-[420px]:w-8 max-[420px]:h-8"
                              />
                              <span className="text-2xl  text-semibold ml-16 text-center text-black max-2xl:text-xl max-lg:text-lg max-[420px]:text-base">
                                {people.name}
                              </span>
                            </div>
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                </>
              ))}
            </Carousel>
          </div>

          <div className="ml-96  max-2xl:ml-28 max-xl:ml-0 max-lg:hidden">
            <img
              src="/public/images/rating.png"
              alt="imagem de um cozinheiro"
              className="absolute right-4 top-0 h-[700px] w-[500px] object-cover object-center z-20 max-2xl:h-[600px] max-2xl:w-[400px]"
            />
            <div className="absolute -right-1 top-5 h-[620px] w-[500px] bg-white z-10 max-2xl:h-[420px] max-2xl:w-[400px]"></div>
          </div>
        </div>
      </section>
    </Container>
  );
}
