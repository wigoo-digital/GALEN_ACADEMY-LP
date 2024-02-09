import { Link } from "gatsby";
import React from "react";

type CardCourseProps = {
  title: string;
  description: string;
  imageURL: string;
  type: string;
  modality: string;
  slug?: string;
};

export const CardCourse = ({
  title,
  description,
  imageURL,
  type,
  modality,
  slug,
}: CardCourseProps) => {
  return (
    <Link
      to={slug ? `/curso/${slug}` : "#"}
      className="relative mb-10 w-[309px] hover:scale-95 transition-all duration-300 ease-in-out cursor-pointer hover:opacity-90"
    >
      <div className="relative mb-10 w-[309px] hover:scale-95 transition-all duration-300 ease-in-out cursor-pointer hover:opacity-90">
        <img
          src={imageURL}
          alt="cardImage"
          className="rounded-t-3xl object-cover min-w-full h-[200px] w-[309px] bg-white"
        />

        <div className="absolute bottom-[39%] left-[1.2rem] flex -translate-y-1/2 transform items-center justify-center rounded-[5rem] border-[1px] border-neutral-200 bg-white p-[6px]">
          <span className="text-xs text-[#4242FF]">{type}</span>
        </div>

        <div className="flex flex-col items-start gap-[8px] rounded-b-3xl bg-[#F7F7F8] p-[1.5rem] pt-6 ">
          <span className="font-title text-[12px] text-neutral-500">
            {modality}
          </span>
          <h1 className="font- text-md font-title text-[18px] font-medium text-primary_black">
            {title}
          </h1>
          <p className="line-clamp-3 font-['Space_Grotesk'] text-sm text-neutral-700">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};
