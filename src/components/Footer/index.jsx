import { UilInstagram } from "@iconscout/react-unicons";
import { UilFacebook } from "@iconscout/react-unicons";

import bgFooter from "../../assets/images/footer.webp";

export default function Footer() {
  return (
    <footer
      className="relative opacity-80 w-full py-4 h-[200px] flex flex-col justify-between items-center max-md:h-[170px] max-[420px]:h-[230px]"
      style={{ backgroundImage: `url('${bgFooter}')` }}
    >
      <div className="flex justify-center items-center flex-col gap-3">
        <h5 className="text-[#F5F3F4] text-2xl max-md:text-lg">
          Mi Restaurante
        </h5>
        <p className="text-[#D3D3D3] max-md:text-sm">Horário: 09:00 - 13:00</p>
      </div>

      {/* line */}
      <div className="absolute bottom-12 left-0 right-0 w-full h-2 border-dashed border-t-2  border-white/40 max-sm:bottom-14 max-[420px]:bottom-24"></div>

      <div className="flex max-[420px]:flex-col max-[420px]:mb-10">
        <p className="text-[#f5f3f4] text-sm max-md:text-xs max-sm:max-w-80 max-sm:text-center">
          © Copyright - Todos os direitos reservados - Miquelven Silva
        </p>

        <div className="flex gap-10 absolute right-10 max-sm:gap-4 max-sm:right-4 max-[420px]:bottom-3">
          <UilInstagram className="cursor-pointer hover:scale-110 text-[#f5f3f4] max-md:w-5" />
          <UilFacebook className="cursor-pointer hover:scale-110 text-[#f5f3f4] max-md:w-5" />
        </div>
      </div>
    </footer>
  );
}
