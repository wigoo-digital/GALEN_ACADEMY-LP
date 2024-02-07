import { menus } from "@data/menu";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Magnifying } from "../icons/magnifying";

export const Header = () => {
  return (
    <div className="flex w-full items-center justify-center" data-aos="fade-in">
      <div className="flex h-[104px] w-full max-w-8xl flex-shrink-0 items-center justify-between py-[32px]">
        <StaticImage src="../images/logo.svg" alt="logo" />

        <div className="flex items-center justify-end gap-[16px]">
          {menus.map((menu) => (
            <Link to={menu.url} key={menu.id}>
              <span className="text-right text-[14px] font-medium uppercase text-white">
                {menu.title}
              </span>
            </Link>
          ))}

          <div className="flex h-[39px] w-[39px] items-center justify-center gap-[8px] rounded-[76px] border-[1px] bg-[linear-gradient(144deg,_rgba(255,_255,_255,_0.00)_-5.3%,_rgba(255,_255,_255,_0.24)_92.07%)] p-[12px] backdrop-filter">
            <Magnifying height={50} width={50} />
          </div>
          <div className="flex items-center justify-end gap-[8px] rounded-[76px] bg-[#FEDAC2] p-[12px] transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#FEDAC2]">
            <span className="text-[12px] font-medium uppercase text-primary_black">
              Quem Somos
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
