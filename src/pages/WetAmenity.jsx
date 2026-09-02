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
            <div className="py-32 px-6 bg-white animate-fade-in-up">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2">
                        <img
                            src={wetAmenityImg}
                            alt="Premium Shampoo and Body Wash"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <div className="w-full md:w-1/2 space-y-8">
                        <span className="text-secondary text-xs tracking-[0.25em] font-bold uppercase">Revitalizing Care</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight">
                            Botanical Hydration
                        </h2>
                        <div className="space-y-6 text-primary/80 font-light text-lg leading-relaxed">
                            <p>
                                Immerse your guests in the luxury of our wet amenities. Formulated with gentle, plant-based ingredients, our shampoos, conditioners, and body washes cleanse and hydrate without the use of harsh sulfates or parabens.
                            </p>
                            <p>
                                Every drop is designed to transform a routine shower into a restorative ritual. Enriched with natural antioxidants, essential vitamins, and deep-moisturizing oils, our liquids leave skin feeling velvety and hair visibly radiant.
                            </p>
                            <p>
                                Available in a variety of refreshing scent profiles, from the uplifting crispness of Citrus & Basil to the deep, grounding notes of Oudh & Musk.
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
                    <span className="text-secondary text-xs tracking-[0.25em] font-bold uppercase mb-4 block">Our Formulations</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-primary mb-16">The Complete Range</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                        <div className="bg-white p-12 hover:shadow-lg transition-shadow duration-500">
                            <h3 className="text-2xl font-serif text-primary mb-6 border-b border-secondary/20 pb-4">Hair Care</h3>
                            <ul className="space-y-4 text-primary/80 font-light text-lg">
                                <li className="flex items-start"><span className="text-secondary mr-4 mt-1">✦</span><span><strong>Purifying Shampoo:</strong> Cleanses the scalp while maintaining natural oils.</span></li>
                                <li className="flex items-start"><span className="text-secondary mr-4 mt-1">✦</span><span><strong>Hydrating Conditioner:</strong> Detangles and adds a silky, weightless shine.</span></li>
                                <li className="flex items-start"><span className="text-secondary mr-4 mt-1">✦</span><span>Available in elegant 30ml / 50ml miniatures and 300ml / 500ml bulk refill dispensers.</span></li>
                            </ul>
                        </div>
                        <div className="bg-white p-12 hover:shadow-lg transition-shadow duration-500">
                            <h3 className="text-2xl font-serif text-primary mb-6 border-b border-secondary/20 pb-4">Body Care</h3>
                            <ul className="space-y-4 text-primary/80 font-light text-lg">
                                <li className="flex items-start"><span className="text-secondary mr-4 mt-1">✦</span><span><strong>Revitalizing Body Wash:</strong> A rich lather that washes away fatigue.</span></li>
                                <li className="flex items-start"><span className="text-secondary mr-4 mt-1">✦</span><span><strong>Nourishing Body Lotion:</strong> Fast-absorbing hydration that locks in moisture all day.</span></li>
                                <li className="flex items-start"><span className="text-secondary mr-4 mt-1">✦</span><span><strong>Gentle Hand Wash:</strong> Cleanses effectively without stripping the skin's barrier.</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WetAmenity;
