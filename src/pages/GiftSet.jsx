import React from 'react';
import giftSetImg from '/product-1.png';

const GiftSet = () => {
    return (
        <div className="min-h-screen pt-32 pb-24 px-6 container mx-auto">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                {/* Image Section */}
                <div className="w-full md:w-1/2 animate-fade-in-left">
                    <img
                        src={giftSetImg}
                        alt="Vaidure Gift Set - Peach & Berries Collection"
                        className="w-full h-auto object-cover rounded-sm shadow-md"
                    />
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 space-y-6 text-left animate-fade-in-right">
                    <h1 className="text-4xl md:text-5xl font-serif text-primary">Gift Sets</h1>
                    <h2 className="text-2xl font-serif text-gray-700 italic">Peach & Berries Collection</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        A thoughtfully curated selection of our finest amenities, perfect for gifting or a luxurious trial experience.
                        Give the gift of pure care and indulgence.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GiftSet;
