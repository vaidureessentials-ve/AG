import React from 'react';
import dryAmenityImg from '/dry-amenity.png';

const DryAmenity = () => {
    return (
        <div className="min-h-screen pt-32 pb-24 px-6 container mx-auto">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                {/* Image Section */}
                <div className="w-full md:w-1/2 animate-fade-in-left">
                    <img
                        src={dryAmenityImg}
                        alt="Vaidure Dry Amenities - Dental Kit, Shaving Kit, and more"
                        className="w-full h-auto object-cover rounded-sm shadow-md"
                    />
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 space-y-6 text-left animate-fade-in-right">
                    <h1 className="text-4xl md:text-5xl font-serif text-primary">Dry Amenities</h1>
                    <h2 className="text-2xl font-serif text-gray-700 italic">Essential Care Kit</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        A complete range of essential amenities designed for comfort and convenience.
                        Includes dental kits, shaving kits, vanity kits, and more—packaged in our signature minimal, eco-friendly design.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DryAmenity;
