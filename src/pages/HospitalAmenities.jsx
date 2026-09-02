import React from 'react';
import { Link } from 'react-router-dom';


const HospitalAmenities = () => {
    return (
        <div className="animate-fade-in bg-[#FDFBF7] pt-20">
            {/* Hero Section */}
            <div className="relative h-[90vh] md:h-[100vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/30 z-10"></div>
                <img
                    src="/HospitalAmenities.png"
                    alt="Conscious Care Hospital Amenities"
                    className="absolute inset-0 w-full h-full object-cover z-0 opacity-80 animate-zoom-out"
                />
                <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
                    <span className="block text-white text-sm md:text-base tracking-[0.2em] uppercase mb-4 drop-shadow-md font-sans">
                        Conscious Care
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 drop-shadow-lg">
                        Hospital Amenities
                    </h1>
                    <p className="text-white/90 font-light text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md font-serif italic">
                        Gentle healing meets purposeful luxury.
                    </p>
                </div>
            </div>

            {/* Philosophy Section */}
            <div className="py-32 px-6 bg-white animate-fade-in-up">
                <div className="max-w-5xl mx-auto text-center space-y-8">
                    <span className="text-secondary text-xs tracking-[0.25em] font-bold uppercase block mb-4">Mindful Care</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight">
                        Formulated for Sensitivity
                    </h2>
                    <div className="text-primary/80 leading-relaxed font-light text-lg space-y-6">
                        <p>
                            Inspired by the delicate nature of healing, VAIDURE Hospital Amenities represents a harmonious blend of absolute safety and comforting luxury. We understand that in a healthcare environment, skin is often compromised and highly sensitive.
                        </p>
                        <p>
                            Our medical-grade formulations are meticulously crafted to be hypoallergenic and free from harsh sulfates, parabens, and synthetic fragrances. We utilize ultra-mild, plant-derived cleansers that purify without stripping the skin's natural moisture barrier, ensuring a soothing experience that aids in recovery and restores dignity.
                        </p>
                    </div>
                </div>
            </div>

            {/* Partners Section */}
            <div className="py-24 px-6 bg-paper">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <span className="text-secondary text-xs tracking-[0.25em] font-bold uppercase block mb-6">Partnering with Healthcare</span>
                    <h2 className="text-3xl md:text-4xl font-serif text-primary mb-8 leading-tight">
                        An extension of your hospital's commitment to patient well-being.
                    </h2>
                    <p className="text-primary/80 leading-relaxed font-light text-lg">
                        By choosing VAIDURE, you offer your patients more than just essential toiletries; you provide a touch of comfort and a clear statement of your dedication to their holistic recovery. It is a thoughtful investment in patient satisfaction and a shared vision for compassionate care.
                    </p>
                    <div className="w-16 h-[1px] bg-secondary mx-auto mt-8 mb-6"></div>
                    <p className="font-serif italic text-primary/70 text-xl">
                        "Where every drop whispers care, and every touch is a promise of safety."
                    </p>
                </div>
            </div>

            {/* Collection Details Section - Text & Lists */}
            <div className="py-32 px-6 bg-white">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
                    {/* Text Description */}
                    <div className="space-y-6">
                        <span className="text-secondary text-xs tracking-[0.25em] font-bold uppercase block mb-4">The Collection</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">Pure & Gentle Range</h2>
                        <p className="text-primary/80 leading-relaxed font-light text-lg mb-8">
                            Deliver a soft, comforting cleanse with our Pure & Gentle range. Formulated specifically to be hypoallergenic and mild, these products provide a delicate lather without causing irritation. Ideal for post-operative care, oncology wards, and pediatric units, our amenities ensure that every patient feels cared for and protected.
                        </p>
                        <div className="pt-8">
                            <Link
                                to="/contact"
                                className="inline-block bg-primary text-white hover:bg-secondary py-4 px-10 transition-colors duration-400 uppercase tracking-widest text-xs font-medium"
                            >
                                Request Medical Samples
                            </Link>
                        </div>
                    </div>

                    {/* Product Lists */}
                    <div className="space-y-12 font-light text-primary/80 p-10 bg-paper">
                        {/* Liquids */}
                        <div>
                            <h3 className="text-2xl font-serif text-primary mb-6 border-b border-secondary/20 pb-4">Liquids</h3>
                            <ul className="space-y-4">
                                <li className="flex justify-between items-center"><span className="flex items-center"><span className="text-secondary mr-3 text-xs">✦</span> Hypoallergenic Shampoo</span> <span>30ml</span></li>
                                <li className="flex justify-between items-center"><span className="flex items-center"><span className="text-secondary mr-3 text-xs">✦</span> Mild Body Wash</span> <span>30ml</span></li>
                                <li className="flex justify-between items-center"><span className="flex items-center"><span className="text-secondary mr-3 text-xs">✦</span> Unscented Body Lotion</span> <span>30ml</span></li>
                                <li className="flex justify-between items-center"><span className="flex items-center"><span className="text-secondary mr-3 text-xs">✦</span> Gentle Hair Conditioner</span> <span>30ml</span></li>
                            </ul>
                        </div>

                        {/* Soap */}
                        <div>
                            <h3 className="text-2xl font-serif text-primary mb-6 border-b border-secondary/20 pb-4">Soaps</h3>
                            <ul className="space-y-4">
                                <li className="flex justify-between items-center"><span className="flex items-center"><span className="text-secondary mr-3 text-xs">✦</span> Mild Glycerin Soap (Paper Wrap)</span> <span>20g / 30g</span></li>
                                <li className="flex justify-between items-center"><span className="flex items-center"><span className="text-secondary mr-3 text-xs">✦</span> Moisturizing Soap (Box Pack)</span> <span>25g / 40g</span></li>
                            </ul>
                        </div>

                        {/* Accessories */}
                        <div>
                            <h3 className="text-2xl font-serif text-primary mb-6 border-b border-secondary/20 pb-4">Care Kits</h3>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                                <span className="flex items-center"><span className="text-secondary mr-3 text-xs">✦</span> Dental Kit</span>
                                <span className="flex items-center"><span className="text-secondary mr-3 text-xs">✦</span> Shaving Kit</span>
                                <span className="flex items-center"><span className="text-secondary mr-3 text-xs">✦</span> Comb</span>
                                <span className="flex items-center"><span className="text-secondary mr-3 text-xs">✦</span> Shower Cap</span>
                                <span className="flex items-center"><span className="text-secondary mr-3 text-xs">✦</span> Disposal Bag</span>
                                <span className="flex items-center"><span className="text-secondary mr-3 text-xs">✦</span> Vanity Kit</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default HospitalAmenities;
