import React from "react";
import { useForm } from "react-hook-form";
import bgImg from "../assets/images/png/empty-chair.jpg";
import CustomButton from "./common/CustomButton";
import HeadingContent from "./common/HeadingContent";

const SakroobCircle = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Form submitted with email:", data.email);
    };

    return (
        <div className="relative p-4 sm:p-6 md:p-8 min-h-[240px] sm:min-h-[300px] md:min-h-[340px] lg:min-h-[386px]">
            <div
                className="relative -bottom-10 md:-bottom-[80px] lg:-bottom-[141px] rounded-[24px]  bg-cover bg-no-repeat bg-center min-h-[386px] max-w-[1140px] left-1/2 -translate-x-1/2 flex justify-center items-center flex-col w-full"
                style={{
                    backgroundImage: `url(${bgImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-[#73A4E0] opacity-[70%] z-0 rounded-[24px]" />

                <div className="p-6 relative z-10">
                    <HeadingContent
                        heading="Join the Sakroob Circle"
                        para="Exclusive drops, early access, and maker tips in your inbox."
                        headingClass="md:text-[48px] sm:text-[36px] text-[28px] font-bold text-white leading-[120%] text-center mb-4"
                        paraClass="sm:text-[16px] text-[14px] font-normal text-white text-center"
                    />

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="mx-auto sm:flex justify-center mt-[46px] relative z-10 w-full md:max-w-[486px]"
                    >
                        <div className="w-full relative">
                            <input
                                type="email"
                                placeholder="Enter your email...."
                                className="bg-white py-[13.35px] sm:py-[22px] px-[18px] rounded-[50px] max-w-[489px] w-full leading-[140%] text-[#8392A0] border border-transparent focus:outline-none focus:border-blue-500"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^\S+@\S+\.\S+$/,
                                        message: "Enter a valid email",
                                    },
                                })}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1 absolute left-4">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>
                        <CustomButton
                            type="submit"
                            buttonText="Join Now"
                            buttonClass="!py-[16px] !px-[20px] min-[425px] sm:absolute right-[8.5px] top-[8.5px] text-white max-sm:w-full max-sm:mt-4 hover:text-[#112D49] hover:bg-white hover:border border-[#112D49]"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SakroobCircle;
