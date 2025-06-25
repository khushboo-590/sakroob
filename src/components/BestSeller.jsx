// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { BESTSELLER_DATA, } from "../utils/helper";
// import star from "../assets/images/svg/star.svg";
// import heart from '../assets/images/svg/heart.svg';
// import CustomHeading from "./common/Heading";
// import shopIcon from '../assets/images/svg/shop-icon.svg';
// import Custombtn from "./common/CustomButton";

// const Bestseller = () => {
//     return (
//         <section className="max-w-[1272px] mx-auto px-4 lg:mb-20 md:mb-12 mb-6 text-center overflow-visible  relative justify-center">
//             <CustomHeading children={"Bestsellers"} />
//             <button className="custom-prev bg-white shadow-lg cursor-pointer rounded-full w-10 h-10 flex items-center justify-center border border-black absolute top-1/2 left-0 xl:-left-10 transform -translate-y-1/2 z-10 hover:bg-black hover:text-white transition-all duration-300 mx-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
//                 </svg>
//             </button>

//             <button className="custom-next bg-white shadow-lg cursor-pointer rounded-full w-10 h-10 flex items-center justify-center border border-black absolute top-1/2 right-0 xl:-right-10 transform -translate-y-1/2 z-10 hover:bg-black hover:text-white transition-all duration-300 mx-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
//                 </svg>
//             </button>
//             <Swiper
//                 modules={[Navigation]}
//                 navigation={{
//                     nextEl: ".custom-next",
//                     prevEl: ".custom-prev",
//                 }}
//                 loop={true}
//                 spaceBetween={24}
//                 className="overflow-visible mt-7 md:mt-[50px] lg:mt-[100px] "
//                 breakpoints={{
//                     0: { slidesPerView: 1 },
//                     640: { slidesPerView: 1 },
//                     768: { slidesPerView: 2 },
//                     1024: { slidesPerView: 2 },
//                     1200: { slidesPerView: 3 },
//                 }}

//             >
//                 {BESTSELLER_DATA.map((item, i) => (
//                     <SwiperSlide key={i} className="!flex !justify-center !items-stretch !overflow-visible mx-auto relative z-0 px-2 font-montserrat">
//                         <div className="flex flex-col max-w-[364px] min-h-[536px] mt-[79px] !rounded-[8px] mb-6  p-4 shadow-md bg-white relative z-10">
//                             <div className={`${item.color} h-[242px] w-[332px]  relative items-center justify-center mx-auto`}>
//                                 <img
//                                     src={heart}
//                                     alt="wishlist"
//                                     className="absolute top-3 right-3  cursor-pointer z-20" />
//                                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[20%] z-10 ">
//                                     <img
//                                         src={item.image}
//                                         alt={item.name}
//                                         className=" max-w-none "
//                                     />
//                                 </div>
//                             </div>

//                             <div className="flex flex-col justify-between flex-grow mt-6 text-left">
//                                 <div>
//                                     <h3 className="text-2xl font-bold mb-1">{item.name}</h3>
//                                     <p className="text-base mt-2 mb-6 line-clamp-3">{item.desc}</p>
//                                 </div>
//                                 <div className="mt-auto">
//                                     <div className="flex justify-between items-center mb-4">
//                                         <p className="text-2xl font-semibold leading-[100%]">{item.price}</p>
//                                         <img src={star} alt="Rating" />
//                                     </div>
//                                     <div className="flex justify-center items-center gap-4">
//                                         <Custombtn btnclass={"w-full   rounded-full border border-[#112D49] cursor-pointer hover:bg-[#112D49] hover:text-white text-base font-medium leading-[100%] mt-2 flex items-center justify-center gap-2 transition"}
//                                             btntext={"Shop Now"} />
//                                         <img src={shopIcon} alt="Shop" className="" />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </section>
//     );
// };

// export default Bestseller;



import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { BESTSELLER_DATA } from "../utils/helper";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomButton from "./common/CustomButton";

const BestSeller = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const [favoriteItems, setFavoriteItems] = useState([]);

    const handleFavoriteClick = (i) => {
        setFavoriteItems((prev) => {
            const updated = prev.includes(i)
                ? prev.filter((item) => item !== i)
                : [...prev, i];

            if (prev.includes(i)) {
                toast.error("Removed from Favorite 💔");
            } else {
                toast.success("Added to Favorite ❤️");
            }

            return updated;
        });
    };

    const topPositionimg = ["bottom-[21px]", "bottom-3", "bottom-[5px]", "bottom-[21px]", "-top-[80px]", "bottom-[5px]",];

    return (
        <div className="relative max-w-[1440px] mx-auto">
            <div className="max-w-[1272px] mx-auto px-3">
                <h2 className="md:text-[48px] sm:text-[36px] text-[28px] font-bold text-[#112D49] leading-[120%] text-center mb-4">Bestsellers</h2>
                <div
                    ref={prevRef}
                    className="w-[38px] h-[38px] absolute top-[50%] left-[6%] border items-center flex justify-center rounded-full cursor-pointer group hover:bg-[#112D49] transition-all duration-300 z-10"
                >
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 13L1 7L6.79609 1" className="stroke-[#112D49] group-hover:stroke-white transition-all duration-300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div
                    ref={nextRef}
                    className="w-[38px] h-[38px] absolute top-[50%] right-[6%] border items-center flex justify-center rounded-full cursor-pointer group hover:bg-[#112D49] transition-all duration-300 z-10"
                >
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 13L7 7L1.20391 1" className="stroke-[#112D49] group-hover:stroke-white transition-all duration-300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={3}
                    spaceBetween={15}
                    loop={true}
                    centeredSlides={true}
                    slidesOffsetBefore={24}
                    slidesOffsetAfter={24}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                    breakpoints={{
                        320: { slidesPerView: 1.1, spaceBetween: 10 },
                        640: { slidesPerView: 1.5, spaceBetween: 15 },
                        768: { slidesPerView: 2.5, spaceBetween: 15 },
                        1024: { slidesPerView: 3, spaceBetween: 15 },
                    }}
                >
                    {BESTSELLER_DATA.map((item, i) => (
                        <SwiperSlide className="pt-[100px]" key={i}>
                            <div className="max-w-[364px] w-full border border-[#ECEEF0] min-h-[536px] p-4 rounded-[8px] flex flex-col justify-between">
                                <div>
                                    <div className="w-full bg-[#E5E4E2] items-center h-[242px] flex justify-center rounded-[4px] relative overflow-visible">
                                        <img
                                            src={item.img}
                                            className={`absolute ${topPositionimg[i]} left-1/2 -translate-x-1/2`}
                                            alt="img"
                                        />
                                        <div
                                            className="absolute top-[10px] right-[10px] cursor-pointer text-xl"
                                            onClick={() => handleFavoriteClick(i)}
                                        >
                                            {favoriteItems.includes(i) ? "💖" : "🤍"}
                                        </div>
                                    </div>
                                    <p className="font-bold text-2xl leading-[120%] pt-[19.35px] text-[#112D49]">
                                        {item.title}
                                    </p>
                                    <p className="leading-[150%] text-[#41576D] max-w-[332px] pt-2">
                                        {item.description}
                                    </p>
                                </div>
                                <div>
                                    <div className="flex justify-between items-center">
                                        <p className="font-semibold text-2xl">{item.price}</p>
                                        <div className="-mt-3">
                                            {item.svg && <item.svg />}
                                        </div>
                                    </div>
                                    <div className="mt-[25px] flex justify-between items-center">
                                        <CustomButton
                                            buttonText="Shop Now"
                                            buttonClass="bg-white !text-[#112D49] border border-[#112D49] max-w-[260px] w-full hover:!bg-[#112D49] hover:!text-white"
                                        
                                        />
                                        {item.shop && <item.shop />}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <ToastContainer
                position="bottom-center"
                autoClose={2000}
                hideProgressBar={false}
                closeOnClick
                pauseOnHover
                draggable
                theme="colored"
            />
        </div>
    );
};

export default BestSeller;


