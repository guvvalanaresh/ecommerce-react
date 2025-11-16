import React from "react";


export const SortDropdown = ({ sort, setSort }) => {
    return (
        <select
            className="border p-2 shadow-sm"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
        >
            <option value="default">Sort By</option>
            <option value="low-high">Price: Low → High</option>
            <option value="high-low">Price: High → Low</option>
            <option value="newest">Newest</option>
            <option value="best">Best Selling</option>
        </select>
    );
};