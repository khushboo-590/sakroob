import React from "react";

const CustomHeading = ({ children, className}) => {
    return (
        <h1
            className={`font-montserrat font-bold text-4xl lg:text-5xl leading-[120%] tracking-[0%] text-center max-w-[602px] justify-center mx-auto ${className}`}
        >
            {children}
        </h1>
    );
};

export default CustomHeading;
