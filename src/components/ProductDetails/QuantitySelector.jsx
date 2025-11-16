import React from "react";


export const QuantitySelector = ({ quantity, setQuantity }) => {
    return (
    <div className="flex items-center gap-3 mt-4">
        <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-3 py-1 border rounded-lg text-xl"
        >
            -
        </button>
        <p className="text-lg font-semibold w-8 text-center">{quantity}</p>
        <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-3 py-1 border rounded-lg text-xl"
        >
            +
        </button>
    </div>
    );
};