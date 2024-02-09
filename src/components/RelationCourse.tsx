import React from "react";

type RelationCourseProps = {
  title: string;
  category: string;
  modality: string;
  duration: string;
  coordinator: string[];
  type: string;
  investment: {
    price: number;
    oldPrice: number;
    discount: number;
  };
};

export const RelationCourse = ({
  title,
  category,
  duration,
  modality,
  type,
  coordinator,
  investment,
}: RelationCourseProps) => {
  return (
    <div className="py-6">
      <div className="w-[351px] h-[452px] px-6 pt-12 pb-6 bg-white rounded-2xl border border-gray-300 flex-col justify-between items-start inline-flex relative ">
        <div className="px-4 py-2 bg-white rounded-[80px] border border-gray-300 justify-center items-center gap-2 inline-flex absolute transform -translate-x-1/2 left-1/2 -top-5">
          <div className="text-indigo-600 text-base font-medium font-display ">
            {category}
          </div>
        </div>
        <div className="self-stretch h-[247px] flex-col justify-center items-start gap-6 flex">
          <div className="self-stretch h-[83px] flex-col justify-center items-start gap-2 flex">
            <div className="self-stretch text-center text-gray-500 text-xs font-normal font-title leading-[15px]">
              {type}
            </div>
            <div className="self-stretch text-center text-zinc-700 text-2xl font-medium font-title leading-[30px]">
              {title}
            </div>
          </div>
          <div className="self-stretch h-[0px] border border-zinc-100"></div>
          <div className="self-stretch h-[116px] flex-col justify-center items-start gap-4 flex">
            <div className="self-stretch justify-center items-center gap-8 inline-flex">
              <div className="flex-col justify-center items-start gap-1 inline-flex">
                <div className="text-gray-500 text-xs font-normal font-title leading-[15px]">
                  Carga horária
                </div>
                <div className="text-zinc-700 text-sm font-semibold font-title leading-[17.50px]">
                  {duration}
                </div>
              </div>
              <div className="w-[26px] h-[0px] origin-top-left rotate-90 border border-zinc-100"></div>
              <div className="flex-col justify-center items-start gap-1 inline-flex">
                <div className="text-gray-500 text-xs font-normal font-title leading-[15px]">
                  Modalidade
                </div>
                <div className="text-zinc-700 text-sm font-semibold font-title leading-[17.50px]">
                  {modality}
                </div>
              </div>
            </div>
            <div className="self-stretch h-[63px] flex-col justify-center items-start gap-2 flex">
              <div className="self-stretch text-center text-gray-500 text-xs font-normal font-title leading-[15px]">
                Coordenação
              </div>
              <div className="self-stretch justify-center  gap-1 flex flex-col items-center">
                {coordinator?.map((name, index) => (
                  <div
                    className="text-center text-zinc-700 text-sm font-semibold font-title leading-[17.50px]"
                    key={index}
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch p-4 rounded-2xl border border-gray-300 justify-between items-center inline-flex">
          <div className="justify-center items-end gap-2 flex">
            <div className="text-zinc-700 text-lg font-bold font-display">
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(investment?.price)}
            </div>
            <div className="text-gray-600 text-xs font-normal font-display line-through">
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(investment?.oldPrice)}
            </div>
          </div>
          <div className="px-2 py-1 bg-red-200 rounded-lg justify-center items-center gap-2 flex">
            <div className="text-slate-950 text-xs font-bold font-display">
              {investment?.discount}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
