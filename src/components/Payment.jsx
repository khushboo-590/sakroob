import React,{useState} from "react";
import visa from "../assets/images/png/visa.png"; 
import mastercard from "../assets/images/png/master.png";
import amex from "../assets/images/png/express.png";
import paypal from "../assets/images/png/paypal.png";

const Payment = () => {
    const [selectedMethod, setSelectedMethod] = useState("credit");

    return (
        <div className="max-w-[752px] w-full mx-auto  font-montserrat text-[#0D2C47] mb-[108px]">
            <h2 className="text-2xl font-bold leading-[120%] mb-1">Payment</h2>
            <p className="text-base leading-[150%] opacity-80 mb-5">
                All transactions are secure and encrypted.
            </p>

            <div className="bg-[#FBFBFB] py-[20px] px-7 rounded-lg  border-[#112D4914] border">
                <div className="flex justify-between items-center flex-wrap gap-4">
                    <div className="flex items-center gap-2 bg-white mb-[19px]">
                        <input type="radio" name="method"
                            checked={selectedMethod === "paypal"}
                            onChange={() => setSelectedMethod("paypal")}/>
                        <img src={paypal} alt="PayPal" className="h-6" />
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
                            onChange={() => setSelectedMethod("credit")}                    className="accent-blue-600"
                />
                        <label className="text-base leading-[150%] opacity-80">  Credit Card/ Debit Card</label>
            </div>
                    <div className="w-full    flex gap-4 mb-[14px] ">
                        <label className="text-lg w-1/2 leading-[150%] text-[#112D49]  font-medium ">
                        Credit number                    </label>
                        <label className="text-lg w-1/2 leading-[150%] text-[#112D49] block  font-medium ">
                       name on card
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
                    <input type="radio" name="method"
                        checked={selectedMethod === "bank"}
                        onChange={() => setSelectedMethod("bank")}/>
                    <span className="text-base leading-[150%] font-medium opacity-80">
                        Bank Transfer
                    </span>
                </div>
                
            </div>
        
        </div>

    );
};

export default Payment;
