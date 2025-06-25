
import React, { useState } from "react";

const ProductTabs = () => {
    const tabs = ["Reviews", "Specifications", "FAQs"];
    const [activeTab, setActiveTab] = useState("Reviews");

    return (
        <div className="max-w-[1140px]">
        <div className="mt-[124px] mb-[34px]">
            <div className="overflow-x-auto">
                <div className="flex min-w-[500px] text-center text-base font-semibold  whitespace-nowrap">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className="flex-1 px-4 py-3 relative min-w-[160px]"
                        >
                            <span className="text-2xl leading-[100%] font-medium">{tab}</span>
                            {activeTab === tab ? (
                                <div className="absolute bottom-0 left-2 right-2 h-[3px] bg-[#0D2C47] rounded-full"></div>
                            ) : null}
                        </button>
                    ))}
                </div>
                </div>
                </div>
            </div>
    );
};

export default ProductTabs;
