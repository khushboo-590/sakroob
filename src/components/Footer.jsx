// import React from 'react';
// import logo from '../assets/images/svg/logo.svg'
// import face from '../assets/images/svg/face.svg'
// import insta from '../assets/images/svg/insta.svg'
// import x from "../assets/images/svg/x.svg"
// import cemara from '../assets/images/svg/m.svg'
// const Footer = () => {
//     return (
//         <div className=" max-w-[1920px]  text-center mx-auto  font-montserrat  ">
//             <div className=' bg-[#0B2341]  pt-32'>
//                 <div className="flex justify-center mb-6 mt-[75px]">
//                     <img src={logo} alt="Sakroob" className="" />
//                 </div>
//                 <p className="text-base leading-[150%]  text-white/80 mb-[27px]  mx-auto max-w-[338px]">
//                     Commodo egestas etiam arcu curabitur aliquam volutpat a gravida.
//                 </p>
//                 <div className="flex flex-wrap justify-center gap-6 text-base leading-[150%] font-medium mb-[27px] text-white">
//                     <a href="#" className="transition duration-300 hover:text-gray-400">Shipping</a>
//                     <a href="#" className="transition duration-300 hover:text-gray-400">Warranty</a>
//                     <a href="#" className="transition duration-300 hover:text-gray-400">FAQs</a>
//                     <a href="#" className="transition duration-300 hover:text-gray-400">Blog</a>
//                     <a href="#" className="transition duration-300 hover:text-gray-400">Contact</a>
//                 </div>

//                 <div className="flex flex-col items-center gap-6 mb-[82px]">
//                     <div className="flex justify-center gap-4">
//                         <a
//                             href="https://facebook.com/yourpage"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="transition duration-300 transform hover:scale-110 group"
//                         >
//                             <div className=" flex items-center justify-center rounded-full ">
//                                 <img src={face} alt="Facebook" className="" />
//                             </div>
//                         </a>
//                         <a
//                             href="https://instagram.com/yourprofile"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="transition duration-300 transform hover:scale-110 group"
//                         >
//                             <div className=" flex items-center justify-center rounded-full ">
//                                 <img src={insta} alt="Instagram" className="" />
//                             </div>
//                         </a>
//                         <a
//                             href="https://x.com/yourhandle"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="transition duration-300 transform hover:scale-110 group"
//                         >
//                             <div className=" flex items-center justify-center rounded-full ">
//                                 <img src={x} alt="Twitter/X" className="" />
//                             </div>
//                         </a>
//                         <a
//                             href="https://youtube.com/yourchannel"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="transition duration-300 transform hover:scale-110 group"
//                         >
//                             <div className=" flex items-center justify-center rounded-full ">
//                                 <img src={cemara} alt="YouTube or Camera" className="" />
//                             </div>
//                         </a>
//                     </div>
//                 </div>
//                 <div className='border-gradient-top'></div>
//                 <div className="text-sm flex justify-between  text-white opacity-80 py-[30px] max-w-[1140px] mx-auto">
//                     <p className="mb-1">Terms of Service | Privacy Policy</p>
//                     <p>© 2025 Sakroob. All rights reserved.</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Footer;

import React from "react";
import footerLogo from '../assets/images/svg/logo.svg'

// import {
//     FacebookSvg,
//     InstagramSvg,
//     TwiterSvg,
//     YoutubeSvg,
// } from "../utils/icons";
import face from '../assets/images/svg/face.svg'
import insta from '../assets/images/svg/insta.svg'
import x from "../assets/images/svg/x.svg"
import cemara from '../assets/images/svg/m.svg'
import Content from "./common/Content";

const Footer = () => {
    return (
        <>
            <div className="bg-[#112D49] pt-[210px] max-w-[1920px] mx-auto">
                <div className="max-w-[1440px] mx-auto px-3">
                    <div className="">
                        <img className="mx-auto flex" src={footerLogo} alt="footer-logo" />
                        <Content
                            paraClass="max-w-[338px] !text-[#CFD5DB] text-center mx-auto pt-6 !leading-[150%]"
                            paraText="Commodo egestas etiam arcu curabitur aliquam volutpat a gravida."
                        />
                        <ul className="flex flex-wrap gap-2.5 justify-between max-w-[384px] mx-auto mt-[27px]">
                            <li>
                                <a className="text-white text-[16px] font-medium" href="#">
                                    Shipping
                                </a>
                            </li>
                            <li>
                                <a className="text-white text-[16px] font-medium" href="#">
                                    Warranty
                                </a>
                            </li>
                            <li>
                                <a className="text-white text-[16px] font-medium" href="#">
                                    FAQs
                                </a>
                            </li>
                            <li>
                                <a className="text-white text-[16px] font-medium" href="#">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a className="text-white text-[16px] font-medium" href="#">
                                    Contact
                                </a>
                            </li>
                        </ul>
                        <div className="flex flex-wrap gap-2.5 justify-center mt-[27px]">
                            <a
                                className="h-[32px] w-[32px] flex justify-center items-center border border-white rounded-full cursor-pointer transform hover:scale-125 hover:rotate-12 transition-transform duration-300 ease-in-out active:scale-90"
                                href="https://www.facebook.com/"
                                target="_blank"
                            >
                                <img src={face} alt="Facebook" className="" />
                            </a>
                            <a
                                href="https://www.instagram.com/"
                                className="h-[32px] w-[32px] flex justify-center items-center border border-white rounded-full cursor-pointer transform hover:scale-125 hover:-rotate-12 transition-transform duration-300 ease-in-out active:scale-90"
                                target="_blank"
                            >
                                <img src={insta} alt="Facebook" className="" />
                                </a>
                            <a
                                href="https://x.com/"
                                className="h-[32px] w-[32px] flex justify-center items-center border border-white rounded-full cursor-pointer transform hover:scale-125 hover:rotate-12 transition-transform duration-300 ease-in-out active:scale-90"
                                target="_blank"
                            >
                                <img src={x} alt="Facebook" className="" />
                                </a>
                            <a
                                href="https://www.youtube.com/"
                                className="h-[32px] w-[32px] flex justify-center items-center border border-white rounded-full cursor-pointer transform hover:scale-125 hover:-rotate-12 transition-transform duration-300 ease-in-out active:scale-90"
                                target="_blank"
                            >
                                <img src={cemara} alt="Facebook" className="" />
                                </a>
                        </div>
                        <div className="max-w-[1140px] w-full mx-auto mt-[82px] relative z-0 pt-[1px] rounded-[12px] after:content-[''] after:absolute after:inset-0 after:rounded-[12px] after:bg-[linear-gradient(90deg,_#ffffff00_3.37%,_#ffffffcc_51.44%,_#ffffff00_100%)] after:-z-10">
                            <div className="flex relative bg-[#112D49] rounded-[10px] flex-wrap justify-between items-center max-w-[1440px] mx-auto py-[30px] gap-4 sm:gap-0 sm:flex-nowrap sm:justify-between px-4">
                                <p className="text-sm text-white text-center sm:text-left w-full sm:w-auto">
                                    term of service | Privacy Policy
                                </p>
                                <p className="text-sm text-white text-center sm:text-right w-full sm:w-auto">
                                    © {new Date().getFullYear()} Skaroob. All Rights Reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
