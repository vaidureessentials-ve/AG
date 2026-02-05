import React from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/hero-beach.png';
import ContactForm from './ContactForm';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-100 py-24 md:py-0">
            {/* Background Image Placeholder or Color */}
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }}></div>
                <div className="absolute inset-0 bg-black/30"></div> {/* Overlay */}
            </div>

            <div className="max-w-7xl w-full mx-auto relative z-10 px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center min-h-screen md:h-full py-8">
                <div className="space-y-6 order-1 md:order-1">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight">
                        We Offer Every Client Customization
                    </h2>
                    <p className="text-base md:text-lg text-white/90 max-w-lg font-light drop-shadow-md">
                        Premium hotel toiletries and body care solutions designed for modern hospitality and conscious consumers.
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
