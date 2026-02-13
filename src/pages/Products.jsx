import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    const categories = [
        {
            title: "Gift Sets",
            description: "Curated collections for the perfect gesture.",
            image: "/product-1.png",
            link: "/gift-set"
        },
        {
            title: "Dry Amenities",
            description: "Essential care kits for comfort and convenience.",
            image: "/dry-amenity.png",
            link: "/dry-amenity"
        },
        {
            title: "Wet Amenities",
            description: "Refreshing shampoos, washes, and lotions.",
            image: "/product-3.png",
            link: "/wet-amenity"
        }
    ];

    return (
        <div className="animate-fade-in pt-20">
            {/* Hero Section */}
            <div className="relative py-20 md:py-32 bg-[#FDFBF7] text-center px-6">
                <span className="block text-secondary text-sm tracking-[0.2em] uppercase mb-4">Our Collections</span>
                <h1 className="text-4xl md:text-6xl font-serif text-primary mb-6">Signature Amenities</h1>
                <p className="text-gray-600 max-w-2xl mx-auto font-light text-lg leading-relaxed">
                    Discover our range of thoughtfully crafted amenities, designed to elevate the guest experience with purity and elegance.
                </p>
            </div>

            {/* Categories Grid */}
            <div className="max-w-7xl mx-auto px-6 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {categories.map((cat, index) => (
                        <Link to={cat.link} key={index} className="group block">
                            <div className="overflow-hidden mb-6 shadow-md rounded-sm">
                                <img
                                    src={cat.image}
                                    alt={cat.title}
                                    className="w-full h-80 object-cover transform transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <h2 className="text-2xl font-serif text-primary mb-2 group-hover:text-secondary transition-colors">{cat.title}</h2>
                            <p className="text-gray-600 font-light text-sm">{cat.description}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
