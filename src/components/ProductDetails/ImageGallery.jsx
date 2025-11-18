import React, { useState, useEffect } from "react";


export const ImageGallery = ({ images }) => {
    const [active, setActive] = useState(images[0]);

    useEffect(() => {
        setActive(images[0]);   // reset when product changes
    }, [images]);


return (
    <div className="flex flex-col gap-4">
        {/* Main Image */}
        <div className="w-full h-64 sm:h-80 md:h-96 border rounded-xl flex items-center justify-center overflow-hidden">
            <img src={active} alt="product" className="max-h-full object-contain" />
        </div>


        {/* Thumbnails */}
        <div className="flex gap-3 overflow-x-auto">
            {images.map((img, i) => (
            <img
            key={i}
            src={img}
            alt="thumb"
            onClick={() => setActive(img)}
            className={`w-16 h-16 sm:w-20 sm:h-20 object-contain border rounded-xl p-1 cursor-pointer transition ${active === img ? "border-black" : "border-gray-300"}`}
        />
            ))}
        </div>
    </div>
);
};