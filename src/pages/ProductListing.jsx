import React, { useState } from "react";
import { products } from "../data/products.js";
import { ProductCard } from "../components/ProductListing/ProductCard";
import { Filters } from "../components/ProductListing/Filters";
import { SortDropdown } from "../components/ProductListing/SortDropdown";


export default function Products() {
    const [category, setCategory] = useState("all");
    const [sort, setSort] = useState("default");


    // Extract categories
    const categories = [...new Set(products.map((p) => p.category))];


    // Filter by category
    let filteredProducts = category === "all"
    ? products
    : products.filter((p) => p.category === category);


    // Sorting logic
    if (sort === "low-high") filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
    if (sort === "high-low") filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);


    return (
        <div className="max-w-7xl mx-auto p-5 grid grid-cols-1 md:grid-cols-4 gap-6">
    

            {/* Filters */}
            <div className="md:col-span-1">
                <Filters
                categories={categories}
                selectedCategory={category}
                setCategory={setCategory}
                />
            </div>


            {/* Product Area */}
            <div className="md:col-span-3">
                <div className="flex justify-between items-center mb-5">
                    <h2 className="text-2xl font-bold">All Products</h2>
                    <SortDropdown sort={sort} setSort={setSort} />
                </div>


                {/* Product Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>


        </div>
    );
}