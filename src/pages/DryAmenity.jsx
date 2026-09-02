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
            <div className="py-32 px-6 bg-white animate-fade-in-up">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2">
                        <img
                            src="/CompleteCare.png"
                            alt="Sustainable Dry Amenities"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <div className="w-full md:w-1/2 space-y-8">
                        <span className="text-secondary text-xs tracking-[0.25em] font-bold uppercase">Thoughtful Details</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight">
                            Sustainable Essentials
                        </h2>
                        <div className="space-y-6 text-primary/80 font-light text-lg leading-relaxed">
                            <p>
                                True hospitality lies in anticipating a guest's needs before they even arise. Our comprehensive dry amenity kits provide those essential conveniences with an uncompromising commitment to environmental responsibility.
                            </p>
                            <p>
                                We have re-engineered the traditional hotel amenity. Plastic toothbrushes are replaced with elegantly carved bamboo; standard shower caps are swapped for biodegradable cornstarch alternatives; and single-use plastics are systematically eliminated from our packaging.
                            </p>
                            <p>
                                Practical, elegant, and entirely sustainable—these are the finishing touches that demonstrate your property's dedication to both guest comfort and planetary well-being.
                            </p>
                        </div>

                        <div className="pt-8">
                            <Link
                                to="/contact"
                                className="inline-block bg-primary text-white hover:bg-secondary py-4 px-10 transition-colors duration-400 uppercase tracking-widest text-xs font-medium"
                            >
                                Request Samples
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features / Details */}
            <div className="py-32 px-6 bg-paper">
                <div className="max-w-5xl mx-auto text-center">
                    <span className="text-secondary text-xs tracking-[0.25em] font-bold uppercase mb-4 block">The Collection</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-primary mb-16">Curated For Comfort</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                        <div className="bg-white p-12 hover:shadow-lg transition-shadow duration-500">
                            <h3 className="text-2xl font-serif text-primary mb-6 border-b border-secondary/20 pb-4">Personal Care</h3>
                            <ul className="space-y-4 text-primary/80 font-light text-lg">
                                <li className="flex items-start"><span className="text-secondary mr-4 mt-1">✦</span><span><strong>Dental Kit:</strong> Featuring an ergonomic bamboo toothbrush and premium toothpaste.</span></li>
                                <li className="flex items-start"><span className="text-secondary mr-4 mt-1">✦</span><span><strong>Shaving Kit:</strong> Sustainable wheat-straw razor with a soothing shaving cream.</span></li>
                                <li className="flex items-start"><span className="text-secondary mr-4 mt-1">✦</span><span><strong>Vanity Kit:</strong> Organic cotton pads and biodegradable cotton swabs.</span></li>
                                <li className="flex items-start"><span className="text-secondary mr-4 mt-1">✦</span><span><strong>Sanitary Bag:</strong> 100% compostable and discreetly packaged.</span></li>
                            </ul>
                        </div>
                        <div className="bg-white p-12 hover:shadow-lg transition-shadow duration-500">
                            <h3 className="text-2xl font-serif text-primary mb-6 border-b border-secondary/20 pb-4">Grooming & More</h3>
                            <ul className="space-y-4 text-primary/80 font-light text-lg">
                                <li className="flex items-start"><span className="text-secondary mr-4 mt-1">✦</span><span><strong>Comb / Hairbrush:</strong> Smooth, static-free wooden combs.</span></li>
                                <li className="flex items-start"><span className="text-secondary mr-4 mt-1">✦</span><span><strong>Shower Cap:</strong> Made from plant-derived PLA, fully compostable.</span></li>
                                <li className="flex items-start"><span className="text-secondary mr-4 mt-1">✦</span><span><strong>Loofah:</strong> Natural, unbleached plant fibers for gentle exfoliation.</span></li>
                                <li className="flex items-start"><span className="text-secondary mr-4 mt-1">✦</span><span><strong>Shoe Shine:</strong> Soft cotton mitts for a perfect polish.</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DryAmenity;
