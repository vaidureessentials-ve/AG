import React from 'react';

const RefillProgram = () => {
    return (
        <div className="min-h-screen py-24 px-6 bg-background">
            <div className="max-w-7xl mx-auto">
                {/* Centered Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif text-primary mb-4">
                        Refill Program
                    </h1>
                    <p className="text-secondary text-lg font-light">
                        Reducing waste through smart, scalable refill solutions.
                    </p>
                </div>

                {/* Bulk Refill Solutions Section - Content Left, Image Right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Content */}
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-serif text-primary">
                            Bulk Refill Solutions
                        </h2>
                        <p className="text-secondary text-base leading-relaxed">
                            VAIDURE’s refill program offers bulk refill packs and large-format containers designed for hotels, resorts, offices, and institutional environments—ensuring efficiency without compromising quality.
                        </p>
                    </div>

                    {/* Right Side - Image */}
                    <div className="w-full">
                        <img
                            src="/bulk-refill-solutions.png"
                            alt="Bulk Refill Solutions showing refill packs and containers"
                            className="w-full h-[500px] object-cover shadow-lg"
                        />
                    </div>
                </div>

                {/* Lower Packaging Waste Section - Image Left, Content Right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-20">
                    {/* Left Side - Image */}
                    <div className="w-full">
                        <img
                            src="/lower-packaging-waste.png"
                            alt="Lower Packaging Waste showing refill systems"
                            className="w-full h-[500px] object-cover shadow-lg"
                        />
                    </div>

                    {/* Right Side - Content */}
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-serif text-primary">
                            Lower Packaging Waste
                        </h2>
                        <p className="text-secondary text-base leading-relaxed">
                            By minimizing single-use containers, our refill systems significantly reduce plastic waste and overall packaging footprint—supporting responsible consumption and cleaner operations.
                        </p>
                    </div>
                </div>

                {/* Cost-Efficient & Sustainable Section - Content Left, Image Right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-20">
                    {/* Left Side - Content */}
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-serif text-primary">
                            Cost-Efficient & Sustainable
                        </h2>
                        <p className="text-secondary text-base leading-relaxed">
                            Refill programs offer a long-term, cost-effective solution that balances sustainability with operational efficiency—making them ideal for high-usage hospitality environments.
                        </p>
                    </div>

                    {/* Right Side - Image */}
                    <div className="w-full">
                        <img
                            src="/cost-efficient-sustainable.png"
                            alt="Cost-Efficient & Sustainable showing refill solutions"
                            className="w-full h-[500px] object-cover shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RefillProgram;
