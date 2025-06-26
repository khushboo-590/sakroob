import CustomButton from "./common/CustomButton";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import visa from "../assets/images/png/visa.png";
import mastercard from "../assets/images/png/master.png";
import amex from "../assets/images/png/express.png";
import paypal from "../assets/images/png/paypal.png";
import chairImage from '../assets/images/png/chairImg.png';

const CheckOut = () => {
    const [message, setMessage] = useState("");
    const handleApplyCoupon = () => {
        setMessage(" applied successfully!");
    };
    const navigate = useNavigate();
    const [checked, setChecked] = useState(false);
    const [selected, setSelected] = useState("");
    const [coupon, setCoupon] = useState("");


    const [formData, setFormData] = useState({
        email: "",
        country: "",
        firstName: "",
        lastName: "",
        address: "",
        apartment: "",
        city: "",
        emirate: "",
    });

    const [formErrors, setFormErrors] = useState({});

    const handleChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
        setFormErrors((prev) => ({
            ...prev,
            [field]: "",
        }));
    };

    const validateForm = () => {
        const errors = {};

        if (!formData.email.trim()) {
            errors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = "Invalid email format.";
        }

        if (!formData.country.trim()) errors.country = "Country is required.";
        if (!formData.address.trim()) errors.address = "Address is required.";
        if (!formData.city.trim()) errors.city = "City is required.";
        if (!formData.emirate.trim()) errors.emirate = "Emirate is required.";
        if (!selected) errors.payment = "Please select a payment method.";

        return errors;
    };

    const handleSubmit = () => {
        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        console.log("✅ Order Placed:", formData, selected);

        // Reset form
        setFormData({
            email: "",
            country: "",
            firstName: "",
            lastName: "",
            address: "",
            apartment: "",
            city: "",
            emirate: "",
        });
        setSelected("");
        setChecked(false);
        setCoupon("");
        setMessage("Order placed successfully!");
        setFormErrors({});

        
    };
    

    const basePrice = 357.99;
    const shipping = 20.0;
    const discountPerClick = 10;
    const [clickCount, setClickCount] = useState(0);
    const handleImageClick = () => {
        setClickCount((prev) => prev + 1);
    };

    const discount = discountPerClick * clickCount;
    const subtotal = basePrice - discount;
    const total = subtotal + shipping;
    return (
        <div className="min-h-screen py-[120px] ">
            <div className="max-w-[1140px] mx-auto px-3">
                <div className="flex flex-col lg:flex-row gap-6">
                    <div className="w-full lg:w-8/12">
                        <div className="flex flex-wrap justify-between">
                            <div className="flex  lg:gap-140 items-center mb-5">
                                <h4 className="text-2xl font-bold text-[#112D49]">Contact</h4>
                                <CustomButton
                                    buttonClass="text-white"
                                    buttonText="Log in"
                                    onClick={() => {
                                        navigate('/');
                                        window.scrollTo(0, 0);
                                    }}
                                />

                            </div>                            <div className="bg-[#F4F8F7] py-[13px] px-[26px] rounded-xl w-full mt-[20px]">
                                <label className="text-xs text-[#8393A0]">
                                    Email or mobile phone number
                                </label>
                                <input
                                    type="text"
                                    placeholder="tim.jennings@example.com"
                                    value={formData.email}
                                    onChange={(e) => handleChange("email", e.target.value)}
                                    className={`outline-0 text-[#112D49] w-full ${formErrors.email ? "border border-red-500" : ""}`}
                                />
                                {formErrors.email && (
                                    <p className="text-red-500 text-xs">{formErrors.email}</p>
                                )}
                            </div>
                        </div>
                        <p className="font-bold text-2xl text-[#112D49] pt-[35px]">Delivery</p>
                        <div className="bg-[#F4F8F7] py-[13px] px-[26px] rounded-xl w-full mt-[20px]">
                            <label className="text-xs text-[#8393A0]">Country/ Region</label>
                            <input
                                type="text"
                                placeholder="Guinea"
                                value={formData.country}
                                onChange={(e) => handleChange("country", e.target.value)}
                                className={`outline-0 text-[#112D49] w-full ${formErrors.country ? "border border-red-500" : ""}`}
                            />
                            {formErrors.country && (
                                <p className="text-red-500 text-xs">{formErrors.country}</p>
                            )}
                        </div>

                        <div className="flex flex-col md:flex-row gap-[30px] mt-[26px]">
                            {["firstName", "lastName"].map((field, index) => (
                                <div key={index} className="bg-[#F4F8F7] py-[13px] px-[26px] rounded-xl w-full">
                                    <label className="text-xs text-[#8393A0] capitalize">
                                        {field === "firstName" ? "First name (Optional)" : "Last name (Optional)"}
                                    </label>
                                    <input
                                        type="text"
                                        placeholder={field === "firstName" ? "First name" : "Last name"}
                                        value={formData[field]}
                                        onChange={(e) => handleChange(field, e.target.value)}
                                        className="outline-0 text-[#112D49] w-full"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="bg-[#F4F8F7] py-[13px] px-[26px] rounded-xl w-full mt-[20px]">
                            <label className="text-xs text-[#8393A0]">Address</label>
                            <input
                                type="text"
                                placeholder="123 Main St"
                                value={formData.address}
                                onChange={(e) => handleChange("address", e.target.value)}
                                className={`outline-0 text-[#112D49] w-full ${formErrors.address ? "border border-red-500" : ""}`}
                            />
                            {formErrors.address && (
                                <p className="text-red-500 text-xs">{formErrors.address}</p>
                            )}
                        </div>

                        <div className="flex gap-[8px] pt-[16px] items-center">
                            <p className="text-[#41576D]">Add a house number if you have one</p>
                        </div>

                        <div className="bg-[#F4F8F7] py-[13px] px-[26px] rounded-xl w-full mt-[20px]">
                            <label className="text-xs text-[#8393A0]">
                                Apartment, Suit, etc. (optional)
                            </label>
                            <input
                                type="text"
                                placeholder="Apartment 4B"
                                value={formData.apartment}
                                onChange={(e) => handleChange("apartment", e.target.value)}
                                className="outline-0 text-[#112D49] w-full"
                            />
                        </div>

                        <div className="flex flex-col md:flex-row gap-[30px] mt-[26px]">
                            {["city", "emirate"].map((field, index) => (
                                <div key={index} className="bg-[#F4F8F7] py-[13px] px-[26px] rounded-xl w-full">
                                    <label className="text-xs text-[#8393A0] capitalize">{field}</label>
                                    <input
                                        type="text"
                                        placeholder={field === "city" ? "Ajman" : "Abu Dhabi"}
                                        value={formData[field]}
                                        onChange={(e) => handleChange(field, e.target.value)}
                                        className={`outline-0 text-[#112D49] w-full ${formErrors[field] ? "border border-red-500" : ""}`}
                                    />
                                    {formErrors[field] && (
                                        <p className="text-red-500 text-xs">{formErrors[field]}</p>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-[8px] items-center pt-[16px]">
                            <input
                                type="checkbox"
                                checked={checked}
                                onChange={() => setChecked(!checked)}
                            />
                            <p className="text-[#41576D]">Save this information for next time</p>
                        </div>

                        <p className="text-lg text-[#112D49] pt-[42px]">Shipping method</p>
                        <div className="bg-[#F4F8F7] py-[13px] px-[26px] rounded-xl w-full mt-[20px] flex justify-between items-center">
                            <input
                                type="text"
                                placeholder="Standard (Example)"
                                className="outline-0 text-[#112D49] w-full"
                                disabled
                            />
                            <p className="font-semibold text-[#112D49] ml-4 whitespace-nowrap">
                                AED 20.00
                            </p>
                        </div>

                        <p className="font-bold text-2xl text-[#112D49] pt-[42px]">Payment</p>
                        <p className="text-[#41576D] pt-[4px]">
                            All transactions are secure and encrypted.
                        </p>

                        <div className="border border-[#E8EBED] py-[20px] px-[28px] mt-[20px]">
                            {formErrors.payment && (
                                <p className="text-red-500 text-xs mb-2">{formErrors.payment}</p>
                            )}
                            <div className="flex flex-wrap justify-between">
                                <label className="flex items-center gap-[8px] cursor-pointer">
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="paypal"
                                        checked={selected === "paypal"}
                                        onChange={() => setSelected("paypal")}
                                        className="sr-only"
                                    />
                                    <div
                                        className={`w-6 h-6 rounded-full flex items-center justify-center ${selected === "paypal"
                                            ? "border-4 border-blue-400"
                                            : "border-2 border-gray-300"
                                            }`}
                                    >
                                        {selected === "paypal" && (
                                            <div className="w-3 h-3 bg-blue-400 rounded-full" />
                                        )}
                                    </div>
                                    <img src={paypal} alt="PayPal" className="h-6" />
                                </label>

                                <div className="flex gap-1.5">
                                    <img src={visa} alt="Visa" className="h-6" />
                                    <img src={mastercard} alt="MasterCard" className="h-6" />
                                    <img src={amex} alt="Amex" className="h-6" />
                                </div>
                            </div>

                            {["card", "bank"].map((method, index) => (
                                <label key={index} className="flex items-center gap-[8px] pt-[34px] cursor-pointer">
                                    <input
                                        type="radio"
                                        name="payment"
                                        value={method}
                                        checked={selected === method}
                                        onChange={() => setSelected(method)}
                                        className="sr-only"
                                    />
                                    <div
                                        className={`w-6 h-6 rounded-full flex items-center justify-center ${selected === method
                                            ? "border-4 border-blue-400"
                                            : "border-2 border-gray-300"
                                            }`}
                                    >
                                        {selected === method && (
                                            <div className="w-3 h-3 bg-blue-400 rounded-full" />
                                        )}
                                    </div>
                                    <p className="text-[#40566D]">
                                        {method === "card" ? "Credit Card/ Debit Card" : "Bank Transfer"}
                                    </p>
                                </label>
                            ))}
                        </div>
                        <CustomButton
                            buttonClass="py-4 w-full bg-[#112D49] text-white mt-6"
                            buttonText="Place Order"
                            onClick={handleSubmit}/>
                    </div>
                    <div className="w-full lg:w-4/12 relative overflow-visible mt-10 lg:mt-0">
                        <div className="lg:max-w-[364px] w-full shadow-md h-[333px] lg:mb-0 mb-7 ">
                            <div className="bg-white p-[14px] rounded-xl shadow-md w-full lg:max-w-sm">
                                <div className="flex items-center justify-between mb-[26px]">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={chairImage}
                                                alt="Gaming Chair"
                                                onClick={handleImageClick}
                                                className="w-12 h-12 bg-gray-100 rounded cursor-pointer object-contain"
                                            />
                                            <span className="text-sm">Gaming Chair</span>
                                        </div>
                                        <span className="text-sm">AED {basePrice.toFixed(2)}</span>
                                    </div>

                                    <span className="text-sm leading-[150%]">AED 357.99</span>
                                </div>
                                <p className="text-[13px] text-[#73A4E0] leading-[150%] font-medium cursor-pointer">
                                    Have a coupon? Click here to enter your code
                                </p>
                                <div className="flex flex-col mt-4 mb-2">
                                    <div className="flex">
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
                                    {message && (
                                        <p className="mt-2 text-sm text-green-600">{message}</p>
                                    )}
                                </div>
                              
                                <div className="mb-3 space-y-1 text-base">
                                    <div className="flex justify-between">
                                        <span>Subtotal</span>
                                        <span>AED {subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>AED {shipping.toFixed(2)}</span>
                                    </div>
                                    {discount > 0 && (
                                        <div className="flex justify-between text-green-600">
                                            <span>Discount {clickCount} </span>
                                            <span>- AED {discount.toFixed(2)}</span>
                                        </div>
                                    )}
                                </div>

                                <div className="flex justify-between mt-4 text-base font-semibold">
                                    <span>Total</span>
                                    <span className="text-[#0D2C47]">AED {total.toFixed(2)}</span>
                                </div>
                            </div>
                            <CustomButton
                                buttonClass="py-4 w-full border border-[#112D49] hover:text-[#112D49] text-white"
                                buttonText="Convert"
                            />                           
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default CheckOut;