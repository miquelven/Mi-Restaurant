import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Products from "./components/Products";
import Rating from "./components/Rating";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { useState, useEffect } from "react";
import { UilArrowCircleUp } from "@iconscout/react-unicons";

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
          className={`transition-all duration-300 fixed z-50 bottom-10 right-10 p-1 text-gray-600 rounded-full hover:bg-gray-600 hover:text-white ${
            showScroll ? "block" : "hidden"
          }`}
        >
          <UilArrowCircleUp className="w-11 h-11 " />
        </button>
      </main>
      <Footer />
    </>
  );
}

export default App;
