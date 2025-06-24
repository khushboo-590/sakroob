import React, { useState } from "react";

const CartPage = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Gaming Chair",
            price: 249.99,
            quantity: 1,
            image: "/chair.jpg",
        },
        {
            id: 2,
            name: "Gaming Peripherals",
            price: 449.99,
            quantity: 1,
            image: "/controller.jpg",
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

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Your cart</h1>

            <div className="bg-[#F5F9FD] rounded-lg p-4">
                {cartItems.map(item => (
                    <div
                        key={item.id}
                        className="flex flex-col sm:flex-row justify-between items-center border-b py-4 gap-4"
                    >
                        <div className="flex items-center gap-4">
                            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                            <div>
                                <p className="font-semibold">{item.name}</p>
                                <p className="text-sm text-gray-500">Dhs. {item.price}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <button onClick={() => decreaseQty(item.id)} className="bg-blue-300 px-2 py-1 rounded text-white">-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => increaseQty(item.id)} className="bg-blue-900 px-2 py-1 rounded text-white">+</button>
                            <button onClick={() => removeItem(item.id)} className="text-gray-500 ml-2">🗑️</button>
                        </div>

                        <div className="text-right font-semibold">
                            Dhs. {(item.price * item.quantity).toFixed(2)}
                        </div>
                    </div>
                ))}

                {/* Total & Checkout */}
                <div className="flex flex-col sm:flex-row justify-between items-center pt-6 gap-4">
                    <div className="text-sm text-gray-600">
                        Estimated Total:{" "}
                        <span className="font-bold text-[#0D2C47]">Dhs. {totalPrice.toFixed(2)} AED</span>
                    </div>
                    <button className="bg-[#0D2C47] text-white px-6 py-2 rounded-full text-sm">
                        Check Out
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
