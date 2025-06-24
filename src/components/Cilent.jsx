import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { CLIENT_DATA } from "../utils/helper";
import star from "../assets/images/svg/star.svg";
import comma from "../assets/images/svg/comma.svg";
import CustomHeading from "./common/CustomHeading";
import ItalicText from "./common/ItalicText";

const TestimonialSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="max-w-[1272px] mx-auto text-center px-4 py-10 md:py-[90px] lg:py-[132px] relative overflow-visible">
            <ItalicText>Testimonials</ItalicText>
            <CustomHeading className="lg:mb-[59px] mb-6">What Our Client’s Says</CustomHeading>

            <div className="relative overflow-visible pb-10">
                <button className="custom-prev bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center border border-black absolute top-1/2 left-0 xl:-left-10 transform -translate-y-1/2 z-20 hover:bg-black hover:text-white transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button className="custom-next bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center border border-black absolute top-1/2 right-0 transform -translate-y-1/2 z-20 hover:bg-black hover:text-white transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                    className="overflow-visible"
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    breakpoints={{
                        768: { slidesPerView: 1 },
                        1024: { slidesPerView: 2 },
                    }}
                >
                    {CLIENT_DATA.map((t, i) => (
                        <SwiperSlide key={i} className="!flex justify-center overflow-visible">
                            <div
                                className={`bg-white max-w-[558px] w-full p-6 rounded-lg font-montserrat transition-all duration-300  ${i === activeIndex ? "shadow-md" : ""
                                    }`}
                            >
                                <div className="flex items-center justify-center mb-4">
                                    <img src={t.image} alt={t.name} className="rounded-full" />
                                </div>
                                <div className="relative px-6">
                                    <img src={comma} alt="quote" className="absolute top-0 left-0" />
                                    <p className="text-base leading-[150%] text-center max-w-[518px] mx-auto opacity-80">
                                        {t.message}
                                    </p>
                                </div>
                                <div className="flex flex-col items-center justify-center mt-6">
                                    <img src={star} alt="Rating" className="mb-[10px]" />
                                    <h4 className="font-semibold text-2xl leading-[100%]">{t.name}</h4>
                                    <p className="text-base text-gray-500 leading-[161%]">{t.role}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default TestimonialSlider;
