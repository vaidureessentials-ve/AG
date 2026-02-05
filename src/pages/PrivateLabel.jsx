import React from 'react';

const PrivateLabel = () => {
    return (
        <div className="min-h-screen py-24 px-6 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">
                        Private Label
                    </h1>
                    <p className="text-secondary text-lg font-light leading-relaxed">
                        Create refined personal care products under your own brand—crafted with precision, quality, and distinction.
                    </p>
                </div>

                {/* Sustainable Materials Section - Content Left, Image Right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-24">
                    {/* Left Side - Content */}
                    <div className="space-y-4 order-2 md:order-1">
                        <h2 className="text-3xl md:text-4xl font-serif text-primary">
                            Sustainable Materials
                        </h2>
                        <p className="text-secondary text-base leading-relaxed">
                            Our packaging solutions prioritize recyclable, refill-friendly, and responsibly sourced materials—helping brands reduce environmental impact while maintaining premium presentation.
                        </p>
                    </div>

                    {/* Right Side - Image */}
                    <div className="w-full order-1 md:order-2">
                        <img
                            src="/private-label-sustainable.png"
                            alt="Minimalist sustainable bottle packaging"
                            className="w-full h-64 md:h-96 object-cover shadow-lg"
                        />
                    </div>
                </div>

                {/* Flexible MOQ Section - Image Left, Content Right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-24 pb-24">
                    {/* Left Side - Image */}
                    <div className="w-full">
                        <img
                            src="/private-label-moq.png"
                            alt="Minimalist bottles showing flexible order quantities"
                            className="w-full h-64 md:h-96 object-cover shadow-lg"
                        />
                    </div>

                    {/* Right Side - Content */}
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-serif text-primary">
                            Flexible Minimum Order Quantities
                        </h2>
                        <p className="text-secondary text-base leading-relaxed">
                            Our adaptable MOQ structure supports boutique hotels, emerging brands, and established businesses—allowing you to scale confidently without unnecessary inventory pressure.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivateLabel;
