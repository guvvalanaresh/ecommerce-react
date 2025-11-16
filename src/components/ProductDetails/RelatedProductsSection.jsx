import React from "react";
import { ProductCard } from "../ProductListing/ProductCard";


export const RelatedProductsSection = ({ related }) => {
    return (
    <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Related Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {related.map((p) => (
                <ProductCard key={p.id} product={p} />
            ))}
        </div>
    </div>
    );
};