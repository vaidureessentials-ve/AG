import React from 'react';
import { Link } from 'react-router-dom';
import dryAmenityImg from '/dry-amenity.png';

const DryAmenity = () => {
    return (
        <div className="animate-fade-in pt-20">
            {/* Hero Section */}
            <div className="relative h-[80vh] md:h-[90vh] flex items-center justify-center bg-[#FDFBF7] overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <img
                    src="/DryAmenities.png"
                    alt="Vaidure Dry Amenities"
                    className="absolute inset-0 w-full h-full object-cover animate-zoom-out"
                />
                <div className="relative z-20 text-center px-6 w-full max-w-7xl mx-auto">
                    <span className="block text-white text-sm md:text-base tracking-[0.2em] uppercase mb-2 drop-shadow-md">
                        Essential Comfort
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-2 drop-shadow-lg tracking-widest">
                        Dry Amenities
                    </h1>
                    <p className="text-lg md:text-2xl text-white/90 font-light max-w-3xl mx-auto drop-shadow-md">
                        Comprehensive care kits for a seamless guest experience.
                    </p>
                </div>
            </div>

            {/* Introduction Section */}
            <div className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2">
                        <img
                            src="/CompleteCare.png"
                            alt="Sustainable Dry Amenities"
                            className="w-full h-auto object-cover rounded-sm shadow-xl"
                        />
                    </div>
                    <div className="w-full md:w-1/2 space-y-6">
                        <span className="text-secondary text-sm tracking-widest uppercase">Thoughtful Details</span>
                        <h2 className="text-3xl md:text-4xl font-serif text-primary">
                            Complete Care Kits
                        </h2>
                        <p className="text-gray-600 leading-relaxed font-light">
                            From dental kits to vanity essentials, our dry amenities are designed to provide guests with every convenience they might need. Each item is packaged in our signature eco-friendly materials, ensuring that convenience doesn't come at the cost of the environment.
                        </p>
                        <p className="text-gray-600 leading-relaxed font-light">
                            Practical, elegant, and sustainable—the perfect finishing touch to any guest bathroom.
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
                    <h2 className="text-3xl font-serif text-primary mb-12">The Collection</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        <div className="bg-white p-8 shadow-sm">
                            <h3 className="text-xl font-serif text-primary mb-4">Personal Care</h3>
                            <ul className="space-y-3 text-gray-600 font-light">
                                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></span>Dental Kit (Bamboo Toothbrush)</li>
                                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></span>Shaving Kit</li>
                                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></span>Vanity Kit</li>
                                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></span>Sanitary Bag</li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 shadow-sm">
                            <h3 className="text-xl font-serif text-primary mb-4">Grooming & More</h3>
                            <ul className="space-y-3 text-gray-600 font-light">
                                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></span>Comb / Hairbrush</li>
                                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></span>Shower Cap</li>
                                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></span>Loofah</li>
                                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></span>Shoe Shine</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DryAmenity;
