import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoYoutube,
} from "react-icons/io";

export const Footer = () => {
  return (
    <div className="bg-indigo-600">
      <div
        // data-aos="zoom-in"
        className="flex lg:flex-row flex-col w-full items-center justify-between px-5 lg:px-40 py-16"
      >
        <div className="flex items-center justify-center lg:flex-row lg:justify-start gap-5 lg:gap-2 flex-col text-center lg:text-start">
          <StaticImage
            src="../images/logo.svg"
            alt="Galen Academy"
            width={400}
          />
          <div className="font-dosplay text-base lg:text-lg font-normal leading-7 text-white ml-0 lg:ml-4">
            © Galen Academy. Todos os direitos reservados.
          </div>
          <div className="font-dosplay text-base lg:text-lg font-medium leading-7 text-white">
            Termos de uso
          </div>
        </div>

        <div className="flex items-start justify-start gap-6 mt-6 lg:mt-0">
          <Link
            to="https://www.linkedin.com/company/galen-academy/"
            target="_blank"
          >
            <div className="flex items-center justify-center gap-2 p-2">
              <IoLogoLinkedin size={24} color="#fff" />
            </div>
          </Link>
          <Link to="https://www.facebook.com/galen.academy" target="_blank">
            <div className="flex items-center justify-center gap-2 p-2">
              <IoLogoFacebook size={24} color="#fff" />
            </div>
          </Link>
          <Link to="https://www.instagram.com/galenacademy/" target="_blank">
            <div className="flex items-center justify-center gap-2 p-2">
              <IoLogoInstagram size={24} color="#fff" />
            </div>
          </Link>
          <Link
            to="https://www.youtube.com/channel/UCYsSLQJK6QHQMhcdF6YcCYg?sub_confirmation=1"
            target="_blank"
          >
            <div className="flex items-center justify-center gap-2 p-2">
              <IoLogoYoutube size={24} color="#fff" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
