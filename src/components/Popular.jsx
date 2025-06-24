import React from "react";
import { POPULAR_DATA } from "../utils/helper";
import CustomHeading from "./common/CustomHeading";
import ItalicText from "./common/ItalicText";

const PopularProducts = () => {
    return (
        <div className="max-w-[1384px] mx-auto px-4   font-montserrat mb-[132px]">
            <ItalicText children={"Featured Categories"} className="mb-2"/>
            <CustomHeading className={"mb-[57px]" } children={"Shop Our Most Popular Products"}/>
            {/* <div className="flex flex-col gap-6">
                <div className="flex flex-col lg:flex-row gap-6">
                    {POPULAR_DATA.slice(0, 3).map((item, index) => (
                        <div
                            key={index}
                            className={`rounded-[8px] px-4 pt-4 ${item.bg} shadow flex flex-col justify-center items-center text-center w-full ${index === 0 ? "lg:w-[60%]" : "lg:w-[40%]"
                                } h-[335px]`}>
                            <div className=" flex  gap-[72px] ">
                                <h3 className="text-[32px] font-bold leading-[120%] items-center text-left max-w-[132px]">{item.title}</h3>

                                <img src={item.image} alt={item.title} className="" />

                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col lg:flex-row gap-6">
                    {POPULAR_DATA.slice(3, 6).map((item, index) => (
                        <div
                            key={index + 3}
                            className={`rounded-[8px] p-4 ${item.bg} shadow flex flex-col justify-center items-center text-center w-full ${index === 2 ? "lg:w-[60%]" : "lg:w-[40%]"
                                } h-[335px]`}
                        >
                            <img src={item.image} alt={item.title} className="w-28 h-28 object-contain mb-4" />
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div> */}
        </div>
    );
};

export default PopularProducts;
