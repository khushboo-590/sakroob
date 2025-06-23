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
                    // <SwiperSlide key={i}>
                    //     <div className="border rounded-lg shadow-sm p-4 text-left hover:shadow-md transition relative">
                    //         <img
                    //             src={item.image}
                    //             alt={item.name}
                    //             className="w-full h-48 object-contain mx-auto mb-4"
                    //         />
                    //         <h3 className="text-lg font-semibold">{item.name}</h3>
                    //         <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                    //         <p className="text-xl font-semibold mt-4">{item.price}</p>

                    //         <div className="flex items-center text-yellow-400 mt-2">
                    //             {Array.from({ length: 5 }).map((_, idx) => (
                    //                 <svg
                    //                     key={idx}
                    //                     className="w-5 h-5 fill-current"
                    //                     xmlns="http://www.w3.org/2000/svg"
                    //                     viewBox="0 0 20 20"
                    //                 >
                    //                     <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.564-.955L10 0l2.948 5.955 6.564.955-4.756 4.635 1.122 6.545z" />
                    //                 </svg>
                    //             ))}
                    //         </div>

                    //         <button className="mt-4 w-full bg-blue-900 text-white py-2 rounded-full flex items-center justify-center gap-2 hover:bg-blue-700 transition">
                    //             Shop Now
                    //             <svg
                    //                 className="w-5 h-5"
                    //                 fill="none"
                    //                 stroke="currentColor"
                    //                 strokeWidth="2"
                    //                 viewBox="0 0 24 24"
                    //             >
                    //                 <path
                    //                     strokeLinecap="round"
                    //                     strokeLinejoin="round"
                    //                     d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1 5h13"
                    //                 />
                    //             </svg>
                    //         </button>

                    //         <div className="absolute top-4 right-4 text-blue-500 cursor-pointer">
                    //             <svg
                    //                 className="w-6 h-6"
                    //                 fill="none"
                    //                 stroke="currentColor"
                    //                 strokeWidth="2"
                    //                 viewBox="0 0 24 24"
                    //             >
                    //                 <path
                    //                     strokeLinecap="round"
                    //                     strokeLinejoin="round"
                    //                     d="M5 13l4 4L19 7"
                    //                 />
                    //             </svg>
                    //         </div>
                    //     </div>
                    // </SwiperSlide>
                    <SwiperSlide key={i}>
                        <div className={`border rounded-lg shadow-sm p-4 text-left hover:shadow-md transition relative max-w-[368px] `}>
                            <img
                                src={item.image}
                                alt={item.name}
                                className={`w-full h-48 object-contain mx-auto mb-4 ${item.color}`}
                            />
                            <h3 className="text-2xl font-bold leading-[120%]">{item.name}</h3>
                            <p className="text-sm leading-[150%] mb-[51px]">{item.desc}</p>
                            <div className=" flex justify-between">
                                <p className="text-xl font-semibold mt-4">{item.price}</p>
                                <img onScroll={star}></img>
                            </div>

                            <button className="mt-4 w-full bg-blue-900 text-white py-2 rounded-full flex items-center justify-center gap-2 hover:bg-blue-700 transition">
                                Shop Now
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1 5h13"
                                    />
                                </svg>
                            </button>
                        </div>
                    </SwiperSlide>

                ))}
            </Swiper>
        </section>
    );
};

export default BestsellerSlider;
