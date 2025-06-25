import React from "react";

const Content = ({ paraText, paraClass }) => {
    return (
        <div>
            <p className={`text-[#112D49] leading-[120%] ${paraClass}`}>{paraText}</p>
        </div>
    );
};

export default Content;
