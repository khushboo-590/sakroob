import React from 'react';

const Custombtn = ({ btntext, btnclass }) => {
    return (
        <button className={` py-4 px-5 rounded-[93px] text-base leading-[100%] font-medium font-montserrat ${btnclass}`}>
            {btntext}
        </button>
    );
};

export default Custombtn;
