import React, { useState, useEffect } from "react";
import { ImageGallery } from "../components/ProductDetails/ImageGallery";
import { ProductInfo } from "../components/ProductDetails/ProductInfo";
import { QuantitySelector } from "../components/ProductDetails/QuantitySelector";
import { ReviewSection } from "../components/ProductDetails/ReviewSection";
import { RelatedProductsSection } from "../components/ProductDetails/RelatedProductsSection";
import { products } from "../data/products.js";
import { useParams } from "react-router-dom";
import { useCart } from '../context/CartContext'
import {Flip , toast } from "react-toastify"

export default function ProductDetailPage() {
    const { id } = useParams();
    
    const product = products.find((p) => p.id === parseInt(id, 10)); 

    if (!product) {
        return (
            <div className="max-w-7xl mx-auto p-5">
                <h2 className="text-2xl font-bold">Product not found</h2>
                <p className="mt-2">The product you requested does not exist or the id is invalid.</p>
            </div>
        );
    }

    // placeholder images array (use real images if available)
    const images = [product.image, product.image, product.image];


    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    return (
    <div className="max-w-7xl mx-auto p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">


            {/* Images */}
            <ImageGallery images={images} />


            {/* Product Info */}
            <div>
                <ProductInfo product={product} />
                <QuantitySelector quantity={quantity} setQuantity={setQuantity} />


                <div className="flex gap-4 mt-6">
                    <button
                      className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
                      onClick={() => {
                        addToCart(product, quantity);
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
                        Add to Cart
                    </button>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>


        {/* Reviews */}
        <ReviewSection
            reviews={[
                { user: "John Doe", rating: 4, comment: "Great product!" },
                { user: "Emma", rating: 5, comment: "Absolutely loved it." },
            ]}
        />


        {/* Related */}
        <RelatedProductsSection related={products.slice(1, 5)} />
    </div>
    );
}