import React from "react";
// import { FaStar, FaRegStar } from "react-icons/fa";

const ProductDetailPage = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8 font-sans">
            {/* Product Info Top Section */}
            <div className="grid md:grid-cols-2 gap-10 bg-white p-6 rounded-xl shadow">
                {/* Left: Product Image and Thumbnails */}
                <div>
                    <img src="/router.jpg" alt="Router" className="w-full rounded-xl mb-4" />
                    <div className="flex gap-2 justify-center">
                        {[...Array(4)].map((_, i) => (
                            <img
                                key={i}
                                src="/router.jpg"
                                alt={`thumb-${i}`}
                                className="w-14 h-14 rounded border cursor-pointer"
                            />
                        ))}
                    </div>
                </div>

                {/* Right: Product Description */}
                <div className="space-y-4">
                    <h2 className="text-xl font-bold text-[#0D2C47]">
                        D-Link ADSL Wireless Router DSL2750U
                    </h2>
                    <p className="text-sm text-gray-500">
                        Wireless N 300 ADSL2+ Modem Router with 4 Ethernet Ports and 1 USB 2.0 port for 3G/4G.
                    </p>
                    <div className="flex items-center gap-1 text-yellow-400">
                        {/* {[...Array(4)].map((_, i) => <FaStar key={i} />)}
                        <FaRegStar /> */}
                        <span className="text-gray-500 ml-2 text-sm">4.2 (140)</span>
                    </div>
                    <div className="text-xl font-bold text-[#0D2C47]">$14.95</div>
                    <div>
                        <p className="text-sm mb-1 font-semibold">Color:</p>
                        <div className="flex gap-2">
                            <span className="w-6 h-6 rounded-full bg-black border"></span>
                            <span className="w-6 h-6 rounded-full bg-blue-500 border"></span>
                            <span className="w-6 h-6 rounded-full bg-green-400 border"></span>
                        </div>
                    </div>
                    <div className="flex gap-4 pt-4">
                        <button className="bg-[#0D2C47] text-white px-6 py-2 rounded-full text-sm">Buy Now</button>
                        <button className="border border-[#0D2C47] text-[#0D2C47] px-6 py-2 rounded-full text-sm">Add to Cart</button>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="mt-10">
                <div className="flex justify-center gap-6 border-b text-sm">
                    <button className="py-2 border-b-2 border-[#0D2C47] text-[#0D2C47] font-semibold">Reviews</button>
                    <button className="py-2 text-gray-500">Specifications</button>
                    <button className="py-2 text-gray-500">FAQs</button>
                </div>

                {/* Review Summary */}
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-white rounded-xl p-6 shadow">
                        <h4 className="text-sm font-semibold mb-4">Customer Reviews</h4>
                        {[5, 4, 3, 2, 1].map(star => (
                            <div key={star} className="flex items-center gap-2 mb-2 text-sm">
                                <span className="w-10">{star} Star</span>
                                <div className="bg-gray-200 w-full h-2 rounded">
                                    <div className="bg-yellow-400 h-2 w-[60%] rounded"></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Write a Review */}
                    <div className="bg-white rounded-xl p-6 shadow">
                        <h4 className="text-sm font-semibold mb-2">Review this Product</h4>
                        <textarea className="w-full border rounded p-2 text-sm" rows="4" placeholder="Share your thoughts..." />
                        <button className="mt-3 bg-[#0D2C47] text-white px-4 py-2 rounded-full text-sm">Submit Review</button>
                    </div>
                </div>
            </div>

            {/* Popular Products */}
            <div className="mt-14">
                <h3 className="text-xl font-bold text-center mb-6">Popular Products</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {["PC Case", "RTX 4070", "Gaming Chair"].map((name, i) => (
                        <div key={i} className="bg-white border rounded-xl p-4 shadow text-center">
                            <img src="/product.jpg" alt={name} className="w-full h-36 object-contain mb-2" />
                            <h4 className="font-semibold text-sm mb-1">{name}</h4>
                            <div className="text-[#0D2C47] font-bold">${(129 + i * 100).toFixed(2)}</div>
                            <button className="mt-2 text-sm text-blue-600 underline">View</button>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-6">
                    <button className="bg-[#0D2C47] text-white px-6 py-2 rounded-full">Explore More</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
