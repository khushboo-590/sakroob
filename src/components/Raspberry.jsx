import React from "react";
import raspberry from '../assets/images/png/comptuer-processor.png'
import retroConsole from '../assets/images/png/blogimg-3.png'
import CustomButton from "./common/CustomButton";
const Raspberry = () => {
    return (
        <div className="  max-w-[1384px] mx-auto mt-6 ">
            <div className="bg-[#D5E8FF]  rounded-[8px] pt-[50px] pb-[34px] px-[18px]  ">
                <div className=" grid grid-cols-1 lg:grid-cols-3 lg:gap-[95px] gap-[20px] items-center text-center md:text-left">
                    <div className="flex justify-center">
                        <img
                            src={raspberry}
                            alt="Raspberry Pi"
                            className="pointer-events-none" />
                    </div>
                    <div className="col-span- text-center ">
                        <h2 className="text-[32px] md:text-3xl font-bold  leading-[120%]">
                            Inside a Raspberry Pi <br />
                            <span className="text-gray-900">Retro Console</span>
                        </h2>
                        <p className="text-base leading-[150%] mt-[12px] mb-7 opacity-80">
                            Step-by-step log of building a retro game machine.</p>
                        <a
                            href="#"
                            className=" mt-4 flex gap-[7px] font-medium hover:underline text-base leading-[100%] justify-center">
                            View Build Log
                            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.4409 1.09326L16.3535 7.00008L10.4409 12.9069" stroke="#112D49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M1.35381 7H15.8994" stroke="#112D49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></a>
                    </div>
                    <div className="flex justify-center">
                        <img
                            src={retroConsole}
                            alt="Retro Console"
                            className="pointer-events-none" />
                    </div>
                </div></div>
            <CustomButton
                buttonClass="mt-[56px] flex justify-center mx-auto bg-[#112D49] text-white border border-[#112D49] cursor-pointer transition-transform duration-300 transform hover:scale-105"
                buttonText="View All Blog Posts"
            />
        </div>
    );
};

export default Raspberry;
