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
        className="flex lg:flex-row flex-col w-full items-center justify-between px-40 py-16"
      >
        <div className="flex h-7 items-center justify-start gap-2">
          <StaticImage
            src="../images/logo.svg"
            alt="Galen Academy"
            width={200}
          />
          <div className="font-dosplay text-lg font-normal leading-7 text-white">
            © Galen Academy. Todos os direitos reservados.
          </div>
          <div className="font-dosplay text-lg font-medium leading-7 text-white">
            Termos de uso
          </div>
        </div>

        <div className="flex items-start justify-start gap-6">
          <div className="flex items-center justify-center gap-2 p-2">
            <IoLogoLinkedin size={24} color="#fff" />
          </div>
          <div className="flex items-center justify-center gap-2 p-2">
            <IoLogoFacebook size={24} color="#fff" />
          </div>
          <div className="flex items-center justify-center gap-2 p-2">
            <IoLogoInstagram size={24} color="#fff" />
          </div>
          <div className="flex items-center justify-center gap-2 p-2">
            <IoLogoYoutube size={24} color="#fff" />
          </div>
        </div>
      </div>
    </div>
  );
};
