import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { bestsellers } from "../utils/helper";
import star from "../assets/images/svg/star.svg";
import heart from '../assets/images/svg/heart.svg';
import CustomHeading from "./common/CustomHeading";
import shopIcon from '../assets/images/svg/shop-icon.svg';

const BestsellerSlider = () => {
    return (
        <section className="max-w-[1384px] mx-auto px-4 py-20 text-center overflow-visible font-montserrat relative justify-center">
            <CustomHeading children={"Bestsellers"} />
            <button className="custom-prev bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center border border-black absolute top-1/2 left-0 transform -translate-y-1/2 z-10 hover:bg-black hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button className="custom-next bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center border border-black absolute top-1/2 right-0 transform -translate-y-1/2 z-10 hover:bg-black hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
            <Swiper
                modules={[Navigation]}
                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                }}
                spaceBetween={24}
                className="overflow-visible mt-[100px]"
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {bestsellers.map((item, i) => (
                    <SwiperSlide
                        key={i}
                        className="flex justify-center overflow-visible mx-auto">
                        <div className="flex flex-col h-full max-w-[364px] min-h-[536px]  mt-[79px] rounded-xl p-4 shadow-md bg-white relative overflow-visible">
                            <div className={`${item.color} h-[242px] w-[332px] rounded-t-xl relative items-center justify-center mx-auto`}>
                                <img
                                    src={heart}
                                    alt="wishlist"
                                    className="absolute top-3 right-3  cursor-pointer z-20" />
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[20%] z-10 ">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className=" max-w-none "
                                    />
                                </div>
                            </div>  
                            <div className="flex flex-col justify-between flex-grow mt-6 text-left">
                                <div>
                                    <h3 className="text-2xl font-bold mb-1 leading-[120%]">{item.name}</h3>
                                    <p className="text-base leading-[150%] mt-2 mb-6 line-clamp-3">{item.desc}</p>
                                </div>
                                <div className="mt-auto">
                                    <div className="flex justify-between items-center mb-4">
                                        <p className="text-2xl font-semibold leading-[100%]">{item.price}</p>
                                        <img src={star} alt="Rating" />
                                    </div>
                                    <div className="flex justify-center items-center gap-4">
                                        <button className="w-full py-2 rounded-full border border-[#112D49] text-sm font-semibold mt-2 flex items-center justify-center gap-2 transition">
                                            Shop Now
                                        </button>
                                        <img src={shopIcon} alt="Shop" className="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default BestsellerSlider;





