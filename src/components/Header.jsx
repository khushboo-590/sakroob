import React from 'react';
import { HEADER_DATA  } from '../utils/helper';

const Header = () => {
    return (
        <div className='bg-white '>
            <div className=" w-full bg-white overflow-hidden max-w-[1920px] mx-auto  ">
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

// import React from 'react'
// import Marquee from 'react-fast-marquee'
// import MarqeeCards from './common/MarqeeCards'
// import { Game, Graphic, Moniters, Smartwatch, Storage, Television } from '../utils/icons'

// const Marqee = () => {
//     return (
//         <Marquee className='mt-[27px]'>
//             <MarqeeCards headingClass={'text-[16px] font-bold text-[#112D49]'} heading={'Storage (ssd)'} children={<Storage />} />
//             <MarqeeCards headingClass={'text-[16px] font-bold text-[#112D49]'} heading={'Game'} children={<Game />} />
//             <MarqeeCards headingClass={'text-[16px] font-bold text-[#112D49]'} heading={'Monitors'} children={<Moniters />} />
//             <MarqeeCards headingClass={'text-[16px] font-bold text-[#112D49]'} heading={'Smartwatch'} children={<Smartwatch />} />
//             <MarqeeCards headingClass={'text-[16px] font-bold text-[#112D49]'} heading={'Televisions'} children={<Television />} />
//             <MarqeeCards headingClass={'text-[16px] font-bold text-[#112D49]'} heading={'Graphic Card'} children={<Graphic />} />
//             <MarqeeCards headingClass={'text-[16px] font-bold text-[#112D49]'} heading={'Storage (ssd)'} children={<Storage />} />
//             <MarqeeCards headingClass={'text-[16px] font-bold text-[#112D49]'} heading={'Game'} children={<Game />} />
//             <MarqeeCards headingClass={'text-[16px] font-bold text-[#112D49]'} heading={'Monitors'} children={<Moniters />} />
//             <MarqeeCards headingClass={'text-[16px] font-bold text-[#112D49]'} heading={'Smartwatch'} children={<Smartwatch />} />
//             <MarqeeCards headingClass={'text-[16px] font-bold text-[#112D49]'} heading={'Televisions'} children={<Television />} />
//             <MarqeeCards headingClass={'text-[16px] font-bold text-[#112D49]'} heading={'Graphic Card'} children={<Graphic />} />
//         </Marquee>
//     )
// }

// export default Marqee

// components/Marquee.jsx
// import React from "react";
// import MarqueeCard from "./common/MarqueeCard";
// import { MARQUEE_DATA } from "../utils/helper";

// const Marquee = () => {
//     const marqueeItems = [...MARQUEE_DATA, ...MARQUEE_DATA]; 

//     return (
//         <div className="overflow-hidden whitespace-nowrap mt-[27px]">
//             <div className="flex animate-marquee gap-3">
//                 {marqueeItems.map((item, index) => (
//                     <MarqueeCard
//                         key={index}
//                         headingClass="text-[16px] font-bold text-[#112D49]"
//                         heading={item.name}
//                     >
//                         {item.icon}
//                     </MarqueeCard>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Marquee;

