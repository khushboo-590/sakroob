import React from 'react';
import { FEATURES_DATA } from '../utils/helper';

const Express = () => {
    return (
        <div className="bg-[#F5F9FD] max-w-[1384px] mx-auto mt-6 mb-10 md:mb-[100px] lg:mb-[132px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-4 sm:px-[71px] py-[43px] mx-auto gap-y-6">
                {FEATURES_DATA.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col sm:flex-row items-center w-full justify-center sm:justify-start text-center sm:text-left py-[7px] relative">
                        <div className={`flex items-center justify-center ${index !== 0 ? 'lg:pl-[36px]' : ''}`}>
                            <img
                                src={item.icon}
                                alt={item.title}
                                className=" object-contain pointer-events-none" />
                        </div>
                        <div className="sm:ml-3 mt-2 sm:mt-0 lg:mr-0 mr-3">
                            <h4 className="text-base font-bold leading-[150%] text-black">
                                {item.title}
                            </h4>
                            <p className="text-sm leading-[120%] text-black mt-1">
                                {item.desc}
                            </p>
                        </div>
                        {index !== FEATURES_DATA.length - 1 && (
                            <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 ">
                                <svg
                                    width="1"
                                    height="63"
                                    viewBox="0 0 1 63"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <line
                                        x1="0.5"
                                        y1="0.975098"
                                        x2="0.499997"
                                        y2="62.025"
                                        stroke="url(#paint0_linear_128_610)"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="paint0_linear_128_610"
                                            x1="-0.5"
                                            y1="0.975098"
                                            x2="-0.500003"
                                            y2="62.025"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#112D49" stopOpacity="0" />
                                            <stop offset="0.514423" stopColor="#112D49" />
                                            <stop offset="1" stopColor="#112D49" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Express;
