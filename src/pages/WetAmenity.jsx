import React from 'react';
import { Link } from 'react-router-dom';
import wetAmenityImg from '/product-3.png';

const WetAmenity = () => {
    return (
        <div className="animate-fade-in pt-20">
            {/* Hero Section */}
            <div className="relative h-[80vh] md:h-[90vh] flex items-center justify-center bg-[#FDFBF7] overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <img
                    src="/NourishRefresh.png"
                    alt="Vaidure Wet Amenities"
                    className="absolute inset-0 w-full h-full object-cover animate-zoom-out"
                />
                <div className="relative z-20 text-center px-6 w-full max-w-7xl mx-auto">
                    <span className="block text-white text-sm md:text-base tracking-[0.2em] uppercase mb-2 drop-shadow-md">
                        Pure Indulgence
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-2 drop-shadow-lg tracking-widest">
                        Wet Amenities
                    </h1>
                    <p className="text-lg md:text-2xl text-white/90 font-light max-w-3xl mx-auto drop-shadow-md">
                        Revitalizing formulas for a refreshing and luxurious experience.
                    </p>
                </div>
            </div>

            {/* Introduction Section */}
            <div className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2">
                        <img
                            src={wetAmenityImg}
                            alt="Premium Shampoo and Body Wash"
                            className="w-full h-auto object-cover rounded-sm shadow-xl"
                        />
                    </div>
                    <div className="w-full md:w-1/2 space-y-6">
                        <span className="text-secondary text-sm tracking-widest uppercase">Revitalizing Care</span>
                        <h2 className="text-3xl md:text-4xl font-serif text-primary">
                            Nourish & Refresh
                        </h2>
                        <p className="text-gray-600 leading-relaxed font-light">
                            Immerse in the luxury of our wet amenities. Formulated with gentle, plant-based ingredients, our shampoos, conditioners, and body washes cleanse and hydrate without harsh chemicals.
                        </p>
                        <p className="text-gray-600 leading-relaxed font-light">
                            Available in a variety of refreshing scents, including our signature Aloe & Neem and Oudh & Musk blends.
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
                    <h2 className="text-3xl font-serif text-primary mb-12">The Range</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        <div className="bg-white p-8 shadow-sm">
                            <h3 className="text-xl font-serif text-primary mb-4">Hair Care</h3>
                            <ul className="space-y-3 text-gray-600 font-light">
                                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></span>Nourishing Shampoo</li>
                                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></span>Hydrating Conditioner</li>
                                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></span>Available in 30ml bottles & dispensers</li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 shadow-sm">
                            <h3 className="text-xl font-serif text-primary mb-4">Body Care</h3>
                            <ul className="space-y-3 text-gray-600 font-light">
                                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></span>Refreshing Body Wash</li>
                                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></span>Moisturizing Body Lotion</li>
                                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></span>Gentle Hand Wash</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Collections Showcase */}
            <section className="pt-8 pb-24 px-6 bg-paper-texture">
                <div className="max-w-7xl w-full mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-secondary text-xs font-bold tracking-[0.25em] uppercase mb-4 block">OUR COLLECTIONS</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-medium text-primary">Crafted With Love</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Wet Amenities */}
                        <Link to="/wet-amenity" className="group relative cursor-pointer block">
                            <div className="overflow-hidden aspect-[4/3] mb-4">
                                <img
                                    src="/product-3.png"
                                    alt="Wet Amenities"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="absolute bottom-8 left-8 text-white z-10">
                                <h3 className="text-2xl font-serif font-medium mb-1 drop-shadow-md">Wet Amenities</h3>
                                <p className="text-sm text-white/90 mb-3 drop-shadow-md font-light">Premium shampoos, conditioners, and body care</p>
                                <span className="text-xs font-bold tracking-widest border-b border-white pb-1 inline-block hover:text-white/80 transition-colors drop-shadow-md">
                                    VIEW COLLECTION →
                                </span>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 pointer-events-none"></div>
                        </Link>

                        {/* Dry Amenities */}
                        <Link to="/dry-amenity" className="group relative cursor-pointer block">
                            <div className="overflow-hidden aspect-[4/3] mb-4">
                                <img
                                    src="/product-2.png"
                                    alt="Dry Amenities"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="absolute bottom-8 left-8 text-white z-10">
                                <h3 className="text-2xl font-serif font-medium mb-1 drop-shadow-md">Dry Amenities</h3>
                                <p className="text-sm text-white/90 mb-3 drop-shadow-md font-light">Complete guest care kits for hotels</p>
                                <span className="text-xs font-bold tracking-widest border-b border-white pb-1 inline-block hover:text-white/80 transition-colors drop-shadow-md">
                                    VIEW COLLECTION →
                                </span>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 pointer-events-none"></div>
                        </Link>

                        {/* Gift Set */}
                        <Link to="/gift-set" className="group relative cursor-pointer block">
                            <div className="overflow-hidden aspect-[4/3] mb-4">
                                <img
                                    src="/product-1.png"
                                    alt="Gift Set"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="absolute bottom-8 left-8 text-white z-10">
                                <h3 className="text-2xl font-serif font-medium mb-1 drop-shadow-md">Gift Set</h3>
                                <p className="text-sm text-white/90 mb-3 drop-shadow-md font-light">Luxury personal care collection</p>
                                <span className="text-xs font-bold tracking-widest border-b border-white pb-1 inline-block hover:text-white/80 transition-colors drop-shadow-md">
                                    VIEW COLLECTION →
                                </span>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 pointer-events-none"></div>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WetAmenity;
