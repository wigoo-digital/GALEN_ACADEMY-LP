import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Flex,
} from "@chakra-ui/react";
import { CardBenefit } from "@components/CardBenefit";
import { OurTeam } from "@components/OurTeam";
import { RDFormComponent } from "@components/RDFormComponent";
import { RelationCourse } from "@components/RelationCourse";
import { courses } from "@data/courses";
import {
  ChevronRightIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";

const Rating = ({ rating, qtd }: { rating: number; qtd: string }) => {
  return (
    <div className="xl:text-white flex flex-row align-center gap-x-1">
      {[...Array(5)].map((_, i) => (
        <StarIcon
          key={i}
          className={`h-5 w-5 ${rating > i ? "" : "opacity-50"}`}
        />
      ))}
      <span className="text-sm">{qtd} Avaliações</span>
    </div>
  );
};

const CoursePage: React.FC<PageProps> = () => {
  const [showMore, setShowMore] = React.useState(false);
  const configRelationCourse = {
    spaceBetween: 10,
    slidesPerView: 3,
    breakpoints: {
      320: {
        slidesPerView: 1.2,
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
        slidesPerView: 2,
        spaceBetween: 32,
      },
    },
  };
  const course = courses[0];

  return (
    <main>
      <div className="flex-shrink-0 bg-primary_black bg-[url('../images/hero.svg')] bg-cover bg-[center]">
        <Header />

        <div
          className=" flex w-full items-center justify-center"
          data-aos="fade-in"
        >
          <div className="mt-11 h-[16rem] lg:h-[20rem] flex w-full max-w-8xl flex-col gap-[54px]" />

          <div className="absolute top-0 w-full h-full ">
            <div className="grid grid-cols-1 px-5 xl:grid-cols-2 max-w-8xl mx-auto">
              {/* CONTEÚDO ESQUERDO ./*/}
              <div className="order-last xl:order-first flex flex-col gap-y-3 h-full py-10">
                <div className="hidden xl:flex flex-col gap-y-3">
                  <Rating rating={4} qtd={"1.400"} />

                  <div className="flex flex-row xl:text-white">
                    <div className="bg-[#ffffff30] text-sm flex gap-x-5 px-5 py-2 rounded-full items-center">
                      <span>{course?.category}</span>
                      <span className="opacity-50">|</span>
                      <span className="flex items-center gap-x-3">
                        {course?.type}
                      </span>

                      <ChevronRightIcon className="h-4 w-4" />
                    </div>
                  </div>

                  <div className="flex flex-col xl:text-white">
                    <h1 className="title text-4xl md:leading-[4rem] py-5 md:text-[3.5rem] font-bold  max-w-lg">
                      {course?.title}
                    </h1>
                  </div>

                  <div className="bg-white shadow-xl rounded-lg flex flex-col py-5 gap-y-2 items-center">
                    <span className="text-[1rem] font-medium text-primary_black">
                      Parceiros do Curso
                    </span>
                    <div className="grid grid-cols-2 gap-x-3 mt-3 px-5 sm:px-0">
                      {course?.partners?.map((partner, index) => (
                        <img
                          src={partner}
                          alt="partner"
                          className="max-w-40 h-20 object-cover object-center"
                          key={index}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                {/* ----------------- CONTEÚDO ----------------*/}

                {/*  Para quem é o curso? */}
                <div className="flex flex-col mt-20">
                  <div className="flex flex-col gap-y-3 border-b-2 pb-5">
                    <span className="text-primary_blue font-medium text-lg">
                      Para quem é o curso?
                    </span>
                    <p className="font-[1rem] text-neutral-800">
                      {course?.whoIsItFor}
                    </p>
                  </div>
                </div>

                {/*  Modalidade */}
                <div className="flex flex-col mt-10">
                  <div className="flex flex-col gap-y-3 border-b-2 pb-5">
                    <span className="text-primary_blue font-medium text-lg">
                      Modalidade
                    </span>
                    <p className="font-[1rem] text-neutral-800">
                      {course?.modality}
                    </p>
                  </div>
                </div>

                {/* Outras Informações */}
                <div className="flex flex-col mt-10">
                  <div className="flex flex-col gap-y-3 pb-5">
                    <span className="text-primary_blue font-medium text-lg">
                      Outras Informações
                    </span>
                    <div className="border-2 p-5 rounded-xl">
                      <span className="text-[1rem] text-neutral-500">
                        Cordenação geral
                      </span>
                      <div className="flex flex-row gap-x-5">
                        {course?.coordinator?.map((name, index) => (
                          <span
                            className="font-bold text-[1rem] text-neutral-800"
                            key={index}
                          >
                            {name}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="border-2 p-5 rounded-xl">
                      <span className="text-[1rem] text-neutral-500">
                        Carga horária:
                      </span>
                      <div className="flex flex-row gap-x-5">
                        <span className="font-bold text-[1rem] text-neutral-800">
                          {course?.duration}
                        </span>
                      </div>
                    </div>

                    <div className="border-2 p-5 rounded-xl">
                      <span className="text-[1rem] text-neutral-500">
                        Investimento:
                      </span>
                      <div className="flex flex-row gap-x-5">
                        <span className="font-normal max-w-sm text-[1rem] text-neutral-800 [&>strong]:text-primary_blue">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: course?.investment,
                            }}
                          />
                        </span>
                      </div>
                    </div>

                    <div className="border-2 p-5 rounded-xl">
                      <span className="text-[1rem] text-neutral-500">
                        Tempo de acesso ao curso:
                      </span>
                      <div className="flex flex-row gap-x-5">
                        <span className="font-bold text-[1rem] text-neutral-800">
                          {course?.accessTime}
                        </span>
                      </div>
                    </div>

                    <a
                      href="#"
                      className="hover:opacity-70 mt-5 w-full py-4 flex flex-row justify-center rounded-full text-white text-md bg-[#4242FF16]"
                    >
                      <span className="text-primary_blue font-bold ">
                        Garantir minha vaga
                      </span>
                    </a>
                  </div>
                </div>

                {/* Sobre o curso */}
                <div className="flex flex-col gap-y-5 bg-[#20202007] rounded-lg px-8 py-8">
                  <span className="text-3xl font-bold text-neutral-950">
                    Sobre o curso
                  </span>
                  <p className="text-[1rem]">
                    <span
                      className="line-clamp-2 data-[showMore=true]:line-clamp-none transition-all duration-300 ease-in-out"
                      data-showMore={showMore}
                    >
                      {course?.aboutCourse}
                    </span>
                    <span
                      className="font-bold text-primary_blue cursor-pointer"
                      onClick={() => setShowMore((prev) => !prev)}
                    >
                      {showMore ? "Mostrar menos" : "Mostrar mais"}
                    </span>
                  </p>
                </div>

                {/* Principais benefícios */}
                <span className="text-3xl mt-20 mb-5 font-bold text-neutral-950">
                  Principais benefícios
                </span>

                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  {course?.benefits?.map((benefit, index) => (
                    <CardBenefit
                      title={benefit.title}
                      description={benefit.description}
                      iconUrl={benefit.iconUrl}
                      key={index}
                    />
                  ))}
                </div>

                {/* Grade Currícular */}
                <span className="text-3xl mt-20 mb-5 font-bold text-neutral-950">
                  Grade Currícular
                </span>
                <Accordion allowToggle>
                  {course?.modules?.map((module, index) => (
                    <AccordionItem key={index}>
                      {({ isExpanded }) => (
                        <>
                          <AccordionButton
                            className={
                              isExpanded
                                ? "border-t-2 border-primary_blue py-5"
                                : "border-t-2 border-neutral-100 py-5"
                            }
                          >
                            <Flex
                              direction={"row"}
                              alignItems={"center"}
                              columnGap={15}
                              as="span"
                              flex="1"
                              textAlign="left"
                            >
                              <img
                                width={30}
                                height={30}
                                src={module.imageURl}
                                alt={module.title}
                              />
                              <span
                                className={
                                  isExpanded
                                    ? "text-primary_blue text-lg font-medium"
                                    : "text-primary_black text-lg font-medium"
                                }
                              >
                                {module.title}
                              </span>
                            </Flex>
                            <AccordionIcon />
                          </AccordionButton>

                          <AccordionPanel className="mb-5" pb={4}>
                            <div className="w-[553px] h-[127px] pl-[72px] flex-col justify-start items-start gap-4 inline-flex">
                              <div className="justify-start items-end gap-3 inline-flex">
                                <div className="text-neutral-900 text-base font-normal font-title">
                                  {module.subTitle}
                                </div>
                                <div className="text-slate-500 text-base font-medium font-display">
                                  -
                                </div>
                                <div className="justify-start items-end gap-2 flex">
                                  <div className="text-zinc-400 text-base font-normal font-display">
                                    {module?.subModules?.length} aulas
                                  </div>
                                  <div className="text-zinc-400 text-sm font-normal font-display">
                                    •
                                  </div>
                                  <div className="text-zinc-400 text-base font-normal font-display">
                                    {module?.duration}
                                  </div>
                                </div>
                              </div>
                              <div className="w-[357px] h-[0px] border border-neutral-100"></div>
                              <div className="self-stretch h-[72px] flex-col justify-start items-start gap-2 flex">
                                {module?.subModules?.map((subModule, index) => (
                                  <div
                                    className="self-stretch justify-start items-center gap-2 inline-flex"
                                    key={index}
                                  >
                                    {" "}
                                    <div className="text-zinc-400 text-lg font-normal font-['Inter'] leading-loose">
                                      {module?.id}.{subModule.id}
                                    </div>
                                    <div className="text-zinc-700 text-lg font-normal font-display leading-loose">
                                      {subModule.title}
                                    </div>
                                    <div className="text-zinc-400 text-sm font-normal font-display">
                                      •
                                    </div>
                                    <div className="text-zinc-400 text-lg font-normal font-['Inter'] leading-loose">
                                      {subModule.duration}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </AccordionPanel>
                        </>
                      )}
                    </AccordionItem>
                  ))}
                </Accordion>

                <span className="text-3xl mt-20 mb-5 font-bold text-neutral-950">
                  Nossa Equipe
                </span>

                <OurTeam
                  doctors={course?.ourTeam}
                  breakpoint={{
                    320: {
                      slidesPerView: 1.2,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 2.4,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 2.6,
                      spaceBetween: 32,
                    },
                  }}
                />

                <span className="text-3xl mt-20 mb-5 font-bold text-neutral-950">
                  Cursos Relacionados
                </span>

                <div className="w-full ">
                  <Swiper {...configRelationCourse}>
                    {course?.relatedCourses?.map((doctor, index) => (
                      <SwiperSlide key={index}>
                        <RelationCourse
                          category={doctor.category}
                          title={doctor.title}
                          type={doctor.type}
                          modality={doctor.modality}
                          investment={doctor.investment}
                          duration={doctor.duration}
                          coordinator={doctor.coordinator}
                          key={index}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                <span className="text-3xl mt-20 mb-5 font-bold text-neutral-950">
                  Perguntas Frequentes
                </span>

                <Accordion allowToggle>
                  {course?.commonQuetions?.map((question, index) => (
                    <AccordionItem key={index}>
                      {({ isExpanded }) => (
                        <>
                          <AccordionButton
                            className={
                              isExpanded
                                ? "border-t-2 border-primary_blue py-5"
                                : "border-t-2 border-neutral-100 py-5"
                            }
                          >
                            <Flex
                              direction={"row"}
                              alignItems={"center"}
                              columnGap={15}
                              as="span"
                              flex="1"
                              textAlign="left"
                            >
                              <QuestionMarkCircleIcon className="h-6 w-6 text-primary_blue" />
                              <span className="text-primary_blue text-lg font-medium">
                                {question.question}
                              </span>
                            </Flex>
                            <AccordionIcon />
                          </AccordionButton>

                          <AccordionPanel className="mb-5" pb={4}>
                            {question.answer}
                          </AccordionPanel>
                        </>
                      )}
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* FORMULÁRIO DIREITA */}
              <div className="bg-white max-h-[55rem] w-full sticky top-3 right-0  lg:max-w-[466px] shadow-2xl lg:ml-auto rounded-xl">
                <div className="p-1">
                  <div className="w-full flex gap-y-3 items-center flex-col bg-neutral-100 px-10 py-6 text-center lg:text-start">
                    <span className="text-sm font-[500] text-neutral-700 [&>strong]:text-xl [&>strong]:text-neutral-950">
                      <strong>
                        {Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(950)}
                      </strong>{" "}
                      no cartão ou{" "}
                      <strong>
                        {Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(850)}
                      </strong>{" "}
                      no pix à vista
                    </span>
                    <span className="rounded-full font-bold bg-crimson px-3 py-1 w-fit text-white text-[0.75rem]">
                      {course?.discount} de desconto
                    </span>
                  </div>
                  <div className="flex flex-col px-10 py-3">
                    <span className="text-2xl mb-3 font-bold text-primary_black">
                      Preencha seus dados
                    </span>

                    <span className="text-sm font-normal text-neutral-600">
                      Complete com seus dados para garantir sua vaga na formação
                      de <strong>Capacitação em Leitura Cientiífica</strong>
                    </span>
                  </div>
                  <RDFormComponent id="formulario-boas-praticas-de-telemedicina-e-telessaude-c36089f42acbc712df59" />
                </div>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
};

export default CoursePage;

export const Head: HeadFC = () => <title>Curso</title>;
