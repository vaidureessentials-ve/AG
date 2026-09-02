import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    const categories = [
        {
            title: "Gift Sets",
            description: "Immaculately curated collections designed to leave a lasting impression. Perfect for VIP guests, corporate partners, and special occasions.",
            image: "/product-1.png",
            link: "/gift-set"
        },
        {
            title: "Dry Amenities",
            description: "From sustainable bamboo combs to biodegradable shower caps, our dry kits combine environmental responsibility with effortless elegance.",
            image: "/dry-amenity.png",
            link: "/dry-amenity"
        },
        {
            title: "Wet Amenities",
            description: "Nourishing shampoos, revitalizing body washes, and hydrating lotions infused with botanical extracts and signature calming fragrances.",
            image: "/product-3.png",
            link: "/wet-amenity"
        }
    ];

    return (
        <div className="animate-fade-in pt-20 bg-background text-primary min-h-screen">
            {/* Hero Section */}
            <div className="relative py-24 md:py-32 bg-paper text-center px-6 animate-fade-in-up">
                <span className="block text-secondary text-xs font-bold tracking-[0.25em] uppercase mb-6">Our Collections</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary mb-8 leading-tight">
                    Signature Amenities
                </h1>
                <p className="text-primary/80 max-w-2xl mx-auto font-light text-lg leading-relaxed">
                    Discover our thoughtfully crafted collections. Each product is formulated with uncompromising quality to elevate the guest experience, merging purity of ingredients with timeless aesthetic appeal.
                </p>
            </div>

            {/* Categories Grid */}
            <div className="max-w-7xl mx-auto px-6 py-32">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    {categories.map((cat, index) => (
                        <Link to={cat.link} key={index} className="group block text-center outline-none">
                            <div className="overflow-hidden mb-8 bg-[#F3F1ED] aspect-[4/5]">
                                <img
                                    src={cat.image}
                                    alt={cat.title}
                                    className="w-full h-full object-cover transform transition-transform duration-1000 ease-out group-hover:scale-110"
                                />
                            </div>
                            <h2 className="text-2xl font-serif text-primary mb-4 transition-colors group-hover:text-secondary">{cat.title}</h2>
                            <p className="text-primary/70 font-light text-sm leading-relaxed mb-6">{cat.description}</p>
                            <span className="premium-link text-xs tracking-widest uppercase text-primary">Explore Collection</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
