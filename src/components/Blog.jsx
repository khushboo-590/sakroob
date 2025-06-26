
import React from 'react';
import { BLOG_PAGE_DATA } from '../utils/helper';
import Raspberry from './Raspberry';
import { Arrow } from '../utils/icon';
import Heading from './common/Heading';

const Blog = () => {
    return (
        <div className="max-w-[1384px] mx-auto px-4  mb-10 md:mb-[180px] lg:mb-[132px]">
            <Heading headClass={ "max-w-[618px] mb-6 md:mb-10 lg:mb-16"} headText={"Blog, Guides, Build Logs & More"}/>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
                {BLOG_PAGE_DATA.map((item, index) => (
                    <div
                        key={index}
                        className={`rounded-[10px] flex flex-col md:flex-row justify-between md:items-start items-center xl:max-w-[668px] ${item.bgColor || 'bg-[#E5E4E2]'}`}
                    >
                        <div className="py-4 md:py-[32px] px-[24px] md:text-left text-center flex flex-col justify-center">
                            <h3 className=" text-lg md:text-xl lg:text-[32px] font-bold leading-[120%] mb-[12px] text-[#112D49]">
                                {item.heading}
                            </h3>
                            <p className=" text-sm lg:text-base leading-[150%] text-[#112D49] mb-4 max-w-[407px] mx-auto md:mx-0">
                                {item.para}
                            </p>
                            <a
                                href="#"
                                className="text-[#112D49] font-medium text-base leading-[100%] inline-flex items-center gap-2 hover:underline justify-center md:justify-start"
                            >
                                {item.button} <Arrow />
                            </a>
                        </div>

                        <div className="relative mx-auto sm:mx-0 mb-0 md:self-end">
                        <img
                                src={item.blogPageImg}
                                alt={item.heading || 'Blog image'}
                                className="mt-4 md:mt-0 w-full md:max-w-[200px]  pointer-events-none object-contain mx-auto sm:mx-0 mb-0"
                            />
                        </div>

                    </div>
                ))}
            </div>

            <Raspberry />
        </div>
    );
};

export default Blog;
