import React from "react";
import Custombtn from "./common/CustomButton";
import CustomButton from "./common/CustomButton";
import user from '../assets/images/png/user.png'

const ratings = [
    { stars: 5, percent: 100 },
    { stars: 4, percent: 88 },
    { stars: 3, percent: 42 },
    { stars: 2, percent: 58 },
    { stars: 1, percent: 20 },
];

const CustomRewiews = () => {
    return (
        <div className="max-w-[1140px] mx-auto px-4 text-[#0D2C47] bg-white font-montserrat shadow-lg p-4 mb-[132px]">
            <div className="flex flex-wrap gap-y-6 justify-between">
                <div className="w-[211px]">
                    <h2 className="text-[22px] leading-[170%] font-semibold mb-2">Customer Reviews</h2>
                    <div className="flex items-center gap-2 mb-1 text-yellow-400 text-xl">
                        {Array(5).fill(0).map((_, i) => (
                            <span key={i}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_897_11730)">
                                        <path d="M8.00049 12.2217L3.45146 15L4.68816 9.81482L0.640625 6.34771L5.9535 5.92206L8.00049 1L10.0475 5.92206L15.3611 6.34771L11.3128 9.81482L12.5495 15L8.00049 12.2217Z" fill="#FFD900" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_897_11730">
                                            <rect width="16" height="16" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </span>
                        ))}
                    </div>
                    <p className="text-sm mb-4 leading-[170%] font-medium">Based on 1 review</p>

                </div>
                <div className="flex flex-col md:flex-row items-start gap-[165px]">
                    <div className="w-[359px] mt-[69px]">
                        <div className="space-y-2">
                            {ratings.map((item) => (
                                <div key={item.stars} className="flex items-center gap-4">
                                    <span className="text-sm w-4 text-yellow-500 flex items-center">
                                        {item.stars}
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_897_11730)">
                                                <path d="M8.00049 12.2217L3.45146 15L4.68816 9.81482L0.640625 6.34771L5.9535 5.92206L8.00049 1L10.0475 5.92206L15.3611 6.34771L11.3128 9.81482L12.5495 15L8.00049 12.2217Z" fill="#FFD900" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_897_11730">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                    <div className="w-full bg-gray-100 rounded-full h-[8px] relative overflow-hidden">
                                        <div
                                            className="absolute top-0 left-0 h-full bg-yellow-400 rounded-full"
                                            style={{ width: `${item.percent}%` }}
                                        />
                                    </div>
                                    <span className="text-sm w-10 text-right">{item.percent}%</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-[279px] mt-[105px]">
                        <p className="text-[22px] leading-[170%] font-semibold mb-[6px]">Review this Product</p>
                        <p className="text-sm leading-[170%] font-medium mb-[25px]">
                            Share your thought with other customers
                        </p>
                        <CustomButton buttonText={"Write a Customer Review"} buttonClass={"bg-[#0D2C47] text-white"} />

                    </div>
                </div>
            </div>
            <p className="mt-4 text-sm underline cursor-pointer font-medium  leading-[100%] flex text-left gap-1 mb-[56px]">
                See all Customers Reviews <span className="text-base">→</span>
            </p>
            <div className="gradient-border"></div>
            <div className="max-w-[951px] mt-[34px]">
                <div className="flex items-start gap-4">
                    <img
                        src={user}
                        alt="user"
                        className="pointer-events-none"
                    />
                    <div className="flex-1">
                        <div className="flex gap-[9px] items-center flex-wrap ">
                            <div className="flex items-center gap-1 text-yellow-400">
                                {Array(5).fill().map((_, i) => (
                                    <svg
                                        key={i}
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M8.00049 12.2217L3.45146 15L4.68816 9.81482L0.640625 6.34771L5.9535 5.92206L8.00049 1L10.0475 5.92206L15.3611 6.34771L11.3128 9.81482L12.5495 15L8.00049 12.2217Z"
                                            fill="#FFD900"
                                        />
                                    </svg>
                                ))}
                                <span className="text-sm leading-[170%] font-medium text-[#0D2C47] ">23/05/2025</span>
                            </div>

                        </div>
                        <p className=" text-xl leading-[120%] font-semibold  text-[#0D2C47] mb-[23px]">Kathryn Murphy</p>
                        <p className="text-base  leading-[150%]">
                            Excellent router that offers great value for its price. The setup process is straightforward and user-friendly, making it easy even for non-technical users. With two powerful 5 dBi antennas, the router delivers a strong and stable network connection throughout the home or office, ensuring no lag or disconnections during browsing, streaming, or gaming. Its compact design fits well in any space, making it both efficient and unobtrusive. Highly recommended for reliable everyday internet use.
                        </p>
                    </div>
                </div>
            </div>

        </div>
      
    );
};

export default CustomRewiews;
