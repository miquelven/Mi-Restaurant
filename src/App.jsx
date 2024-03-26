import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Products from "./components/Products";
import Rating from "./components/Rating";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <About />
        <Products />
        <Rating />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
