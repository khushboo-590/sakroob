import React from "react";

const CheckOut = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8 grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
                <div className="space-y-2">
                    <h2 className="text-lg font-bold">Contact</h2>
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border rounded px-4 py-2"
                    />
                    <button className="text-sm text-right text-blue-600">Log in</button>
                </div>
                <div className="space-y-4">
                    <h2 className="text-lg font-bold">Delivery</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <input type="text" placeholder="First name" className="border rounded px-4 py-2" />
                        <input type="text" placeholder="Last name" className="border rounded px-4 py-2" />
                    </div>
                    <input type="email" placeholder="Email address" className="w-full border rounded px-4 py-2" />
                    <input type="text" placeholder="Phone number" className="w-full border rounded px-4 py-2" />
                    <input type="text" placeholder="Address line" className="w-full border rounded px-4 py-2" />
                    <div className="grid md:grid-cols-2 gap-4">
                        <input type="text" placeholder="City" className="border rounded px-4 py-2" />
                        <input type="text" placeholder="Region" className="border rounded px-4 py-2" />
                    </div>
                    <label className="flex items-center gap-2 text-sm">
                        <input type="checkbox" className="accent-blue-500" />
                        Save this information for next time
                    </label>
                </div>
                <div className="space-y-2">
                    <h2 className="text-lg font-bold">Shipping method</h2>
                    <div className="border rounded px-4 py-2 flex justify-between">
                        <span>Standard (5-8 business days)</span>
                        <span>AED 20.00</span>
                    </div>
                </div>
                <div className="space-y-4">
                    <h2 className="text-lg font-bold">Payment</h2>
                    <p className="text-sm text-gray-500">All transactions are secure and encrypted.</p>

                    <div className="border rounded px-4 py-2">
                        <label className="flex items-center gap-2 mb-2">
                            <input type="radio" name="payment" defaultChecked />
                            Credit/Debit Card
                        </label>
                        <div className="grid md:grid-cols-2 gap-4">
                            <input type="text" placeholder="Name on Card" className="border rounded px-4 py-2" />
                            <input type="text" placeholder="Card Number" className="border rounded px-4 py-2" />
                            <input type="text" placeholder="MM/YY" className="border rounded px-4 py-2" />
                            <input type="text" placeholder="CVC" className="border rounded px-4 py-2" />
                        </div>
                    </div>

                    <div className="border rounded px-4 py-2">
                        <label className="flex items-center gap-2">
                            <input type="radio" name="payment" />
                            Bank Transfer
                        </label>
                    </div>
                </div>
            </div>
            <div className="bg-[#F5F9FD] p-6 rounded-lg space-y-4">
                <div className="flex items-center gap-4">
                    <img src="/chair.jpg" className="w-16 h-16 rounded object-cover" />
                    <div>
                        <p className="font-semibold">Gaming Chair</p>
                        <p className="text-sm text-gray-600">AED 329.99</p>
                    </div>
                </div>

                <div className="space-y-2">
                    <input
                        type="text"
                        placeholder="Coupon code"
                        className="w-full border rounded px-4 py-2"
                    />
                    <button className="w-full bg-[#0D2C47] text-white rounded px-4 py-2">
                        Apply Now
                    </button>
                </div>

                <div className="border-t pt-4 space-y-2 text-sm">
                    <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>AED 329.99</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Shipping</span>
                        <span>AED 20.00</span>
                    </div>
                </div>

                <div className="flex justify-between font-bold text-lg pt-4 border-t">
                    <span>Total</span>
                    <span>AED 379.99</span>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;
