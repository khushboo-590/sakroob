// import React from "react";

// const CustomHeading = ({ children, className}) => {
//     return (
//         <h1
//             className={`font-montserrat font-bold text-4xl lg:text-5xl leading-[120%] tracking-[0%] text-center max-w-[602px] justify-center mx-auto ${className}`}>
//             {children}
//         </h1>
//     );
// };

// export default CustomHeading;

import React from "react";

const Heading = ({ headText, headClass }) => {
    return (
        <div>
            <h1 className={`font-bold leading-[120%] text-[#112D49] text-5xl text-center mx-auto ${headClass}`}>{headText}</h1>
        </div>
    );
};

export default Heading;
