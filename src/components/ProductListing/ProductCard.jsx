import React from "react";
import { FaStar } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import '../../App.css'

import { useNavigate } from "react-router-dom";


export const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    return (
    <div className="bg-white shadow-md p-4 hover:shadow-xl transition border border-gray-200 flex flex-col">
        <div className="w-full h-48 flex items-center justify-center overflow-hidden">
            <img src={product.image} alt={product.title} className="h-full object-contain" />
        </div>


        <h3 className="mt-2 font-semibold line-clamp-2">{product.title}</h3>
        <p className="text-lg font-bold mt-1">₹{product.price}</p>


        <div className="flex items-center mt-2 mb-2 text-sm text-gray-600">
            <FaStar className="text-yellow-500" /> {product.rating.rate} ({product.rating.count})
        </div>


        <div className="flex flex-col gap-3">
            <button className="flex justify-center w-full text-black py-1 mt-auto hover:bg-gray-300 transition cursor-pointer border">
                <FaCartPlus className="cart-icon" />
            </button>
            <button className="w-full bg-black text-white py-2 mt-auto hover:bg-gray-800 transition text-sm cursor-pointer"
                    onClick={() => navigate(`/products/${product.id}`)}
            >
                View Details
            </button>
        </div>
    </div>
    );
};