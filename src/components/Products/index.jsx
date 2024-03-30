import ProductSlider from "./ProductSlider";
import gif from "/public/gif/productGif.gif";

export default function Products() {
  return (
    <section
      className="my-96 relative scroll-mt-40 max-sm:my-52 max-sm:scroll-mt-24"
      id="products"
    >
      <div className="text-center flex gap-12 flex-col  max-md:px-2">
        <h3>Descubra diversas opções deliciosas.</h3>
        <p className="text-xl font-light text-center text-[#333533] mb-32 max-lg:text-lg max-md:text-base  max-sm:text-xs max-sm:mb-24">
          Aqui está apenas um gostinho do que você encontrará em nosso
          restaurante.
        </p>
      </div>

      <ProductSlider />
      <div className="flex justify-center">
        <img src={gif} alt="texto alt" className="brightness-150" />
      </div>
    </section>
  );
}
