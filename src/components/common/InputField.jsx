import React from 'react';

const InputField = ({ label, value, className = '' }) => {
    return (
        <div className={`bg-[#F4F8F7] rounded-lg pl-[26px] py-[13px] ${className}`}>
            <label className="text-[12px] text-[#112D49] block opacity-50 leading-[150%]">
                {label}
            </label>
            <input
                type="text"
                defaultValue={value}
                className="w-full bg-[#F4F8F7] outline-none text-base text-[#112D49] opacity-80 leading-[150%]"
            />
        </div>
    );
};

export default InputField;
