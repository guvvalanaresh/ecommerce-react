import React from "react"
import { FaStar } from "react-icons/fa";
import { products } from "../../data/products";     // importing products from our products.js file
import { useCart } from "../../context/CartContext";
import { Flip, toast } from "react-toastify";

// Here creating the Card component for every product
const ProductCard = ({ product }) => {

  const { addToCart } = useCart();

  return (
    <div className="bg-white shadow-md p-4 hover:shadow-xl transition border border-gray-200 cursor-pointer flex flex-col">

      {/* Product Image */}
      <div className="w-full h-48 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain"
        />
      </div>

      {/* Category */}
      <p className="text-sm text-gray-500 mt-2 capitalize">{product.category}</p>

      {/* Title */}
      <h3 className="mt-1 font-semibold line-clamp-2">{product.title}</h3>

      {/* Price */}
      <p className="text-sm font-bold mt-2 text-red-700">₹{product.price}</p>

      {/* Rating */}
      <div className="flex items-center mt-2 mb-3">
        <FaStar className="text-yellow-500" />
        <span className="ml-2 text-sm text-gray-600">
          {product.rating.rate} ({product.rating.count})
        </span>
      </div>

      {/* Add to Cart */}
      <button className="w-full bg-yellow-300 text-black font-semibold py-2 mt-auto hover:bg-yellow-200 transition cursor-pointer"
              onClick={() => {
                  addToCart(product, 1);
                  toast.success("Added to cart", 
                      {
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
    </div>
  );
};

const FeaturedProducts = () => {
    return (
        <div>
            {/* Centered Heading With Animated Underline */}
            {/* <div className="flex justify-center mb-6">
                <h3 className="relative inline-block text-2xl font-semibold group cursor-pointer">
                    Featured Products
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-0 top-8 w-0 h-[3px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </h3>
            </div> */}

            {/* Mapping over the each prosucts and assigning them to ProductCard Component */}
            <div className="p-6 sm:p-8 max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((item, index) => (
                    <ProductCard key={item.id} product={item} index={index} />
                ))}
            </div>
        </div>
    );
}

export default FeaturedProducts