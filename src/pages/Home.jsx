import React from "react"

import Navbar from "../components/Home/Navbar";
import Hero from "../components/Home/Hero"
import FeaturedCategories from "../components/Home/FeaturedCategories";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import Footer from "../components/Home/Footer";

export default function Home() {
    return (
        <div>
            <Navbar />
            {/* <Hero /> */}
            {/* <FeaturedCategories /> */}
            <FeaturedProducts />
            <Footer />
        </div>
    );
}