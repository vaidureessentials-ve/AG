import React from 'react';
import wetAmenityImg from '/wet-amenity.png';

const WetAmenity = () => {
    return (
        <div className="min-h-screen pt-32 pb-24 px-6 container mx-auto">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                {/* Image Section */}
                <div className="w-full md:w-1/2 animate-fade-in-left">
                    <img
                        src="/product-3.png"
                        alt="Vaidure Wet Amenities - Shampoo, Conditioner, Shower Gel, Lotion"
                        className="w-full h-auto object-cover rounded-sm shadow-md"
                    />
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 space-y-6 text-left animate-fade-in-right">
                    <h1 className="text-4xl md:text-5xl font-serif text-primary">Wet Amenities</h1>
                    <h2 className="text-2xl font-serif text-gray-700 italic">Premium shampoos, conditioners, and body care</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Our premium liquid amenities are crafted with nature-inspired ingredients
                        to provide a refreshing and invigorating guest experience.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WetAmenity;
