import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import type { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

import { CardBenefit } from "@components/CardBenefit";
import "./styles.css";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex } from "@chakra-ui/react";
import { ChevronRightIcon, StarIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import { courses } from "@data/courses";



const CoursePage: React.FC<PageProps> = () => {


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

                        {
                            courses.slice(0, 1).map((item, index) => (
                                <div className="grid grid-cols-1 px-5 xl:grid-cols-2 max-w-8xl mx-auto" key={index}>

                                    <div className="order-last xl:order-first flex flex-col gap-y-3 h-full py-10">
                                        <div className="hidden xl:flex flex-col gap-y-3">
                                            {/* <div className="xl:text-white flex flex-row align-center gap-x-1">
                                                <StarIcon className="h-5 w-5" />
                                                <StarIcon className="h-5 w-5" />
                                                <StarIcon className="h-5 w-5" />
                                                <StarIcon className="h-5 w-5" />
                                                <StarIcon className="h-5 w-5 opacity-50" />
                                                <span className="text-sm">1,400 Avaliações</span>
                                            </div> */}

                                            <div className="flex flex-row xl:text-white">
                                                <div className="bg-[#ffffff30] text-sm flex gap-x-5 px-5 py-2 rounded-full">
                                                    <span>{item.nome}</span>
                                                    <span className="opacity-50">|</span>
                                                    <span className="flex items-center gap-x-3">
                                                        {item.tipo}
                                                        <ChevronRightIcon className="h-4 w-4" />
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="flex flex-col xl:text-white">
                                                <h1 className="title text-4xl md:leading-[4rem] py-5 md:text-[3.5rem] font-bold  max-w-lg">
                                                    {item.nome}
                                                </h1>
                                            </div>

                                            <div className="bg-white shadow-xl rounded-lg flex flex-col py-5 gap-y-2 items-center">
                                                <span className="text-[1rem] font-medium text-primary_black">
                                                    Parceiros do Curso
                                                </span>
                                                <div className="grid grid-cols-2 gap-x-3 mt-3 px-5 sm:px-0">
                                                    <span className="pr-4 border-r-2">
                                                        <StaticImage
                                                            src="../../images/galen_logo.svg"
                                                            objectFit="contain"
                                                            width={130}
                                                            alt="Galen Academy Logo"
                                                        />
                                                    </span>
                                                    <span>
                                                        <StaticImage
                                                            src="../../images/brci_logo.svg"
                                                            objectFit="contain"
                                                            width={93}
                                                            alt="BRCI Logo"
                                                        />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>


                                        {/*  Conteúdo */}
                                        <div className="flex flex-col mt-20">
                                            <div className="flex flex-col gap-y-3 border-b-2 pb-5">
                                                <span className="text-primary_blue font-medium text-lg">
                                                    Para quem é o curso?
                                                </span>
                                                <p className="font-[1rem] text-neutral-800">
                                                    {item.publico_alvo}
                                                </p>
                                            </div>
                                        </div>


                                        <div className="flex flex-col mt-10">
                                            <div className="flex flex-col gap-y-3 border-b-2 pb-5">
                                                <span className="text-primary_blue font-medium text-lg">
                                                    Objetivo
                                                </span>
                                                <p className="font-[1rem] text-neutral-800">
                                                    {item.objetivo}
                                                </p>
                                            </div>
                                        </div>


                                        <div className="flex flex-col mt-10">
                                            <div className="flex flex-col gap-y-3 pb-5">
                                                <span className="text-primary_blue font-medium text-lg">
                                                    Outras Informações
                                                </span>
                                                <div className="border-2 p-5 rounded-xl">
                                                    <span className="text-[1rem] text-neutral-500">
                                                        Cordenação geral
                                                    </span>
                                                    <div className="flex flex-row flex-wrap gap-x-5 gap-y-1 py-3">
                                                        {item.coordenadores.map((item, index, { length }) => (
                                                            <div className="flex flex-row gap-x-5">
                                                                <span className="font-bold text-[1rem] text-neutral-800" key={index}>
                                                                    {item}
                                                                </span>
                                                                <span className={index + 1 === length ? "hidden" : ""}>
                                                                    •
                                                                </span>
                                                            </div>
                                                        ))}

                                                    </div>
                                                </div>

                                                <div className="border-2 p-5 rounded-xl">
                                                    <span className="text-[1rem] text-neutral-500">
                                                        Carga horária:
                                                    </span>
                                                    <div className="flex flex-row gap-x-5">
                                                        <span className="font-bold text-[1rem] text-neutral-800">
                                                            {item.grade_curricular.carga_horaria}
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="border-2 p-5 rounded-xl">
                                                    <span className="text-[1rem] text-neutral-500">
                                                        Investimento:
                                                    </span>
                                                    <div className="flex flex-row gap-x-5">
                                                        <span className="font-normal max-w-sm text-[1rem] text-neutral-800 [&>strong]:text-primary_blue">
                                                            <strong>R${item.valor?.parcelado_12x.valor_parcela}</strong> (em até 12x sem juros no
                                                            cartão de crédito) ou <strong>R${item.valor?.avista.valor}</strong> (pix à
                                                            vista – {item.valor?.avista.desconto_percentual}% de desconto)
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="border-2 p-5 rounded-xl">
                                                    <span className="text-[1rem] text-neutral-500">
                                                        Tempo de acesso ao curso:
                                                    </span>
                                                    <div className="flex flex-row gap-x-5">
                                                        <span className="font-bold text-[1rem] text-neutral-800">
                                                            {item.grade_curricular.duracao}
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


                                        <div className="flex flex-col gap-y-5 bg-[#20202007] rounded-lg px-8 py-8">
                                            <span className="text-3xl font-bold text-neutral-950">
                                                Sobre o curso
                                            </span>
                                            <p className="text-[1rem]">
                                                A estatística desempenha um papel fundamental na coleta,
                                                apresentação, análise e interpretação de dados em diversas
                                                áreas do conhecimento. Quando aplicada ao campo biológico,
                                                ela se transforma em bioestatística, uma...{" "}
                                                <span className="font-bold text-primary_blue">
                                                    Continuar lendo
                                                </span>
                                            </p>
                                        </div>


                                        <span className="text-3xl mt-20 mb-5 font-bold text-neutral-950">
                                            Principais benefícios
                                        </span>
                                        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                                            <CardBenefit />
                                            <CardBenefit />
                                            <CardBenefit />
                                            <CardBenefit />
                                            <CardBenefit />
                                        </div>


                                        {item.grade_curricular.modulos && <>
                                            <span className="text-3xl mt-20 mb-5 font-bold text-neutral-950">
                                                Grade Currícular
                                            </span>
                                            <Accordion allowToggle>
                                                <AccordionItem >
                                                    {({ isExpanded }) => (
                                                        <>


                                                            <AccordionButton className={isExpanded ? "border-t-2 border-primary_blue py-5" : "border-t-2 border-neutral-100 py-5"}>
                                                                <Flex direction={"row"} alignItems={"center"} columnGap={15} as="span" flex='1' textAlign='left'>
                                                                    <StaticImage width={30} height={30} src="../../images/cap.svg" alt="Cap" />
                                                                    <span className={isExpanded ? "text-primary_blue text-lg font-medium" : "text-primary_black text-lg font-medium"}>Introdução</span>
                                                                </Flex>
                                                                <AccordionIcon />
                                                            </AccordionButton>

                                                            <AccordionPanel className="mb-5" pb={4}>
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                                commodo consequat.
                                                            </AccordionPanel>
                                                        </>
                                                    )}
                                                </AccordionItem>

                                            </Accordion>
                                        </>
                                        }

                                        <span className="text-3xl mt-20 mb-5 font-bold text-neutral-950">
                                            Perguntas Frequentes
                                        </span>

                                        <Accordion allowToggle>
                                            <AccordionItem >
                                                {({ isExpanded }) => (
                                                    <>


                                                        <AccordionButton className={isExpanded ? "border-t-2 border-primary_blue py-5" : "border-t-2 border-neutral-100 py-5"}>
                                                            <Flex direction={"row"} alignItems={"center"} columnGap={15} as="span" flex='1' textAlign='left'>
                                                                <QuestionMarkCircleIcon className="h-6 w-6 text-primary_blue" />
                                                                <span className="text-primary_blue text-lg font-medium">Por quanto tempo tenho acesso ao curso?</span>
                                                            </Flex>
                                                            <AccordionIcon />
                                                        </AccordionButton>

                                                        <AccordionPanel className="mb-5" pb={4}>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                            commodo consequat.
                                                        </AccordionPanel>
                                                    </>
                                                )}
                                            </AccordionItem>


                                            <AccordionItem >
                                                {({ isExpanded }) => (
                                                    <>


                                                        <AccordionButton className={isExpanded ? "border-t-2 border-primary_blue py-5" : "border-t-2 border-neutral-100 py-5"}>
                                                            <Flex direction={"row"} alignItems={"center"} columnGap={15} as="span" flex='1' textAlign='left'>
                                                                <QuestionMarkCircleIcon className="h-6 w-6 text-primary_blue" />
                                                                <span className="text-primary_blue text-lg font-medium">Eu recebo certificado?</span>
                                                            </Flex>
                                                            <AccordionIcon />
                                                        </AccordionButton>

                                                        <AccordionPanel className="mb-5" pb={4}>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                            commodo consequat.
                                                        </AccordionPanel>
                                                    </>
                                                )}
                                            </AccordionItem>

                                            <AccordionItem >
                                                {({ isExpanded }) => (
                                                    <>


                                                        <AccordionButton className={isExpanded ? "border-t-2 border-primary_blue py-5" : "border-t-2 border-neutral-100 py-5"}>
                                                            <Flex direction={"row"} alignItems={"center"} columnGap={15} as="span" flex='1' textAlign='left'>
                                                                <QuestionMarkCircleIcon className="h-6 w-6 text-primary_blue" />
                                                                <span className="text-primary_blue text-lg font-medium">Como recebo acesso ao curso?</span>
                                                            </Flex>
                                                            <AccordionIcon />
                                                        </AccordionButton>

                                                        <AccordionPanel className="mb-5" pb={4}>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                            commodo consequat.
                                                        </AccordionPanel>
                                                    </>
                                                )}
                                            </AccordionItem>

                                            <AccordionItem >
                                                {({ isExpanded }) => (
                                                    <>


                                                        <AccordionButton className={isExpanded ? "border-t-2 border-primary_blue py-5" : "border-t-2 border-neutral-100 py-5"}>
                                                            <Flex direction={"row"} alignItems={"center"} columnGap={15} as="span" flex='1' textAlign='left'>
                                                                <QuestionMarkCircleIcon className="h-6 w-6 text-primary_blue" />
                                                                <span className="text-primary_blue text-lg font-medium">Qual é o ano de lançamento do curso?</span>
                                                            </Flex>
                                                            <AccordionIcon />
                                                        </AccordionButton>

                                                        <AccordionPanel className="mb-5" pb={4}>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                            commodo consequat.
                                                        </AccordionPanel>
                                                    </>
                                                )}
                                            </AccordionItem>




                                        </Accordion>



                                    </div>


                                    <div className="order-first xl:order-last block h-full">
                                        <div className="xl:hidden flex flex-col gap-y-3 my-10">
                                            {/* <div className="text-white flex flex-row align-center gap-x-1">
                                                <StarIcon className="h-5 w-5" />
                                                <StarIcon className="h-5 w-5" />
                                                <StarIcon className="h-5 w-5" />
                                                <StarIcon className="h-5 w-5" />
                                                <StarIcon className="h-5 w-5 opacity-50" />
                                                <span className="text-sm">1,400 Avaliações</span>
                                            </div> */}

                                            <div className="flex flex-row text-white">
                                                <div className="bg-[#ffffff30] text-sm flex gap-x-5 px-5 py-2 rounded-full">
                                                    <span>{item.nome}</span>
                                                    <span className="opacity-50">|</span>
                                                    <span className="flex items-center gap-x-3">
                                                        {item.tipo}
                                                        <ChevronRightIcon className="h-4 w-4" />
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="flex flex-col text-white">
                                                <h1 className="title text-4xl md:leading-[4rem] py-5 md:text-[3.5rem] font-bold  max-w-lg">
                                                    {item.nome}
                                                </h1>
                                            </div>

                                            <div className="bg-white shadow-xl rounded-lg flex flex-col py-5 gap-y-2 items-center">
                                                <span className="text-[1rem] font-medium text-primary_black">
                                                    Parceiros do Curso
                                                </span>
                                                <div className="grid grid-cols-2 gap-x-3 mt-3 px-5 sm:px-0">
                                                    <span className="pr-4 border-r-2">
                                                        <StaticImage
                                                            src="../../images/galen_logo.svg"
                                                            objectFit="contain"
                                                            width={130}
                                                            alt="Galen Academy Logo"
                                                        />
                                                    </span>
                                                    <span>
                                                        <StaticImage
                                                            src="../../images/brci_logo.svg"
                                                            objectFit="contain"
                                                            width={93}
                                                            alt="BRCI Logo"
                                                        />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="sticky top-10 h-fit w-full sm:px-5 xl:px-20">
                                            <form
                                                className="bg-white overflow-hidden shadow-xl rounded-xl h-full"
                                                action="#"
                                            >
                                                <div className="w-full flex gap-y-3 items-center flex-col bg-neutral-100 px-10 py-6">
                                                    <span className="text-sm font-[500] text-neutral-700 [&>strong]:text-xl [&>strong]:text-neutral-950">
                                                        <strong>R${item.valor?.parcelado_12x.valor_parcela}</strong> no cartão ou{" "}
                                                        <strong>R${item.valor?.avista?.valor}</strong> no pix à vista
                                                    </span>
                                                    <span className="rounded-full font-bold bg-crimson px-3 py-1 w-fit text-white text-[0.75rem]">
                                                        –{item.valor?.avista.desconto_percentual}% de desconto
                                                    </span>
                                                </div>
                                                <div className="flex flex-col px-10 py-3">
                                                    <span className="text-2xl mb-3 font-bold text-primary_black">
                                                        Preencha seus dados
                                                    </span>

                                                    <span className="text-sm font-normal text-neutral-600">
                                                        Complete com seus dados para garantir sua vaga na
                                                        formação de{" "}
                                                        <strong>{item.nome}</strong>
                                                    </span>
                                                </div>
                                                <div className="px-10 flex flex-col gap-y-3">
                                                    <input
                                                        type="text"
                                                        className="w-full border-b-2 text-neutral-400 focus:text-neutral-900 font-normal  py-2 px-2 focus:outline-none focus:border-b-2 focus:border-neutral-600"
                                                        placeholder="Como gostaria de ser chamado?"
                                                    />
                                                    <input
                                                        type="text"
                                                        className="w-full border-b-2 text-neutral-400 focus:text-neutral-900 font-normal  py-2 px-2 focus:outline-none focus:border-b-2 focus:border-neutral-600"
                                                        placeholder="Qual seu melhor email?"
                                                    />
                                                    <input
                                                        type="text"
                                                        className="w-full border-b-2  text-neutral-400 focus:text-neutral-900 font-normal  py-2 px-2 focus:outline-none focus:border-b-2 focus:border-neutral-600"
                                                        placeholder="+55 | Insira seu celular"
                                                    />
                                                    <select className="w-full text-neutral-400 font-normal border-b-2 focus:text-neutral-900 py-2 px-2 focus:outline-none focus:border-b-2 focus:border-neutral-600">
                                                        <option value="" selected>
                                                            Qual sua profissão?
                                                        </option>
                                                    </select>

                                                    <select className="w-full text-neutral-400 border-b-2 py-2 px-2 focus:outline-none focus:border-b-2 focus:border-neutral-600">
                                                        <option value="" selected>
                                                            Qual sua especialidade?
                                                        </option>
                                                    </select>
                                                    <div className="flex flex-row gap-x-2 mt-3">
                                                        <label className="text-neutral-500 text-[1rem] control control-checkbox">
                                                            Receber novidades da Galen
                                                            <input
                                                                type="checkbox"
                                                                id="optin_newsletter"
                                                                name="optin_newsletter"
                                                            />
                                                            <div className="control_indicator"></div>
                                                        </label>
                                                    </div>

                                                    <div className="pb-10 flex flex-col gap-y-5">
                                                        <span className="text-sm text-neutral-500">
                                                            Ao informar meus dados, estou ciente das diretrizes da{" "}
                                                            <a href="#" className="text-primary_blue underline">
                                                                Política de Privacidade
                                                            </a>
                                                            .
                                                        </span>
                                                        <button className="w-full py-4 rounded-full text-white text-md bg-primary_blue">
                                                            Garantir minha vaga
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>




                                </div>
                            ))
                        }

                        <Footer />
                    </div>


                </div>
            </div>
        </main >
    );
};

export default CoursePage;


export const Head: HeadFC = () => <title>Pós em Pesquisa Clínica</title>;
