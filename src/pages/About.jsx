import React from 'react';
import aboutImage from '../assets/about-ingredients.png';

const About = () => (
    <div className="min-h-screen bg-background text-primary">
        {/* Full-Width Image Section */}
        <div className="w-full pt-20 animate-fade-in">
            <img
                src={aboutImage}
                alt="Natural ingredients - peaches, blueberries, aloe vera, and flowers"
                className="w-full h-[60vh] md:h-[70vh] object-cover"
            />
        </div>

        {/* Content Container */}
        <div className="container mx-auto max-w-4xl px-6 pt-24 pb-32">
            {/* Content Section */}
            <div className="text-center space-y-12 animate-fade-in-up">
                <div className="mb-16">
                    <span className="text-secondary text-xs font-bold tracking-[0.25em] uppercase mb-6 block">Our Story</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary leading-tight">
                        The Essence of <br/><span className="italic text-secondary">Vaidure</span>
                    </h2>
                </div>

                <div className="space-y-10 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto text-primary/80">
                    <p>
                        <strong className="font-medium text-primary">VAIDURE</strong> is a premium personal care brand crafted for those who believe everyday rituals should feel indulgent.
                    </p>

                    <p>
                        Blending refined aesthetics with sensorial formulations, VAIDURE transforms daily cleansing into moments of
                        calm, confidence, and understated luxury. Every product is designed with precision, elegance, and a deep
                        respect for modern self-care.
                    </p>

                    <p>
                        Created to serve the evolving needs of hotels, resorts, serviced apartments, and restaurants across India,
                        VAIDURE delivers high-quality, reliable, and cost-effective personal care solutions that elevate guest experience
                        while helping hospitality partners control costs, reduce wastage, and simplify operations.
                    </p>

                    <p>
                        In a market divided between expensive luxury brands and inconsistent low-cost suppliers, VAIDURE stands at the
                        intersection of quality, value, and consistency—offering hospitality-ready products that feel premium, perform
                        reliably, and reflect thoughtful design.
                    </p>
                </div>
            </div>

            {/* Our Philosophy Section */}
            <div className="mt-32 max-w-4xl mx-auto text-center space-y-12 animate-fade-in-up">
                <div className="mb-12">
                    <span className="text-secondary text-xs font-bold tracking-[0.25em] uppercase mb-6 block">Our Philosophy</span>
                    <h3 className="text-3xl md:text-4xl font-serif text-primary">Sustainable Luxury</h3>
                </div>
                <div className="text-lg font-light leading-relaxed text-primary/80 space-y-6 text-left md:text-center">
                    <p>
                        True luxury does not come at the expense of the environment. At Vaidure, we meticulously source our ingredients to ensure they are both ethically harvested and gentle on the skin. 
                    </p>
                    <p>
                        Our formulations are deeply inspired by the ancient wisdom of botanical wellness, yet engineered for the modern conscious consumer. We believe that what you put on your skin should be as clean and nourishing as what you put in your body.
                    </p>
                </div>
            </div>

            {/* The Guest Experience Section */}
            <div className="mt-32 max-w-4xl mx-auto text-center space-y-12 animate-fade-in-up">
                <div className="mb-12">
                    <span className="text-secondary text-xs font-bold tracking-[0.25em] uppercase mb-6 block">The Guest Experience</span>
                    <h3 className="text-3xl md:text-4xl font-serif text-primary">Elevating Every Stay</h3>
                </div>
                <div className="text-lg font-light leading-relaxed text-primary/80 space-y-6 text-left md:text-center">
                    <p>
                        We understand that the amenities you choose are a direct reflection of your hospitality. A guest's memory of a stay is often tied to the sensory details—the scent of the soap, the texture of the lotion, the aesthetic of the bottle on the vanity.
                    </p>
                    <p>
                        Vaidure’s collections are designed to leave a lasting, positive impression. From our bespoke fragrances that calm the mind to our sleek, minimalist packaging that complements any interior, we provide the finishing touches that turn a good room into a luxurious sanctuary.
                    </p>
                </div>
            </div>

            {/* Decorative Element */}
            <div className="mt-24 flex justify-center">
                <div className="w-[1px] h-24 bg-secondary/40"></div>
            </div>
        </div>
    </div>
);
export default About;
