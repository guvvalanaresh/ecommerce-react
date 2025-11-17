import React from "react";
import { FaStar } from "react-icons/fa";


export const ProductInfo = ({ product }) => {
    return (
        <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="text-gray-500 capitalize">Brand: {product.brand || "Unknown"}</p>


            {/* Rating */}
            <div className="flex items-center gap-2 text-lg">
                <FaStar className="text-yellow-500" />
                <span>{product.rating.rate}</span>
                <span className="text-gray-600 text-sm">({product.rating.count} reviews)</span>
            </div>


            {/* Price */}
            <p className="text-3xl font-semibold mt-2">₹{product.price}</p>
            {product.discount && (
                <p className="text-green-600">{product.discount}% OFF</p>
            )}


            {/* Description */}
            <div className="mt-3">
                <h3 className="font-semibold text-lg mb-1">Description</h3>
                <p className="text-gray-700 leading-6">{product.description}</p>
            </div>


            {/* Key Features */}
            {product.features && (
                <ul className="list-disc pl-5 mt-3 text-gray-700">
                    <h3 className="font-semibold text-lg mb-1 -ml-5">Features</h3>
                    {product.features.map((f, i) => (
                        <li key={i}>{f}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};