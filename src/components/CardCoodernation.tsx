import React from "react";
import { GoArrowUpRight } from "react-icons/go";

export const CardCoodernation: React.FC = () => {
  return (
    <div className="relative flex h-96 w-64 flex-col items-center justify-end gap-2 rounded-lg bg-[url('https://via.placeholder.com/256x384')] p-6">
      <div className="absolute right-6 top-6">
        <GoArrowUpRight className="h-6 w-6 text-white" />
      </div>

      <div className="flex items-center justify-between self-stretch">
        <div className="flex flex-col items-start justify-start">
          <div className="font-display text-xl font-medium leading-normal text-white">
            Remo Furtado
          </div>
          <div className="font-display text-base font-normal leading-tight text-gray-300">
            Doutor
          </div>
        </div>
        <div className="relative h-9 w-9"></div>
      </div>
    </div>
  );
};
