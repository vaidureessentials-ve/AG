import React from 'react';

const Certifications = () => {
    return (
        <div className="min-h-screen pt-32 pb-24 px-6 container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-serif mb-6 animate-fade-in-down">Certifications</h1>
                <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed animate-fade-in-up">
                    Compliance, quality, and responsibility at every stage of production.
                </p>
                {/* Placeholder for future detailed content/icons if needed */}
                <div className="mt-16 w-24 h-1 bg-[#C2A788] rounded-full mx-auto"></div>
            </div>

            <div className="max-w-4xl mx-auto mt-20 space-y-16 text-left md:pl-20">
                {/* Quality Compliance */}
                <div className="border-b border-gray-200 pb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <h2 className="text-3xl font-serif mb-4 text-primary">Quality Compliance</h2>
                    <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
                        Our manufacturing processes are aligned with applicable Indian cosmetic and personal care regulations. Each product is developed under controlled conditions to ensure consistency, quality, and regulatory adherence.
                    </p>
                </div>

                {/* Safety & Hygiene Standards */}
                <div className="border-b border-gray-200 pb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <h2 className="text-3xl font-serif mb-4 text-primary">Safety & Hygiene Standards</h2>
                    <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
                        Safety is central to everything we create. Our products are formulated with stability, skin compatibility, and hygienic packaging in mind—ensuring safe everyday use across hospitality and lifestyle environments.
                    </p>
                </div>

                {/* Ethical Practices */}
                <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <h2 className="text-3xl font-serif mb-4 text-primary">Ethical Practices</h2>
                    <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
                        We are committed to ethical sourcing, responsible manufacturing, and transparent business practices within India—supporting long-term sustainability and trust with our partners.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Certifications;
