import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { bestsellers } from "../utils/helper"
import star from '../assets/images/svg/star.svg'

const BestsellerSlider = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-12 text-center">
            <h2 className="text-3xl font-bold mb-10">Bestsellers</h2>

            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={24}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {bestsellers.map((item, i) => (
                    <SwiperSlide key={i} className="h-full">
                        <div className="h-full">
                            <div className={`border rounded-lg shadow-md text-left p-4 transition border-none max-w-[364px] h-full flex flex-col`}>
                                <div className={`${item.color} p-4`}>
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="mx-auto mb-4 object-contain h-40"
                                    />
                                </div>

                                <div className="flex flex-col justify-between flex-grow p-4">
                                    <div>
                                        <h3 className="text-2xl font-bold leading-[120%]">{item.name}</h3>
                                        <p className="text-sm leading-[150%] mb-6 max-w-[332px]">{item.desc}</p>
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-center mb-4">
                                            <p className="text-2xl font-semibold">{item.price}</p>
                                            <img src={star} alt="Rating" className="" />
                                        </div>

                                        <button className="w-full bg-blue-900 text-white py-2 rounded-full flex items-center justify-center gap-2 hover:bg-blue-700 transition">
                                            Shop Now
                                        </button>
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
