import React, { useState } from "react";
import chair from "../assets/images/png/gaming-chair.png"
import gaming from '../assets/images/png/gaming-peripherals.png'
import deleteIcon from '../assets/images/svg/delete.svg'
import TopHeader from "./TopHeader";
import CustomButton from "./common/CustomButton";
import Footer from "./Footer";
import { useNavigate } from 'react-router-dom';


const Cart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Gaming Chair",
            price: 249.99,
            quantity: 1,
            image: chair,
        },
        {
            id: 2,
            name: "Gaming Peripherals",
            price: 449.99,
            quantity: 1,
            image: gaming,
        },
    ]);

    const increaseQty = (id) => {
        setCartItems(items =>
            items.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQty = (id) => {
        setCartItems(items =>
            items.map(item =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const removeItem = (id) => {
        setCartItems(items => items.filter(item => item.id !== id));
    };

    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );
    const navigate = useNavigate();

    return (
        <>
            <div className="max-w-[1140px] mx-auto p-4 font-montserrat">
                <div className="flex justify-between mt-[94px] mb-[52px] flex-wrap gap-2">
                    <h1 className="text-[34px] font-bold leading-[100%]">Your cart</h1>
                    <p className="font-medium text-base leading-[100%] underline decoration-solid cursor-pointer">
                        Continue Shopping
                    </p>
                </div>

                <div className="w-full bg-[#F4F8F7] font-montserrat relative h-[575px] px-4">
                    <div className="overflow-x-auto">
                        <table className="min-w-[700px] w-full text-left">
                            <thead className="py-[19px] px-[20px] bg-[#F5F5F5] border-b border-[#112D491A]">
                                <tr className="text-lg font-medium leading-[150%]">
                                    <th className="py-[19px] px-[20px] font-medium">Product</th>
                                    <th className="py-[19px] px-[20px] text-center font-medium">Quantity</th>
                                    <th className="py-[19px] px-[20px] text-right font-medium">Total</th>
                                </tr>
                            </thead>

                            <tbody>
                                {cartItems.map((item) => (
                                    <tr key={item.id} className="rounded-lg pb-9 mt-9">
                                        <td className="pt-9 px-5">
                                            <div className="flex items-center gap-4">
                                                <div className="relative w-[64px] h-[64px]">
                                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded" />
                                                    <span className="absolute -top-2 -right-2 bg-[#0D2C47] text-white text-[10px] px-2 py-[2px] rounded-full font-semibold">
                                                        {item.quantity}
                                                    </span>
                                                </div>
                                                <div>
                                                    <p className="font-medium text-xl leading-[150%]">
                                                        {item.name}
                                                    </p>
                                                    <p className="text-sm leading-[150%] opacity-50">
                                                        Dhs. {item.price}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="flex items-center justify-center">
                                                <div className="border border-gray-300 rounded-[7px] flex overflow-hidden">
                                                    <button
                                                        onClick={() => decreaseQty(item.id)}
                                                        className="w-[48px] h-[44px] bg-blue-300 flex items-center justify-center text-white"
                                                    >
                                                        −
                                                    </button>
                                                    <span className="w-[85px] h-[44px] bg-white flex items-center justify-center text-sm font-medium">
                                                        {item.quantity}
                                                    </span>
                                                    <button
                                                        onClick={() => increaseQty(item.id)}
                                                        className="w-[48px] h-[44px] bg-blue-900 flex items-center justify-center text-white"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="ml-2 flex items-center justify-center"
                                                >
                                                    <img src={deleteIcon} alt="delete" className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 text-right text-sm leading-[150%] opacity-50">
                                            Dhs. {(item.price * item.quantity).toFixed(2)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="gradient-border mt-[49px]"></div>

                    <div className="relative w-full ">
                        <div className="absolute right-0 max-w-[328px]">
                            <div className="flex flex-col sm:flex-row justify-between pt-5 gap-[67px]">
                                Estimated Total:
                                <span className="font-bold text-[#0D2C47]">
                                    Dhs. {totalPrice.toFixed(2)} AED
                                </span>
                            </div>
                            <div className="text-base leading-[150%] mt-2 opacity-80">
                                Taxes, discounts and shipping calculated at checkout.
                            </div>
                            <CustomButton
                                buttonClass={"bg-[#0D2C47] text-white w-full mt-6 mb-9"}
                                buttonText={"Check Out"}
                                onClick={() => navigate("/checkout")}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
};

export default Cart;
