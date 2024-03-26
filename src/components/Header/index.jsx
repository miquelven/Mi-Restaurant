import { UilPhone } from "@iconscout/react-unicons";
import { UilEnvelope } from "@iconscout/react-unicons";
import { UilMapMarker } from "@iconscout/react-unicons";
import { UilBars } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";

import OutsideClickHandler from "react-outside-click-handler";

import Container from "../Container";
import { useRef, useState } from "react";

export default function Header() {
  const menu = useRef(null);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="absolute w-full z-30 text-[#a3a3a3]">
      <Container>
        <div className="flex justify-between items-center py-4 mb-10 font-medium text-sm max-md:text-xs max-sm:mb-4 max-[420px]:mb-7 max-[420px]:hidden">
          <div className="flex items-center gap-20 max-md:justify-between max-md:w-full">
            <div className="flex items-center">
              <UilPhone />
              <span className="ml-4">+39 055-123456</span>
            </div>

            <div className="flex items-center max-[420px]:hidden">
              <UilEnvelope />
              <span className="ml-4">contato@restaurante.com</span>
            </div>
          </div>

          <div className="flex items-center max-md:hidden">
            <UilMapMarker />
            <span className="ml-4">Rua nº, bairro, cidade</span>
          </div>
        </div>

        {/* line */}
        <div className="absolute w-full left-0 top-16 bg-[#CCCCCC] opacity-30 h-0.5"></div>

        <OutsideClickHandler onOutsideClick={() => setOpenMenu(false)}>
          <nav className="relative flex justify-between items-center max-md:text-sm max-sm:absolute max-sm:right-0 max-sm:left-0 max-sm:px-5">
            <a href="#">
              <img
                src="/public/images/logo.png"
                alt="Logo do restaurante"
                className="w-24 max-md:w-16 max-sm:mt-3 max-[420px]:w-10"
              />
            </a>

            <ul
              ref={menu}
              className={`transition-all duration-500 flex  max-sm:flex-col max-sm:absolute max-sm:left-0 max-sm:right-0 max-sm:items-center max-sm:overflow-hidden 
             ${
               openMenu
                 ? "min-[420px]:-top-2 max-[420px]:top-16 bg-black/70 gap-0"
                 : "max-sm:-top-[820px] gap-14"
             }
            `}
            >
              <li
                onClick={() => setOpenMenu(false)}
                className={`py-4 ${
                  openMenu
                    ? "hover:bg-white/10 w-full h-full  flex justify-center"
                    : ""
                }`}
              >
                <a
                  href="#about"
                  className="w-full flex justify-center uppercase py-1 border-b-4 font-semibold border-transparent transition-all duration-500 hover:text-[#d3d3d3] sm:hover:border-[#BA181B]"
                >
                  <span>sobre nós</span>
                </a>
              </li>
              <li
                onClick={() => setOpenMenu(false)}
                className={`py-4 ${
                  openMenu
                    ? "hover:bg-white/10 w-full h-full  flex justify-center"
                    : ""
                }`}
              >
                <a
                  href="#products"
                  className="uppercase w-full flex justify-center py-1 border-b-4 font-semibold border-transparent transition-all duration-500 hover:text-[#d3d3d3] sm:hover:border-[#BA181B]"
                >
                  <span>produtos</span>
                </a>
              </li>
              <li
                onClick={() => setOpenMenu(false)}
                className={`py-4 ${
                  openMenu
                    ? "hover:bg-white/10 w-full h-full flex justify-center"
                    : ""
                }`}
              >
                <a
                  href="#rating"
                  className="uppercase w-full flex justify-center py-1 border-b-4 font-semibold border-transparent transition-all duration-500 hover:text-[#d3d3d3] sm:hover:border-[#BA181B]"
                >
                  <span>avaliações</span>
                </a>
              </li>
              <li
                onClick={() => setOpenMenu(false)}
                className={`py-4 ${
                  openMenu
                    ? "hover:bg-white/10 w-full h-full flex justify-center"
                    : ""
                }`}
              >
                <a
                  href="#contact"
                  className="uppercase w-full flex justify-center py-1 border-b-4 font-semibold  border-transparent transition-all duration-500 hover:text-[#d3d3d3] sm:hover:border-[#BA181B]"
                >
                  <span>contato</span>
                </a>
              </li>
            </ul>

            {!openMenu ? (
              <button
                onClick={() => setOpenMenu(true)}
                className="absolute right-4 sm:hidden max-[420px]:top-4"
              >
                <UilBars size="32" />
              </button>
            ) : (
              <button
                onClick={() => setOpenMenu(false)}
                className="absolute p-3 -right-1 -top-6 hover:cursor-pointer max-sm:-top-1 max-[420px]:top-1 sm:hidden"
              >
                <UilTimes size="32" />
              </button>
            )}
          </nav>
        </OutsideClickHandler>
      </Container>
    </header>
  );
}
