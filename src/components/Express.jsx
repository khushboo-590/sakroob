import React from 'react';
import { FEATURES_DATA } from '../utils/helper';

const Express = () => {
    return (
        <div className="bg-[#F5F9FD] max-w-[1384px] mx-auto mt-6 mb-[132px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-4 sm:px-[71px] py-[43px] mx-auto gap-y-6">
                {FEATURES_DATA.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col sm:flex-row items-center w-full justify-center sm:justify-start text-center sm:text-left py-[7px] relative">
                        <div className={`flex items-center justify-center ${index !== 0 ? 'sm:pl-[36px]' : ''}`}>
                            <img
                                src={item.icon}
                                alt={item.title}
                                className="w-[48px] h-[48px] object-contain"/>
                        </div>
                        <div className="sm:ml-3 mt-2 sm:mt-0">
                            <h4 className="text-base font-bold leading-[150%] text-black">
                                {item.title}
                            </h4>
                            <p className="text-sm leading-[120%] text-black mt-1">
                                {item.desc}
                            </p>
                        </div>
                        {index !== FEATURES_DATA.length - 1 && (
                            <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2">
                                <svg
                                    width="1"
                                    height="63"
                                    viewBox="0 0 1 63"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <line
                                        x1="0.5"
                                        y1="0.975098"
                                        x2="0.499997"
                                        y2="62.025"
                                        stroke="url(#paint0_linear_128_610)"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="paint0_linear_128_610"
                                            x1="-0.5"
                                            y1="0.975098"
                                            x2="-0.500003"
                                            y2="62.025"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#112D49" stopOpacity="0" />
                                            <stop offset="0.514423" stopColor="#112D49" />
                                            <stop offset="1" stopColor="#112D49" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Express;

// import React from 'react';
// import { FEATURED_CATEGORIES_PRODUCTS } from '../utils/helper';
// import HeadingContent from './common/HeadingContent';

// const Express = () => {
//     const gridStyles = [
//         'lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2 sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-2 bg-[#D5E8FF]',
//         'lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2 sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2 bg-[#EEF4FB]',
//         'lg:col-start-4 lg:col-end-5 lg:row-start-1 lg:row-end-2 sm:col-span-2 sm:row-start-2 sm:row-end-3 bg-[#E5E4E2]',
//         'lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3 sm:col-start-1 sm:col-end-2 sm:row-start-3 sm:row-end-4 bg-[#EEF4FB]',
//         'lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3 sm:col-start-2 sm:col-end-3 sm:row-start-3 sm:row-end-4 bg-[#E5E4E2]',
//         'lg:col-span-2 lg:col-start-3 lg:col-end-5 lg:row-start-2 lg:row-end-3 sm:col-span-2 sm:row-start-4 sm:row-end-5 bg-[#D5E8FF]',
//     ];

//     const imageStyles = [
//         'sm:max-w-[372px] max-w-[246px] right-0 bottom-0 ml-auto w-full sm:min-h-[261px]',
//         'sm:max-w-[250px] max-w-[157px] right-1/2 translate-x-1/2 -bottom-6 w-full sm:min-h-[213px]',
//         'sm:max-w-[184px] max-w-[162px] right-1/2 translate-x-1/2 bottom-3 w-full sm:min-h-[208px]',
//         'sm:max-w-[306px] max-w-[294px] sm:left-0 sm:bottom-0 w-full sm:min-h-[261px] max-sm:-rotate-90 -right-4 bottom-4',
//         'sm:max-w-[266px] max-w-[198px] right-1/2 translate-x-1/2 bottom-[18px] w-full sm:min-h-[187px]',
//         'right-0 top-0 bottom-0 left-0 h-full w-full z-0',
//     ];

//     const headingStyles = [
//         'max-w-[172px] top-1/2 left-[62px] -translate-y-1/2',
//         'max-w-[213px] left-1/2 -translate-x-1/2 top-8',
//         'w-full text-center left-1/2 -translate-x-1/2 top-[46px]',
//         'max-w-[196px] sm:top-[26px] sm:right-4 top-4 left-4',
//         'w-full text-center left-1/2 -translate-x-1/2 top-[22px]',
//         'text-center left-1/2 -translate-x-1/2 top-[59px]',
//     ];

//     return (
//         <div className="max-w-[1384px] px-6 mx-auto my-[132px]">
//             <HeadingContent
//                 heading="Featured Categories"
//                 para="Shop Our Most Popular Products"
//                 headingClass="text-[20px] font-normal leading-[120%] italic text-[#112D49] text-center w-full mb-2 leading-[120%]"
//                 paraClass="sm:text-[48px] text-[14px] leading-[120%] max-sm:max-w-[264px] font-bold text-[#112D49] text-center max-w-[602px] mx-auto w-full mb-[57px]"
//             />

//             <div className="grid lg:grid-cols-4 lg:grid-rows-2 sm:grid-cols-2 sm:grid-rows-4 grid-cols-1 gap-6">
//                 {FEATURED_CATEGORIES_PRODUCTS.map((item, index) => (
//                     <div
//                         key={index}
//                         className={`relative overflow-hidden rounded-[8px] cursor-pointer active:scale-95 duration-200 sm:min-h-[335px] min-h-[298px] flex flex-col-reverse lg:block items-center gap-4 ${gridStyles[index]}`}
//                     >
//                         <img
//                             src={item.categorieImg}
//                             alt={item.categorieName || 'Category'}
//                             className={`object-cover w-full rounded-[10px] sm:rounded-[20px] md:rounded-[30px] absolute ${imageStyles[index]}`}
//                         />
//                         <h4
//                             className={`md:text-[32px] sm:text-[28px] text-[24px] font-bold text-[#112D49] absolute z-10 ${headingStyles[index]}`}
//                         >
//                             {item.categorieName}
//                         </h4>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Express;

// import React from 'react'
// import ServicesCard from './common/ServicesCard'
// import { SERVICES_LIST } from '../utils/helper'

// const Services = () => {
//     return (
//         <div className="px-2 mt-[58px] max-w-[1384px] mx-auto">
//             <div className="flex justify-center items-center rounded-[8px]  px-2 min-h-[147px]">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full max-w-[1241px]">
//                     {SERVICES_LIST.map((item, index) => (
//                         <ServicesCard
//                             key={index}
//                             para={item.para}
//                             heading={item.heading}
//                             children={item.img}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Services
