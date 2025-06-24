import React from "react";
import bgImg from "../assets/images/png/empty-chair.jpg";
import Custombtn from "./common/Custombtn";
import CustomHeading from "./common/CustomHeading";

const SakroobCircle = () => {
    return (
        <footer className="relative w-full px-3 transform translate-y-[130px] -mt-[130px] font-montserrat">
            <div
                className="relative w-full flex items-center justify-center max-w-[1140px] mx-auto rounded-[24px] py-6 md:[55px] lg:py-[88px]"
                style={{
                    backgroundImage: `url(${bgImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-[#73A4E0] opacity-[70%] z-0 rounded-[24px]" />
                <div className="relative rounded-[16px] p-8">
                    <CustomHeading children={"Join the Sakroob Circle"} className={"text-white"}/>
                    <p className="text-base text-white text-center leading-[150%] mb-[46px]">
                        Exclusive deals, early access, and more in your inbox.
                    </p>
                    <form className="flex justify-center mt-[46px]">
                        <div className="relative w-full max-w-[469px]">
                            <input
                                type="email"
                                placeholder="Enter your email..."
                                className="px-[18px] py-[22px] w-full rounded-full outline-none bg-white"
                            />
                            <Custombtn
                                btnclass="absolute right-2 top-1/2 -translate-y-1/2 bg-[#0B2341] text-white rounded-full hover:bg-[#1d3c66] font-medium text-base leading-[100%]"
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
