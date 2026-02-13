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
                        Where gentle healing meets purposeful luxury
                    </p>
                </div>
            </div>



            {/* Philosophy Section */}
            <div className="py-20 md:py-32 px-6">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-serif text-[#2C2C2C] leading-tight">
                        Inspired by the delicate nature of healing and the power of purity, Vaidure Hospital Amenities represents a harmonious blend of safety and comfort.
                    </h2>
                    <p className="text-gray-600 leading-relaxed font-light text-lg md:text-xl">
                        We meticulously craft each product – from soothing body washes to gentle shampoos – to be free from harsh chemicals, ensuring a truly safe and beneficial experience for patients. Our formulations are a symphony of mild, skin-friendly ingredients, chosen for their efficacy and their ability to provide comfort during recovery. This isn't just about hygiene; it's about respecting sensitive skin with ingredients as pure as care intended.
                    </p>
                </div>
            </div>

            {/* Partners Section */}
            <div className="py-20 px-6 bg-white border-y border-[#EAEaea]">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <span className="text-[#8C8C8C] text-sm tracking-[0.2em] uppercase block mb-2 font-sans">For Our Partners in Healthcare</span>
                    <h2 className="text-2xl md:text-3xl font-serif text-[#2C2C2C]">
                        Vaidure is more than an amenity collection; it is an extension of your hospital's commitment to patient well-being.
                    </h2>
                    <p className="text-gray-600 leading-relaxed font-light">
                        By choosing Vaidure, you offer your patients not just essential toiletries, but a touch of comfort, a moment of dignity, and a clear statement of your dedication to their holistic recovery. It's an investment in patient satisfaction and a shared vision for mindful, compassionate care.
                    </p>
                    <p className="font-serif italic text-[#2C2C2C] pt-4 text-lg">
                        Where every drop whispers care, and every touch is a promise of safety.
                    </p>
                </div>
            </div>

            {/* Collection Details Section - Text & Lists */}
            <div className="py-20 md:py-32 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    {/* Text Description */}
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-5xl font-serif text-[#2C2C2C] mb-6">Pure & Gentle</h2>
                        <p className="text-gray-600 leading-relaxed font-light mb-6">
                            Immerse your patients in a soothing cleanse with Vaidure's Pure & Gentle range. Formulated to be hypoallergenic and mild, these products deliver a soft, comforting lather without stripping natural moisture. They gently purify, leaving skin soft, nourished, and protected—ideal for post-operative care or sensitive skin conditions. Experience conscious care in every use.
                        </p>
                        <div className="pt-8">
                            <Link
                                to="/contact"
                                className="inline-block bg-[#2C2C2C] text-white py-3 px-8 rounded-sm hover:bg-white hover:text-[#2C2C2C] border border-[#2C2C2C] transition-all duration-300 uppercase tracking-widest text-sm shadow-md hover:shadow-lg"
                            >
                                Request a Sample
                            </Link>
                        </div>
                    </div>

                    {/* Product Lists */}
                    <div className="space-y-12 font-light text-gray-700">
                        {/* Liquids */}
                        <div>
                            <h3 className="text-xl font-serif text-[#2C2C2C] mb-4 border-b border-gray-200 pb-2">Liquids</h3>
                            <ul className="space-y-2">
                                <li className="flex justify-between"><span>Gentle Hair Shampoo</span> <span>30ml</span></li>
                                <li className="flex justify-between"><span>Mild Body Wash</span> <span>30ml</span></li>
                                <li className="flex justify-between"><span>Moisturizing Body Lotion</span> <span>30ml</span></li>
                                <li className="flex justify-between"><span>Softening Hair Conditioner</span> <span>30ml</span></li>
                                <li className="flex justify-between"><span>Gentle Hand Wash</span> <span>30ml</span></li>
                            </ul>
                        </div>

                        {/* Soap */}
                        <div>
                            <h3 className="text-xl font-serif text-[#2C2C2C] mb-4 border-b border-gray-200 pb-2">Soaps</h3>
                            <ul className="space-y-2">
                                <li className="flex justify-between"><span>Hypoallergenic Soap (Paper Wrap)</span> <span>20g / 30g</span></li>
                                <li className="flex justify-between"><span>Moisturizing Soap (Box Pack)</span> <span>25g / 40g</span></li>
                            </ul>
                        </div>

                        {/* Accessories */}
                        <div>
                            <h3 className="text-xl font-serif text-[#2C2C2C] mb-4 border-b border-gray-200 pb-2">Care Accessories</h3>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                                <span>Dental Kit</span>
                                <span>Shaving Kit</span>
                                <span>Comb</span>
                                <span>Shower Cap</span>
                                <span>Loofah</span>
                                <span>Disposal Bag</span>
                                <span>Sewing Kit</span>
                                <span>Vanity Kit</span>
                                <span>Shoe Shine</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default HospitalAmenities;
