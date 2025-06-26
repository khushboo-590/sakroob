
import React, { useState } from "react";
import user from "../assets/images/png/user.png";
import CustomButton from "./common/CustomButton";

const reviewsSummary = [
    { stars: 5, percent: 80 },
    { stars: 4, percent: 10 },
    { stars: 3, percent: 5 },
    { stars: 2, percent: 3 },
    { stars: 1, percent: 2 },
];

const Review = () => {
    const [activeTab, setActiveTab] = useState("reviews");

    return (
        <div className="p-4 sm:p-6 lg:p-8">
            <div className="flex justify-between mb-6 ">
                {["reviews", "Specifications", "faq"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`py-3 text-sm sm:text-base font-semibold capitalize text-[#112D49] transition-all duration-300
              ${activeTab === tab ? "border-b-2 border-[#112D49] w-70 " : "border-b-2 border-transparent  w-70  "}`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div className="rounded-xl shadow border border-[#E5EAF1] bg-white p-6 sm:p-8">
                {activeTab === "reviews" && (
                    <div>
                        <div className="flex flex-col lg:flex-row gap-8 ">
                            <div className="flex flex-col lg:min-w-[220px]">
                                <div className="text-[20px] sm:text-[22px] font-semibold text-[#112D49] mb-1">Customer Reviews</div>
                                <div className="mb-2">
                                    <span className="text-[#FFD600] text-xl font-bold">★★★★★</span>
                                    <p className="font-medium text-[#112D49] mt-1">Based on 1 review</p>
                                </div>
                                <a href="#" className="text-[#112D49] mt-10 text-sm font-medium hover:underline flex items-center gap-1">
                                    See all Customers Reviews <span className="ml-1">&gt;</span>
                                </a>
                            </div>
                            <div className="flex-1 max-w-full sm:max-w-[360px] pt-4">
                                <div className="space-y-2">
                                    {reviewsSummary.map((r) => (
                                        <div key={r.stars} className="flex items-center gap-2">
                                            <span className="text-sm w-6 flex gap-1">
                                                <span className="text-[#112D49] font-medium">{r.stars}</span>
                                                <span className="text-[#FFD600] font-medium">★</span>
                                            </span>
                                            <div className="flex-1 bg-[#F1F4F9] rounded h-1.5 overflow-hidden">
                                                <div className="bg-[#FFD600] h-1.5" style={{ width: `${r.percent}%` }} />
                                            </div>
                                            <span className="text-xs font-semibold text-gray-500 w-8 text-right">{r.percent}%</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex-1 lg:min-w-[250px] flex flex-col items-start lg:items-end">
                                <div className="rounded-xl p-5 sm:p-6 w-full max-w-xs bg-[#F9FAFB]">
                                    <h4 className="text-lg font-semibold text-[#112D49] mb-1">Review this Product</h4>
                                    <p className="text-xs text-gray-500 mb-4">Share your thought with other customers</p>
                                    <CustomButton buttonText={" Write a Customer Review"}
                                        buttonClass="mt-4 w-full bg-[#112D49] cursor-pointer text-white py-4 rounded-full font-semibold hover:bg-[#0E243E]"
                                        onClick={() => {
                                            alert("Review Submitted");
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="my-8 border border-gray-200" />
                        <div className="flex items-start gap-4 flex-col sm:flex-row">
                            <img
                                src={user}
                                alt="Kathryn Murphy"
                                className="w-14 h-14 rounded-full object-cover border-2 border-[#E5EAF1]"
                            />
                            <div>
                                <div className="flex items-center gap-2 flex-wrap">
                                    <span className="text-[#FFD600] text-base">★★★★★</span>
                                    <span className="text-gray-400 text-xs">23/05/2025</span>
                                </div>
                                <div className="font-semibold text-[#112D49] text-base">Kathryn Murphy</div>
                                <div className="text-gray-600 text-sm mt-2 max-w-2xl">
                                    Excellent router that offers great value for its price.The D-Link DSL-2790U is a high-speed ADSL2+ wireless router with speeds up to 300 Mbps—ideal for browsing, streaming, and gaming.
                                    It features four Ethernet ports, strong security, and guest network support....
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "Specifications" && (
                    <div>
                        <h3 className="text-xl font-semibold text-[#112D49] mb-4">Specifications</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm sm:text-base">
                            <li>ADSL2+ Router with 300 Mbps speed</li>
                            <li>
                                <span className="font-semibold text-[#112D49]">4</span> Ethernet Ports + 1 WAN
                            </li>
                            <li>Dual 5dBi External Antennas</li>
                        </ul>
                    </div>
                )}

                {activeTab === "faq" && (
                    <div className="text-center text-gray-500 text-lg py-12"> <p className="text-base leading-[150%] text-center sm:text-left">
                        Excellent router that offers great value for its price. The setup
                        process is straightforward and user-friendly, making it easy even
                        for non-technical users. With two powerful 5 dBi antennas, the
                        router delivers a strong and stable network connection throughout
                        the home or office, ensuring no lag or disconnections during
                        browsing, streaming, or gaming. Its compact design fits well in any
                        space, making it both efficient and unobtrusive. Highly recommended
                        for reliable everyday internet use.
                    </p></div>
                )}
            </div>
            
        </div>
    );
};

export default Review;
