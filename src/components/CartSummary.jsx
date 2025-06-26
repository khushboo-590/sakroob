import React from 'react'
import CustomButton from "./common/CustomButton";
import chairImage from '../assets/images/png/chairImg.png'


const CartSummary = () => {
  return (
    <div className="max-w-[364px] shadow-md h-[333px]">
                   <div className="bg-white p-[14px] rounded-xl shadow-md w-full max-w-sm">
                       <div className="flex items-start justify-between mb-[26px]">
                           <div className="flex items-center gap-3">
                               <img
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
                       <div className="flex gap-2 mt-4 mb-[26px]">
                           <input
                               type="text"
                               placeholder="Coupon code"
                               className="flex-1 bg-[#F4F8F7] pl-[14px] py-[5px] rounded-full text-base leading-[150%]"
                           />
                  <CustomButton buttonClass={"py-[8px] px-[15px] bg-white text-[#0D2C47] border border-[#0D2C47]"} buttonText={"Apply Now"} />
   
                       </div>
                       <div className="mb-3 space-y-1 text-base leading-[150%]">
                           <div className="flex justify-between">
                               <span>Subtotal</span>
                               <span>AED 357.99</span>
                           </div>
                           <div className="flex justify-between">
                               <span>Shipping</span>
                               <span>AED 20.00</span>
                           </div>
                       </div>
                       <CustomButton buttonClass={"py-4 w-full text-white"} buttonText={"  Convert"} />
                       <div className="flex justify-between mt-4 text-base leading-[150%] ">
                           <span>Total</span>
                           <span className="text-[#0D2C47] font-semibold">AED 377.99</span>
                       </div>
                   </div>
   
               </div>
  )
}

export default CartSummary
