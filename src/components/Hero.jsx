import React from 'react';
import Custombtn from './common/Custombtn';
import heroImg from "../assets/images/png/header-img.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { HERO_Data,  } from '../utils/helper';

const Hero = () => {
    return (
        <div className="relative max-w-[1384px] mx-auto mb-[43px] ">
            <Swiper
                modules={[ Pagination]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                loop={true}
                className="hero-swiper"
            >
                {HERO_Data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative font-montserrat">
                            <img src={heroImg} alt="Hero" className='w-full' />
                            <div className='absolute z-10 max-w-[761px] mx-auto  top-[25%] px-4 text-center left-1/2 -translate-x-1/2 '>
                                <h1 className="text-6xl text-[#112D49] font-bold leading-[120%] mb-3">
                                    {item.title}
                                </h1>
                                <p className="text-base leading-[150%] mb-[34px] max-w-[460px] mx-auto opacity-80">
                                    {item.desc}
                                </p>
                                <div className='flex gap-[18px] justify-center flex-wrap'>
                                    <Custombtn btntext="Browse Products" btnclass="bg-[#112D49] text-white hover:bg-white hover:text-[#112D49] cursor-pointer" />
                                    <Custombtn btntext="Starter Kits" btnclass="border border-[#112D49] hover:bg-[#112D49] hover:text-white cursor-pointer" />
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Hero;
