import { useMenu } from "@hooks/useMenu";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const Header = () => {
  const { handleAbout, handleCourse, handlePostGraduation, handleHome } =
    useMenu();

  return (
    <div className="flex w-full items-center justify-center" data-aos="fade-in">
      <div className="flex h-[104px] w-full max-w-8xl flex-shrink-0 items-center justify-between py-[32px] px-6">
        <StaticImage
          src="../images/logo.svg"
          alt="logo"
          className="hidden lg:block"
        />
        <StaticImage
          src="../images/logoIcon.svg"
          alt="logo"
          className="lg:hidden"
        />

        <div className="hidden lg:flex items-center justify-end gap-[16px]">
          <span
            className="text-right text-[14px] font-medium uppercase text-white cursor-pointer hover:text-opacity-70 transition-all duration-300 ease-in-out"
            onClick={handleHome}
          >
            Home
          </span>
          <span
            className="text-right text-[14px] font-medium uppercase text-white cursor-pointer hover:text-opacity-70 transition-all duration-300 ease-in-out"
            onClick={handlePostGraduation}
          >
            Pós-Graduação
          </span>
          <span
            className="text-right text-[14px] font-medium uppercase text-white cursor-pointer hover:text-opacity-70 transition-all duration-300 ease-in-out"
            onClick={handleCourse}
          >
            Cursos
          </span>

          <div
            className="flex items-center justify-end gap-[8px] rounded-[76px] bg-[#FEDAC2] p-[12px] transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#FEDAC2] cursor-pointer"
            onClick={handleAbout}
          >
            <span className="text-[12px] font-medium uppercase text-primary_black">
              Quem Somos
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
