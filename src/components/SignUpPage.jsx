import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import CustomInput from './common/CustomInput'
import { NavLink, useNavigate } from 'react-router-dom'
import CustomButton from './common/CustomButton'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import HeadingContent from './common/HeadingContent'

const SignUpPage = () => {
    const [togglePassword, setTogglePassword] = useState(false)
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const showPassword = () => {
        setTogglePassword(!togglePassword)
    }

    const onSubmit = (formData) => {
        // const existingUser = JSON.parse(localStorage.getItem("sakroobUser"));
        localStorage.setItem("sakroobUser", JSON.stringify(formData));


        if (existingUser && existingUser.email === formData.email) {
            toast.error("Email already exists", { position: "top-right" });
            return;
        }

        localStorage.setItem("sakroobUser", JSON.stringify(formData));
        toast.success("Sign up successful!", { position: "top-right" });

        reset();

        setTimeout(() => {
            navigate("/");
        }, 1500);
    };


    const onError = () => {
        toast.error("Please fix the form errors", { position: "top-right" });
    }

    return (
        <div className='w-full min-h-screen bg-[url(./assets/img/png/login-bg-img.png)] bg-no-repeat bg-cover bg-center flex justify-center items-center'>
            <div className="p-3 w-full">
                <form
                    onSubmit={handleSubmit(onSubmit, onError)}
                    className="bg-white md:p-16 sm:p-10 p-7 rounded-[15px] border border-[#E3E3E3] shadow-[0px_10px_30px_0px_#0000000D] w-full max-w-[590px] mx-auto"
                >
                    <HeadingContent
                        heading={'Sign up'}
                        para={'Create your account to unlock access and stay updated with everything we offer.'}
                        paraClass={'sm:text-[16px] text-[14px] font-normal max-w-[374px] mx-auto text-[#112D49] text-center mt-2 mb-6'}
                        headingClass={'sm:text-[32px] text-[24px] font-bold text-[#112D49] text-center leading-[120%]'}
                    />

                    <div className="flex flex-col gap-3">
                        <CustomInput
                            placeholder={'First Name'}
                            type={'text'}
                            {...register('firstName', {
                                required: 'First name is required',
                                minLength: {
                                    value: 2,
                                    message: 'Minimum 2 characters',
                                },
                            })}
                            error={errors.firstName}
                        />

                        <CustomInput
                            placeholder={'Last Name'}
                            type={'text'}
                            {...register('lastName', {
                                required: 'Last name is required',
                                minLength: {
                                    value: 2,
                                    message: 'Minimum 2 characters',
                                },
                            })}
                            error={errors.lastName}
                        />

                        <CustomInput
                            placeholder={'Email address'}
                            type={'email'}
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Enter a valid email',
                                },
                            })}
                            error={errors.email}
                        />

                        <CustomInput
                            placeholder={'Password'}
                            type={togglePassword ? 'text' : 'password'}
                            {...register('password', {
                                required: 'Password is required',
                                pattern: {
                                    value: /^(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,}$/,
                                    message: 'Min 6 chars, 1 uppercase, 1 special char',
                                },
                            })}
                            error={errors.password}
                        >
                            <div onClick={showPassword}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 8C2 8 6.477 3 12 3C17.523 3 22 8 22 8" stroke="#3F566B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M21.544 13.045C21.848 13.471 22 13.685 22 14C22 14.316 21.848 14.529 21.544 14.955C20.178 16.871 16.689 21 12 21C7.31 21 3.822 16.87 2.456 14.955C2.152 14.529 2 14.315 2 14C2 13.684 2.152 13.471 2.456 13.045C3.822 11.129 7.311 7 12 7C16.69 7 20.178 11.13 21.544 13.045Z" stroke="#3F566B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M15 14C15 13.2044 14.6839 12.4413 14.1213 11.8787C13.5587 11.3161 12.7956 11 12 11C11.2044 11 10.4413 11.3161 9.87868 11.8787C9.31607 12.4413 9 13.2044 9 14C9 14.7956 9.31607 15.5587 9.87868 16.1213C10.4413 16.6839 11.2044 17 12 17C12.7956 17 13.5587 16.6839 14.1213 16.1213C14.6839 15.5587 15 14.7956 15 14Z" stroke="#3F566B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </CustomInput>
                    </div>

                    <CustomButton buttonText={'Sign Up'} buttonClass={'w-full text-white mt-6'} type="submit" />

                    <div className="w-full flex sm:flex-row flex-col justify-center gap-1 mt-5 items-center">
                        <p className='text-nowrap sm:text-[16px] text-[14px]'>Already a member?</p>
                        <NavLink to={'/'} className='sm:text-[16px] text-[14px] font-semibold underline text-[#112D49] underline-offset-2 text-nowrap'>Log in</NavLink>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default SignUpPage