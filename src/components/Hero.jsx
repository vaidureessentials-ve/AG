import React from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/hero-beach.png';
import ContactForm from './ContactForm';

const Hero = () => {
    return (
        <section 
            className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-gray-100 py-24 md:py-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroBg})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/40 z-0"></div>

            <div className="max-w-7xl w-full mx-auto relative z-10 px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center min-h-screen md:h-full py-8">
                <div className="space-y-8 order-1 md:order-1 animate-fade-in-up">
                    <div>
                        <span className="text-white/80 uppercase tracking-[0.25em] text-xs font-bold mb-4 block">Tailored Elegance</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.1] tracking-tight">
                            We Offer Every Client <span className="italic text-white/90">Customization</span>
                        </h1>
                    </div>
                    <p className="text-base md:text-lg text-white/80 max-w-lg font-light leading-relaxed">
                        Premium hotel toiletries and body care solutions designed for modern hospitality and conscious consumers. Experience the true essence of luxury.
                    </p>
                </div>

                <div className="w-full max-w-md ml-auto order-2 md:order-2">
                    <ContactForm />
                </div>
            </div>
        </section >
    );
};

export default Hero;
