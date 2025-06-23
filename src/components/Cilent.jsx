import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { CLIENT_DATA } from "../utils/helper"
import star from '../assets/images/svg/star.svg'
import comma from '../assets/images/svg/comma.svg'




const TestimonialSlider = () => {
    return (
        <section className="max-w-6xl mx-auto  text-center">
            <p className="text-sm text-gray-500">Testimonials</p>
            <h2 className="text-3xl font-bold mb-10">
                What Our Client’s Says
            </h2>

            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={30}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                }}
            >
                {CLIENT_DATA.map((t, i) => (
                    <SwiperSlide key={i}>
                        <div className="bg-white max-w-[558px] p-5 h-[362px]">
                            <div className="flex items-center gap-4 mb-4">
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className=" rounded-full object-cover mx-auto"
                                />
                            </div>
                            <p className=" mb-4 text-center max-w-[518px] text-base leading-[150%]">
                                <img src={comma} ></img>
                                {t.message}</p>
                            <div className="flex  flex-col items-center mx-auto justify-center">
                                <img src={star} alt="Rating" className="mb-[10px]" />

                                <h4 className="font-semibold text-2xl   text-center">{t.name}</h4>
                                <p className="text-sm   leading-[160%] text-center">{t.role}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper> 
        </section>
    );
};

export default TestimonialSlider;
