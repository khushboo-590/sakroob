
// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import CustomInput from './common/CustomInput';
// import CustomButton from './common/CustomButton'

// const SignUpPage = () => {
//     const [showPassword, setShowPassword] = useState(false);
//     const { register, handleSubmit, formState: { errors }, reset } = useForm();
//     const navigate = useNavigate();

//     const onSubmit = (formData) => {
//         const users = JSON.parse(localStorage.getItem('sakroobUsers')) || [];
//         const email = formData.email.toLowerCase();
//         const existingUser = users.find(user => user.email === email);

//         if (existingUser) {
//             toast.error("Email already exists");
//             return;
//         }

//         const newUser = {
//             firstName: formData.firstName,
//             lastName: formData.lastName,
//             email,
//             password: formData.password
//         };

//         users.push(newUser);
//         localStorage.setItem('sakroobUsers', JSON.stringify(users));
//         localStorage.setItem("isLoggedIn", "true");
//         localStorage.setItem("loggedInUser", JSON.stringify(newUser));
//         toast.success("Sign up successful!");
//         reset();
//         setTimeout(() => navigate("/"), 1500);
        
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-[url(./assets/images/png/Login.png)]">
//             <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-10 rounded-lg shadow-md w-full max-w-md">
//                 <h2 className="text-[32px] font-bold text-center mb-4 text-[#112D49] leading-[120%]">Sign Up</h2>
//                 <p className="text-base leading-[150%] text-center mt-2 text-[#112D49] ">Create your account to unlock access and stay updated with everything we offer.</p>
//                 <CustomInput
//                     placeholder="First Name"
//                     type="text"
//                     className="mb-2 mt-[24px] rounded-[102px] bg-[#F4F8F7] "
//                     {...register('firstName', {
//                         required: 'First name is required',
//                         minLength: { value: 2, message: 'Minimum 2 characters' },
//                     })}
//                 />
//                 {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}

//                 <CustomInput
//                     placeholder="Last Name"
//                     type="text"
//                     className="mb-2 rounded-[102px] bg-[#F4F8F7]"

//                     {...register('lastName', {
//                         required: 'Last name is required',
//                         minLength: { value: 2, message: 'Minimum 2 characters' },
//                     })} />
//                 {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}

//                 <CustomInput
//                     placeholder="Email address"
//                     type="email"
//                     className="mb-2 rounded-[102px] bg-[#F4F8F7]"

//                     {...register('email', {
//                         required: 'Email is required',
//                         pattern: {
//                             value: /^\S+@\S+$/i,
//                             message: 'Invalid email address',
//                         },
//                     })}
//                 />
//                 {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

//                 <div className="relative mb-2">
//                     <CustomInput
//                         placeholder="Password"
//                         className="mb-2 rounded-[102px] bg-[#F4F8F7]"

//                         type={showPassword ? 'text' : 'password'}
//                         {...register('password', {
//                             required: 'Password is required',
//                             minLength: { value: 6, message: 'Minimum 6 characters' },
//                         })}
//                     />
//                     <div
//                         onClick={() => setShowPassword(!showPassword)}
//                         className="absolute right-3 top-2 cursor-pointer"
//                     >
//                         {/* Eye Icon */}
//                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//                             <path d="M2 8C2 8 6.477 3 12 3C17.523 3 22 8 22 8" stroke="#3F566B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                             <path d="M21.544 13.045C21.848 13.471 22 13.685 22 14C22 14.316 21.848 14.529 21.544 14.955C20.178 16.871 16.689 21 12 21C7.31 21 3.822 16.87 2.456 14.955C2.152 14.529 2 14.315 2 14C2 13.684 2.152 13.471 2.456 13.045C3.822 11.129 7.311 7 12 7C16.69 7 20.178 11.13 21.544 13.045Z" stroke="#3F566B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                             <path d="M15 14C15 13.2044 14.6839 12.4413 14.1213 11.8787C13.5587 11.3161 12.7956 11 12 11C11.2044 11 10.4413 11.3161 9.87868 11.8787C9.31607 12.4413 9 13.2044 9 14C9 14.7956 9.31607 15.5587 9.87868 16.1213C10.4413 16.6839 11.2044 17 12 17C12.7956 17 13.5587 16.6839 14.1213 16.1213C14.6839 15.5587 15 14.7956 15 14Z" stroke="#3F566B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                         </svg>
//                     </div>
//                 </div>
//                 {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
//                 <CustomButton
//                     buttonText={'Sign Up'}
//                     buttonClass={'w-full text-white mt-6'}
//                     type='submit'
//                 />

//                 <p className="text-center text-base leading-[150%] mt-4 text-[#112D49] ">
//                     Already have an account? <NavLink to="/login" className="font-bold underline">Login</NavLink>

//                 </p>
//             </form>

//             <ToastContainer />
//         </div>
//     );
// };

// export default SignUpPage;
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, NavLink } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUpPage = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate();

    const onSubmit = (formData) => {
        const users = JSON.parse(localStorage.getItem('sakroobUsers')) || [];
        const email = formData.email.toLowerCase();
        const exists = users.find(user => user.email === email);
        if (exists) {
            toast.error("Email already exists");
            return;
        }

        const newUser = { ...formData, email };
        users.push(newUser);
        localStorage.setItem("sakroobUsers", JSON.stringify(users));
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("loggedInUser", JSON.stringify(newUser));
        toast.success("Signup successful");
        reset();
        setTimeout(() => navigate('/'), 1000);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded shadow-md max-w-md w-full">
                <h2 className="text-xl font-bold mb-4">Sign Up</h2>

                <input {...register("firstName", { required: "First name is required" })} placeholder="First Name" className="w-full mb-2 p-2 border rounded" />
                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}

                <input {...register("lastName", { required: "Last name is required" })} placeholder="Last Name" className="w-full mb-2 p-2 border rounded" />
                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}

                <input {...register("email", { required: "Email is required" })} placeholder="Email" className="w-full mb-2 p-2 border rounded" />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

                <input {...register("password", { required: "Password is required", minLength: { value: 6, message: "Minimum 6 characters" } })} placeholder="Password" type="password" className="w-full mb-2 p-2 border rounded" />
                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

                <button type="submit" className="w-full bg-green-600 text-white p-2 rounded">Sign Up</button>

                <p className="text-center mt-4">Already have an account? <NavLink to="/login" className="text-blue-600">Log In</NavLink></p>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SignUpPage;
