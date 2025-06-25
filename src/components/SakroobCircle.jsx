// import React from "react";
// import bgImg from "../assets/images/png/empty-chair.jpg";
// import Custombtn from "./common/CustomButton";
// import CustomHeading from "./common/Heading";

// const SakroobCircle = () => {
//     return (
//         <footer className="relative w-full px-3 transform translate-y-[130px] -mt-[130px] font-montserrat">
//             <div
//                 className="relative w-full flex items-center justify-center max-w-[1140px] mx-auto rounded-[24px] py-6 md:[55px] lg:py-[88px]"
//                 style={{
//                     backgroundImage: `url(${bgImg})`,
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                 }}>
//                 <div className="absolute inset-0 bg-[#73A4E0] opacity-[70%] z-0 rounded-[24px]" />
//                 <div className="relative rounded-[16px] p-8">
//                     <CustomHeading children={"Join the Sakroob Circle"} className={"text-white"} />
//                     <p className="text-base text-white text-center leading-[150%] mb-[46px]">
//                         Exclusive deals, early access, and more in your inbox.
//                     </p>
//                     <form className="flex justify-center mt-[46px]">
//                         <div className="relative w-full max-w-[469px]">
//                             <input
//                                 type="email"
//                                 placeholder="Enter your email..."
//                                 className="px-[18px] py-[22px] w-full rounded-full outline-none bg-white"
//                             />
//                             <Custombtn
//                                 btnclass="absolute right-2 top-1/2 -translate-y-1/2 bg-[#0B2341] text-white hover:bg-white hover:text-[#112D49] hover:border-[#112D49] hover:border cursor-pointer rounded-full hover:bg-[#1d3c66] font-medium text-base leading-[100%]"
//                                 btntext="Join Now"
//                             />
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </footer>

//     );
// };

// export default SakroobCircle;

import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import bgImg from "../assets/images/png/empty-chair.jpg";

import 'react-toastify/dist/ReactToastify.css';
import CustomButton from "./common/CustomButton";
import HeadingContent from "./common/HeadingContent";

const SakroobCircle = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = () => {
        toast.success("✅ Successfully Joined the Sakroob Circle!");
        reset();
    };
    const onError = () => {
        toast.error("❌ Please enter a valid email address.");
    };

    return (
        <div className="p-6 relative min-h-[386px]">
            <div className="relative -bottom-[141px]  bg-cover bg-no-repeat bg-center min-h-[386px] max-w-[1140px] left-1/2 -translate-x-1/2 rounded-[8px] flex justify-center items-center flex-col w-full"
                style={{
                                backgroundImage: `url(${bgImg})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                }}>
                <div className="absolute inset-0 bg-[#73A4E0] opacity-[70%] z-0 rounded-[24px]"/>
                <div className="p-6 relative z-10">
                    <HeadingContent heading={'Join the Sakroob Circle'} para={'Exclusive drops, early access, and maker tips in your inbox.'} headingClass={'md:text-[48px] sm:text-[36px] text-[28px] font-bold text-white leading-[120%] text-center mb-4'} paraClass={'sm:text-[16px] text-[14px] font-normal text-white text-center'} />
                    <form
                        onSubmit={handleSubmit(onSubmit, onError)}
                        className="mx-auto sm:flex justify-center mt-[46px] relative z-10 max-w-[486px]"
                    >
                        <div className="w-full relative">
                            <input
                                type="email"
                                placeholder="Enter your email...."
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Invalid email format",
                                    },
                                })}
                                className="bg-white py-[13.35px] sm:py-[22px] px-[18px] rounded-[50px] max-w-[489px] w-full leading-[140%] text-[#8392A0] border border-transparent focus:outline-none focus:border-blue-500"
                            />
                            {errors.email && (
                                <p className="text-red-600 text-sm mt-1 pl-4">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        <CustomButton
                            buttonText="Join Now"
                            buttonClass="!py-[16px] !px-[20px] min-[425px] sm:absolute right-[8.5px] top-[8.5px] text-white max-sm:w-full max-sm:mt-4"
                            type="submit"
                        />
                    </form>
                </div>
            </div></div>
    );
};

export default SakroobCircle;
