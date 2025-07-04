
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CustomButton from "./common/CustomButton";
import React from "react";
import HeadingContent from "./common/HeadingContent";
import { HERO_SLIDES } from "../utils/helper";

const Hero = () => {
    return (
        <div className="px-2 max-w-[1432px] w-full mx-auto mt-4 lg:mt-[25px] xl:mt-[31px]  mb-4 lg:mb-[25px] xl:mb-[43px]">
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
                        className="rounded-[8px] bg-center  bg-cover bg-no-repeat min-h-[443px] sm:min-h-[643px] w-full flex flex-col justify-center items-center"
                        style={{ backgroundImage: `url(${item.bgImg })` }}>
                        <HeadingContent
                            heading={item.heading}
                            para={item.para}
                            headingClass="lg:text-[60px] md:text-[50px] sm:text-[40px] text-[32px] max-sm:max-w-[264px] font-bold text-[#112D49] text-center max-w-[716px] w-full mx-auto mb-3 leading-[120%]"
                            paraClass="sm:text-[16px] text-[14px] max-sm:max-w-[264px] font-normal text-[#112D49] text-center max-w-[460px] mx-auto w-full"
                        />
                        <div className="flex justify-center items-center gap-4.5 mt-8.5">
                            <CustomButton
                                buttonClass="bg-[#112D49] text-white border border-[#112D49] cursor-pointer transition-transform duration-300 transform hover:scale-105"
                                buttonText="Browse Products"
                            />

                            <CustomButton
                                buttonClass="bg-transparent text-[#112D49] border border-[#112D49] cursor-pointer transition-transform duration-300 transform hover:scale-105"
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
