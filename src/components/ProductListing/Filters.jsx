import React from "react";


export const Filters = ({ categories, selectedCategory, setCategory }) => {
    return (
    <div className="p-4 shadow-sm bg-white">
        <h3 className="font-semibold text-lg mb-3">Filters</h3>


        {/* Category Filter */}
        <div>
            <p className="font-medium mb-1">Category</p>
            <select
                className="w-full border p-2"
                value={selectedCategory}
                onChange={(e) => setCategory(e.target.value)}
            >
            <option value="all">All</option>
                {categories.map((c) => (
                    <option key={c} value={c}>{c}</option>
                ))}
            </select>
        </div>


        {/* Rating Filter */}
        <div className="mt-4">
            <p className="font-medium mb-1">Minimum Rating</p>
            <select className="w-full border p-2">
                <option>All</option>
                <option>4★ & above</option>
                <option>3★ & above</option>
                <option>2★ & above</option>
            </select>
        </div>


        {/* Availability */}
        <div className="mt-4">
            <p className="font-medium mb-1">Availability</p>
            <div className="space-y-1 text-sm">
                <label className="flex items-center gap-2">
                    <input type="checkbox" /> In Stock
                </label>
                <label className="flex items-center gap-2">
                    <input type="checkbox" /> Out of Stock
                </label>
            </div>
        </div>
    </div>
    );
};