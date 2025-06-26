
import React from 'react'

const CustomButton = ({ buttonText, buttonClass, type, onClick }) => {
    return (
        <button type={type}
            onClick={onClick}
            className={`leading-[110%] px-5 py-4 rounded-[93px] duration-300 cursor-pointer bg-[#112D49] sm:text-[16px] text-[14px] text-nowrap font-medium active:scale-90 ${buttonClass}`}>
            {buttonText}
        </button>
    )
}

export default CustomButton
