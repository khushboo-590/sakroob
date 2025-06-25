import React from "react";
import Custombtn from "./common/Custombtn"; 

const ratings = [
    { stars: 5, percent: 100 },
    { stars: 4, percent: 88 },
    { stars: 3, percent: 42 },
    { stars: 2, percent: 58 },
    { stars: 1, percent: 20 },
];

const ReviewGrid = () => {
    return (
        <div className="max-w-[1140px] mx-auto px-4 text-[#0D2C47] font-montserrat">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="max-w-[221px]">
                    <h2 className="text-xl font-bold mb-2">Customer Reviews</h2>
                    <div className="flex items-center gap-2 mb-1 text-yellow-400 text-xl">
                        {Array(5).fill(0).map((_, i) => (
                            <span key={i}>★</span>
                        ))}
                    </div>
                    <p className="mt-4 text-sm underline cursor-pointer flex items-center gap-1 font-medium bottom-0">
                        See all Customers Reviews <span className="text-base">→</span>
                    </p>
                </div>
                <div>
                    <p className="text-sm mb-4">Based on 1 review</p>
                    <div className="space-y-2">
                        {ratings.map((item) => (
                            <div key={item.stars} className="flex items-center gap-2">
                                <span className="text-sm w-4 text-yellow-500">{item.stars}★</span>
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
                <div className="max-w-[297px]">
                    <p className="text-[22px] leading-[170%] font-semibold mb-[6px]">Review this Product</p>
                    <p className="text-sm leading-[170%] font-medium mb-[25px]">
                        Share your thought with other customers
                    </p>
                    <Custombtn btntext={"Write a Customer Review"} btnclass={"bg-[#0D2C47] text-white"} />
                </div>
            </div>
        </div>
    );
};

export default ReviewGrid;
