import React from "react";

type CardBenefitProps = {
  title: string;
  description: string;
  iconUrl?: string;
};

export const CardBenefit = ({
  title,
  description,
  iconUrl,
}: CardBenefitProps) => {
  return (
    <div className="flex flex-col gap-y-3 border-2 border-neutral-100 rounded-xl p-4">
      <div className="flex flex-row gap-x-3">
        {iconUrl && <img src={iconUrl} alt="icon" className="w-6 h-6" />}
        <span className="text-sm text-primary_blue font-medium">{title}</span>
      </div>
      <p className="text-[0.75rem] font-normal text-neutral-800">
        {description}
      </p>
    </div>
  );
};
