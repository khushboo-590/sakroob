
import React, { useState } from "react";
import Heading from "./common/Heading";
import Buttons from "./common/CustomButton";
import { useNavigate } from "react-router-dom";
import CustomInput from './common/CustomInput';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import CustomButton from "./common/CustomButton";

const LoginPage = ({ onLogin }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [loginError, setLoginError] = useState("");
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const onSubmit = (data) => {
        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (!storedUser) {
            setLoginError("No account found. Please sign up first.");
            return;
        }

        if (
            data.email === storedUser.email &&
            data.password === storedUser.password
        ) {
            const loginTime = new Date().toLocaleString();
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("loginTime", loginTime);
            setLoginError("");
            onLogin();
            navigate("/home"); 
        } else {
            setLoginError("Invalid email or password.");
        }
    };

    return (
        <div className="bg-[url(./assets/images/png/Login.png)] bg-no-repeat bg-cover bg-center min-h-screen justify-center flex items-center">
            <div className="max-w-[590px] mx-auto px-3">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="bg-white p-[64px] rounded-[15px] max-w-[590px] w-full"
                >
                    <Heading headText="Welcome back!" />
                    <p className="text-base leading-[150%] text-center mt-2 text-[#112D49] ">Create your account to unlock access and stay updated with everything we offer.</p>

                    <div className="pt-[24px]">
                        <CustomInput
                            type="text"
                            placeholder="Email address"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Invalid email format",
                                },
                            })}
                            className="bg-[#F4F8F7] max-w-[462px] w-full rounded-full"
                        />
                        {errors.email && (
                            <p className="text-red-600 text-sm mt-1 px-2">
                                {errors.email.message}
                            </p>
                        )}
                        <div className="relative mb-2">
                            <CustomInput
                                placeholder="Password"
                                className="mb-2 mt-[24px] rounded-[102px] bg-[#F4F8F7] border-none outline-none focus:outline-none focus:ring-0 focus:border-none"

                                type={showPassword ? 'text' : 'password'}
                                {...register('password', {
                                    required: 'Password is required',
                                    minLength: { value: 6, message: 'Minimum 6 characters' },
                                })}
                            />
                            <div
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-2 cursor-pointer"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M2 8C2 8 6.477 3 12 3C17.523 3 22 8 22 8" stroke="#3F566B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M21.544 13.045C21.848 13.471 22 13.685 22 14C22 14.316 21.848 14.529 21.544 14.955C20.178 16.871 16.689 21 12 21C7.31 21 3.822 16.87 2.456 14.955C2.152 14.529 2 14.315 2 14C2 13.684 2.152 13.471 2.456 13.045C3.822 11.129 7.311 7 12 7C16.69 7 20.178 11.13 21.544 13.045Z" stroke="#3F566B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15 14C15 13.2044 14.6839 12.4413 14.1213 11.8787C13.5587 11.3161 12.7956 11 12 11C11.2044 11 10.4413 11.3161 9.87868 11.8787C9.31607 12.4413 9 13.2044 9 14C9 14.7956 9.31607 15.5587 9.87868 16.1213C10.4413 16.6839 11.2044 17 12 17C12.7956 17 13.5587 16.6839 14.1213 16.1213C14.6839 15.5587 15 14.7956 15 14Z" stroke="#3F566B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                        {errors.password && (
                            <p className="text-red-600 text-sm mt-1 px-2">
                                {errors.password.message}
                            </p>
                        )}
                        {loginError && (
                            <p className="text-red-600 text-sm mt-3 px-2">{loginError}</p>
                        )}

                        <a
                            href="#"
                            className="font-semibold pt-[12px] items-end flex justify-end underline text-[#112D49] hover:text-red-600 transition-all ease-linear duration-100"
                        >
                            Forgot password?
                        </a>

                        <CustomButton
                            buttonText="Log in"
                            buttonClass="mt-[40px] !max-w-[462px] !w-full text-white"
                            type="submit"
                        />

                        <p className="text-[#41576D] pt-[20px] text-center">
                            Don’t have an account?{" "}
                            <button
                                onClick={() => navigate("/login/signup")}
                                className="font-semibold underline text-[#112D49] hover:text-red-600 transition-all ease-linear duration-100"
                            >
                                Create account
                            </button>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
