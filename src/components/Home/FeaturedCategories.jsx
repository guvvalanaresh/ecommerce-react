import React from "react"

const featuredCategories = [
    {
        id: 1,
        title: "Electronics",
        img: "/Categories/iphone.jpg"
    },
    {
        id: 2,
        title: "Fashion",
        img: "/Categories/iphone.jpg"
    },
    {
        id: 3,
        title: "Home & Kitchen",
        img: "/Categories/kitchen.jpg"
    },
    {
        id: 4,
        title: "Accessories",
        img: "/Categories/accessories.jpg"
    }
]

function CategoryCard({ title, img }) {
    return (
        <div className="w-70 bg-white shadow hover:shadow-lg cursor-pointer p-3 transition">
            <img
                src={img}
                alt={title}
                className="w-full h-58 object-cover"
            />
            <h3 className="mt-2 text-center font-medium">{title.toUpperCase()}</h3>
        </div>
    );
}

const FeaturedCategories = () => {
    return (
        <div className="mt-10 mb-10 p-5">
            
            {/* Centered Heading With Animated Underline */}
            <div className="flex justify-center mb-6">
                <h3 className="relative inline-block text-2xl font-semibold group cursor-pointer">
                    Featured Categories
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-0 top-8 w-0 h-[3px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </h3>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
                {featuredCategories.map((cat) => (
                    <CategoryCard key={cat.id} title={cat.title} img={cat.img} />
                ))}
            </div>
        </div>
    );
};


export default FeaturedCategories