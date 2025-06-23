import React from "react";
import { POPULAR_DATA } from "../utils/helper"


const PopularProducts = () => {
    return (
        <section className="max-w-6xl mx-auto px-4 py-10">
            <p className="text-sm text-center text-gray-500 mb-2">
                Featured Categories
            </p>
            <h2 className="text-3xl font-bold text-center mb-8">
                Shop Our Most Popular <br className="sm:hidden" /> Products
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {POPULAR_DATA.map((cat, index) => (
                    <div
                        key={index}
                        className={`rounded-lg p-4 ${cat.bg} flex flex-col items-center justify-center text-center shadow`}
                    >
                        <img
                            src={cat.image}
                            alt={cat.title}
                            className="w-28 h-28 object-contain mb-4"
                        />
                        <h3 className="text-lg font-semibold">{cat.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PopularProducts;
