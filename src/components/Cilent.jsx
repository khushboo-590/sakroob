// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { CLIENT_DATA } from "../utils/helper";
// import star from "../assets/images/svg/star.svg";
// import comma from "../assets/images/svg/comma.svg";
// import CustomHeading from "./common/Heading";
// import ItalicText from "./common/ItalicText";

// const Cilent = () => {
//     const [activeIndex, setActiveIndex] = useState(0);

//     return (
//         <div className="max-w-[1272px] mx-auto text-center px-4 py-10 md:py-[90px] lg:py-[132px] relative overflow-visible">
//             <ItalicText>Testimonials</ItalicText>
//             <CustomHeading className="lg:mb-[59px] mb-6">What Our Client’s Says</CustomHeading>

//             <div className="relative overflow-visible pb-10">
//                 <button className="custom-prev bg-white shadow-lg cursor-pointer rounded-full w-10 h-10 flex items-center justify-center border border-black absolute top-1/2 left-0 xl:-left-10 transform -translate-y-1/2 z-20 hover:bg-black hover:text-white transition-all duration-300">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
//                     </svg>
//                 </button>
//                 <button className="custom-next bg-white shadow-lg cursor-pointer rounded-full w-10 h-10 flex items-center justify-center border border-black absolute top-1/2 right-0 transform -translate-y-1/2 z-20 hover:bg-black hover:text-white transition-all duration-300">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
//                     </svg>
//                 </button>
//                 <Swiper
//                     modules={[Navigation]}
//                     navigation={{
//                         nextEl: ".custom-next",
//                         prevEl: ".custom-prev",
//                     }}
//                     loop={true}
//                     spaceBetween={30}
//                     className="overflow-visible"
//                     onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//                     breakpoints={{
//                         768: { slidesPerView: 1 },
//                         1024: { slidesPerView: 2 },
//                     }}
//                 >
//                     {CLIENT_DATA.map((obj, i) => (
//                         <SwiperSlide key={i} className="!flex justify-center overflow-visible">
//                             <div
//                                 className={`bg-white max-w-[558px] w-full p-6 rounded-lg font-montserrat transition-all duration-300  ${i === activeIndex ? "shadow-md" : ""
//                                     }`}>
//                                 <div className="flex items-center justify-center mb-4">
//                                     <img src={obj.image} alt={obj.name} className="rounded-full" />
//                                 </div>
//                                 <div className="relative px-6">
//                                     <img src={comma} alt="quote" className="absolute top-0 left-0" />
//                                     <p className="text-base leading-[150%] text-center max-w-[518px] mx-auto opacity-80">
//                                         {obj.message}
//                                     </p>
//                                 </div>
//                                 <div className="flex flex-col items-center justify-center mt-6">
//                                     <img src={star} alt="Rating" className="mb-[10px]" />
//                                     <h4 className="font-semibold text-2xl leading-[100%]">{obj.name}</h4>
//                                     <p className="text-base text-gray-500 leading-[161%]">{obj.role}</p>
//                                 </div>
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//             </div>
//         </div>
//     );
// };

// export default Cilent;

import React from 'react';
// import Heading from './common/Heading';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { TESTMONIAL_DATA } from '../utils/helper';
import { LeftArrow, LeftQuotationIcon, Rating, RightArrow, RightQuotationIcon } from '../utils/icon';

const Testimonials = () => {
    return (
        <div className="px-4 md:px-6 lg:px-8 mt-20">
            <div className="max-w-[1140px] mx-auto">
                <p className="text-center italic text-lg md:text-xl text-[#112D49] mb-2">
                    Testimonials
                </p>
                <h2 className='leading-[120%] text-center text-[48px] font-bold text-[#112D49]'>What our client’s says </h2>
                <div className="mt-10 relative">
                    <div className="max-xl:hidden flex xl:absolute top-1/2 xl:-left-14 xl:-right-14 2xl:-left-20 2xl:-right-20 transform -translate-y-1/2 justify-between items-center px-4 z-10">
                        <div className="swiper-arrow prev-button cursor-pointer size-8 md:size-10 border border-[#112D49] rounded-full flex items-center justify-center hover:bg-[#112D49] transition-all duration-200 ease-linear">
                            <LeftArrow />
                        </div>

                        <div className="swiper-arrow next-button cursor-pointer size-8 md:size-10 border border-[#112D49] rounded-full flex items-center justify-center hover:bg-[#112D49] transition-all duration-200 ease-linear">
                            <RightArrow />
                        </div>
                    </div>
                    <Swiper
                        navigation={{
                            nextEl: '.next-button',
                            prevEl: '.prev-button',
                        }}
                        modules={[Navigation]}
                        spaceBetween={24}
                        slidesPerView={1}
                        loop={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                        }}
                    >
                        {TESTMONIAL_DATA.map((data, i) => (
                            <SwiperSlide key={i} className="flex justify-center p-2">
                                <div className="w-full max-w-[558px] px-4 py-6 rounded-md mx-auto text-center duration-300 hover:shadow-[0px_2px_20px_0px_#112D491A]">
                                    <img
                                        className="mx-auto w-20 h-20 object-cover rounded-full"
                                        src={data.image}
                                        alt="client-img"
                                    />
                                    <div className="pt-4 leading-[150%] text-[#112D49] opacity-80">
                                        <p className="flex-1">
                                            <LeftQuotationIcon />
                                            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,
                                            <RightQuotationIcon />
                                        </p>
                                    </div>
                                    <Rating />
                                    <p className="font-semibold text-xl md:text-2xl text-[#112D49] mt-2 md:mt-3">
                                        {data.heading}
                                    </p>
                                    <p className="text-[#112D49]">{data.work}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="xl:hidden flex justify-center gap-3 items-center px-4 z-10">
                        <div className="swiper-arrow prev-button cursor-pointer size-8 md:size-10 border border-[#112D49] rounded-full flex items-center justify-center hover:bg-[#112D49] transition-all duration-200 ease-linear">
                            <LeftArrow />
                        </div>

                        <div className="swiper-arrow next-button cursor-pointer size-8 md:size-10 border border-[#112D49] rounded-full flex items-center justify-center hover:bg-[#112D49] transition-all duration-200 ease-linear">
                            <RightArrow />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
