import { CardCourse } from "@components/CardCourse";
import { CardSpeciality } from "@components/CardSpeciality";
import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { OurTeam } from "@components/OurTeam";
import { Benefits } from "@data/benefits";
import { courses } from "@data/courses";
import { doctors } from "@data/doctors";
import { highlight_course } from "@data/highlight-course";
import { useMenu } from "@hooks/useMenu";
import { useLocation } from "@reach/router";
import { Link, type HeadFC, type PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { StartIcon } from "src/icons/start";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const IndexPage: React.FC<PageProps> = () => {
  const swiperRef = React.useRef<any>(null);
  const [showAll, setShowAll] = React.useState(false);
  const {
    aboutRef,
    courseRef,
    postGraduationRef,
    handleAbout,
    handlePostGraduation,
    handleCourse,
  } = useMenu();
  const location = useLocation();

  const configSwiper = {
    spaceBetween: 10,
    slidesPerView: 5.4,
    breakpoints: {
      320: {
        slidesPerView: 1.12,
        spaceBetween: 0,
      },
      480: {
        slidesPerView: 2.5,
        spaceBetween: 32,
      },
      640: {
        slidesPerView: 2.2,
        spaceBetween: 32,
      },
      768: {
        slidesPerView: 2.4,
        spaceBetween: 32,
      },
      1024: {
        slidesPerView: 3.6,
        spaceBetween: 32,
      },
      1280: {
        slidesPerView: 4.6,
        spaceBetween: 32,
      },
      1440: {
        slidesPerView: 5.4,
        spaceBetween: 32,
      },
    },
  };

  const configSpecialities = {
    spaceBetween: 10,
    slidesPerView: 3,
    breakpoints: {
      320: {
        slidesPerView: 1.4,
        spaceBetween: 32,
      },
      480: {
        slidesPerView: 2.5,
        spaceBetween: 32,
      },
      640: {
        slidesPerView: 2.2,
        spaceBetween: 32,
      },
      768: {
        slidesPerView: 2.4,
        spaceBetween: 32,
      },
      1024: {
        slidesPerView: courses.length >= 3 ? 3 : 2,
        spaceBetween: 32,
      },
    },
  };

  const handleNext = () => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slidePrev();
  };

  React.useEffect(() => {
    const hash = location.hash;

    switch (hash) {
      case "#pos-graduacao":
        handlePostGraduation();
        break;
      case "#cursos":
        handleCourse();
        break;
      case "#quem-somos":
        handleAbout();
        break;
      default:
        break;
    }
  }, [location]);

  return (
    <main>
      <div className="flex-shrink-0 bg-primary_black bg-[url('../images/hero.svg')] bg-cover bg-center ">
        <Header />
        <div
          className=" flex w-full items-center justify-center px-6"
          data-aos="fade-in"
        >
          <div className="mt-11 flex w-full max-w-8xl flex-col gap-[54px]">
            <h1 className="max-w-[762px] font-title text-[44px] lg:text-[72px] font-semibold leading-[48.4px] lg:leading-[90px] text-white">
              Facilitamos a Jornada do conhecimento.
            </h1>
            <p className="max-w-[491px] font-display text-[14px] font-medium text-white opacity-90">
              Eleve sua prática clínica com nossos cursos em saúde,
              desenvolvidos pelo BCRI, um dos maiores institutos de Pesquisa
              Clínica da América Latina, em colaboração com docentes de
              renomados centros de educação como a Duke University, Harvard e
              Mount Sinai.
            </p>
          </div>
        </div>
        <div className=" mt-[3.38rem]" data-aos="fade-in">
          <Swiper
            {...configSwiper}
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: true,
            }}
            speed={3000}
          >
            {courses.map((_, index) => (
              <SwiperSlide key={index}>
                <CardCourse
                  type={_.type}
                  modality={_.category}
                  title={_.title}
                  description={_.aboutCourse}
                  imageURL={_.imageUrl}
                  slug={_.slug}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Sobre nós */}
      <div
        className="mb-[8rem] mt-[8rem] flex flex-col items-center justify-center px-6"
        data-aos="zoom-in"
      >
        <div className="flex  flex-col gap-6" ref={aboutRef}>
          <span className="font-display  text-lg font-medium text-indigo-600">
            SOBRE NÓS
          </span>
          <h1 className="max-w-[30rem] font-title text-4xl font-medium leading-10 text-slate-950">
            Transformando a Saúde através da Educação, Uma Mente de Cada Vez
          </h1>
          <p className="max-w-[40rem] font-display text-base font-normal leading-relaxed text-zinc-700">
            Nossa equipe de especialistas traz décadas de experiência clínica e
            acadêmica. Fundamos a Galen Academy para resolver os desafios da
            educação em saúde que nós mesmos enfrentamos. Em verdade, é a
            solução que sempre desejamos oferecer aos profissionais da saúde.
          </p>
        </div>
      </div>

      {/* Pós Graduação */}
      <div className="lg:flex lg:justify-center" ref={postGraduationRef}>
        <div className="max-w-[70.25rem] bg-[#F7F7F8] bg-[url('../images/shape1.svg')] bg-left bg-no-repeat px-6 lg:px-[5.88rem] pb-12 lg:pb-[5.88rem] pt-12 lg:pt-[7rem]">
          <div className="flex items-center justify-center " data-aos="zoom-in">
            <div className="flex w-full max-w-[46rem] flex-col items-center justify-center gap-7">
              <div className="flex gap-2">
                <StartIcon />
                <span className="text-center font-display text-lg font-medium text-indigo-600 uppercase">
                  {highlight_course.type}
                </span>
                <StartIcon />
              </div>
              <h1 className="leading-20 text-center font-title text-3xl lg:text-6xl font-medium text-slate-950">
                {highlight_course.title}
              </h1>
              <p className="text-center font-display text-base font-normal leading-relaxed text-zinc-700">
                {highlight_course.description}
              </p>

              <div className="mt-12 flex w-full lg:items-center justify-between flex-col lg:flex-row">
                <div className="flex items-center gap-2 w-full">
                  <img
                    className="h-16 w-16 rounded-full object-cover"
                    src={highlight_course.coordenadorImageURL}
                  />
                  <div className="flex flex-col ml-4">
                    <span className="font-display text-xl font-bold leading-7 text-slate-950 min-w-[10rem] ">
                      {highlight_course.coordenadorName}
                    </span>
                    <span className="font-display text-lg font-normal leading-snug text-zinc-600">
                      {highlight_course.coordenadorDescription}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between w-full mt-4">
                  <div className="w-9 rotate-90 border border-gray-300 hidden lg:block" />

                  <div className="flex flex-col items-center justify-center">
                    <span className="font-display text-xl font-bold leading-7 text-slate-950">
                      {highlight_course.price}
                    </span>
                    <span className="font-display text-lg font-normal leading-snug text-zinc-600">
                      Valor à vista
                    </span>
                  </div>

                  <div className="w-9 rotate-90 border border-gray-300" />

                  <div className="flex flex-col ">
                    <span className="font-display text-xl font-bold leading-7 text-slate-950">
                      {highlight_course.modality}
                    </span>
                    <span className="font-display font-normal leading-snug text-zinc-600 *:text-lg">
                      Modalidade do curso
                    </span>
                  </div>
                </div>
              </div>

              <Link
                to={`/course/${highlight_course.slug}`}
                className="w-full justify-center items-center flex"
              >
                <div className="mt-12 inline-flex h-14 max-w-96 w-full items-center justify-center gap-2 rounded-full bg-indigo-600 px-6 py-4 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer ">
                  <span className="font-display text-lg font-medium leading-relaxed text-white">
                    Saiba mais
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* cursos */}
          <div
            data-aos="zoom-in"
            id="cursos"
            className="max-w-full"
            ref={courseRef}
          >
            <div className="mt-32 inline-flex h-16 w-full items-center justify-between">
              <span className="max-w-[32rem] font-title text-2xl lg:text-3xl font-bold leading-9 text-slate-950">
                Descubra nossos Cursos de Saúde e Pesquisa para Avançar na sua
                Carreira
              </span>
              <div className="items-start justify-start gap-4 hidden lg:flex">
                <div
                  className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-neutral-100 p-3 transition-all duration-300 ease-in-out hover:bg-neutral-200"
                  onClick={handlePrev}
                >
                  <div className="flex items-center justify-center">
                    <IoIosArrowBack className="h-4 w-4 text-black" />
                  </div>
                </div>

                <div
                  className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-neutral-100 p-3 transition-all duration-300 ease-in-out hover:bg-neutral-200"
                  onClick={handleNext}
                >
                  <div className="flex items-center justify-center">
                    <IoIosArrowForward className="h-4 w-4 text-black" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-14 h-full w-full">
              <Swiper {...configSpecialities} ref={swiperRef}>
                {courses.map((course, index) => (
                  <SwiperSlide key={index}>
                    <CardSpeciality
                      imageUrl={course.imageUrl}
                      title={course.title}
                      slug={course.slug}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      {/* Coordenadores */}
      <div className="flex justify-center ml-5" data-aos="zoom-in">
        <div className="mt-32 w-full max-w-[70.25rem]">
          <h1 className="w-full text-center font-title text-3xl font-semibold leading-9 text-slate-950 pr-5">
            Nossos Coordenadores
          </h1>
          <OurTeam doctors={doctors} />
        </div>
      </div>

      {/* Beneficios */}
      <div className="mt-32">
        <div className="mx-auto flex  items-center justify-center bg-[#F7F7F8] bg-[url('../images/shape2.svg')] bg-left-bottom bg-no-repeat lg:px-[9.75rem] py-[4.5rem]">
          <div
            className="flex max-w-[70.5rem] flex-col lg:flex-row"
            data-aos="zoom-in"
          >
            <span className="max-w-[22.5rem] font-title text-4xl font-medium leading-10 text-slate-950">
              Excelência e Inovação em Nossa Educação em Saúde
            </span>
            <div className="lg:ml-[7.5rem] flex flex-col items-center lg:grid grid-cols-1 lg:grid-cols-2 gap-x-28 gap-y-20 mt-10 lg:mt-0">
              {Benefits.map(({ Icon, description, title }, index) => (
                <div
                  className="flex w-64 flex-col items-center lg:items-start justify-start gap-2.5 data-[hidden=true]:hidden lg:data-[hidden=true]:flex transition-all duration-300 ease-in-out"
                  data-hidden={index > 2 && !showAll}
                >
                  {/* <div className="flex items-center justify-center gap-2 rounded-3xl bg-indigo-600 p-3">
                    <div className="relative h-8 w-8">
                      <div className="absolute left-0 top-0 h-8 w-8 bg-zinc-300"></div>
                    </div>
                  </div> */}
                  <Icon />
                  <div className="text-center font-title text-xl font-semibold leading-7 text-slate-950 lg:text-left">
                    {title}I
                  </div>
                  <div className="line-clamp-3 lg:max-w-[14rem] self-stretch font-display text-base font-normal leading-relaxed text-zinc-700 text-center lg:text-left">
                    {description}
                  </div>
                </div>
              ))}
              <div
                className="w-80  px-6 py-3 bg-[#FEDAC2] rounded-[76px] shadow justify-center items-center gap-2 inline-flex hover:shadow-lg active:translate-y-1 transition-all duration-300 ease-in-out lg:hidden"
                onClick={() => setShowAll((prev) => !prev)}
              >
                <span>Ver mais</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curso de curta duração */}
      <div className="mt-[6.5rem]" data-aos="zoom-in">
        <div className="flex flex-col items-center justify-start gap-8 px-5 lg:px-0">
          <div className="flex flex-col items-start justify-start gap-2">
            <div className="self-stretch text-center font-display text-lg font-medium text-indigo-600">
              Curso de curta duração
            </div>
            <div className="max-ww-96 text-center font-title text-4xl font-medium leading-10 text-slate-950">
              Pesquisa Clínica
            </div>
          </div>

          <div className="relative rounded-lg h-[40rem] lg:h-full">
            <StaticImage
              className="left-0 top-0 h-full w-full rounded-lg"
              src="../images/Rectangle 9.png"
              alt="image"
            />
            <div className="absolute left-0 top-0 h-full w-full rounded-lg bg-gradient-to-r from-indigo-600 to-black opacity-50 mix-blend-hard-light" />

            <div className="absolute left-[40px] top-[349px] flex flex-col items-start justify-start gap-4">
              <div className="max-w-96 font-title text-2xl font-semibold text-white">
                Capacitação em pesquisa clínica para Profissionais da saúde
              </div>

              <ul className="list-inside list-disc">
                <li className="font-title text-base font-medium leading-normal text-white">
                  Aprofunde-se na criação e gestão de estudos científicos.
                </li>
                <li className="font-title text-base font-medium leading-normal text-white">
                  Interprete e aplique metodologias científicas com precisão.
                </li>
                <li className="font-title text-base font-medium leading-normal text-white">
                  Domine a estatística e aspectos cruciais da pesquisa clínica.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="bg-neutral-100 bg-[url('../images/shape3.svg')] bg-cover bg-no-repeat py-32">
          <div
            data-aos="zoom-in"
            className="flex flex-col items-center justify-start gap-12 px-5"
          >
            <div className="flex flex-col items-center justify-start gap-4">
              <div className="max-w-[66.5rem] text-center font-title text-2xl lg:text-6xl font-medium leading-8 lg:leading-[4rem] text-indigo-600">
                Potencialize seus conhecimentos e impulsione sua carreira.
              </div>
            </div>
            <div
              className="flex items-center justify-end gap-[8px] rounded-[76px] bg-[#FEDAC2] px-10 py-3 lg:py-8 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#FEDAC2] cursor-pointer"
              onClick={handleCourse}
            >
              <span className="text-base lg:text-xl font-medium uppercase text-primary_black">
                Comece sua jornada
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[9rem]">
        <Footer />
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
