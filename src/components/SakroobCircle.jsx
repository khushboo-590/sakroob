import React from "react";
import bgImg from "../assets/images/png/Final -image.png";
import Custombtn from "./common/Custombtn";

const SakroobCircle = () => {
    return (
        <footer className="relative w-full px-3 transform translate-y-[130px]">
            <div
                className="relative w-full  flex items-center justify-center max-w-[1140px] mx-auto rounded-[24px] py-[88px]"
                style={{
                    backgroundImage: `url(${bgImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >  <div className="absolute inset-0 bg-[#73A4E0]  opacity-[70%]  z-0  rounded-[24px]" />
                <div className="relative rounded-[16px] p-8 ">
                    <h2 className="text-5xl font-bold mb-4 text-white leading-[120%]">Join the Sakroob Circle</h2>
                    <p className="text-base text-white text-center  leading-[150%] mb-[46px]">
                        Exclusive deals, early access, and more in your inbox.
                    </p>
                    <form className="flex justify-center mt-[46px] ">
                        <div className="relative w-full max-w-[469px]">
                            <input
                                type="email"
                                placeholder="Enter your email..."
                                className="px-[18px] py-[22px] w-full rounded-full outline-none bg-white"
                            />
                            <Custombtn
                                btnclass="absolute right-2 top-1/2 -translate-y-1/2 bg-[#0B2341] text-white  rounded-full hover:bg-[#1d3c66] font-medium text-base leading-[100%]"
                                btntext="Join Now"
                            />
                        </div>
                    </form>


                </div>
            </div>

        </footer>
    );
};

export default SakroobCircle;
