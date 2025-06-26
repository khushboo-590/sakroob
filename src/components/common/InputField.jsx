import React from 'react';
const InputField = ({ label, value, onChange, error, ...props }) => (
    <div className="w-full bg-[#F4F8F7] px-4 py-2 mb-[26px]">
        <label className="text-[12px] text-[#112D49] block opacity-50 leading-[150%] mb-1">{label}</label>
        <input
            value={value}
            onChange={onChange}
            {...props}
            className={`w-full  rounded-md outline-none  text-[#112D49] ${error ? 'border border-red-500' : ''}`}
        />
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
);
export default InputField
