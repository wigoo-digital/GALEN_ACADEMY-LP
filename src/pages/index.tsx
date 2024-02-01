import { CardCoodernation } from '@components/CardCoodernation';
import { CardCourse } from '@components/CardCourse';
import { CardSpeciality } from '@components/CardSpeciality';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import type { HeadFC, PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { StartIcon } from '../icons/start';

const IndexPage: React.FC<PageProps> = () => {
  const swiperRef = React.useRef<any>(null);

  const configSwiper = {
    spaceBetween: 10,
    slidesPerView: 5.4,
    breakpoints: {
      320: {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2.2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2.4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3.6,
        spaceBetween: 50,
      },
      1280: {
        slidesPerView: 4.6,
        spaceBetween: 60,
      },
      1440: {
        slidesPerView: 5.4,
        spaceBetween: 70,
      },
    },
  };

  const configSpecialities = {
    spaceBetween: 10,
    slidesPerView: 3,
    breakpoints: {
      320: {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2.2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2.4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  };

  const configDoctors = {
    spaceBetween: 10,
    slidesPerView: 3,
    breakpoints: {
      320: {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2.2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2.4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4.4,
        spaceBetween: 50,
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

  return (
    <main className="">
      <div className="flex-shrink-0 bg-primary_black bg-[url('../images/hero.svg')] bg-cover bg-center">
        <Header />
        <div
          className=" flex w-full items-center justify-center"
          data-aos="fade-in"
        >
          <div className="mt-11 flex w-full max-w-8xl flex-col gap-[54px]">
            <h1 className="max-w-[762px] font-title text-[72px] font-semibold leading-[90px] text-white">
              Facilitamos a Jornada do conhecimento.
            </h1>
            <p className="w-[491px] font-display text-[14px] font-medium text-white opacity-90">
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
              disableOnInteraction: false,
            }}
            speed={3000}
          >
            {Array.from({ length: 10 }).map((_, index) => (
              <SwiperSlide key={index}>
                <CardCourse />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Sobre nós */}
      <div
        className="mb-[8rem] mt-[8rem] flex flex-col items-center justify-center"
        data-aos="zoom-in"
      >
        <div className="flex  flex-col gap-6">
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
      <div className="flex justify-center">
        <div className="max-w-[70.25rem] bg-[#F7F7F8] bg-[url('../images/shape1.svg')] bg-left bg-no-repeat px-[5.88rem] pb-[5.88rem] pt-[7rem]">
          <div className="flex items-center justify-center">
            <div className="flex w-full max-w-[46rem] flex-col items-center justify-center gap-7">
              <div className="flex gap-2">
                <StartIcon />
                <span className="text-center font-display text-lg font-medium text-indigo-600">
                  PÓS-GRADUAÇÃO
                </span>
                <StartIcon />
              </div>
              <h1 className="leading-20 text-center font-title text-6xl font-medium text-slate-950">
                Capacitação em Leitura Científica
              </h1>
              <p className="text-center font-display text-base font-normal leading-relaxed text-zinc-700">
                {' '}
                O curso "Leitura Científica" é uma oportunidade imperdível para
                os profissionais da saúde que desejam compreender e interpretar
                todas as informações de um artigo científico. Foi criado com uma
                abordagem prática para facilitar o entendimento dos principais
                conceitos de bioestatística e medicina baseada em evidência...
              </p>

              <div className="mt-12 flex w-full items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    className="h-16 w-16 rounded-full"
                    src="https://via.placeholder.com/64x64"
                  />
                  <div className="flex flex-col">
                    <span className="font-display text-xl font-bold leading-7 text-slate-950">
                      Dr. Remo Furtado
                    </span>
                    <span className="font-display text-lg font-normal leading-snug text-zinc-600">
                      Coordenador
                    </span>
                  </div>
                </div>

                <div className="w-9  rotate-90 border border-gray-300" />

                <div className="flex flex-col items-center">
                  <span className="font-['Space Grotesk'] text-xl font-bold leading-7 text-slate-950">
                    R$ 807,50
                  </span>
                  <span className="font-['Space Grotesk'] text-lg font-normal leading-snug text-zinc-600">
                    Valor à vista
                  </span>
                </div>

                <div className="w-9  rotate-90 border border-gray-300" />

                <div className="flex flex-col">
                  <span className="font-display text-xl font-bold leading-7 text-slate-950">
                    EAD
                  </span>
                  <span className="font-display font-normal leading-snug text-zinc-600 *:text-lg">
                    Modalidade do curso
                  </span>
                </div>
              </div>

              <div className="mt-12 inline-flex h-14 w-96 items-center justify-center gap-2  rounded-full bg-indigo-600 px-6 py-4">
                <span className="font-display text-lg font-medium leading-relaxed text-white">
                  Saiba mais
                </span>
              </div>
            </div>
          </div>

          {/* cursos */}

          <div data-aos="zoom-in">
            <div className="mt-32 inline-flex h-16 w-full items-center justify-between">
              <span className="max-w-[32rem] font-title text-3xl font-bold leading-9 text-slate-950">
                Descubra nossos Cursos de Saúde e Pesquisa para Avançar na sua
                Carreira
              </span>
              <div className="flex items-start justify-start gap-4">
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

            <div className="mt-14">
              <Swiper
                {...configSpecialities}
                onSlideChange={() => console.log('slide change')}
                ref={swiperRef}
              >
                {Array.from({ length: 10 }).map((_, index) => (
                  <SwiperSlide key={index}>
                    <CardSpeciality />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      {/* Coordenadores */}
      <div className="flex justify-center" data-aos="zoom-in">
        <div className="mt-32 w-full max-w-[70.25rem]">
          <h1 className="w-full text-center font-title text-3xl font-semibold leading-9 text-slate-950">
            Nossos Coordenadores
          </h1>
          <div className="pt-12">
            <Swiper {...configDoctors}>
              {Array.from({ length: 10 }).map((_, index) => (
                <SwiperSlide key={index}>
                  <CardCoodernation />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* Beneficios */}
      <div className="mt-32">
        <div className="mx-auto flex  items-center justify-center bg-[#F7F7F8] bg-[url('../images/shape2.svg')] bg-left-bottom bg-no-repeat px-[9.75rem] py-[4.5rem]">
          <div className="flex max-w-[70.5rem]" data-aos="zoom-in">
            <span className="max-w-[22.5rem] font-title text-4xl font-medium leading-10 text-slate-950">
              Excelência e Inovação em Nossa Educação em Saúde
            </span>
            <div className="ml-[7.5rem] grid grid-cols-2 gap-x-28 gap-y-20">
              {Array.from({ length: 7 }).map((_, index) => (
                <div className="flex w-64 flex-col items-start justify-start gap-2.5">
                  <div className="flex items-center justify-center gap-2 rounded-3xl bg-indigo-600 p-3">
                    <div className="relative h-8 w-8">
                      <div className="absolute left-0 top-0 h-8 w-8 bg-zinc-300">
                        {/* Icon */}
                      </div>
                    </div>
                  </div>
                  <div className="text-center font-title text-xl font-semibold leading-7 text-slate-950">
                    Certificados
                  </div>
                  <div className="line-clamp-3 max-w-[14rem] self-stretch font-display text-base font-normal leading-relaxed text-zinc-700">
                    Pós-graduações registradas no MEC (Ministério da Educação).
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Curso de curta duração */}

      <div className="mt-[6.5rem]" data-aos="zoom-in">
        <div className="flex flex-col items-center justify-start gap-8">
          <div className="flex flex-col items-start justify-start gap-2">
            <div className="self-stretch text-center font-display text-lg font-medium text-indigo-600">
              Curso de curta duração
            </div>
            <div className="w-96 text-center font-title text-4xl font-medium leading-10 text-slate-950">
              Pesquisa Clínica
            </div>
          </div>

          <div className="relative rounded-lg">
            <StaticImage
              className="left-0 top-0 h-full w-full rounded-lg"
              src="../images/handsDoctor.svg"
              alt="image"
            />
            <div className="absolute left-0 top-0 h-full w-full rounded-lg bg-gradient-to-r from-indigo-600 to-black opacity-50 mix-blend-hard-light" />

            <div className="absolute left-[40px] top-[349px] flex flex-col items-start justify-start gap-4">
              <div className="w-96 font-title text-2xl font-semibold text-white">
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

      {/*  */}

      <div className="mt-20">
        <div className="bg-neutral-100 bg-[url('../images/shape3.svg')] bg-cover bg-no-repeat py-32">
          <div
            data-aos="zoom-in"
            className="flex flex-col items-center justify-start gap-12 "
          >
            <div className="flex flex-col items-center justify-start gap-4">
              <div className="w-96 text-center font-title text-6xl font-medium leading-[4rem] text-indigo-600">
                Amplie Seus Horizontes na Saúde
              </div>
            </div>
            <div className="flex items-center justify-end gap-[8px] rounded-[76px] bg-[#FEDAC2] px-10 py-8 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#FEDAC2]">
              <span className="text-xl font-medium uppercase text-primary_black">
                Comece sua jornada
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer  */}

      <div className="mt-[9rem]">
        <Footer />
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
