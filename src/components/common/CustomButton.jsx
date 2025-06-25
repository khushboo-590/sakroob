// import React from 'react';

// const Custombtn = ({ btntext, btnclass }) => {
//     return (
//         <button className={` py-4 px-5 rounded-[93px] text-base leading-[100%] font-medium font-montserrat ${btnclass}`}>
//             {btntext}
//         </button>
//     );
// };

// export default Custombtn;

import React from 'react'

const CustomButton = ({ buttonText, buttonClass, type }) => {
    return (
        <button type={type} className={`leading-[110%] px-5 py-4 rounded-[93px] duration-300 cursor-pointer bg-[#112D49] sm:text-[16px] text-[14px] text-nowrap font-medium active:scale-90 ${buttonClass}`}>
            {buttonText}
        </button>
    )
}

export default CustomButton
