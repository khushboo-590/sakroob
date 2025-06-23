import React from 'react';
import { FEATURES } from '../utils/helper';

const Express = () => {
    return (
        <div className="bg-[#F5F9FD] max-w-[1384px] mx-auto">
            <div className="mx-auto flex flex-wrap md:flex-nowrap justify-between items-center px-[71px] py-[43px]">
                {FEATURES.map((item, index) => (
                    <div
                        key={index}
                        className={`flex items-center gap-3 py-2  w-full md:w-auto justify-center relative max-w-[205px] ${index !== FEATURES.length - 1 ? 'md:border-r md:border-[#D1D5DB]' : ''
                            }`}>
                        <div className="flex items-center justify-center">
                            <img src={item.icon} alt={item.title}  />
                        </div>
                        <div className="text-left">
                            <h4 className="text-base font-bold leading-[150%] text-black">{item.title}</h4>
                            <p className="text-sm leading-[120%] text-black">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Express;
