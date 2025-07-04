
import React from "react";
import star from "../assets/images/svg/star.svg";
import heart from '../assets/images/svg/heart.svg';
import CustomHeading from "./common/Heading";
import shopIcon from '../assets/images/svg/shop-icon.svg';
import { PRODUCTS_DATA } from "../utils/helper";
import CustomButton from "./common/CustomButton";
import Heading from "./common/Heading";

const PopularProduct = () => {
    return (
        <>
            <div className=" px-4 lg:mb-20 md:mb-12 mb-6 ">
                <div className=" max-w-[1272px] text-center mx-auto " />
                <Heading headText={"Popular Products"} headClass={"mb-8 md:mb-15 lg:mb-[84px]"} />
                <div className="mt-10 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center">
                        {PRODUCTS_DATA.map((product, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 flex flex-col w-full max-w-[364px] min-h-[480px] rounded-[8px] mb-6 p-4 shadow-md bg-white relative font-montserrat"
                            >
                                <div className="bg-[#E5E4E2] h-[242px] w-full max-w-[332px] relative flex items-center justify-center mx-auto">
                                    <img
                                        src={heart}
                                        alt="wishlist"
                                        className="absolute top-3 right-3 cursor-pointer z-20 pointer-events-none"
                                    />
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[20%] z-10  pointer-events-none">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="max-w-none"
                                        />
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
                                            <img src={star} alt="Rating" className="pointer-events-none" />
                                        </div>
                                        <div className="flex justify-center items-center gap-4">
                                            <CustomButton
                                                buttonClass={
                                                    "w-full rounded-full border border-[#112D49] bg-white  hover:text-white hover:bg-[#112D49] text-base font-medium leading-[100%] mt-2 flex items-center justify-center gap-2 transition"
                                                }
                                                buttonText={"Shop Now"}
                                            />
                                            <img src={shopIcon} alt="Shop" className="pointer-events-none" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>                            
                </div>
                <CustomButton
                    buttonClass="rounded-full border hover:text-[#112D49]  hover:bg-white bg-[#112D49] text-white border hover:border-[#0D2C47] text-base font-medium leading-[100%] mt-7 lg:mt-[42px]  !mb-10 !md:mb-[100px] !lg:mb-[132px] !mb-[132px] mx-auto flex items-center justify-center gap-2 transition"
                    buttonText="Explore all products"
                />

            </div>
        </>
    );
};

export default PopularProduct;
