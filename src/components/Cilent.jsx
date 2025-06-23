import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { CLIENT_DATA } from "../utils/helper";
import star from "../assets/images/svg/star.svg";
import comma from "../assets/images/svg/comma.svg";

const TestimonialSlider = () => {
    return (
        <div className="max-w-6xl mx-auto text-center px-4 py-[132px] relative">
            <p className="text-xl italic mb-2 leading-[120%]">Testimonials</p>
            <h2 className="text-4xl font-bold mb-10 leading-[130%]">What Our Client’s Says</h2>
            <button className="custom-prev bg-white shadow-lg rounded-full w-10 h-10 flex items-center max-xl:hidden border-black border justify-center absolute top-1/2 left-[-65px] transform -translate-y-1/2 z-10 hover:bg-black hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button className="custom-next bg-white shadow-lg rounded-full w-10 h-10 flex items-center max-xl:hidden justify-center border-black border absolute top-1/2 right-[-65px] transform -translate-y-1/2 z-10 hover:bg-black hover:text-white transition-all duration-300">
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
                loop={true}
                spaceBetween={30}
                rightSlides={true}

                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                }}
            >
                {CLIENT_DATA.map((t, i) => (
                    <SwiperSlide key={i}>
                        <div className="bg-white max-w-[558px] p-6 h-[362px] mx-auto rounded-lg transition-all duration-300">
                            <div className="flex items-center justify-center mb-4">
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className="w-14 h-14 rounded-full object-cover"
                                />
                            </div>

                            <div className="relative mb-4">
                                <img
                                    src={comma}
                                    alt="quote"
                                    className="w-6 h-6 absolute -top-2 left-1/2 -translate-x-1/2"
                                />
                                <p className="text-base leading-[150%] text-center max-w-[518px] mx-auto mt-6">
                                    {t.message}
                                </p>
                            </div>

                            <div className="flex flex-col items-center justify-center mt-6">
                                <img src={star} alt="Rating" className="mb-[10px]" />
                                <h4 className="font-semibold text-2xl">{t.name}</h4>
                                <p className="text-sm text-gray-500">{t.role}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TestimonialSlider;
