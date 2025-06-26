
import React, { useState } from 'react';
import CustomInput from './common/CustomInput';
import { NavLink, useNavigate } from 'react-router-dom';
import CustomButton from './common/CustomButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HeadingContent from './common/HeadingContent';
import { useForm } from 'react-hook-form';

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        const allUsers = JSON.parse(localStorage.getItem('sakroobUsers')) || [];
        const user = allUsers.find(
            (u) => u.email === data.email.toLowerCase() && u.password === data.password
        );

        if (user) {
            toast.success("Login successful!");
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("loggedInUser", JSON.stringify(user));
            setTimeout(() => {
                navigate('/');
                window.location.reload();
            }, 1500);
        } else {
            toast.error("Invalid email or password");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-[url(./assets/images/png/Login.png)]">
            <form
                onSubmit={handleSubmit(onSubmit, )}
                className='bg-white md:p-16 sm:p-10 p-7 rounded-[15px] border border-[#E3E3E3] shadow-[0px_10px_30px_0px_#0000000D] w-full max-w-[590px] mx-auto'
            >
                <HeadingContent
                    heading={'Welcome back!'}
                    para={'Log in below to access your account and keep things running smoothly.'}
                    paraClass='sm:text-[16px] text-[14px] font-normal max-w-[326px] mx-auto text-[#112D49] text-center mt-2 mb-6'
                    headingClass='sm:text-[32px] text-[24px] font-bold text-[#112D49] text-center leading-[120%]'
                />

                <CustomInput
                    type="email"
                    placeholder="Email"
                    {...register("email", { required: "Email is required" })}
                    className=" w-full p-2 mb-2 rounded"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                <div className='flex justify-between relative'>
               <CustomInput
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    {...register("password", { required: "Password is required" })}
                    className=" w-full p-2 mb-2 rounded"
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                <div onClick={() => setShowPassword(!showPassword)} className="cursor-pointer  ">
                    <svg className='absolute right-0  mr-4 mt-5' width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path d="M2 8C2 8 6.477 3 12 3C17.523 3 22 8 22 8" stroke="#3F566B" strokeWidth="1.5" />
                        <path d="M21.544 13.045C21.848 13.471 22 13.685 22 14C22 14.316 21.848 14.529 21.544 14.955C20.178 16.871 16.689 21 12 21C7.31 21 3.822 16.87 2.456 14.955C2.152 14.529 2 14.315 2 14C2 13.684 2.152 13.471 2.456 13.045C3.822 11.129 7.311 7 12 7C16.69 7 20.178 11.13 21.544 13.045Z" stroke="#3F566B" strokeWidth="1.5" />
                        <path d="M15 14C15 13.2044 14.6839 12.4413 14.1213 11.8787C13.5587 11.3161 12.7956 11 12 11C11.2044 11 10.4413 11.3161 9.87868 11.8787C9.31607 12.4413 9 13.2044 9 14C9 14.7956 9.31607 15.5587 9.87868 16.1213C10.4413 16.6839 11.2044 17 12 17C12.7956 17 13.5587 16.6839 14.1213 16.1213C14.6839 15.5587 15 14.7956 15 14Z" stroke="#3F566B" strokeWidth="1.5" />
                        </svg>
                    </div>
                </div>

                <div className='w-full flex justify-end items-center'>
                    <NavLink
                        to={'/forgetpassword'}
                        className='mt-3 sm:text-[16px] text-[14px] font-semibold underline text-[#112D49] underline-offset-2'
                    >
                        Forgot password?
                    </NavLink>
                </div>

                <CustomButton
                    buttonText={'Log in'}
                    buttonClass={'w-full text-white mt-6'}
                    type='submit'
                />

                <div className='w-full flex sm:flex-row flex-col justify-center gap-1 mt-5 items-center'>
                    <p className='text-nowrap sm:text-[16px] text-[14px]'>Don’t have an account?</p>
                    <NavLink
                        to={'/signup'}
                        className='sm:text-[16px] text-[14px] font-semibold underline text-[#112D49] underline-offset-2 text-nowrap'
                    >
                        Create account
                    </NavLink>
                </div>
            </form>

            <ToastContainer />
        </div>
    );
};

export default LoginPage;
