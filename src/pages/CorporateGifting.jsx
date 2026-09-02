import React from 'react';
import { Link } from 'react-router-dom';

const CorporateGifting = () => {
    return (
        <div className="animate-fade-in pt-20 bg-background text-primary">
            {/* Hero Section */}
            <div className="relative w-full h-[85vh] md:h-screen flex items-center justify-center bg-paper overflow-hidden">
                <div className="absolute inset-0 bg-black/10 z-10"></div>
                <img
                    src="/corporate-gifting.png"
                    alt="Corporate Gifting"
                    className="absolute inset-0 w-full h-full object-cover animate-zoom-out"
                />
                <div className="relative z-20 text-center px-6 max-w-4xl mx-auto flex flex-col items-center justify-center h-full">
                    <span className="block text-white text-sm md:text-base tracking-[0.2em] uppercase mb-4 drop-shadow-md">
                        B2B Solutions
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 drop-shadow-lg">
                        Corporate Gifting
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto mb-10 drop-shadow-md">
                        Thoughtful, sustainable, and premium gifts that leave a lasting impression on clients, partners, and employees.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-white text-primary border border-white hover:bg-transparent hover:text-white py-3 px-8 rounded-sm transition-all duration-300 uppercase tracking-widest text-sm"
                    >
                        Inquire Now
                    </Link>
                </div>
            </div>

            {/* Introduction Section */}
            <div className="py-32 px-6 bg-white animate-fade-in-up">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2">
                        <img
                            src="/CelebrateConnections.png"
                            alt="Sustainable Corporate Gifts"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <div className="w-full md:w-1/2 space-y-8">
                        <span className="text-secondary text-xs tracking-[0.25em] font-bold uppercase block">Meaningful Gestures</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight">
                            Elevate Your Professional Relationships
                        </h2>
                        <div className="space-y-6 text-primary/80 font-light text-lg leading-relaxed">
                            <p>
                                VAIDURE offers a curated selection of premium personal care and wellness products perfect for sophisticated corporate gifting. Whether you are celebrating milestones, expressing gratitude to employees, or strengthening client relationships, our gifts convey absolute thoughtfulness and uncompromising quality.
                            </p>
                            <p>
                                We specialize in sustainable luxury, ensuring your corporate gifts align perfectly with modern values of eco-responsibility and holistic well-being. Each product is a sensory experience designed to leave a lasting, positive impression of your brand.
                            </p>
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                            {['Curated Gift Sets', 'Employee Appreciation', 'Event & Conference Giveaways', 'Client Onboarding'].map((item, index) => (
                                <li key={index} className="flex items-center text-primary/80 font-light">
                                    <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-4"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Customization / Service Section */}
            <div className="py-32 px-6 bg-paper">
                <div className="max-w-7xl mx-auto text-center mb-20">
                    <span className="text-secondary text-xs tracking-[0.25em] font-bold uppercase block mb-4">Bespoke Services</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-primary">The Art of Gifting</h2>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Feature 1 */}
                    <div className="bg-white p-12 text-center hover:shadow-lg transition-shadow duration-500">
                        <div className="h-16 w-16 bg-background rounded-full flex items-center justify-center mx-auto mb-8 text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-serif text-primary mb-4">Custom Branding</h3>
                        <p className="text-primary/70 font-light text-base leading-relaxed">
                            Personalize our luxury packaging and product labels with your corporate identity, ensuring a cohesive and memorable brand experience.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-white p-12 text-center hover:shadow-lg transition-shadow duration-500">
                        <div className="h-16 w-16 bg-background rounded-full flex items-center justify-center mx-auto mb-8 text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-serif text-primary mb-4">Volume Solutions</h3>
                        <p className="text-primary/70 font-light text-base leading-relaxed">
                            Benefit from competitive tiered pricing structures designed specifically for large-scale corporate events, holiday gifting, and enterprise-wide programs.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-white p-12 text-center hover:shadow-lg transition-shadow duration-500">
                        <div className="h-16 w-16 bg-background rounded-full flex items-center justify-center mx-auto mb-8 text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-serif text-primary mb-4">Premium Presentation</h3>
                        <p className="text-primary/70 font-light text-base leading-relaxed">
                            Delight your recipients with our elegant, plastic-free packaging that makes unboxing an experience in itself, reflecting your commitment to quality.
                        </p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default CorporateGifting;
