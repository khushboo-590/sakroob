import React from 'react';

// const InputField = ({ label, value, className = '' }) => {
//     return (
//         <div className={`bg-[#F4F8F7] rounded-lg pl-[26px] py-[13px] ${className}`}>
//             <label className="text-[12px] text-[#112D49] block opacity-50 leading-[150%]">
//                 {label}
//             </label>
//             <input
//                 type="text"
//                 defaultValue={value}
//                 className="w-full bg-[#F4F8F7] outline-none text-base text-[#112D49] opacity-80 leading-[150%]"
//             />
//         </div>
//     );
// };

const InputField = ({ label, value, onChange, error, ...props }) => (
    <div className="w-full">
        <label className="block text-sm text-[#8393A0] mb-1">{label}</label>
        <input
            value={value}
            onChange={onChange}
            {...props}
            className={`w-full px-4 py-2 rounded-md outline-none bg-[#F4F8F7] text-[#112D49] ${error ? 'border border-red-500' : ''}`}
        />
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
);
export default InputField
