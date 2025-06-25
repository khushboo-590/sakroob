
import React from "react";
import star from "../assets/images/svg/star.svg";
import heart from '../assets/images/svg/heart.svg';
import CustomHeading from "./common/CustomHeading";
import shopIcon from '../assets/images/svg/shop-icon.svg';
import Custombtn from "./common/Custombtn";
import { products } from "../utils/helper";

const BestsellersSection = () => {
    return (
        <section className=" mx-auto px-4 lg:mb-20 md:mb-12 mb-6 ">
            <div className=" max-w-[1272px] text-center "/>
            <CustomHeading children={"Popular Products"}  className={"mb-[84px]"}/>
            <div className="mt-10 ">
                <div className="grid md:grid-cols-2 xl:grid-cols-3 w-max min-w-full gap-4 mx-auto justify-center">
                    {products.map((product, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 flex flex-col max-w-[364px] min-h-[536px] rounded-[8px] mb-6 p-4 shadow-md bg-white relative font-montserrat"
                        >
                            <div
                                className={`bg-[#E5E4E2] h-[242px] w-[332px] relative items-center justify-center mx-auto`}
                            >
                                <img
                                    src={heart}
                                    alt="wishlist"
                                    className="absolute top-3 right-3 cursor-pointer z-20"
                                />
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[20%] z-10">
                                    <img src={product.image} alt={product.name} className="max-w-none" />
                                </div>
                            </div>

                            <div className="flex flex-col justify-between flex-grow mt-6 text-left">
                                <div>
                                    <h3 className="text-lg font-semibold text-[#0D2C47]">{product.title}</h3>
                                    <p className="text-sm text-gray-500 mt-1 mb-3">{product.description}</p>
                                </div>
                                <div className="mt-auto">
                                    <div className="flex justify-between items-center mb-4">
                                        <p className="text-xl font-bold text-[#0D2C47]">{product.price}</p>
                                        <img src={star} alt="Rating" />
                                    </div>
                                    <div className="flex justify-center items-center gap-4">
                                        <Custombtn
                                            btnclass={
                                                "w-full rounded-full border border-[#112D49] text-base font-medium leading-[100%] mt-2 flex items-center justify-center gap-2 transition"
                                            }
                                            btntext={"Shop Now"}
                                        />
                                        <img src={shopIcon} alt="Shop" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Custombtn
    btnclass="rounded-full border bg-[#112D49] text-white text-base font-medium leading-[100%] mt-[42px] mb-[132px] !mb-[132px] mx-auto flex items-center justify-center gap-2 transition"
    btntext="Explore all products"
/>

        </section>
    );
};

export default BestsellersSection;
