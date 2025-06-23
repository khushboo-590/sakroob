import React from 'react';
import Custombtn from './common/Custombtn';
import heroImg from "../assets/images/png/header-img.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/pagination'; 
import { heroData } from '../utils/helper';

const HeroSlider = () => {
    return (
        <div className="relative max-w-[1384px] mx-auto mb-[66px]">
            <Swiper
                modules={[Autoplay, Pagination]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                loop={true}
                className="hero-swiper"
            >
 {heroData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative">
                             <img src={heroImg} alt="Hero" className='w-full' />
                        <div className='absolute z-10 max-w-[761px] left-1/2 -translate-x-1/2 top-[25%] px-4 text-center'>
                                <h1 className="text-6xl text-[#112D49] font-bold leading-[120%] mb-3">
                                    {item.title}
                                </h1>
                                <p className="text-base leading-[150%] mb-[34px] max-w-[460px] mx-auto">
                                    {item.desc}
                                </p>
                                 <div className='flex gap-[18px] justify-center flex-wrap'>
                                <Custombtn btntext="Browse Products" btnclass="bg-[#112D49] text-white" />
                                <Custombtn btntext="Starter Kits" btnclass="border border-[#112D49]" />
                            </div>
                            </div>
                        </div>
                        
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroSlider;
