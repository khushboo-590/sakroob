// import React from "react";
// import { BLOGCARD_DATA } from "../utils/helper"
// import CustomHeading from "./common/Heading";
// import Raspberry from "./Raspberry";


// const Blog = () => {
//     return (
//         <div className="max-w-[1384px] mx-auto px-4 font-montserrat  ">
//             <CustomHeading children={"Blog, Guides, Build Logs & More"} className={"mb-16"} />
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
//                 {BLOGCARD_DATA.map((card, index) => (
//                     <div
//                         key={index}
//                         className={`${card.bgColor} rounded-[10px]   flex flex-col md:flex-row justify-between items-start md:items-center xl:max-w-[668px]`}>
//                         <div>
//                             <div className=" py-4 md:py-[32px] pl-[32px]  md:text-left text-center">
//                                 <h3 className="text-[32px] font-bold leading-[120%]  mb-[12px]">
//                                     {card.title}
//                                 </h3>
//                                 <p className="text-base leading-[150%]   mb-4 max-w-[407px]">
//                                     {card.description}
//                                 </p>
//                                 <a
//                                     href="#"
//                                     className="text-[#112D49] font-medium text-base leading-[100%] inline-flex items-center gap-2 hover:underline">
//                                     {card.linkText}<svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <path d="M10.4409 1.59326L16.3535 7.50008L10.4409 13.4069" stroke="#112D49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
//                                         <path d="M1.35381 7.5H15.8994" stroke="#112D49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
//                                     </svg>

//                                 </a>
//                             </div>
//                         </div>
//                         <img
//                             src={card.image}
//                             alt={card.title}
//                             className=" mt-4 md:mt-0 bottom-0 max-md:mx-auto "
//                         />
//                     </div>
//                 ))}
//             </div>
//             <Raspberry />
//         </div>
//     );
// };

// export default Blog;

import React from 'react';
import { BLOG_PAGE_DATA } from '../utils/helper';
import { Arrow } from '../utils/icon';
import CustomButton from './common/CustomButton';
import HeadingContent from './common/HeadingContent';

const Blog = () => {
    const styles = [
        'sm:row-start-1 sm:row-end-2 sm:col-start-1 sm:col-end-2 bg-[#E5E4E2] ',
        'sm:row-start-1 sm:row-end-2 sm:col-start-2 sm:col-end-3 bg-[#EEF4FB] ',
        'sm:row-start-2 sm:row-end-3 sm:col-start-1 sm:col-end-3 bg-[#D5E8FF] '
    ];

    const imgStyles = [
        'md:!max-w-[281px] max-w-[202px] md:min-h-[235px] md:right-[6px] md:bottom-[3px] max-md:top-[10px] max-md:left-1/2 max-md:-translate-x-1/2',
        'md:!max-w-[197px] max-w-[157px] md:min-h-[358px] md:top-0 md:right-0 max-md:-rotate-90 max-md:-top-13 max-md:left-1/2 max-md:-translate-x-1/2',
        'md:!max-w-[375px] max-w-[162px] md:min-h-[303px] md:left-[18px] md:bottom-[34px] max-md:top-0 max-md:left-0'
    ];

    const headingStyles = [
        '',
        'max-w-[360px]',
        'text-center'
    ];

    const paraStyles = [
        '',
        'max-w-[360px]',
        'text-center'
    ];

    const buttonContainerStyles = [
        '',
        '',
        'items-center justify-center'
    ];

    const wrapperStyles = [
        'max-md:bottom-[14px] max-md:left-[14px]',
        'max-md:bottom-[14px] max-md:left-[14px]',
        'md:!ml-auto md:!mr-auto max-md:top-1/2 max-md:left-1/2 max-md:-translate-1/2'
    ];

    return (
        <div className=' max-w-[1384px] w-full mx-auto px-6 my-[132px] flex flex-col justify-center items-center gap-[64px]'>
            <h3 className='text-[48px] font-bold text-[#112D49] leading-[120%] max-w-[618px] mx-auto text-center'>Blog, Guides, Build Logs & More</h3>
            <div className="grid sm:grid-cols-2 sm:grid-rows-2 grid-cols-1 gap-x-[26px] gap-y-6 w-full md:!grid-rows-[335px_388px] !md:grid-rows-[364px_527px]">
                {BLOG_PAGE_DATA.map((item, i) => (
                    <div
                        key={i}
                        className={`relative overflow-hidden rounded-[8px] cursor-pointer active:scale-95 duration-200 min-h-[335px] ${styles[i]}`}
                    >
                        <img
                            className={`object-cover w-full md:rounded-[30px] sm:rounded-[20px] rounded-[10px] absolute ${imgStyles[i]}`}
                            src={item.blogPgaeImg}
                            alt={item.heading || 'Blog image'}
                        />
                        <img
                            className={`${item.active ? 'flex' : 'hidden'} object-cover w-full md:rounded-[30px] sm:rounded-[20px] rounded-[10px] absolute md:!max-w-[365px] max-w-[162px] md:min-h-[303px] md:right-[27px] md:bottom-4 bottom-0 right-0`}
                            src={item.blogPgaeImg_1}
                            alt={item.heading || 'Blog image'}
                        />
                        <div className={`flex flex-col gap-7 max-w-[410px] w-full lg:ml-8 md:ml-4 md:mt-4 relative lg:mt-8 md:p-3.5 z-10 max-md:absolute ${wrapperStyles[i]}`}>
                            <HeadingContent
                                heading={item.heading}
                                para={item.para}
                                headingClass={`md:text-[32px] sm:text-[28px] text-[24px] font-bold text-[#112D49] leading-[120%] mb-3 ${headingStyles[i]}`}
                                paraClass={`sm:text-[16px] text-[14px] font-normal text-[#112D49] ${paraStyles[i]}`}
                            />
                            <div className={`w-full flex ${buttonContainerStyles[i]}`}>
                                <button className="flex gap-2 items-center">
                                    {item.button} <Arrow />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <CustomButton buttonText={'View All Blog Posts'} buttonClass={'text-white'} />
        </div>
    );
};

export default Blog;
