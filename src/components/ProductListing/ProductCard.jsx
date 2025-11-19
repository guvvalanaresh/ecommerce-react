import React from "react";
import { FaStar } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import '../../App.css'

import { useNavigate } from "react-router-dom";
import { useCart } from '../../context/CartContext'

import { Flip, toast } from "react-toastify";

export const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const { addToCart } = useCart()


    return (
    <div className="bg-white shadow-md p-4 hover:shadow-xl transition border border-gray-200 flex flex-col">
        <div className="w-full h-40 sm:h-44 md:h-48 flex items-center justify-center overflow-hidden">
            <img src={product.image} alt={product.title} className="max-h-full object-contain" />
        </div>


        <h3 className="mt-2 font-semibold line-clamp-2">{product.title}</h3>
        <p className="text-lg font-bold mt-1 text-red-700">₹{product.price}</p>


        <div className="flex items-center mt-2 mb-2 text-sm text-gray-600">
            <FaStar className="text-yellow-500 mr-1" /> {product.rating.rate} (<p className="text-blue-500">{product.rating.count}</p>)
        </div>


        <div className="flex flex-col gap-3">
             <button
                className="flex justify-center w-full text-black py-1 mt-auto hover:bg-gray-300 transition cursor-pointer border"
                onClick={() => {
                        addToCart(product, 1);
                        toast.success("Added to cart", {
                                position: "top-center",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: false,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                                transition: Flip,
                            }
                        );
                    }
                }
            >
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