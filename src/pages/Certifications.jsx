import React from 'react';

const Certifications = () => {
    return (
        <div className="min-h-screen pt-20 bg-background text-primary animate-fade-in">
            {/* Hero Section */}
            <div className="relative py-24 md:py-32 bg-paper text-center px-6 animate-fade-in-up">
                <span className="block text-secondary text-xs font-bold tracking-[0.25em] uppercase mb-6">Uncompromising Standards</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary mb-8 leading-tight">
                    Certifications & Compliance
                </h1>
                <p className="text-primary/80 max-w-2xl mx-auto font-light text-lg leading-relaxed">
                    True luxury is built on a foundation of trust. We adhere to the highest international standards of quality, safety, and ethical responsibility at every stage of production.
                </p>
            </div>

            <div className="max-w-4xl mx-auto py-24 px-6 space-y-24">
                {/* Quality Compliance */}
                <div className="border-l-2 border-secondary/30 pl-8 md:pl-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <h2 className="text-3xl font-serif mb-6 text-primary">Quality & Manufacturing Excellence</h2>
                    <p className="text-lg text-primary/80 font-light leading-relaxed mb-4">
                        Our state-of-the-art manufacturing facilities operate strictly under Good Manufacturing Practices (GMP) and are fully aligned with Indian cosmetic and personal care regulations. 
                    </p>
                    <p className="text-lg text-primary/80 font-light leading-relaxed">
                        Each formulation undergoes rigorous stability testing, microbiological evaluation, and quality assurance protocols. This meticulous approach guarantees that every bottle we produce delivers consistent performance, luxurious texture, and absolute safety.
                    </p>
                </div>

                {/* Safety & Hygiene Standards */}
                <div className="border-l-2 border-secondary/30 pl-8 md:pl-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <h2 className="text-3xl font-serif mb-6 text-primary">Dermatological Safety</h2>
                    <p className="text-lg text-primary/80 font-light leading-relaxed mb-4">
                        Safety is central to everything we create. Our products are formulated with skin compatibility in mind, ensuring they are gentle enough for all skin types, including sensitive profiles. 
                    </p>
                    <p className="text-lg text-primary/80 font-light leading-relaxed">
                        We actively exclude harsh sulfates, parabens, phthalates, and synthetic dyes from our core collections. Every ingredient is traceably sourced and verified for dermatological safety, providing peace of mind for both you and your guests.
                    </p>
                </div>

                {/* Ethical Practices */}
                <div className="border-l-2 border-secondary/30 pl-8 md:pl-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <h2 className="text-3xl font-serif mb-6 text-primary">Ethical & Cruelty-Free</h2>
                    <p className="text-lg text-primary/80 font-light leading-relaxed mb-4">
                        We believe that luxury should never cause harm. VAIDURE is steadfast in our commitment to being 100% cruelty-free. We do not test our products or ingredients on animals, nor do we partner with suppliers who do.
                    </p>
                    <p className="text-lg text-primary/80 font-light leading-relaxed">
                        Furthermore, we mandate fair labor practices and transparent business operations across our entire supply chain. By choosing VAIDURE, you are supporting responsible manufacturing that respects both people and the planet.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Certifications;
