import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

export const CardSpeciality = () => {
  return (
    <div className="flex w-80 flex-col items-start justify-start rounded-3xl ">
      <img
        className="h-36 w-80 rounded-tl-3xl rounded-tr-3xl"
        src="https://via.placeholder.com/309x143"
      />

      <div className="relative flex h-20 flex-col items-start justify-start gap-2 self-stretch rounded-b-3xl bg-white px-6 pb-6 pt-10">
        <div className="absolute left-[50%] top-[0rem] flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full border-8 border-white bg-indigo-600">
          <IoIosArrowForward className="h-4 w-4 text-white" />
        </div>
        <div className="font-title self-stretch text-center text-lg font-semibold leading-snug text-slate-950">
          Pesquisa Clínica
        </div>
      </div>
    </div>
  );
};
