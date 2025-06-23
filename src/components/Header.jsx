import React from 'react';
import { HEADER_DATA  } from '../utils/helper';

const Header = () => {
    return (
        <div className='bg-white'>
            <div className=" w-full bg-white">
                <div className="flex gap-3 animate-marquee ">                  
                    {HEADER_DATA.map((item, index) => (
                        <div
                            key={index}
                            className="flex  items-center max-w-[207px] h-[91px] text-center p-4 my-6 gap-[14px] rounded-[8px] border-[#112D491A] border-1">                            <div className="bg-[#112D49]  flex items-center justify-center rounded-full mb-2">
                                <img src={item.icon} alt={item.name} className="" />
                            </div>
                            <span className="text-base leading-[150%] font-bold">{item.name}</span>
                        </div>
                    ))}
                </div>
               
            </div>
        </div>
    );
};

export default Header;
