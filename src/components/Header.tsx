import { useMenu } from "@hooks/useMenu";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Hamburguer } from "src/icons/hamburgue";
import { HamburguerX } from "src/icons/hamburgueX";
import "../styles/header.css";
// import Logo from '../'

export const Header = () => {
  const { handleAbout, handleCourse, handlePostGraduation, handleHome } =
    useMenu();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div
      className="flex w-full items-center justify-center flex-col"
      data-aos="fade-in"
    >
      <div className="flex h-[104px] w-full max-w-8xl flex-shrink-0 items-center justify-between py-[32px] px-6">
        <Link to="/">
          <div className="hidden lg:block">
            <StaticImage src="../images/logo.svg" alt="logo" />
          </div>

          <div className="lg:hidden">
            <StaticImage src="../images/logoIcon.svg" alt="logo" />
          </div>
        </Link>

        <div
          className="lg:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <HamburguerX /> : <Hamburguer />}L
        </div>

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

      {isMenuOpen && (
        <div
          className={`flex flex-col relative w-full h-[calc(100vh-104px)] bg-[url('../images/hero.svg')]`}
        >
          <div
            className={`lg:hidden flex justify-center flex-col flex-1 gap-10 h-screen px-5`}
            // data-aos="fade-in"
          >
            <span
              className="text-right text-2xl font-medium uppercase text-white cursor-pointer hover:text-opacity-70 transition-all duration-300 ease-in-out"
              onClick={() => {
                setIsMenuOpen(false);
                handleHome();
              }}
            >
              Home
            </span>
            <span
              className="text-right text-2xl font-medium uppercase text-white cursor-pointer hover:text-opacity-70 transition-all duration-300 ease-in-out"
              onClick={() => {
                setIsMenuOpen(false);
                handlePostGraduation();
              }}
            >
              Pós-Graduação
            </span>
            <span
              className="text-right text-2xl font-medium uppercase text-white cursor-pointer hover:text-opacity-70 transition-all duration-300 ease-in-out"
              onClick={() => {
                setIsMenuOpen(false);
                handleCourse();
              }}
            >
              Cursos
            </span>
          </div>
          <div className="px-5">
            <div
              className="flex items-center justify-center gap-[8px] rounded-[76px] bg-[#FEDAC2] p-[12px] transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#FEDAC2] cursor-pointer w-full mb-10 "
              onClick={() => {
                setIsMenuOpen(false);
                handleAbout();
              }}
            >
              <span className="text-[12px] font-medium uppercase text-primary_black">
                Quem Somos
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
