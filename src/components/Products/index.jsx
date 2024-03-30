import ProductSlider from "./ProductSlider";

export default function Products() {
  return (
    <section className="my-96 relative scroll-mt-40 max-sm:my-52" id="products">
      <div className="text-center flex gap-12 flex-col  ">
        <h3>Descubra diversas opções deliciosas.</h3>
        <p className="text-xl font-light text-center text-[#333533] mb-32 max-lg:text-lg max-md:text-base max-md:px-4">
          Aqui está apenas um gostinho do que você encontrará em nosso
          restaurante.
        </p>
      </div>

      <ProductSlider />
      <div className="flex justify-center">
        <img
          src="/public/gif/productGif.gif"
          alt="texto alt"
          className="brightness-150"
        />
      </div>
    </section>
  );
}
