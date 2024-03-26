import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Products from "./components/Products";
import Rating from "./components/Rating";
import Contact from "./components/Contact";

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
    </>
  );
}

export default App;
