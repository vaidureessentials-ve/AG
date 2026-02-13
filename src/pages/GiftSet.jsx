import React from 'react';
import { Link } from 'react-router-dom';
import giftSetImg from '/product-1.png';

const GiftSet = () => {
    return (
        <div className="animate-fade-in pt-20">
            {/* Hero Section */}
            <div className="relative h-[80vh] md:h-[90vh] flex items-center justify-center bg-[#FDFBF7] overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <img
                    src="/GiftSets.png"
                    alt="Vaidure Gift Set Collection"
                    className="absolute inset-0 w-full h-full object-cover animate-zoom-out"
                />
                <div className="relative z-20 text-center px-6 w-full max-w-7xl mx-auto">
                    <span className="block text-white text-sm md:text-base tracking-[0.2em] uppercase mb-2 drop-shadow-md">
                        The Art of Giving
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-2 drop-shadow-lg tracking-widest">
                        Gift Sets
                    </h1>
                    <p className="text-lg md:text-2xl text-white/90 font-light max-w-3xl mx-auto drop-shadow-md">
                        Thoughtfully curated collections for every occasion.
                    </p>
                </div>
            </div>

            {/* Introduction Section */}
            <div className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2">
                        <img
                            src={giftSetImg}
                            alt="Peach & Berries Collection"
                            className="w-full h-auto object-cover rounded-sm shadow-xl"
                        />
                    </div>
                    <div className="w-full md:w-1/2 space-y-6">
                        <span className="text-secondary text-sm tracking-widest uppercase">Signature Collection</span>
                        <h2 className="text-3xl md:text-4xl font-serif text-primary">
                            Peach & Berries
                        </h2>
                        <p className="text-gray-600 leading-relaxed font-light">
                            Designed to delight, our Peach & Berries collection brings a touch of sweetness and sophistication to any routine. This curated set features our most loved essential amenities, elegantly packaged for gifting or personal indulgence.
                        </p>
                        <p className="text-gray-600 leading-relaxed font-light">
                            Perfect for introducing guests to the Vaidure experience, or as a thoughtful amenity for VIP suites.
                        </p>

                        <div className="pt-8">
                            <Link
                                to="/contact"
                                className="inline-block bg-primary text-white hover:bg-opacity-90 py-3 px-8 rounded-sm transition-all duration-300 uppercase tracking-widest text-sm shadow-md"
                            >
                                Request Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features / Details */}
            <div className="py-20 px-6 bg-[#F9F8F6]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-serif text-primary mb-12">What's Inside</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        <div className="bg-white p-8 shadow-sm">
                            <h3 className="text-xl font-serif text-primary mb-4">Liquids (30ml)</h3>
                            <ul className="space-y-3 text-gray-600 font-light">
                                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></span>Shampoo</li>
                                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></span>Conditioner</li>
                                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></span>Body Wash</li>
                                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></span>Body Lotion</li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 shadow-sm">
                            <h3 className="text-xl font-serif text-primary mb-4">Essentials</h3>
                            <ul className="space-y-3 text-gray-600 font-light">
                                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></span>Luxury Soap Bar</li>
                                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></span>Dental Kit</li>
                                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></span>Premium Packaging</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GiftSet;
