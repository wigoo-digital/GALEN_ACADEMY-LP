import React from 'react';

export const CardCourse = () => {
  return (
    <div className="relative mb-10 w-[309px]">
      <img
        src="https://www.cfn.org.br/wp-content/uploads/2022/01/WhatsApp-Image-2022-01-20-at-18.00.37-e1642712589397-770x500.jpeg"
        alt="cardImage"
        className="rounded-t-3xl"
      />

      <div className="absolute bottom-[42%] left-[1.2rem] flex -translate-y-1/2 transform items-center justify-center rounded-[5rem] border-[1px] border-neutral-200 bg-white p-[6px]">
        <span className="text-xs text-[#4242FF]">Extensão</span>
      </div>

      <div className="flex flex-col items-start gap-[8px] rounded-b-3xl bg-[#F7F7F8] p-[1.5rem] pt-6 ">
        <span className="font-title text-[12px] text-neutral-500">
          Curta Duração
        </span>
        <h1 className="font- text-md font-title text-[18px] font-medium text-primary_black">
          Relações entre o Direito, a Medicina e a Bioética
        </h1>
        <p className="line-clamp-3 font-['Space_Grotesk'] text-sm text-neutral-700">
          O curso livre “Relações entre o Direito, a Medicina e a Bioética” tem
          como propósito explorar as complexas interações entre essas três áreas
          do conhecimento. Compreendendo a relevância e o impacto que as
          decisões legais têm na prática médica e na bioética e aprofundando o
          entendimento sobre como esses campos se entrelaçam e influenciam-se
          mutuamente.O programa é ministrado por docentes com vasta experiência
          em suas áreas de atuação e que abordarão temas relevantes como o
          Direito, a Medicina, a Filosofia, a Antropologia, a Psicologia e a
          Psiquiatria.
        </p>
      </div>
    </div>
  );
};
