import { Carousel } from "flowbite-react";

const data = [
  {
    img: "/public/images/banner.jpg",
    content: {
      h2: "Um lugar aconchegante para se estar",
      p: "Você terá a sensação de estar em sua casa. Venha experimentar!",
    },
  },
  {
    img: "/public/images/waiter.png",
    content: {
      h2: "Hospitalidade calorosa e atenciosa",
      p: "Nossa equipe dedicada está sempre pronta para recebê-lo com um sorriso caloroso e proporcionar uma experiência verdadeiramente memorável.",
    },
  },
  {
    img: "/public/images/chefstable.png",
    content: {
      h2: "Uma experiência gastronômica única",
      p: "Deixe-nos surpreendê-lo com uma experiência gastronômica que desperte todos os seus sentidos.",
    },
  },
];

export default function Banner() {
  const themeCarousel = {
    indicators: {
      active: {
        off: "bg-white/20 hover:bg-white ",
        on: "bg-white",
      },
    },
    control: {
      base: "inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/20 sm:h-10 sm:w-10",
      icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6",
    },
  };

  return (
    <section className="text-white h-screen w-full ">
      <Carousel slideInterval={5000} theme={themeCarousel}>
        {data.map((d, index) => (
          <>
            <div className={`h-full w-full `} key={index}>
              <img
                src={d.img}
                alt=""
                className="w-full h-screen object-cover max-[420px]:object-bottom"
              />
              <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
              <div className="absolute z-20 inset-0 flex justify-center items-center flex-col max-sm:px-5">
                <h2 className="text-[#e5e3e4] text-center mt-20 max-lg:text-4xl max-md:text-3xl max-sm:text-2xl ">
                  {d.content.h2}
                </h2>
                <p className="my-14 text-xl font-medium text-[#b0b0b0] max-w-[500px] text-center leading-[40px] max-lg:text-lg max-md:text-base max-[420px]:mt-40">
                  {d.content.p}
                </p>
              </div>
            </div>
          </>
        ))}
      </Carousel>
    </section>
  );
}
