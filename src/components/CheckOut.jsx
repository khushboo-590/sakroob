import React, { useState } from 'react';
import InputField from './common/InputField';
import { useNavigate } from 'react-router-dom';
import CustomButton from "./common/CustomButton";
import visa from "../assets/images/png/visa.png";
import mastercard from "../assets/images/png/master.png";
import amex from "../assets/images/png/express.png";
import paypal from "../assets/images/png/paypal.png";
import chairImage from '../assets/images/png/chairImg.png';

const CheckoutPage = () => {
    const navigate = useNavigate();
    const [selectedMethod, setSelectedMethod] = useState("credit");
    const [coupon, setCoupon] = useState("");
    const [couponMessage, setCouponMessage] = useState("");

    const handleApplyCoupon = () => {
        if (coupon.trim() === "") {
            setCouponMessage("Please enter  code.");
        } else {
            setCouponMessage(" applied successfully!");
            setTimeout(() => setCouponMessage(""), 3000);
        }
    };

    return (
        <div className="min-h-screen py-8 md:py-16 lg:py-[120px] overflow-hidden px-4">
            <div className="max-w-[1140px] mx-auto px-3">
                <div className="flex flex-col lg:flex-row gap-6">
                    <div className="w-full lg:w-8/12">
                    <div className="mb-[35px]">
                    <div className="flex justify-between items-center mb-5">
                        <h4 className="text-2xl font-bold text-[#112D49]">Contact</h4>
                        <CustomButton
                            buttonClass="text-white"
                            buttonText="Log in"
                            onClick={() => {
                                navigate('/');
                                window.scrollTo(0, 0);
                            }}
                        />

                    </div>
                    <InputField label="Email or phone number" value="tim.jennings@example.com" />
                </div>
                <div className="mb-[35px]">
                    <h2 className="text-2xl font-bold text-[#112D49] mb-5">Delivery</h2>

                    <InputField label="Country/Region" value="Guinea" className="mb-[26px]" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-[26px]">
                        <InputField label="First name (Optional)" value="First name" />
                        <InputField label="Last name" value="Last name" />
                    </div>

                    <InputField label="Address" value="tim.jennings@example.com" className="mb-4" />

                    <div className="flex items-center mb-[42px]">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.91906 0.4296C3.62783 1.54951 1.25291 3.99464 0.299203 7.26104C0.112201 7.87699 0 8.97823 0 9.98615C0 12.8233 0.916308 15.0631 2.89853 17.0602C6.78816 20.9799 13.221 20.9799 17.1106 17.0602C18.3262 15.8283 19.2425 14.3165 19.71 12.7113C20.084 11.4047 20.1027 8.81025 19.7287 7.37303C18.8498 3.99464 16.0073 1.15754 12.6226 0.280279C10.9583 -0.149019 8.39637 -0.074358 6.91906 0.4296ZM11.6128 1.30686C16.1382 2.14679 19.4482 6.73842 18.7563 11.2181C18.1579 15.0071 15.2032 17.9935 11.3884 18.6841C5.70355 19.692 0.374003 14.4658 1.27161 8.71692C2.03832 3.80799 6.76946 0.410934 11.6128 1.30686Z" fill="#C9CFD2" />
                            <path d="M9.72361 4.66669C9.51791 4.87201 9.34961 5.20798 9.34961 5.41329C9.34961 5.61861 9.51791 5.95458 9.72361 6.1599C9.92931 6.36522 10.2659 6.5332 10.4716 6.5332C10.6773 6.5332 11.0139 6.36522 11.2196 6.1599C11.4253 5.95458 11.5936 5.61861 11.5936 5.41329C11.5936 5.20798 11.4253 4.87201 11.2196 4.66669C11.0139 4.46137 10.6773 4.29339 10.4716 4.29339C10.2659 4.29339 9.92931 4.46137 9.72361 4.66669Z" fill="#C9CFD2" />
                            <path d="M9.4617 7.89549C8.7511 8.11947 8.13399 8.41811 8.07789 8.54877C8.04049 8.67942 8.11529 8.73542 8.26489 8.67942C8.39579 8.62343 8.6202 8.66076 8.7698 8.75408C9.0129 8.90341 8.9942 9.27671 8.7324 11.5165C8.33969 14.7269 8.33969 14.9882 8.7511 15.3615C9.1999 15.7722 9.6861 15.7535 10.4154 15.3242C11.0512 14.9322 12.0984 13.327 11.874 13.1031C11.7992 13.0284 11.687 13.0844 11.6496 13.2151C11.4813 13.6817 10.6959 14.4656 10.5463 14.3163C10.4154 14.2043 10.8829 9.46336 11.1634 7.97015C11.2943 7.3542 11.1821 7.3542 9.4617 7.89549Z" fill="#C9CFD2" />
                        </svg>

                        <p className="text-base text-[#112D49] opacity-80 ml-2">
                            Add a house number if you have one
                        </p>
                    </div>

                    <InputField
                        label="Apartment, Suite, etc. (optional)"
                        value="2464 Royal Ln. Mesa, New Jersey 45463"
                        className="mb-[26px]"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <InputField label="City" value="Ajman" />
                        <InputField label="Emirate" value="Abu Dhabi" />
                    </div>

                    <div className="flex items-center mb-[42px]">
                        <input type="checkbox" className="mr-2" />
                        <p className="text-[#112D49] opacity-50 leading-[150%]">
                            Save this information for next time
                        </p>
                    </div>

                    <h2 className="text-lg font-medium mb-5 text-[#112D49]">Shipping method</h2>
                    <div className="bg-[#F4F8F7] rounded-lg px-[26px] py-[13px] mb-[26px] flex justify-between items-center">
                        <label className="text-base text-[#112D49] opacity-50 leading-[150%]">Standard (Example)</label>
                        <input
                            type="text"
                            defaultValue="AED 20.00"
                            className="bg-[#F4F8F7] outline-none text-base text-[#112D49] opacity-80 text-right w-auto"
                        />
                    </div>
                </div>
                     <div className="max-w-[752px] w-full mx-auto   text-[#0D2C47] mb-7 md:mb-[70] lg:mb-[108px]">
                                <h2 className="text-2xl font-bold leading-[120%] mb-1">Payment</h2>
                                <p className="text-base leading-[150%] opacity-80 mb-5">
                                    All transactions are secure and encrypted.
                                </p>
                    
                                <div className="bg-[#FBFBFB] py-[20px] px-7 rounded-lg  border-[#112D4914] border">
                                    <div className="flex justify-between items-center flex-wrap gap-4">
                                        <div className="flex items-center gap-2 bg-white mb-[19px]">
                                            <label className="flex items-center gap-2">
                                                <input
                                                    type="radio"
                                                    name="method"
                                                    checked={selectedMethod === "paypal"}
                                                    onChange={() => setSelectedMethod("paypal")}
                                                    className="scale-125 accent-blue-600"
                                                />
                                                <img src={paypal} alt="PayPal" className="h-6" />
                                            </label>
                    
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <img src={visa} alt="Visa" className="h-6" />
                                            <img src={mastercard} alt="MasterCard" className="h-6" />
                                            <img src={amex} alt="Amex" className="h-6" />
                                        </div>
                                    </div>
                                    <div className="bg-[#FBFBFB] ">
                                        <div className="flex items-center gap-2 mb-[26px]">
                    
                                            <input
                                                type="radio"
                                                name="method"
                                                checked={selectedMethod === "credit"}
                                                onChange={() => setSelectedMethod("credit")} className="accent-blue-600 scale-125"
                                            />
                                            <label className="text-base leading-[150%] opacity-80">  Credit Card/ Debit Card</label>
                                        </div>
                                        <div className="w-full    flex gap-4 mb-[14px] ">
                                            <label className="text-lg w-1/2 leading-[150%] text-[#112D49]  font-medium ">
                                                Credit Number                    </label>
                                            <label className="text-lg w-1/2 leading-[150%] text-[#112D49] block  font-medium ">
                                                Name on Card
                                            </label>
                                        </div>
                                        <div className="flex flex-col sm:flex-row gap-4 pr-4 mb-7">
                                            <input
                                                type="text"
                                                placeholder=""
                                                className="flex-1 bg-[#F4F8F7] rounded-lg h-[52px] text-base text-[#112D49] outline-none"
                                            />
                                            <input
                                                type="text"
                                                placeholder=""
                                                className="flex-1 bg-[#F4F8F7] rounded-lg h-[52px] text-base text-[#112D49] outline-none"
                                            />
                                        </div>
                    
                                        <div className="w-full flex gap-4 mb-[14px]">
                                            <label className="w-1/2 text-lg leading-[150%] text-[#112D49] font-medium text-left">
                                                Expire Date
                                            </label>
                                            <label className="w-1/2 text-lg leading-[150%] text-[#112D49] font-medium text-left">
                                                CVC
                                            </label>
                                        </div>
                    
                                        <div className="grid sm:grid-cols-2 gap-4 mb-7">
                                            <input
                                                type="text"
                                                placeholder="MM / YY"
                                                className="bg-[#F4F8F7] rounded-lg h-[52px] w-full outline-none pl-[16px]"
                                            />
                                            <div className="bg-[#F4F8F7] rounded-lg h-[52px] w-full outline-none relative">
                                                <svg className="absolute right-4 top-1/2 transform -translate-y-1/2" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0.890625 0.578125C0.804688 0.609375 0.632812 0.75 0.523438 0.890625L0.3125 1.14062V7.05469C0.3125 12.9453 0.3125 12.9766 0.476562 13.1875C0.828125 13.6406 0.671875 13.625 5.78125 13.625C8.35938 13.625 10.4688 13.6562 10.4688 13.6875C10.4688 13.8203 11.2422 14.5625 11.6641 14.8281C13.0859 15.7344 15.0391 15.7344 16.4609 14.8281C16.8828 14.5625 17.6562 13.8203 17.6562 13.6875C17.6562 13.6562 17.9453 13.625 18.3047 13.625C18.8047 13.625 19 13.5938 19.1953 13.4688C19.7188 13.1562 19.6953 13.4688 19.6719 6.94531L19.6484 1.04688L19.3906 0.796875L19.1406 0.539062L10.0938 0.523438C5.125 0.515625 0.984375 0.539062 0.890625 0.578125ZM18.8828 1.30469C18.9844 1.40625 19.0312 1.60156 19.0469 2.0625L19.0781 2.6875H10.0078H0.9375V2.1875C0.9375 1.57812 1.03125 1.30469 1.26562 1.20312C1.375 1.16406 4.99219 1.14062 10.0938 1.14844C18.2734 1.16406 18.75 1.17188 18.8828 1.30469ZM19.0625 4.25V5.1875H10H0.9375V4.25V3.3125H10H19.0625V4.25ZM19.0469 9.25C19.0234 13.1172 19.0547 12.9062 18.4141 12.9766L18.0703 13.0156L18.25 12.4844C18.5234 11.6719 18.5156 10.5312 18.2188 9.67188C17.8828 8.70312 17.3359 8 16.4688 7.42188C15.4453 6.72656 13.8516 6.53906 12.6094 6.96875C11.2656 7.4375 10.2969 8.42188 9.88281 9.74219C9.61719 10.5781 9.60938 11.7109 9.875 12.4766L10.0547 13L5.65625 12.9844C1.55469 12.9609 1.24219 12.9531 1.11719 12.8203C0.984375 12.6953 0.976562 12.4219 0.953125 9.25L0.929688 5.8125H10H19.0703L19.0469 9.25ZM15.0781 7.58594C15.7109 7.75781 16.0703 7.96875 16.5781 8.45312C17.3672 9.20312 17.7344 10.0547 17.7344 11.125C17.7344 13.1797 16.1172 14.7969 14.0625 14.7969C12.9844 14.7969 12.1172 14.4141 11.3438 13.5938C10.6953 12.9062 10.3906 12.125 10.3906 11.125C10.3906 10.0938 10.6953 9.33594 11.3984 8.60156C12.3984 7.54688 13.6719 7.19531 15.0781 7.58594Z" fill="#112D49" />
                                                    <path d="M1.59407 7.79688C1.57063 7.85938 1.56282 7.99219 1.57844 8.09375C1.60188 8.26562 1.62532 8.27344 2.34407 8.27344H3.08625V8V7.72656L2.35969 7.70312C1.78157 7.6875 1.63313 7.70312 1.59407 7.79688Z" fill="#112D49" />
                                                    <path d="M1.59407 8.73438C1.57063 8.79688 1.56282 8.92969 1.57844 9.03125L1.60188 9.21094H3.28157H4.96125V8.9375V8.66406L3.29719 8.64062C1.90657 8.625 1.63313 8.64062 1.59407 8.73438Z" fill="#112D49" />
                                                    <path d="M1.59291 9.66406C1.57728 9.71875 1.56947 10.3438 1.57728 11.0469L1.60072 12.3359H4.68666H7.7726V10.9688V9.60156L4.70228 9.57812C2.24135 9.5625 1.62416 9.57812 1.59291 9.66406ZM7.18666 10.9688V11.75H4.68666H2.18666V10.9688V10.1875H4.68666H7.18666V10.9688Z" fill="#112D49" />
                                                    <path d="M11.2881 9.97656C11.2646 10.0312 11.2568 10.6562 11.2646 11.3594L11.2881 12.6484H12.0303H12.7725V12.375V12.1016L12.3271 12.0781L11.874 12.0547V11.2812V10.5078L12.3271 10.4844L12.7725 10.4609V10.1875V9.91406L12.0459 9.89062C11.499 9.875 11.3115 9.89844 11.2881 9.97656Z" fill="#112D49" />
                                                    <path d="M13.1793 9.92969C13.0699 10.0312 13.1324 10.4141 13.4293 11.4531C13.6011 12.0469 13.7574 12.5625 13.7886 12.6094C13.8121 12.6484 13.9449 12.6875 14.0699 12.6875C14.3433 12.6875 14.3511 12.6719 14.7261 11.3438C15.0699 10.1406 15.0621 9.92188 14.7105 9.89062C14.4293 9.85938 14.3668 9.9375 14.2105 10.5547C14.1558 10.7812 14.0855 10.9688 14.0621 10.9688C14.0386 10.9688 13.9683 10.7812 13.9136 10.5547C13.7652 9.96875 13.6949 9.875 13.4449 9.875C13.3277 9.875 13.2027 9.89844 13.1793 9.92969Z" fill="#112D49" />
                                                    <path d="M15.3201 10.0156C15.2655 10.1172 15.3358 10.4766 15.5858 11.3438C15.7733 11.9922 15.9451 12.5625 15.9764 12.6094C15.9998 12.6484 16.1326 12.6875 16.2576 12.6875C16.5311 12.6875 16.5389 12.6719 16.9139 11.3438C17.2576 10.1406 17.2498 9.92188 16.8983 9.89062C16.617 9.85938 16.5545 9.9375 16.3983 10.5547C16.3436 10.7812 16.2733 10.9688 16.2498 10.9688C16.2264 10.9688 16.1561 10.7812 16.1014 10.5547C16.0389 10.3359 15.9608 10.0859 15.9217 10.0078C15.828 9.82812 15.4217 9.82812 15.3201 10.0156Z" fill="#112D49" />
                                                </svg>
                    
                                            </div>
                                        </div>
                    
                                    </div>
                                    <div className="mt-4 flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name="method"
                                            checked={selectedMethod === "bank"}
                                            onChange={() => setSelectedMethod("bank")}
                                            className="scale-125 accent-blue-600"
                                        />
                                        <span className="text-base leading-[150%] font-medium opacity-80">
                                            Bank Transfer
                                        </span>
                                    </div>
                    
                                    {selectedMethod === "bank" && (
                                        <div className="mt-4 p-4    space-y-3">
                                            <div>
                                                <label className="block text-lg leading-[150%] text-[#112D49] font-medium ">Bank Name</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Bank Name"
                                                    className="w-full px-3 py-2 border rounded-md  text-base leading-[150%] opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-lg leading-[150%] text-[#112D49] font-medium mb-1 ">Account Number</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Account Number"
                                                    className="w-full px-3 py-2 border rounded-md text-base leading-[150%] opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-lg leading-[150%] text-[#112D49]  font-medium  mb-1">IFSC Code</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter IFSC Code"
                                                    className="w-full px-3 py-2 border rounded-md focus:outline-none text-base leading-[150%] opacity-80 focus:ring-2 focus:ring-blue-400"
                                                />
                                            </div>
                                        </div>
                                    )}
                    
                                </div>
                    
                    </div>   </div>
                    <div className="w-full lg:w-4/12 relative overflow-visible mt-10 lg:mt-0">
                        <div className="lg:max-w-[364px] w-full shadow-md h-[333px] lg:mb-0 mb-7 ">
                            <div className="bg-white p-[14px] rounded-xl shadow-md w-full lg:max-w-sm">
                                <div className="flex items-center justify-between mb-[26px]">
                                    <div className="flex items-center gap-3">
                 ``                       <img
                                            src={chairImage}
                                            alt="Gaming Chair"
                                            className="w-12 h-12  pointer-events-none object-contain bg-gray-100 rounded"
                                        />
                                        <span className="text-sm leading-[150%]">Gaming Chair</span>
                                    </div>
                                    <span className="text-sm leading-[150%]">AED 357.99</span>
                                </div>
                                <p className="text-[13px] text-[#73A4E0] leading-[150%] font-medium cursor-pointer">
                                    Have a coupon? Click here to enter your code
                                </p>
                                <div className="flex mt-4 mb-2">
                                    <input
                                        type="text"
                                        placeholder="Coupon code"
                                        value={coupon}
                                        onChange={(e) => setCoupon(e.target.value)}
                                        className="flex-1 bg-[#F4F8F7] pl-[14px] py-[5px] rounded-full text-base border border-gray-300"
                                    />
                                    <CustomButton
                                        buttonClass="py-[8px] px-[15px] bg-white text-[#0D2C47] border border-[#0D2C47] ml-2"
                                        buttonText="Apply Now"
                                        onClick={handleApplyCoupon}
                                    />
                                </div>
                                {couponMessage && (
                                    <p className={`text-sm ${couponMessage.includes("successfully") ? "text-green-600" : "text-red-500"}`}>
                                        {couponMessage}
                                    </p>
                                )}
                                <div className="mb-3 space-y-1 text-base">
                                    <div className="flex justify-between">
                                        <span>Subtotal</span>
                                        <span>AED 357.99</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Shipping</span>
                                        <span>AED 20.00</span>
                                    </div>
                                </div>
                                <CustomButton
                                    buttonClass="py-4 w-full border border-[#112D49] hover:text-[#112D49] text-white"
                                    buttonText="Convert"
                                />
                                <div className="flex justify-between mt-4 text-base">
                                    <span>Total</span>
                                    <span className="text-[#0D2C47] font-semibold">AED 377.99</span>
                                </div>
                            </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
    );
};

export default CheckoutPage;
