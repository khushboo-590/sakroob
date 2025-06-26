import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { BESTSELLER_DATA } from "../utils/helper";
import { useNavigate } from 'react-router-dom';
import heart from '../assets/images/svg/heart.svg';
import heartFilled from '../assets/images/svg/heartcolor.svg';
import CustomButton from "./common/CustomButton";
import Heading from "./common/Heading";

const BestSeller = () => {
    const navigate = useNavigate();
    const imgPosition = ["bottom-[21px]", "bottom-3", "bottom-[5px]", "bottom-[21px]", "-top-[80px]", "bottom-[5px]"];

    const [wishlist, setWishlist] = useState({});
    const [popupMessage, setPopupMessage] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    const showPopupMessage = (message) => {
        setPopupMessage(message);
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 2000);
    };

    const handleWishlistClick = (index, title) => {
        const updated = { ...wishlist };

        if (updated[index]) {
            delete updated[index];
            showPopupMessage(`${title} removed from wishlist!`);
        } else {
            updated[index] = true;
            showPopupMessage(`${title} added to wishlist!`);
        }

        setWishlist(updated);
    };

    return (
        <div className="max-w-[1272px] mx-auto px-4 mb-10 md:mb-[100px] lg:mb-[132px] text-center overflow-visible relative justify-center">
            {showPopup && (
                <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-2 rounded-md shadow-lg z-50 transition-opacity duration-300">
                    {popupMessage}
                </div>
            )}

            <Heading headText={"Bestsellers"} headClass={"mb-4"} />
            <button className="custom-prev bg-white shadow-lg cursor-pointer rounded-full w-10 h-10 flex items-center justify-center border border-black absolute top-1/2 left-0 xl:-left-10 transform -translate-y-1/2 z-10 hover:bg-black hover:text-white transition-all duration-300 mx-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button className="custom-next bg-white shadow-lg cursor-pointer rounded-full w-10 h-10 flex items-center justify-center border border-black absolute top-1/2 right-0 xl:-right-10 transform -translate-y-1/2 z-10 hover:bg-black hover:text-white transition-all duration-300 mx-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
            <Swiper
                modules={[Navigation]}
                navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
                loop={true}
                spaceBetween={20}
                className="overflow-visible mt-7 md:mt-[50px] lg:mt-[100px]"
                breakpoints={{
                    0: { slidesPerView: 1 },
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 2,  spaceBetween:10},
                    1200: { slidesPerView: 3 },
                }}
            >
                {BESTSELLER_DATA.map((item, i) => (
                    <SwiperSlide key={i} className="!flex !justify-center !items-stretch !overflow-visible mx-auto relative z-0 px-2 font-montserrat">
                        <div className="flex flex-col max-w-[364px] min-h-[536px] mt-[79px] !rounded-[8px] mb-6 p-4 shadow-md bg-white relative z-10 cursor-pointer">
                            <div className="h-[242px] w-[332px] bg-[#E5E4E2] relative flex justify-center items-center mx-auto rounded-[4px]">

                                {/* Heart Icon */}
                                <img
                                    src={wishlist[i] ? heartFilled : heart}
                                    alt="wishlist"
                                    className="absolute top-3 right-3 cursor-pointer z-20"
                                    onClick={() => handleWishlistClick(i, item.title)}
                                />

                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className={`absolute ${imgPosition[i]} left-1/2 -translate-x-1/2 pointer-events-none`}
                                />
                            </div>

                            <div className="flex flex-col justify-between flex-grow mt-6 text-left">
                                <div>
                                    <h3 className="text-2xl font-bold mb-1 text-[#112D49]">{item.title}</h3>
                                    <p className="text-base mt-2 mb-6 text-[#41576D] line-clamp-3">{item.description}</p>
                                </div>
                                <div className="mt-auto">
                                    <div className="flex justify-between items-center mb-4">
                                        <p className="text-2xl font-semibold leading-[100%]">{item.price}</p>
                                        <div className="-mt-3">{item.svg && <item.svg />}</div>
                                    </div>
                                    <div className="flex justify-center items-center gap-4">
                                        <CustomButton
                                            buttonText="Shop Now"
                                            buttonClass="w-full rounded-full border border-[#112D49] hover:text-white hover:bg-[#112D49] bg-white text-[#112D49] text-base font-medium leading-[100%] flex items-center justify-center gap-2 transition"
                                            onClick={() => {
                                                navigate('/detailspage');
                                                window.scrollTo(0, 0);
                                            }}                                     />
                                        {item.shop && <item.shop />}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BestSeller;
