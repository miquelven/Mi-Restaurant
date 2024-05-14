import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Products from "./components/Products";
import Rating from "./components/Rating";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { useState, useEffect } from "react";
import { UilArrowCircleUp } from "@iconscout/react-unicons";
import { Helmet } from "react-helmet";

function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);

    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>MiRestaurante</title>

        <meta
          name="description"
          content="Desfrute de uma experiência culinária excepcional em nosso restaurante. Explore uma variedade de pratos autênticos e saboreie a atmosfera acolhedora do nosso local. Confira nossas avaliações e reserve sua mesa hoje mesmo."
        />
        <meta
          name="keywords"
          content="Restaurante, comida, gastronomia, menu, culinária, localização, reservas, chef, avaliações, ambiente, cardápio, especialidades."
        />
        <meta name="author" content="MiRestaurante" />
      </Helmet>

      <Header />
      <main className="relative w-[100vw]">
        <Banner />

        <About />
        <Products />
        <Rating />
        <Contact />

        {/* toUp */}
        <button
          onClick={scrollTop}
          className={`transition-all duration-300 fixed z-50 bottom-10 right-10 text-gray-600 rounded-full hover:bg-gray-600 hover:text-white max-sm:right-5 ${
            showScroll ? "block" : "hidden"
          }`}
        >
          <UilArrowCircleUp className="w-11 h-11 max-sm:w-8 max-sm:h-8" />
        </button>
      </main>
      <Footer />
    </>
  );
}

export default App;
