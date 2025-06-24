import React from "react";
import logo from '../assets/images/svg/header-logo.svg'
import { navItems } from "../utils/helper";
import contactIcon from '../assets/images/svg/contact-icon.svg'


const Navbar = () => {
    return (
        <header className="bg-[#0D2C47] text-white font-montserrat relative z-10 ">
            <div className="max-w-[1384px] mx-auto flex items-center justify-between px-6 relative z-20 py-7 ">
                <div className="">
                    <img
                        src={logo}
                        alt="Sakroob"
                        className="absolute top-full  transform  -translate-y-[45%]"
                    />

                </div>     
                <nav className="hidden md:flex space-x-[32px] ">
                    {navItems.map((item, index) => (
                        item.dropdown ? (
                            <div key={index} className="relative group">
                                <button className="flex items-center gap-1">
                                    {item.label} <span>
                                        <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.34863 4.72254L5.3294 7.70331L8.31018 4.72254" stroke="white" stroke-width="0.851649" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                    </span>
                                </button>
                            </div>
                        ) : (
                            <a key={index} href="#" className="hover:underline text-base leading-[150%]">
                                {item.label}
                            </a>
                        )
                    ))}
                </nav>

                <div className="flex items-center space-x-4 text-white text-lg">
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 23.2511C4.50108 21.2416 5.64889 19.4525 7.26668 18.1593C8.88446 16.8662 10.8825 16.1407 12.9531 16.0947C15.0237 16.0486 17.052 16.6846 18.7256 17.9045C20.3993 19.1245 21.6255 20.8608 22.2154 22.8461" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13.5621 12.1382H12.6483C11.5035 12.1382 10.4055 11.6834 9.59593 10.8738C8.78638 10.0643 8.33157 8.96627 8.33157 7.82139V7.42627C8.33157 6.18576 8.82436 4.99604 9.70153 4.11887C10.5787 3.24171 11.7684 2.74893 13.0089 2.74893C13.6493 2.74828 14.2835 2.87394 14.8752 3.1187C15.4669 3.36345 16.0046 3.7225 16.4574 4.17531C16.9102 4.62811 17.2693 5.16577 17.514 5.75751C17.7588 6.34925 17.8844 6.98345 17.8838 7.62381V7.82139C17.8838 8.96627 17.429 10.0643 16.6194 10.8738C15.8099 11.6834 14.7119 12.1382 13.567 12.1382H13.5621Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>                    
                    <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.819 17.579H9.11499L6.20312 5.2197H25.2365L22.819 17.579Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12.1341 22.4831C12.5437 22.4831 12.8757 22.1511 12.8757 21.7416C12.8757 21.332 12.5437 21 12.1341 21C11.7246 21 11.3926 21.332 11.3926 21.7416C11.3926 22.1511 11.7246 22.4831 12.1341 22.4831Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M19.5502 22.4831C19.9597 22.4831 20.2917 22.1511 20.2917 21.7416C20.2917 21.332 19.9597 21 19.5502 21C19.1406 21 18.8086 21.332 18.8086 21.7416C18.8086 22.1511 19.1406 22.4831 19.5502 22.4831Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M23.7523 11.3994H16.8311" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6.23283 5.30872L4.96228 4.04312C4.35001 3.42926 3.52963 3.06758 2.66345 3.02966L2.00098 3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.3674 3.93242C21.1407 3.18909 19.6876 2.8757 18.2509 3.04468C16.8142 3.21366 15.4809 3.85475 14.474 4.86078L13.0034 6.26167H12.9689L11.5154 4.86078C10.5086 3.85475 9.17532 3.21366 7.7386 3.04468C6.30187 2.8757 4.84874 3.18909 3.62212 3.93242C2.90527 4.38164 2.30096 4.97986 1.85314 5.68356C1.40531 6.38726 1.12525 7.17873 1.03336 8.00035C0.941459 8.82198 1.04003 9.65309 1.32189 10.4332C1.60375 11.2133 2.06182 11.9228 2.66275 12.5101L12.9287 23L13.1355 22.7999L13.1987 22.861L23.344 12.5101C23.9441 11.9217 24.401 11.2112 24.6815 10.4304C24.962 9.64954 25.059 8.81799 24.9654 7.9963C24.8719 7.1746 24.5901 6.38345 24.1407 5.68044C23.6912 4.97742 23.0854 4.38026 22.3674 3.93242V3.93242Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>                    <div className="w-8 h-8 flex items-center justify-center">
                        <img src={contactIcon} alt="User" className="w-5 h-5" />
                    </div>
                </div>
            </div>
            {/* <div className="bg-[#F5F9FD] py-4 ">
                <div className="max-w-[700px] mx-auto px-4">
                    <div className="flex items-center bg-white rounded-full shadow-md px-4 py-2">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="flex-1 outline-none text-gray-700 placeholder-gray-400 bg-transparent"
                        />
                        <svg
                            className="w-5 h-5 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
            </div> */}
        </header>
    );
};

export default Navbar;
