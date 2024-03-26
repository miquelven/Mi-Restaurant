import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Products from "./components/Products";
import Rating from "./components/Rating";

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <About />
        <Products />
        <Rating />
      </main>
    </>
  );
}

export default App;
