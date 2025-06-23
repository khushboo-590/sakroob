import React from 'react';
import logo from '../assets/images/svg/logo.svg'
import face from '../assets/images/svg/face.svg'
import insta from '../assets/images/svg/insta.svg'
import x from "../assets/images/svg/x.svg"
import cemara from '../assets/images/svg/m.svg'
const Footer = () => {
    return (
        <div className="bg-[#0B2341]  pt-32 text-center px-4">
                   <div className="flex justify-center mb-6 mt-[75px]">
                       <img src={logo} alt="Sakroob" className="" />
                   </div>
                   <p className="text-base leading-[150%]  text-white/80 mb-[27px]  mx-auto max-w-[338px]">
                       Commodo egestas etiam arcu curabitur aliquam volutpat a gravida.
                   </p>
        
                   <div className="flex flex-wrap justify-center gap-6 text-base leading-[150%] font-medium mb-[27px] text-white">
                       <a href="#">Shipping</a>
                       <a href="#">Warranty</a>
                       <a href="#">FAQs</a>
                       <a href="#">Blog</a>
                       <a href="#">Contact</a>
                   </div>
                   <div className="flex justify-center gap-4 mb-[82px]">
                       <a href="#" className="hover:text-gray-400">
                           <img src={face}></img>
                       </a>
                       <a href="#" className="hover:text-gray-400">
                           <img src={insta}></img>
        
                       </a>
                       <a href="#" className="hover:text-gray-400">
                           <img src={x}></img>
        
                       </a>
                       <a href="#" className="hover:text-gray-400">
                           <img src={cemara}></img>
        
                       </a>
                   </div>
        
                   <div className="text-sm flex justify-between  text-white opacity-80 py-[30px]">
                       <p className="mb-1">Terms of Service | Privacy Policy</p>
                       <p>© 2025 Sakroob. All rights reserved.</p>
                   </div>
               </div>
    );
};

export default Footer;
