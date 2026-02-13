import React from 'react';
import { Link } from 'react-router-dom';

const CorporateGifting = () => {
    return (
        <div className="animate-fade-in pt-20">
            {/* Hero Section */}
            {/* Hero Section */}
            {/* Hero Section */}
            <div className="relative w-full h-[90vh] md:h-screen flex items-center justify-center bg-[#FDFBF7] overflow-hidden">
                <div className="absolute inset-0 bg-black/5 z-10"></div>
                {/* Placeholder for hero image */}
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
            <div className="py-20 md:py-32 px-6 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2">
                        <img
                            src="/CelebrateConnections.png"
                            alt="Sustainable Corporate Gifts"
                            className="w-full h-auto object-cover rounded-sm shadow-xl"
                        />
                    </div>
                    <div className="w-full md:w-1/2 space-y-6">
                        <span className="text-secondary text-sm tracking-widest uppercase">Meaningful Gestures</span>
                        <h2 className="text-3xl md:text-4xl font-serif text-primary">
                            Celebrate Connections
                        </h2>
                        <p className="text-gray-600 leading-relaxed font-light">
                            Vaidure offers a curated selection of premium wellness and lifestyle products perfect for corporate gifting. Whether you're celebrating milestones, appreciating employees, or strengthening client relationships, our gifts convey thoughtfulness and quality.
                        </p>
                        <p className="text-gray-600 leading-relaxed font-light">
                            We specialize in sustainable luxury, ensuring your corporate gifts align with modern values of eco-responsibility and wellness.
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            {['Curated Gift Sets', 'Employee Appreciation', 'Event Giveaways', 'Client Onboarding'].map((item, index) => (
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
                    <span className="text-secondary text-sm tracking-widest uppercase block mb-3">Bespoke Services</span>
                    <h2 className="text-3xl md:text-5xl font-serif text-primary">The Art of Gifting</h2>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="bg-white p-10 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="h-16 w-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-serif text-primary mb-4">Custom Branding</h3>
                        <p className="text-gray-600 font-light text-sm leading-relaxed">
                            Personalize packaging and products with your company logo and brand colors for a cohesive experience.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-white p-10 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="h-16 w-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-serif text-primary mb-4">Volume Discounts</h3>
                        <p className="text-gray-600 font-light text-sm leading-relaxed">
                            Competitive pricing for bulk orders, making premium gifting accessible for events and large teams.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-white p-10 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="h-16 w-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-serif text-primary mb-4">Premium Packaging</h3>
                        <p className="text-gray-600 font-light text-sm leading-relaxed">
                            Elegant, plastic-free packaging that makes unboxing a delight and reflects your commitment to sustainability.
                        </p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default CorporateGifting;
