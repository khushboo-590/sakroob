import React from "react";
import { POPULAR_DATA } from "../utils/helper";
import CustomHeading from "./common/Heading";
import ItalicText from "./common/ItalicText";

const Popular = () => {
    return (
        <div className="max-w-[1384px] mx-auto px-4   font-montserrat mb-[132px]">
            <ItalicText children={"Featured Categories"} className="mb-2" />
            <CustomHeading className={"mb-[57px]"} children={"Shop Our Most Popular Products"} />
            <div className="flex flex-col gap-6">
                <div className="flex flex-col lg:flex-row gap-6">
                    {POPULAR_DATA.slice(0, 3).map((item, index) => (
                        <div
                            key={index}
                            className={`rounded-[8px] pl-4 pt-4 ${item.bg} shadow flex flex-col justify-center items-center text-center w-full 
        ${index === 0 ? "lg:w-[680px] py-4 md:py-0" : "lg:w-[328px]"} `}>
                            <div className={`flex ${index === 0 ? "md:flex-row flex-col  items-center gap-8" : "flex-col gap-4 "}`}>
                                <h3
                                    className={`${index === 0
                                        ? "text-[32px] font-bold leading-[120%] text-left  max-w-[162px]"
                                        : "text-[32px] font-bold leading-[120%] text-center max-w-[213px]  "
                                        }`}
                                >
                                    {item.title}
                                </h3>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className={`${index === 0
                                        ? " w-[160px] lg:w-[270px] xl:w-[372px] "
                                        : "w-[174px] h-[213px] object-contain mx-auto"
                                        }`} />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col lg:flex-row gap-6">
                    {POPULAR_DATA.slice(3, 6).map((item, index) => (
                        <div
                            key={index + 3}
                            className={`rounded-[8px] ${item.bg} shadow flex flex-col ${index === 2 ? "justify-end" : "justify-center"
                                } items-center text-center w-full ${index === 2 ? "lg:w-[680px]" : "lg:w-[328px]"
                                } h-[335px]`}
                        >
                            {index === 2 ? (
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className=""
                                />) : (
                                <>
                                    <h3 className="text-[32px] font-bold leading-[120%] text-center max-w-[213px]  py-[21px] ">
                                        {item.title}
                                    </h3>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="max-w-[226px]"
                                    />
                                </>
                            )}
                        </div>
                    ))}

                </div>

            </div>
        </div>
    );
};

export default Popular;
