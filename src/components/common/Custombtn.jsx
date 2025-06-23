import React from 'react';

const Custombtn = ({ btntext, btnclass }) => {
    return (
        <button className={` py-4 px-5 rounded-[93px] ${btnclass}`}>
            {btntext}
        </button>
    );
};

export default Custombtn;
