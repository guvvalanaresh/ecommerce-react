import React from "react";
import { FaStar } from "react-icons/fa";


export const ReviewSection = ({ reviews }) => {
    return (
        <div className="bg-white p-5 border rounded-xl mt-10">
            <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>


            {reviews.map((r, i) => (
            <div key={i} className="border-b py-3">
                <div className="flex items-center gap-2">
                    <FaStar className="text-yellow-500" /> {r.rating}
                </div>
                <p className="font-semibold mt-1">{r.user}</p>
                <p className="text-gray-700">{r.comment}</p>
            </div>
            ))}
        </div>
    );
};