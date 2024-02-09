import { navigate } from "gatsby";
import { useRef } from "react";

export const useMenu = () => {
  const postGraduationRef = useRef<HTMLDivElement>(null);
  const courseRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  const handlePostGraduation = () => {
    if (!postGraduationRef.current) {
      return navigate("/#pos-graduacao");
    }
    postGraduationRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleCourse = () => {
    if (!courseRef.current) {
      return navigate("/#cursos");
    }
    courseRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleAbout = () => {
    if (!aboutRef.current) {
      return navigate("/#quem-somos");
    }
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleHome = () => {
    navigate("/");
  };

  return {
    postGraduationRef,
    courseRef,
    handlePostGraduation,
    handleCourse,
    handleAbout,
    aboutRef,
    handleHome,
  };
};
