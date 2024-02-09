import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { CardCoodernation } from "./CardCoodernation";

type OurTeamProps = {
  doctors: {
    name: string;
    type: string;
    imageUrl?: string;
  }[];
  breakpoint?: {
    [key: number]: {
      slidesPerView: number;
      spaceBetween: number;
    };
  };
};

export const OurTeam = ({ doctors, breakpoint }: OurTeamProps) => {
  const configDoctors = {
    spaceBetween: 10,
    slidesPerView: 3,
    breakpoints: breakpoint || {
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
        slidesPerView: 4.4,
        spaceBetween: 50,
      },
    },
  };

  return (
    <div className="pt-12 w-full">
      <Swiper {...configDoctors}>
        {doctors?.map((doctor, index) => (
          <SwiperSlide key={index}>
            <CardCoodernation
              type={doctor.type}
              name={doctor.name}
              imageUrl={doctor.imageUrl}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
