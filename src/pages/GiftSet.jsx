import React from 'react';
import { Link } from 'react-router-dom';
import giftSetImg from '/product-1.png';

const GiftSet = () => {
    return (
        <div className="animate-fade-in pt-20 bg-background text-primary">
            {/* Hero Section */}
            <div className="relative h-[85vh] md:h-screen flex items-center justify-center bg-paper overflow-hidden">
                <div className="absolute inset-0 bg-black/20 z-10"></div>
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
            <div className="py-32 px-6 bg-white animate-fade-in-up">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2">
                        <img
                            src={giftSetImg}
                            alt="Peach & Berries Collection"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <div className="w-full md:w-1/2 space-y-8">
                        <span className="text-secondary text-xs tracking-[0.25em] font-bold uppercase block">Signature Collection</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight">
                            The Peach & Berries Experience
                        </h2>
                        <div className="space-y-6 text-primary/80 font-light text-lg leading-relaxed">
                            <p>
                                Designed to delight the senses, our Peach & Berries collection brings a touch of vibrant sweetness and absolute sophistication to any personal care routine. This masterfully curated set features our most beloved essential amenities, elegantly presented in bespoke packaging.
                            </p>
                            <p>
                                Whether utilized as a memorable VIP welcome amenity in luxury suites, a thoughtful corporate token of appreciation, or a personal indulgence, this gift set encapsulates the true essence of the VAIDURE experience.
                            </p>
                        </div>

                        <div className="pt-8">
                            <Link
                                to="/contact"
                                className="inline-block bg-primary text-white hover:bg-secondary py-4 px-10 transition-colors duration-400 uppercase tracking-widest text-xs font-medium"
                            >
                                Request a Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features / Details */}
            {/* Features / Details */}
            <div className="py-32 px-6 bg-paper">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-secondary text-xs tracking-[0.25em] font-bold uppercase block mb-4">Curated Contents</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-primary mb-16">What's Inside</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                        <div className="bg-white p-12 hover:shadow-lg transition-shadow duration-500">
                            <h3 className="text-2xl font-serif text-primary mb-6 border-b border-secondary/20 pb-4">Aromatic Liquids</h3>
                            <ul className="space-y-4 text-primary/80 font-light text-lg">
                                <li className="flex items-center"><span className="text-secondary mr-4 text-xs">✦</span>Revitalizing Shampoo (30ml)</li>
                                <li className="flex items-center"><span className="text-secondary mr-4 text-xs">✦</span>Nourishing Conditioner (30ml)</li>
                                <li className="flex items-center"><span className="text-secondary mr-4 text-xs">✦</span>Refreshing Body Wash (30ml)</li>
                                <li className="flex items-center"><span className="text-secondary mr-4 text-xs">✦</span>Hydrating Body Lotion (30ml)</li>
                            </ul>
                        </div>
                        <div className="bg-white p-12 hover:shadow-lg transition-shadow duration-500">
                            <h3 className="text-2xl font-serif text-primary mb-6 border-b border-secondary/20 pb-4">Refined Essentials</h3>
                            <ul className="space-y-4 text-primary/80 font-light text-lg">
                                <li className="flex items-center"><span className="text-secondary mr-4 text-xs">✦</span>Artisan Luxury Soap Bar</li>
                                <li className="flex items-center"><span className="text-secondary mr-4 text-xs">✦</span>Bamboo Dental Kit</li>
                                <li className="flex items-center"><span className="text-secondary mr-4 text-xs">✦</span>Elegant Display Box</li>
                                <li className="flex items-center"><span className="text-secondary mr-4 text-xs">✦</span>Customizable Note Card</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GiftSet;
