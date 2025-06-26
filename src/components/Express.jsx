import React from 'react';
import { FEATURES_DATA } from '../utils/helper';

const Express = () => {
    return ( 
        <div className="pt-3 x-auto mt-6 mb-10 md:mb-[100px] lg:mb-[132px]">
                <div className="max-w-[1380px] px-3 mx-auto">
                    <div className="flex items-center flex-wrap justify-center bg-[#F1F6FC] rounded-[8px] py-[43px]">
                        {FEATURES_DATA.map((item, index) => (
                            <div
                                key={index}
                                className="relative flex flex-col sm:flex-row items-center text-center sm:text-left gap-[8px] max-md:py-[30px] px-[36px] 
                            w-full sm:w-1/2 md:w-1/3 xl:w-1/5 max-w-[320px]"
                            >                      
                                {item.icon && (() => {
                                    const Icon = item.icon;
                                    return <Icon className="w-6 h-6 text-[#112D49]" />;
                                })()}
                                <div>
                                    <p className="font-bold leading-[150%]">{item.text}</p>
                                    <p className="text-sm leading-[120%] pt-1">{item.para}</p>
                                </div>
                                {index !== FEATURES_DATA.length - 1 && (
                                    <>
                                        <div
                                            className="hidden sm:block absolute top-0 right-0 h-full w-px"
                                            style={{
                                                borderWidth: "1px",
                                                borderStyle: "solid",
                                                borderImage:
                                                    "linear-gradient(180deg, rgba(17,45,73,0) 0%, #112D49 51.44%, rgba(17,45,73,0) 100%) 1",
                                            }}
                                        ></div>
                                        <div
                                            className="block sm:hidden absolute bottom-0 left-6 right-6 h-px"
                                            style={{
                                                borderWidth: "1px",
                                                borderStyle: "solid",
                                                borderImage:
                                                    "linear-gradient(to right, rgba(17,45,73,0) 0%, #112D49 51.44%, rgba(17,45,73,0) 100%) 1",
                                            }}
                                        ></div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

 

export default Express;
