import { BriefcaseIcon } from '@heroicons/react/24/solid';
import React from 'react';

export const CardBenefit: React.FC = () => {
    return (
        <div className="flex flex-col gap-y-3 border-2 border-neutral-100 rounded-xl p-4">
            <div className="flex flex-row gap-x-3">
                <BriefcaseIcon className="text-primary_blue h-5 w-5" />
                <span className="text-sm text-primary_blue font-medium">
                    Parcerias
                </span>
            </div>
            <p className="text-[0.75rem] font-normal text-neutral-800">
                Parceria com docentes da Duke Univercity e Duke Clinical Research Institute (DCRI)
            </p>
        </div>
    );
};
