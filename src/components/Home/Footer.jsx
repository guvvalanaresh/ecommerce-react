import React from "react"

const Footer = () => {
    return (
        <div className="flex justify-around mt-30 bg-gray-400 p-5">
            <ul className=" flex flex-col gap-3 font-medium">
                <a href=""><li>Home</li></a>
                <a href=""><li>Products</li></a>
                <a href=""><li>About</li></a>
                <a href=""><li>Contact</li></a>
            </ul>
            <p className="flex flex-col justify-center text-xl font-medium">All rights reserved @naresh</p>
        </div>
    );
}

export default Footer