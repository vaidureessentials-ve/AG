import React from 'react';
import aboutImage from '../assets/about-ingredients.png';

const About = () => (
    <div className="min-h-screen bg-[#F9F8F6] text-[#2C2C2C]">
        {/* Full-Width Image Section */}
        <div className="w-full pt-20">
            <img
                src={aboutImage}
                alt="Natural ingredients - peaches, blueberries, aloe vera, and flowers"
                className="w-full h-[45vh] md:h-[55vh] object-cover"
            />
        </div>

        {/* Content Container */}
        <div className="container mx-auto max-w-6xl px-6 pt-16 pb-24">
            {/* Header Section */}


            {/* Content Section */}
            <div className="space-y-8 text-lg leading-relaxed animate-fade-in-up max-w-4xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif mb-6">About VAIDURE</h2>
                    <p className="text-gray-700">
                        VAIDURE is a premium personal care brand crafted for those who believe everyday rituals should feel indulgent.
                    </p>
                </div>

                <p className="text-gray-700">
                    Blending refined aesthetics with sensorial formulations, VAIDURE transforms daily cleansing into moments of
                    calm, confidence, and understated luxury. Every product is designed with precision, elegance, and a deep
                    respect for modern self-care.
                </p>

                <p className="text-gray-700">
                    Created to serve the evolving needs of hotels, resorts, serviced apartments, and restaurants across India,
                    VAIDURE delivers high-quality, reliable, and cost-effective personal care solutions that elevate guest experience
                    while helping hospitality partners control costs, reduce wastage, and simplify operations.
                </p>

                <p className="text-gray-700">
                    In a market divided between expensive luxury brands and inconsistent low-cost suppliers, VAIDURE stands at the
                    intersection of quality, value, and consistency—offering hospitality-ready products that feel premium, perform
                    reliably, and reflect thoughtful design.
                </p>
            </div>

            {/* Decorative Element */}
            <div className="mt-16 flex justify-center">
                <div className="w-24 h-1 bg-[#C2A788] rounded-full"></div>
            </div>
        </div>
    </div>
);
export default About;
