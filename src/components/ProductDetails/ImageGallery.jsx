import React, { useState } from "react";


export const ImageGallery = ({ images }) => {
    const [active, setActive] = useState(images[0]);


return (
    <div className="flex flex-col gap-4">
        {/* Main Image */}
        <div className="w-full h-96 border rounded-xl flex items-center justify-center overflow-hidden">
            <img src={active} alt="product" className="h-full object-contain" />
        </div>


        {/* Thumbnails */}
        <div className="flex gap-3">
            {images.map((img, i) => (
            <img
            key={i}
            src={img}
            alt="thumb"
            onClick={() => setActive(img)}
            className={`w-20 h-20 object-contain border rounded-xl p-1 cursor-pointer transition ${active === img ? "border-black" : "border-gray-300"}`}
        />
            ))}
        </div>
    </div>
);
};