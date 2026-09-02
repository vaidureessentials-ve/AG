import React from 'react';

const RefillProgram = () => {
    return (
        <div className="min-h-screen pt-20 bg-background animate-fade-in text-primary">
            <div className="relative py-24 md:py-32 bg-paper text-center px-6 animate-fade-in-up">
                <span className="block text-secondary text-xs font-bold tracking-[0.25em] uppercase mb-6">Smart Sustainability</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary mb-8 leading-tight">
                    Refill Program
                </h1>
                <p className="text-primary/80 max-w-2xl mx-auto font-light text-lg leading-relaxed">
                    A zero-compromise approach to luxury. Our bulk refill solutions drastically reduce environmental impact while streamlining housekeeping operations for high-volume hospitality venues.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-24">

                {/* Bulk Refill Solutions Section - Content Left, Image Right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Left Side - Content */}
                    <div className="space-y-6 order-2 md:order-1">
                        <span className="text-secondary text-xs tracking-[0.25em] font-bold uppercase block">Scalable Systems</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-primary">
                            Bulk Refill Solutions
                        </h2>
                        <p className="text-primary/80 text-lg leading-relaxed font-light">
                            VAIDURE’s sophisticated refill program is designed specifically for the rigorous demands of hotels, resorts, and premium institutional environments. 
                        </p>
                        <p className="text-primary/80 text-lg leading-relaxed font-light">
                            We provide our signature liquids in high-volume, secure 5-liter and 10-liter dispensing formats. This allows your housekeeping teams to quickly and hygienically replenish in-room dispensers, ensuring guests always have access to fresh products without the clutter of miniature bottles.
                        </p>
                    </div>

                    {/* Right Side - Image */}
                    <div className="w-full order-1 md:order-2">
                        <img
                            src="/bulk-refill-solutions.png"
                            alt="Bulk Refill Solutions showing refill packs and containers"
                            className="w-full h-80 md:h-[500px] object-cover shadow-sm"
                        />
                    </div>
                </div>

                {/* Lower Packaging Waste Section - Image Left, Content Right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-32">
                    {/* Left Side - Image */}
                    <div className="w-full">
                        <img
                            src="/lower-packaging-waste.png"
                            alt="Lower Packaging Waste showing refill systems"
                            className="w-full h-80 md:h-[500px] object-cover shadow-sm"
                        />
                    </div>

                    {/* Right Side - Content */}
                    <div className="space-y-6">
                        <span className="text-secondary text-xs tracking-[0.25em] font-bold uppercase block">Environmental Impact</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-primary">
                            Eradicate Plastic Waste
                        </h2>
                        <p className="text-primary/80 text-lg leading-relaxed font-light">
                            The traditional amenity model generates millions of tons of plastic waste annually. By transitioning to our bulk refill systems, properties can eliminate up to 80% of their single-use plastic waste footprint immediately.
                        </p>
                        <p className="text-primary/80 text-lg leading-relaxed font-light">
                            This measurable reduction in packaging not only supports your property's ESG (Environmental, Social, and Governance) goals but also resonates deeply with the modern, eco-conscious traveler who expects sustainable luxury.
                        </p>
                    </div>
                </div>

                {/* Cost-Efficient & Sustainable Section - Content Left, Image Right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-32 pb-16">
                    {/* Left Side - Content */}
                    <div className="space-y-6 order-2 md:order-1">
                        <span className="text-secondary text-xs tracking-[0.25em] font-bold uppercase block">Economic Advantage</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-primary">
                            Cost-Efficient Luxury
                        </h2>
                        <p className="text-primary/80 text-lg leading-relaxed font-light">
                            Sustainability should not require a financial sacrifice. In fact, our refill programs are engineered to be highly cost-effective. By eliminating the premium paid for individual miniature packaging, hotels can reallocate their budget toward providing a higher quality liquid formulation.
                        </p>
                        <p className="text-primary/80 text-lg leading-relaxed font-light">
                            Additionally, the time saved in inventory management and the reduction in waste disposal costs create a long-term operational advantage, making the refill model the clear choice for forward-thinking hospitality leaders.
                        </p>
                    </div>

                    {/* Right Side - Image */}
                    <div className="w-full order-1 md:order-2">
                        <img
                            src="/cost-efficient-sustainable.png"
                            alt="Cost-Efficient & Sustainable showing refill solutions"
                            className="w-full h-80 md:h-[500px] object-cover shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RefillProgram;
