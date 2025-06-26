
import React from "react";
import footerLogo from '../assets/images/svg/logo.svg'
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
                        <a href="#">
                            <img className="mx-auto flex pointer-events-none " src={footerLogo} alt="footer-logo" /></a>
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
                                    Term of Service | Privacy Policy
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
