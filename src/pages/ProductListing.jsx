import React, { useState } from "react";
import { products } from "../data/products.js";
import { ProductCard } from "../components/ProductListing/ProductCard";
import { Filters } from "../components/ProductListing/Filters";
import { SortDropdown } from "../components/ProductListing/SortDropdown";
import Navbar from "../components/Home/Navbar";
import { useLocation } from 'react-router-dom'


export default function Products() {
    const [category, setCategory] = useState("all");
    const [sort, setSort] = useState("default");


    // Extract categories
    const categories = [...new Set(products.map((p) => p.category))];

    // read search query from URL
    const { search } = useLocation()
    const params = new URLSearchParams(search)
    const q = params.get('q') ? params.get('q').toLowerCase() : ''


        // Filter by category
        let filteredProducts = category === "all"
        ? products
        : products.filter((p) => p.category === category);

        // If search query present, filter by title/category/description
        if (q) {
            filteredProducts = filteredProducts.filter((p) => {
                const hay = `${p.title} ${p.category} ${p.description || ''}`.toLowerCase()
                return hay.includes(q)
            })
        }


    // Sorting logic
    if (sort === "low-high") filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
    if (sort === "high-low") filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);


    return (
        <div>
            <Navbar />
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
                    <h2 className="text-2xl font-bold">{q ? `Search results for "${q}"` : 'All Products'}</h2>
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
        </div>
    );
}