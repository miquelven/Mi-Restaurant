import Container from "../Container";

export default function Contact() {
  return (
    <section className="mb-96 max-lg:mb-60">
      <Container>
        <div className="flex">
          <div
            className="flex flex-col justify-between flex-1 h-[650px] mt-60 max-2xl:h-[610px] max-xl:h-[510px] max-xl:mt-10 max-lg:h-[410px] max-lg:mt-0 max-md:h-[500px] max-[420px]:h-[520px]"
            id="contact"
          >
            <div className="flex items-center justify-center gap-20 max-lg:justify-start max-md:gap-10">
              <span className="capitalize text-[rgb(186,24,27)] text-2xl font-medium max-2xl:text-xl max-xl:text-base max-[420px]:text-sm">
                estamos te esperando
              </span>
              <div className="bg-[#BA181B] w-32 h-1 max-2xl:w-14"></div>
            </div>

            <div className="flex flex-col gap-20 max-lg:gap-10 ">
              <h3 className="max-md:text-center max-md:mb-10 ">
                Faça uma visita
              </h3>
              <div className="font-light text-[#333533] flex flex-col gap-6 text-lg max-xl:text-base max-lg:text-sm max-md:text-base max-[420px]:text-sm ">
                <p>Nome do restaurante, cep, rua , bairro, cidade</p>
                <p>contato@restaurante.com</p>
                <p>+39 055 1234567</p>
              </div>
            </div>

            <div className="font-light text-[#333533]">
              <p className="text-lg max-xl:text-base max-lg:text-sm max-md:text-base max-md:text-end max-[420px]:text-sm">
                Ficaremos felizes em recebê-lo.
              </p>
            </div>
          </div>

          <div className="relative flex-[2] max-lg:flex-1 max-md:hidden ">
            <img
              src="/public/images/contactImg/smallContactImg.png"
              alt="text alt"
              className="w-[400px] h-[300px] object-cover absolute left-40 -bottom-40 z-20 max-2xl:w-[350px] max-2xl:h-[250px] max-2xl:left-52 max-2xl:-bottom-32 max-xl:left-28 max-xl:w-[300px] max-xl:h-[200px] max-lg:w-[200px] max-lg:h-[150px] max-lg:-bottom-20 max-lg:left-40"
            />
            <div className="bg-[#f5f3f4] absolute left-[168px] -bottom-[152px] w-[400px] h-[300px] z-10 max-2xl:w-[350px] max-2xl:h-[250px] max-2xl:left-[220px] max-2xl:-bottom-[114px] max-xl:left-[122px] max-xl:-bottom-[118px] max-xl:h-[200px] max-xl:w-[300px] max-lg:w-[200px] max-lg:h-[150px] max-lg:-bottom-[70px] max-lg:left-[170px]"></div>
            <img
              src="/public/images/contactImg/largeContactImg.png"
              alt="text alt"
              className="w-[700px] h-[650px] object-cover absolute right-0 bottom-0 max-2xl:w-[650px] max-2xl:h-[600px] max-xl:w-[550px] max-xl:h-[500px] max-lg:w-[320px] max-lg:h-[300px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
