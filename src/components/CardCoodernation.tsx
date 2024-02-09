import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { IoLogoLinkedin } from "react-icons/io";

type CardCoodernationProps = {
  name: string;
  type: string;
  imageUrl?: string;
  linkedin?: string;
};

export const CardCoodernation: React.FC<CardCoodernationProps> = ({
  name,
  type,
  imageUrl = "https://via.placeholder.com/256x384",
  linkedin,
}) => {
  return (
    <div
      className={`relative flex h-96 w-64 flex-col items-center justify-end gap-2 rounded-lg p-6`}
    >
      <img
        src={imageUrl}
        alt={name}
        className="rounded-lg absolute top-0 left-0 z-0 w-full h-full object-cover"
      />
      <div className="absolute right-6 top-6">
        <GoArrowUpRight className="h-6 w-6 text-white" />
      </div>

      <div className="flex items-center justify-between self-stretch z-10">
        <div className="flex flex-col items-start justify-start">
          <div className="font-display text-xl font-medium leading-normal text-white">
            {name}
          </div>
          <div className="font-display text-base font-normal leading-tight text-gray-300">
            {type}
          </div>
        </div>
        <div
          data-linkedin={!!linkedin}
          className="data-[linkedin=false]:hidden"
        >
          <IoLogoLinkedin className="h-8 w-8 text-white" />
        </div>
      </div>
    </div>
  );
};
