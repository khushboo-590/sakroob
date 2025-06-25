import React from 'react';
import { HEADER_DATA  } from '../utils/helper';

const Header = () => {
    return (
        <div className='bg-white '>
            <div className=" w-full bg-white overflow-hidden max-w-[1920px] ">
                <div className="flex gap-3 animate-marquee mx-auto">                  
                    {HEADER_DATA.map((obj, index) => (
                        <div
                            key={index}
                            className="flex  items-center min-w-[207px] h-[91px] text-center p-4 my-6 gap-[14px] rounded-[8px] border-[#112D491A] border-1">
                            <div className="bg-[#112D49]  flex items-center justify-center rounded-full mb-2">
                                <img src={obj.icon} alt={obj.name} className="" />
                            </div>
                            <span className="text-base leading-[120%] font-bold font-montserrat">{obj.name}</span>
                        </div>
                    ))}
                </div>            
            </div>
        </div>
    );
};

export default Header;
