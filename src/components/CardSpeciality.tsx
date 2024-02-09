import { Link } from "gatsby";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

type CardSpecialityProps = {
  imageUrl: string;
  title: string;
  slug?: string;
};

export const CardSpeciality = (props: CardSpecialityProps) => {
  return (
    <Link to={props.slug ? `/course/${props.slug}` : "#"}>
      <div className="flex w-52 lg:w-80 flex-col items-start justify-start rounded-3xl cursor-pointer">
        <img
          className="h-36 w-80 rounded-tl-3xl rounded-tr-3xl object-cover"
          src={props.imageUrl}
        />

        <div className="relative flex h-23 flex-col items-start justify-start gap-2 self-stretch rounded-b-3xl bg-white px-6 pb-6 pt-10">
          <div className="absolute left-[50%] top-[0rem] flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full border-8 border-white bg-indigo-600 hover:scale-105 transition-all duration-300 ease-in-out">
            <IoIosArrowForward className="h-4 w-4 text-white" />
          </div>
          <div className="font-title self-stretch text-center text-lg font-semibold leading-snug text-slate-950">
            {props.title}
          </div>
        </div>
      </div>
    </Link>
  );
};
