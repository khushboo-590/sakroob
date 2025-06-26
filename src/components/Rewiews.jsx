import React, { useRef, useState } from "react";
import CustomButton from "./common/CustomButton";
import user from "../assets/images/png/user.png";

const ratings = [
    { stars: 5, percent: 100 },
    { stars: 4, percent: 88 },
    { stars: 3, percent: 42 },
    { stars: 2, percent: 58 },
    { stars: 1, percent: 20 },
];

const Reviews = () => {
    const tabs = ["Reviews", "Specifications", "FAQs"];
    const [activeTab, setActiveTab] = useState("Reviews");
    const [reviewMessage, setReviewMessage] = useState("");
    const handleReviewClick = () => {
        setReviewMessage(" Thank you for your review!");
        setTimeout(() => {
            setReviewMessage(""); 
        }, 3000);
    };
      

    return (
        <div className="max-w-[1140px] mx-auto mb-[132px]">
            <div className="mt-[124px] mb-[34px] overflow-x-auto">
                <div className="w-full overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
                    <div className="flex min-w-[500px] text-center text-base font-semibold justify-between border-b pb-4">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`relative text-lg font-semibold px-4 h-[52px] text-[#0D2C47] transition-all duration-300 group`}
                            >
                                {tab}
                                <span
                                    className={`absolute left-0 bottom-0 h-[2px] w-full transition-all duration-300 ${activeTab === tab ? "bg-[#0D2C47] h-[4px]" : "bg-transparent h-[2px]"
                                        }`}
                                />
                            </button>
                        ))}
                    </div>

                </div>

            </div>
            {activeTab === "Reviews" && (
                <div className="mx-auto px-4 text-[#0D2C47] bg-white shadow-lg p-4">
                    <div className="flex flex-wrap gap-y-6 lg:justify-between">
                        <div className="w-[211px]">
                            <h2 className="text-[22px] leading-[170%] font-semibold mb-2">
                                Customer Reviews
                            </h2>
                            <div className="flex items-center gap-2 mb-1 text-yellow-400 text-xl">
                                {Array(5)
                                    .fill(0)
                                    .map((_, i) => (
                                        <span key={i}>
                                            <svg
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
                                        </span>
                                    ))}
                            </div>
                            <p className="text-sm mb-4 leading-[170%] font-medium">
                                Based on 1 review
                            </p>
                        </div>

                        <div className="flex flex-col lg:flex-row lg:items-start gap-4 md:gap-10 lg:gap-[165px]">
                            <div className="w-[359px] mt-4 md:mt10 lg:mt-[69px] space-y-2">
                                {ratings.map((item) => (
                                    <div
                                        key={item.stars}
                                        className="flex items-center gap-4"
                                    >
                                        <span className="text-sm w-4 text-yellow-500 flex items-center">
                                            {item.stars}
                                            <svg
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
                                        </span>
                                        <div className="w-full bg-gray-100 rounded-full h-[8px] relative overflow-hidden">
                                            <div
                                                className="absolute top-0 left-0 h-full bg-yellow-400 rounded-full"
                                                style={{ width: `${item.percent}%` }}
                                            />
                                        </div>
                                        <span className="text-sm w-10 text-right">
                                            {item.percent}%
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="w-[279px] mt-7 md:mt-[60px] lg:mt-[105px]">
                                <p className="text-[22px] leading-[170%] font-semibold mb-[6px]">
                                    Review this Product
                                </p>
                                <p className="text-sm leading-[170%] font-medium mb-[25px]">
                                    Share your thought with other customers
                                </p>
                                <CustomButton
                                    buttonText={"Write a Customer Review"}
                                    buttonClass={"bg-[#0D2C47] text-white hover:text-[#0D2C47] hover:bg-white hover border-[#0D2C47] border"}
                                    onClick={handleReviewClick}
                                />

                                {reviewMessage && (
                                    <p className="mt-2 text-red-600 text-sm">{reviewMessage}</p>
                                )}

                            </div>
                        </div>
                    </div>

                    <p className="mt-4 text-sm underline cursor-pointer font-medium flex gap-1 mb-[56px]">
                        See all Customers Reviews <span className="text-base">→</span>
                    </p>
                    <div className="max-w-[951px] mt-8 lg:mt-[34px] w-full px-4 sm:px-6 mx-auto">
                        <div className="flex flex-col sm:flex-row items-start gap-4">
                            <img
                                src={user}
                                alt="user"
                                className="pointer-events-none w-20 h-20 object-cover rounded-full mx-auto sm:mx-0"
                            />
                            <div className="flex-1 ">
                                <div className="flex flex-wrap gap-[9px] items-center justify-center sm:justify-start">
                                    <div className="flex items-center gap-1 text-yellow-400 ">
                                        {Array(5)
                                            .fill()
                                            .map((_, i) => (
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
                                    </div>
                                    <span className="text-sm font-medium text-[#0D2C47]">
                                        23/05/2025
                                    </span>
                                </div>
                                <p className="text-xl font-semibold text-[#0D2C47] mt-2 mb-4 text-center sm:text-left">
                                    Kathryn Murphy
                                </p>
                                <p className="text-base leading-[150%] text-center sm:text-left">
                                    Excellent router that offers great value for its price. The setup
                                    process is straightforward and user-friendly, making it easy even
                                    for non-technical users. With two powerful 5 dBi antennas, the
                                    router delivers a strong and stable network connection throughout
                                    the home or office, ensuring no lag or disconnections during
                                    browsing, streaming, or gaming. Its compact design fits well in any
                                    space, making it both efficient and unobtrusive. Highly recommended
                                    for reliable everyday internet use.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            )}
            {activeTab === "Specifications" && (
                <div className="mb-24 px-4">
                    <h2 className="text-2xl font-bold mb-4">Specifications</h2>
                    <p className="text-gray-700">
                        This is the Specifications section. Show technical product details
                        here.
                    </p>
                </div>
            )}
            {activeTab === "FAQs" && (
                <div className="mb-24 px-4">
                    <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-700">
                        This is the FAQs section. Show common customer queries and answers.
                    </p>
                </div>
            )}
        </div>
    );
};

export default Reviews;
