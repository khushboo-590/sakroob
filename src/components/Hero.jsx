// import React from 'react';
// import Custombtn from './common/CustomButton';
// import heroImg from "../assets/images/png/header-img.png";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { HERO_Data, } from '../utils/helper';

// const Hero = () => {
//     return (
//         <div className="relative max-w-[1384px] mx-auto mb-[43px] ">
//             <Swiper
//                 modules={[Pagination]}
//                 pagination={{ clickable: true }}
//                 autoplay={{ delay: 5000 }}
//                 loop={true}
//                 className="hero-swiper"
//             >
//                 {HERO_Data.map((item, index) => (
//                     <SwiperSlide key={index}>
//                         <div className="relative font-montserrat">
//                             <img src={heroImg} alt="Hero" className='w-full' />
//                             <div className='absolute z-10 max-w-[761px] mx-auto  top-[25%] px-4 text-center left-1/2 -translate-x-1/2 '>
//                                 <h1 className="text-6xl text-[#112D49] font-bold leading-[120%] mb-3">
//                                     {item.title}
//                                 </h1>
//                                 <p className="text-base leading-[150%] mb-[34px] max-w-[460px] mx-auto opacity-80">
//                                     {item.desc}
//                                 </p>
//                                 <div className='flex gap-[18px] justify-center flex-wrap'>
//                                     <Custombtn btntext="Browse Products" btnclass="bg-[#112D49] text-white hover:bg-white hover:text-[#112D49] cursor-pointer" />
//                                     <Custombtn btntext="Starter Kits" btnclass="border border-[#112D49] hover:bg-[#112D49] hover:text-white cursor-pointer" />
//                                 </div>
//                             </div>
//                         </div>

//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     );
// };

// export default Hero;

// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
// import CustomButton from "./common/CustomButton";
// import HeadingContent from "./common/HeadingContent";

// const Hero = () => {
//     return (
//         <div className="px-2 max-w-[1432px] w-full mx-auto mt-[31px]">
//             <Carousel showArrows={false} showThumbs={false} showStatus={false} infiniteLoop interval={3000} autoplay>
//                 <div className="bg-[url('./assets/img/png/hera-bg-img.png')] rounded-[8px] bg-center bg-cover bg-no-repeat min-h-[643px] w-full flex flex-col justify-center items-center">
//                     <HeadingAndPara heading={'Where Tinkerers Bring Ideas Alive'} para={'Explore niche tech gear, DIY kits, and pro tools — built for creators, gamers, and engineers.'} headingClass={'lg:text-[60px] md:text-[50px] sm:text-[40px] text-[32px] max-sm:max-w-[264px] font-bold text-[#112D49] text-center max-w-[716px] w-full mx-auto mb-3 leading-[120%]'} paraClass={'sm:text-[16px] text-[14px] max-sm:max-w-[264px] font-normal text-[#112D49] text-center max-w-[460px] mx-auto w-full'} />
//                     <div className="flex justify-center items-center gap-4.5 mt-8.5">
//                         <CustomButton buttonClass="bg-[#112D49] text-white hover:bg-[#112D49]/80" buttonText="Browse Products" />
//                         <CustomButton buttonClass="hover:bg-[#112D49]/80 text-[#112D49] hover:text-white bg-transparent border border-[#112D49]" buttonText="Starter Kits" />
//                     </div>
//                 </div>
//                 <div className="bg-[url('./assets/img/png/hera-bg-img.png')] rounded-[8px] bg-center bg-cover bg-no-repeat h-[650px] w-full flex flex-col justify-center items-center">
//                     <HeadingAndPara heading={'Where Tinkerers Bring Ideas Alive'} para={'Explore niche tech gear, DIY kits, and pro tools — built for creators, gamers, and engineers.'} headingClass={'lg:text-[60px] md:text-[50px] sm:text-[40px] text-[32px] max-sm:max-w-[264px] font-bold text-[#112D49] text-center max-w-[716px] w-full mx-auto mb-3 leading-[120%]'} paraClass={'sm:text-[16px] text-[14px] max-sm:max-w-[264px] font-normal text-[#112D49] text-center max-w-[460px] mx-auto w-full'} />
//                     <div className="flex justify-center items-center gap-4.5 mt-8.5">
//                         <CustomButton buttonClass="bg-[#112D49] text-white hover:bg-[#112D49]/80" buttonText="Browse Products" />
//                         <CustomButton buttonClass="hover:bg-[#112D49]/80 text-[#112D49] hover:text-white bg-transparent border border-[#112D49]" buttonText="Starter Kits" />
//                     </div>
//                 </div>
//                 <div className="bg-[url('./assets/img/png/hera-bg-img.png')] rounded-[8px] bg-center bg-cover bg-no-repeat h-[650px] w-full flex flex-col justify-center items-center">
//                     <HeadingAndPara heading={'Where Tinkerers Bring Ideas Alive'} para={'Explore niche tech gear, DIY kits, and pro tools — built for creators, gamers, and engineers.'} headingClass={'lg:text-[60px] md:text-[50px] sm:text-[40px] text-[32px] max-sm:max-w-[264px] font-bold text-[#112D49] text-center max-w-[716px] w-full mx-auto mb-3 leading-[120%]'} paraClass={'sm:text-[16px] text-[14px] max-sm:max-w-[264px] font-normal text-[#112D49] text-center max-w-[460px] mx-auto w-full'} />
//                     <div className="flex justify-center items-center gap-4.5 mt-8.5">
//                         <CustomButton buttonClass="bg-[#112D49] text-white hover:bg-[#112D49]/80" buttonText="Browse Products" />
//                         <CustomButton buttonClass="hover:bg-[#112D49]/80 text-[#112D49] hover:text-white bg-transparent border border-[#112D49]" buttonText="Starter Kits" />
//                     </div>
//                 </div>
//                 <div className="bg-[url('./assets/img/png/hera-bg-img.png')] rounded-[8px] bg-center bg-cover bg-no-repeat h-[650px] w-full flex flex-col justify-center items-center">
//                     <HeadingAndPara heading={'Where Tinkerers Bring Ideas Alive'} para={'Explore niche tech gear, DIY kits, and pro tools — built for creators, gamers, and engineers.'} headingClass={'lg:text-[60px] md:text-[50px] sm:text-[40px] text-[32px] max-sm:max-w-[264px] font-bold text-[#112D49] text-center max-w-[716px] w-full mx-auto mb-3 leading-[120%]'} paraClass={'sm:text-[16px] text-[14px] max-sm:max-w-[264px] font-normal text-[#112D49] text-center max-w-[460px] mx-auto w-full'} />
//                     <div className="flex justify-center items-center gap-4.5 mt-8.5">
//                         <CustomButton buttonClass="bg-[#112D49] text-white hover:bg-[#112D49]/80" buttonText="Browse Products" />
//                         <CustomButton buttonClass="hover:bg-[#112D49]/80 text-[#112D49] hover:text-white bg-transparent border border-[#112D49]" buttonText="Starter Kits" />
//                     </div>
//                 </div>
//                 <div className="bg-[url('./assets/img/png/hera-bg-img.png')] rounded-[8px] bg-center bg-cover bg-no-repeat h-[650px] w-full flex flex-col justify-center items-center">
//                     <HeadingContent heading={'Where Tinkerers Bring Ideas Alive'} para={'Explore niche tech gear, DIY kits, and pro tools — built for creators, gamers, and engineers.'} headingClass={'lg:text-[60px] md:text-[50px] sm:text-[40px] text-[32px] max-sm:max-w-[264px] font-bold text-[#112D49] text-center max-w-[716px] w-full mx-auto mb-3 leading-[120%]'} paraClass={'sm:text-[16px] text-[14px] max-sm:max-w-[264px] font-normal text-[#112D49] text-center max-w-[460px] mx-auto w-full'} />
//                     <div className="flex justify-center items-center gap-4.5 mt-8.5">
//                         <CustomButton buttonClass="bg-[#112D49] text-white hover:bg-[#112D49]/80" buttonText="Browse Products" />
//                         <CustomButton buttonClass="hover:bg-[#112D49]/80 text-[#112D49] hover:text-white bg-transparent border border-[#112D49]" buttonText="Starter Kits" />
//                     </div>
//                 </div>


//             </Carousel>
//         </div>
//     )
// }

// export default Hero

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CustomButton from "./common/CustomButton";
import HeadingContent from "./common/HeadingContent";
import { HERO_SLIDES } from "../utils/heroData";

const Hero = () => {
    return (
        <div className="px-2 max-w-[1432px] w-full mx-auto mt-[31px]">
            <Carousel
                showArrows={false}
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                interval={3000}
                autoPlay
            >
                {HERO_SLIDES.map((item, index) => (
                    <div
                        key={index}
                        className="rounded-[8px] bg-center bg-cover bg-no-repeat min-h-[643px] w-full flex flex-col justify-center items-center"
                        style={{ backgroundImage: `url(${item.imgBg})` }}>
                        <HeadingContent
                            heading={item.heading}
                            para={item.para}
                            headingClass="lg:text-[60px] md:text-[50px] sm:text-[40px] text-[32px] max-sm:max-w-[264px] font-bold text-[#112D49] text-center max-w-[716px] w-full mx-auto mb-3 leading-[120%]"
                            paraClass="sm:text-[16px] text-[14px] max-sm:max-w-[264px] font-normal text-[#112D49] text-center max-w-[460px] mx-auto w-full"
                        />
                        <div className="flex justify-center items-center gap-4.5 mt-8.5">
                            <CustomButton
                                buttonClass="bg-[#112D49] text-white hover:bg-[#112D49]/80"
                                buttonText="Browse Products"
                            />
                            <CustomButton
                                buttonClass="hover:bg-[#112D49]/80 text-[#112D49] hover:text-white bg-transparent border border-[#112D49]"
                                buttonText="Starter Kits"
                            />
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Hero;
