import React from "react";
import raspberry from '../assets/images/png/comptuer-processor.png'
import retroConsole from '../assets/images/png/machine.png'
import Custombtn from "./common/Custombtn";
const RetroConsoleSection = () => {
    return (
        <div className="  max-w-[1383px] mx-auto">
            <div className="bg-[#D5E8FF]  rounded-[8px] pt-[50px] pb-[34px] px-[18px]  ">
                <div className=" grid grid-cols-1 md:grid-cols-3 gap-[95px] items-center text-center md:text-left">
                    <div className="flex justify-center">
                        <img
                            src={raspberry}
                            alt="Raspberry Pi"
                            className=""/>
                    </div>
                    <div className="col-span- text-center ">
                        <h2 className="text-[32px] md:text-3xl font-bold  leading-[120%]">
                            Inside a Raspberry Pi <br />
                            <span className="text-gray-900">Retro Console</span>
                        </h2>
                        <p className="text-base leading-[150%] mt-[12px] mb-7">
                            Step-by-step log of building a retro game machine.</p>
                        <a
                            href="#"
                            className=" mt-4 flex gap-[7px] font-medium hover:underline text-base leading-[100%] justify-center">
                            View Build Log <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.4409 1.09326L16.3535 7.00008L10.4409 12.9069" stroke="#112D49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M1.35381 7H15.8994" stroke="#112D49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></a>
                    </div>
                    <div className="flex justify-center">
                        <img
                            src={retroConsole}
                            alt="Retro Console"
                            className=""/>
                    </div>
                </div></div>
            <Custombtn btnclass={ "mt-[56px] flex justify-center mx-auto bg-[#112D49] text-white"} btntext={"View All Blog Posts"}/>
            </div>
    );
};

export default RetroConsoleSection;
