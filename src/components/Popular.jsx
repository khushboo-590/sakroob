// import React from "react";
// import { POPULAR_DATA } from "../utils/helper";
// import CustomHeading from "./common/Heading";
// import ItalicText from "./common/ItalicText";

// const Popular = () => {
//     return (
//         <div className="max-w-[1384px] mx-auto px-4   font-montserrat mb-[132px]">
//             <ItalicText children={"Featured Categories"} className="mb-2" />
//             <CustomHeading className={"mb-[57px]"} children={"Shop Our Most Popular Products"} />
//             <div className="flex flex-col gap-6">
//                 <div className="flex flex-col lg:flex-row gap-6">
//                     {POPULAR_DATA.slice(0, 3).map((item, index) => (
//                         <div
//                             key={index}
//                             className={`rounded-[8px] pl-4 pt-4 ${item.bg} shadow flex flex-col justify-center items-center text-center w-full
//         ${index === 0 ? "lg:w-[680px] py-4 md:py-0" : "lg:w-[328px]"} `}>
//                             <div className={`flex ${index === 0 ? "md:flex-row flex-col  items-center gap-8" : "flex-col gap-4 "}`}>
//                                 <h3
//                                     className={`${index === 0
//                                         ? "text-[32px] font-bold leading-[120%] text-left  max-w-[162px]"
//                                         : "text-[32px] font-bold leading-[120%] text-center max-w-[213px]  "
//                                         }`}
//                                 >
//                                     {item.title}
//                                 </h3>
//                                 <img
//                                     src={item.image}
//                                     alt={item.title}
//                                     className={`${index === 0
//                                         ? " w-[160px] lg:w-[270px] xl:w-[372px] "
//                                         : "w-[174px] h-[213px] object-contain mx-auto"
//                                         }`} />
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 <div className="flex flex-col lg:flex-row gap-6">
//                     {POPULAR_DATA.slice(3, 6).map((item, index) => (
//                         <div
//                             key={index + 3}
//                             className={`rounded-[8px] ${item.bg} shadow flex flex-col ${index === 2 ? "justify-end" : "justify-center"
//                                 } items-center text-center w-full ${index === 2 ? "lg:w-[680px]" : "lg:w-[328px]"
//                                 } h-[335px]`}
//                         >
//                             {index === 2 ? (
//                                 <img
//                                     src={item.image}
//                                     alt={item.title}
//                                     className=""
//                                 />) : (
//                                 <>
//                                     <h3 className="text-[32px] font-bold leading-[120%] text-center max-w-[213px]  py-[21px] ">
//                                         {item.title}
//                                     </h3>
//                                     <img
//                                         src={item.image}
//                                         alt={item.title}
//                                         className="max-w-[226px]"
//                                     />
//                                 </>
//                             )}
//                         </div>
//                     ))}

//                 </div>

//             </div>
//         </div>
//     );
// };

// export default Popular;

import React from 'react';
import { FEATURED_CATEGORIES_PRODUCTS } from '../utils/helper';
import HeadingContent from './common/HeadingContent';

const Popular = () => {
    const gridStyles = [
        'lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2 sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-2 bg-[#D5E8FF]',
        'lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2 sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2 bg-[#EEF4FB]',
        'lg:col-start-4 lg:col-end-5 lg:row-start-1 lg:row-end-2 sm:col-span-2 sm:row-start-2 sm:row-end-3 bg-[#E5E4E2]',
        'lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3 sm:col-start-1 sm:col-end-2 sm:row-start-3 sm:row-end-4 bg-[#EEF4FB]',
        'lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3 sm:col-start-2 sm:col-end-3 sm:row-start-3 sm:row-end-4 bg-[#E5E4E2]',
        'lg:col-span-2 lg:col-start-3 lg:col-end-5 lg:row-start-2 lg:row-end-3 sm:col-span-2 sm:row-start-4 sm:row-end-5 bg-[#D5E8FF]',
    ];

    const imageStyles = [
        'sm:max-w-[372px] max-w-[246px] right-0 bottom-0 ml-auto w-full sm:min-h-[261px]',
        'sm:max-w-[250px] max-w-[157px] right-1/2 translate-x-1/2 -bottom-6 w-full sm:min-h-[213px]',
        'sm:max-w-[184px] max-w-[162px] right-1/2 translate-x-1/2 bottom-3 w-full sm:min-h-[208px]',
        'sm:max-w-[306px] max-w-[294px] sm:left-0 sm:bottom-0 w-full sm:min-h-[261px] max-sm:-rotate-90 -right-4 bottom-4',
        'sm:max-w-[266px] max-w-[198px] right-1/2 translate-x-1/2 bottom-[18px] w-full sm:min-h-[187px]',
        'right-0 top-0 bottom-0 left-0 h-full w-full z-0',
        
    ];
 

    const headingStyles = [
        'max-w-[172px] top-1/2 left-[62px] -translate-y-1/2',
        'max-w-[213px] left-1/2 -translate-x-1/2 top-8',
        'w-full text-center left-1/2 -translate-x-1/2 top-[46px]',
        'max-w-[196px] sm:top-[26px] sm:right-4 top-4 left-4',
        'w-full text-center left-1/2 -translate-x-1/2 top-[22px]',
        'text-center left-1/2 -translate-x-1/2 top-[59px]',
    ];

    return (
        <div className="max-w-[1384px] px-6 mx-auto my-[132px]">
            <HeadingContent
                heading="Featured Categories"
                para="Shop Our Most Popular Products"
                headingClass="text-[20px] font-normal leading-[120%] italic text-[#112D49] text-center w-full mb-2 leading-[120%]"
                paraClass="sm:text-[48px] text-[14px] leading-[120%] max-sm:max-w-[264px] font-bold text-[#112D49] text-center max-w-[602px] mx-auto w-full mb-[57px]"
            />

            <div className="grid lg:grid-cols-4 lg:grid-rows-2 sm:grid-cols-2 sm:grid-rows-4 grid-cols-1 gap-6">
                {FEATURED_CATEGORIES_PRODUCTS.map((item, index) => (
                    <div
                        key={index}
                        className={`relative overflow-hidden rounded-[8px] cursor-pointer active:scale-95 duration-200 sm:min-h-[335px] min-h-[298px] flex flex-col-reverse lg:block items-center gap-4 ${gridStyles[index]}`}
                    >
                        <img
                            src={item.categorieImg}
                            alt={item.categorieName || 'Category'}
                            className={`object-cover w-full rounded-[10px] sm:rounded-[20px] md:rounded-[30px] absolute ${imageStyles[index]}`}
                        />
                        <h4
                            className={`md:text-[32px] sm:text-[28px] text-[24px] font-bold text-[#112D49] absolute z-10 ${headingStyles[index]}`}
                        >
                            {item.categorieName}
                        </h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Popular;
