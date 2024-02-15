import { courses } from "@data/courses";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { useMenu } from "@hooks/useMenu";
import { cn } from "@libs/utils";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Dropdown } from "rizzui";
import { Hamburguer } from "src/icons/hamburgue";
import { HamburguerX } from "src/icons/hamburgueX";
import "../styles/header.css";
// import Logo from '../'

export const Header = () => {
  const { handleAbout, handleCourse, handlePostGraduation, handleHome } =
    useMenu();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isPostGraduationOpen, setIsPostGraduationOpen] = React.useState(false);
  const [isCourseOpen, setIsCourseOpen] = React.useState(false);

  const coursesFiltered = courses.filter(
    (course) => course.type !== "Pós Graduação"
  );
  const postGraduation = courses.filter(
    (course) => course.type === "Pós Graduação"
  );

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

        <div className="hidden lg:flex items-center justify-end gap-16">
          <span
            className="text-right text-[14px] font-medium uppercase text-white cursor-pointer hover:text-opacity-70 transition-all duration-300 ease-in-out"
            onClick={handleHome}
          >
            Home
          </span>
          <Dropdown placement="top">
            <Dropdown.Trigger>
              {/* @ts-ignore */}
              {({ open }) => (
                <span
                  className="text-right text-[14px] font-medium uppercase text-white cursor-pointer hover:text-opacity-70 transition-all duration-300 ease-in-out flex gap-4"
                  onClick={
                    postGraduation.length > 0
                      ? () => null
                      : () => handlePostGraduation()
                  }
                >
                  Pós-Graduação{" "}
                  {open ? (
                    <ChevronUpIcon className="w-5 h-5" />
                  ) : (
                    <ChevronDownIcon className="w-5 h-5" />
                  )}
                </span>
              )}
            </Dropdown.Trigger>
            <Dropdown.Menu className="bg-[#000b28] text-white border-none overflow-scroll max-h-[300px]">
              {postGraduation.map((course) => (
                <Dropdown.Item className="hover:bg-slate-200 hover:bg-opacity-55">
                  <Link to={`/course/${course.slug}`}>{course.title}</Link>
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown placement="top">
            <Dropdown.Trigger>
              {/* @ts-ignore */}
              {({ open }) => (
                <span className="text-right text-[14px] font-medium uppercase text-white cursor-pointer hover:text-opacity-70 transition-all duration-300 ease-in-out flex gap-4">
                  Cursos{" "}
                  {open ? (
                    <ChevronUpIcon className="w-5 h-5" />
                  ) : (
                    <ChevronDownIcon className="w-5 h-5" />
                  )}
                </span>
              )}
            </Dropdown.Trigger>
            <Dropdown.Menu className="bg-[#000b28] text-white border-none overflow-scroll max-h-[300px]">
              {coursesFiltered.map((course) => (
                <Dropdown.Item className="hover:bg-slate-200 hover:bg-opacity-55">
                  <Link to={`/course/${course.slug}`}>{course.title}</Link>
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
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
              className="text-right text-2xl font-medium uppercase text-white cursor-pointer hover:text-opacity-70 transition-all duration-300 ease-in-out flex gap-4 items-center justify-end"
              onClick={() => {
                if (postGraduation?.length > 0) {
                  setIsPostGraduationOpen((prev) => !prev);
                } else {
                  handlePostGraduation();
                  setIsMenuOpen(false);
                }
              }}
            >
              {isCourseOpen ? (
                <ChevronUpIcon className="w-5 h-5" />
              ) : (
                <ChevronDownIcon className="w-5 h-5" />
              )}
              Pós-Graduação
            </span>
            <span
              className="text-right text-2xl font-medium uppercase text-white cursor-pointer hover:text-opacity-70 transition-all duration-300 ease-in-out flex gap-4 items-center justify-end"
              onClick={() => {
                if (coursesFiltered?.length > 0) {
                  setIsCourseOpen((prev) => !prev);
                } else {
                  handleCourse();
                  setIsMenuOpen(false);
                }
              }}
            >
              {isCourseOpen ? (
                <ChevronUpIcon className="w-5 h-5" />
              ) : (
                <ChevronDownIcon className="w-5 h-5" />
              )}
              Cursos
            </span>
            <div
              className={cn(
                "flex-col gap-6 max-h-[5rem] overflow-scroll",
                isCourseOpen ? "flex" : "hidden"
              )}
            >
              {coursesFiltered.map((course) => (
                <Link
                  to={`/course/${course.slug}`}
                  className="text-right text-xs font-medium uppercase text-white cursor-pointer hover:text-opacity-70 transition-all duration-300 ease-in-out"
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                >
                  {course.title}
                </Link>
              ))}
            </div>
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
