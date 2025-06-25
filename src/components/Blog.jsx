import React from "react";
import {  BLOGCARD_DATA } from "../utils/helper"
import CustomHeading from "./common/CustomHeading";
import Raspberry from "./Raspberry";


const Blog = () => {
    return (
        <div className="max-w-[1384px] mx-auto px-4 font-montserrat  ">
            <CustomHeading children={"Blog, Guides, Build Logs & More"} className={"mb-16"} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
                {BLOGCARD_DATA.map((card, index) => (
                    <div
                        key={index}
                        className={`${card.bgColor} rounded-[10px]   flex flex-col md:flex-row justify-between items-start md:items-center xl:max-w-[668px]`}>
                        <div>
                            <div className=" py-4 md:py-[32px] pl-[32px]  md:text-left text-center">
                                <h3 className="text-[32px] font-bold leading-[120%]  mb-[12px]">
                                    {card.title}
                                </h3>
                                <p className="text-base leading-[150%]   mb-4 max-w-[407px]">
                                    {card.description}
                                </p>
                                <a
                                    href="#"
                                    className="text-[#112D49] font-medium text-base leading-[100%] inline-flex items-center gap-2 hover:underline">
                                    {card.linkText}<svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.4409 1.59326L16.3535 7.50008L10.4409 13.4069" stroke="#112D49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M1.35381 7.5H15.8994" stroke="#112D49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </a>
                            </div>
                        </div>
                        <img
                            src={card.image}
                            alt={card.title}
                            className=" mt-4 md:mt-0 bottom-0 max-md:mx-auto "
                        />
                    </div>
                ))}
            </div>
            <Raspberry />
        </div>
    );
};

export default Blog;
