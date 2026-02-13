import React from 'react';
import { Link } from 'react-router-dom';

const HotelResortAmenity = () => {
    return (
        <div className="animate-fade-in pt-20">
            {/* Hero Section */}
            <div className="relative h-[90vh] md:h-screen flex items-center justify-center bg-[#FDFBF7] overflow-hidden">
                <div className="absolute inset-0 bg-black/5 z-10"></div>
                <img
                    src="/HotelResortAmenities.png"
                    alt="Hotel & Resort Amenities"
                    className="absolute inset-0 w-full h-full object-cover animate-zoom-out"
                />
                <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
                    <span className="block text-white text-sm md:text-base tracking-[0.2em] uppercase mb-4 drop-shadow-md">
                        B2B Solutions
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 drop-shadow-lg">
                        Hotel & Resort Amenities
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto mb-10 drop-shadow-md">
                        Elevate your guest experience with our premium, sustainable, and customizable amenity collections.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-white text-primary border border-white hover:bg-transparent hover:text-white py-3 px-8 rounded-sm transition-all duration-300 uppercase tracking-widest text-sm"
                    >
                        Request a Quote
                    </Link>

                </div>
            </div>

            {/* Introduction Section */}
            <div className="py-20 md:py-32 px-6 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2">
                        <img
                            src="/CraftingMemorable.png"
                            alt="Luxury Amenity Set"
                            className="w-full h-auto object-cover rounded-sm shadow-xl"
                        />
                    </div>
                    <div className="w-full md:w-1/2 space-y-6">
                        <span className="text-secondary text-sm tracking-widest uppercase">Exquisite Quality</span>
                        <h2 className="text-3xl md:text-4xl font-serif text-primary">
                            Crafting Memorable Stays
                        </h2>
                        <p className="text-gray-600 leading-relaxed font-light">
                            At Vaidure, we understand that amenities are a crucial touchpoint in the guest journey. Our Hotel & Resort collections are designed to leave a lasting impression, blending luxurious formulations with eco-conscious packaging.
                        </p>
                        <p className="text-gray-600 leading-relaxed font-light">
                            From boutique hotels to expansive resorts, we offer tailored solutions that align with your brand's ethos and elevate the standard of hospitality.
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            {['Premium Ingredients', 'Eco-Friendly Packaging', 'Custom Branding', 'Bulk Supply'].map((item, index) => (
                                <li key={index} className="flex items-center text-primary font-medium">
                                    <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Customization / Service Section */}
            <div className="py-20 md:py-32 px-6 bg-[#F9F8F6]">
                <div className="max-w-7xl mx-auto text-center mb-16">
                    <span className="text-secondary text-sm tracking-widest uppercase block mb-3">Tailored Solutions</span>
                    <h2 className="text-3xl md:text-5xl font-serif text-primary">Why Choose Vaidure?</h2>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="bg-white p-10 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="h-16 w-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-serif text-primary mb-4">Custom Formulations</h3>
                        <p className="text-gray-600 font-light text-sm leading-relaxed">
                            Create a signature scent or specific formulation that captures the essence of your property.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-white p-10 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="h-16 w-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-serif text-primary mb-4">Sustainable Packaging</h3>
                        <p className="text-gray-600 font-light text-sm leading-relaxed">
                            Reduce your environmental footprint with our plastic-free, biodegradable, and refillable packaging options.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-white p-10 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="h-16 w-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-serif text-primary mb-4">Reliable Supply</h3>
                        <p className="text-gray-600 font-light text-sm leading-relaxed">
                            Consistent quality and timely delivery ensuring your operations run smoothly without interruption.
                        </p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default HotelResortAmenity;
