// import React from "react";
// import Header from "./Header";

// const CheckOut = () => {
//     return (
//         <div className="max-w-[1140px] mx-auto px-4 py-8 grid lg:grid-cols-3 gap-8 mt-[132px]">
//             <div className="max-w-[752px]">
//                 <div className=" flex justify-between" />
//                 <h4 className="text-2xl leading-[120%] font-bold">Contact</h4>
//                 <h4 className="">login</h4>

//             </div>

//             <div className="lg:col-span-2 space-y-6">
//                 <div className="space-y-2">
//                     <h2 className="text-lg font-bold">Contact</h2>
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         className="w-full border rounded px-4 py-2"
//                     />
//                     <button className="text-sm text-right text-blue-600">Log in</button>
//                 </div>
//                 <div className="space-y-4">
//                     <h2 className="text-lg font-bold">Delivery</h2>
//                     <div className="grid md:grid-cols-2 gap-4">
//                         <input type="text" placeholder="First name" className="border rounded px-4 py-2" />
//                         <input type="text" placeholder="Last name" className="border rounded px-4 py-2" />
//                     </div>
//                     <input type="email" placeholder="Email address" className="w-full border rounded px-4 py-2" />
//                     <input type="text" placeholder="Phone number" className="w-full border rounded px-4 py-2" />
//                     <input type="text" placeholder="Address line" className="w-full border rounded px-4 py-2" />
//                     <div className="grid md:grid-cols-2 gap-4">
//                         <input type="text" placeholder="City" className="border rounded px-4 py-2" />
//                         <input type="text" placeholder="Region" className="border rounded px-4 py-2" />
//                     </div>
//                     <label className="flex items-center gap-2 text-sm">
//                         <input type="checkbox" className="accent-blue-500" />
//                         Save this information for next time
//                     </label>
//                 </div>
//                 <div className="space-y-2">
//                     <h2 className="text-lg font-bold">Shipping method</h2>
//                     <div className="border rounded px-4 py-2 flex justify-between">
//                         <span>Standard (5-8 business days)</span>
//                         <span>AED 20.00</span>
//                     </div>
//                 </div>
//                 <div className="space-y-4">
//                     <h2 className="text-lg font-bold">Payment</h2>
//                     <p className="text-sm text-gray-500">All transactions are secure and encrypted.</p>

//                     <div className="border rounded px-4 py-2">
//                         <label className="flex items-center gap-2 mb-2">
//                             <input type="radio" name="payment" defaultChecked />
//                             Credit/Debit Card
//                         </label>
//                         <div className="grid md:grid-cols-2 gap-4">
//                             <input type="text" placeholder="Name on Card" className="border rounded px-4 py-2" />
//                             <input type="text" placeholder="Card Number" className="border rounded px-4 py-2" />
//                             <input type="text" placeholder="MM/YY" className="border rounded px-4 py-2" />
//                             <input type="text" placeholder="CVC" className="border rounded px-4 py-2" />
//                         </div>
//                     </div>

//                     <div className="border rounded px-4 py-2">
//                         <label className="flex items-center gap-2">
//                             <input type="radio" name="payment" />
//                             Bank Transfer
//                         </label>
//                     </div>
//                 </div>
//             </div>
//             <div className="bg-[#F5F9FD] p-6 rounded-lg space-y-4">
//                 <div className="flex items-center gap-4">
//                     <img src="/chair.jpg" className="w-16 h-16 rounded object-cover" />
//                     <div>
//                         <p className="font-semibold">Gaming Chair</p>
//                         <p className="text-sm text-gray-600">AED 329.99</p>
//                     </div>
//                 </div>

//                 <div className="space-y-2">
//                     <input
//                         type="text"
//                         placeholder="Coupon code"
//                         className="w-full border rounded px-4 py-2"
//                     />
//                     <button className="w-full bg-[#0D2C47] text-white rounded px-4 py-2">
//                         Apply Now
//                     </button>
//                 </div>

//                 <div className="border-t pt-4 space-y-2 text-sm">
//                     <div className="flex justify-between">
//                         <span>Subtotal</span>
//                         <span>AED 329.99</span>
//                     </div>
//                     <div className="flex justify-between">
//                         <span>Shipping</span>
//                         <span>AED 20.00</span>
//                     </div>
//                 </div>

//                 <div className="flex justify-between font-bold text-lg pt-4 border-t">
//                     <span>Total</span>
//                     <span>AED 379.99</span>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CheckOut;

import React from "react";
import CustomButton from "./common/CustomButton";
import Payment from "./Payment";
import CartSummary from "./CartSummary";


const CheckoutPage = () => {
    return (
        <div className="max-w-[1140px] mx-auto mt-[132px] px-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
                <div className="mb-[35px]">
                    <div className="flex justify-between items-center mb-5">
                        <h4 className="text-2xl font-bold text-[#112D49]">Contact</h4>
                        <CustomButton buttonClass="text-white" buttonText="Log in" />
                    </div>
                    <div className="bg-[#F4F8F7] rounded-lg px-[26px] py-[13px]">
                        <label className="text-[12px] text-[#112D49] block opacity-50 leading-[150%]">
                            Email or phone number
                        </label>
                        <div className="flex justify-between">
                        <input
                            type="email"
                            defaultValue="tim.jennings@example.com"
                            className="w-full bg-[#F4F8F7] outline-none text-base text-[#112D49] opacity-80 leading-[150%]"
                        />
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.5 7.23486L9 11.7349L13.5 7.38779" stroke="#112D49" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>

                    </div>
                </div>
                <div className="mb-[35px]">
                    <h2 className="text-2xl font-bold text-[#112D49] mb-5">Delivery</h2>
                    <div className="bg-[#F4F8F7] rounded-lg pl-[26px] py-[13px] mb-[26px]">
                        <label className="text-[12px] text-[#112D49] block opacity-50 leading-[150%]">Country/Region</label>
                        <input
                            type="text"
                            defaultValue="Guinea"
                            className="w-full bg-[#F4F8F7] outline-none text-base text-[#112D49] opacity-80 leading-[150%]"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-[26px]">
                        <div className="bg-[#F4F8F7] rounded-lg pl-[26px] py-[13px]">
                            <label className="text-[12px] text-[#112D49] block opacity-50 leading-[150%]">First name (Optional)</label>
                            <input type="text" defaultValue="First name" className="w-full bg-[#F4F8F7] outline-none text-base text-[#112D49] opacity-80 leading-[150%]" />
                        </div>
                        <div className="bg-[#F4F8F7] rounded-lg pl-[26px] py-[13px]">
                            <label className="text-[12px] text-[#112D49] block opacity-50 leading-[150%]">Last name</label>
                            <input type="text" defaultValue="First name" className="w-full bg-[#F4F8F7] outline-none text-base text-[#112D49] opacity-80 leading-[150%]" />
                        </div>
                    </div>

                    <div className="bg-[#F4F8F7] rounded-lg pl-[26px] py-[13px] mb-4">
                        <label className="text-[12px] text-[#112D49] block opacity-50 leading-[150%]">Address</label>
                        <input type="text" defaultValue="tim.jennings@example.com" className="w-full bg-[#F4F8F7] outline-none text-base text-[#112D49] opacity-80 leading-[150%]" />
                    </div>
                    <div className="flex items-center  mb-[42px]">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.91906 0.4296C3.62783 1.54951 1.25291 3.99464 0.299203 7.26104C0.112201 7.87699 0 8.97823 0 9.98615C0 12.8233 0.916308 15.0631 2.89853 17.0602C6.78816 20.9799 13.221 20.9799 17.1106 17.0602C18.3262 15.8283 19.2425 14.3165 19.71 12.7113C20.084 11.4047 20.1027 8.81025 19.7287 7.37303C18.8498 3.99464 16.0073 1.15754 12.6226 0.280279C10.9583 -0.149019 8.39637 -0.074358 6.91906 0.4296ZM11.6128 1.30686C16.1382 2.14679 19.4482 6.73842 18.7563 11.2181C18.1579 15.0071 15.2032 17.9935 11.3884 18.6841C5.70355 19.692 0.374003 14.4658 1.27161 8.71692C2.03832 3.80799 6.76946 0.410934 11.6128 1.30686Z" fill="#C9CFD2" />
                            <path d="M9.72361 4.66669C9.51791 4.87201 9.34961 5.20798 9.34961 5.41329C9.34961 5.61861 9.51791 5.95458 9.72361 6.1599C9.92931 6.36522 10.2659 6.5332 10.4716 6.5332C10.6773 6.5332 11.0139 6.36522 11.2196 6.1599C11.4253 5.95458 11.5936 5.61861 11.5936 5.41329C11.5936 5.20798 11.4253 4.87201 11.2196 4.66669C11.0139 4.46137 10.6773 4.29339 10.4716 4.29339C10.2659 4.29339 9.92931 4.46137 9.72361 4.66669Z" fill="#C9CFD2" />
                            <path d="M9.4617 7.89549C8.7511 8.11947 8.13399 8.41811 8.07789 8.54877C8.04049 8.67942 8.11529 8.73542 8.26489 8.67942C8.39579 8.62343 8.6202 8.66076 8.7698 8.75408C9.0129 8.90341 8.9942 9.27671 8.7324 11.5165C8.33969 14.7269 8.33969 14.9882 8.7511 15.3615C9.1999 15.7722 9.6861 15.7535 10.4154 15.3242C11.0512 14.9322 12.0984 13.327 11.874 13.1031C11.7992 13.0284 11.687 13.0844 11.6496 13.2151C11.4813 13.6817 10.6959 14.4656 10.5463 14.3163C10.4154 14.2043 10.8829 9.46336 11.1634 7.97015C11.2943 7.3542 11.1821 7.3542 9.4617 7.89549Z" fill="#C9CFD2" />
                        </svg>

                        <p className="text-base text-[#112D49] opacity-80 ">Add a house number if you have one</p></div>


                    <div className="bg-[#F4F8F7] rounded-lg pl-[26px] py-[13px] mb-[26px]">
                        <label className="text-[12px] text-[#112D49] block opacity-50 leading-[150%]">Apartment, Suite, etc. (optional)</label>
                        <input type="text" defaultValue="2464 Royal Ln. Mesa, New Jersey 45463" className="w-full bg-[#F4F8F7] outline-none text-base text-[#112D49] opacity-80 leading-[150%]" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="bg-[#F4F8F7] rounded-lg pl-[26px] py-[13px]">
                            <label className="text-[12px] text-[#112D49] block opacity-50 leading-[150%]">City</label>
                            <input type="text" defaultValue="Ajman" className="w-full bg-[#F4F8F7] outline-none text-base text-[#112D49] opacity-80 leading-[150%]" />
                        </div>
                        <div className="bg-[#F4F8F7] rounded-lg pl-[26px] py-[13px]">
                            <label className="text-[12px] text-[#112D49] block opacity-50 leading-[150%]">Emirate</label>
                            <input type="text" defaultValue="Abu Dhabi" className="w-full bg-[#F4F8F7] outline-none text-base text-[#112D49] opacity-80 leading-[150%]" />
                        </div>
                    </div>

                    <div className="flex items-center mb-[42px]">
                        <input type="checkbox" className="mr-2" />
                        <p className="text-[#112D49] opacity-50 leading-[150%]">Save this information for next time</p>
                    </div>

                    <h2 className="text-lg font-medium mb-5 text-[#112D49]">Shipping method</h2>
                    <div className="bg-[#F4F8F7] rounded-lg px-[26px] py-[13px] mb-[26px] flex justify-between items-center">
                        <label className="text-[12px] text-[#112D49] opacity-50 leading-[150%]">Standard (Example)</label>
                        <input type="text" defaultValue="AED 20.00" className="bg-[#F4F8F7] outline-none text-base text-[#112D49] opacity-80 text-right w-auto" />
                    </div>
                </div>

                <Payment />
            </div>
            <CartSummary />

        </div>





    );
};

export default CheckoutPage;
