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
                    <div className="space-y-6 order-2 md:order-1">
                        <h2 className="text-3xl md:text-4xl font-serif text-primary">
                            Bespoke Formulations & Packaging
                        </h2>
                        <p className="text-secondary text-base leading-relaxed">
                            Our private label service is more than just putting your logo on a bottle. It's about translating your brand's unique identity into a tangible, sensory experience.
                        </p>
                        <p className="text-primary/80 text-base leading-relaxed">
                            Work alongside our expert team to select from a library of signature fragrances—or develop a custom scent profile that perfectly captures the essence of your property. Choose from a curated selection of sustainable packaging options, from minimalist PCR bottles to elegant glass dispensers, all designed to seamlessly integrate into your interior aesthetics while maintaining operational efficiency.
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
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-serif text-primary">
                            Flexible Minimum Order Quantities
                        </h2>
                        <p className="text-secondary text-base leading-relaxed">
                            We believe that premium private labeling shouldn't be restricted to massive hotel chains.
                        </p>
                        <p className="text-primary/80 text-base leading-relaxed">
                            Our highly adaptable manufacturing process and flexible MOQ (Minimum Order Quantity) structure support boutique hotels, independent resorts, emerging brands, and established hospitality groups alike. This allows you to elevate your guest experience and scale confidently without the burden of unnecessary inventory pressure or prohibitive upfront costs.
                        </p>
                    </div>
                </div>

                {/* The Process Section (New) */}
                <div className="mt-20 pt-20 border-t border-secondary/20">
                    <div className="text-center mb-16">
                        <span className="text-secondary text-xs font-bold tracking-[0.25em] uppercase mb-4 block">How It Works</span>
                        <h2 className="text-3xl md:text-4xl font-serif text-primary">Your Brand, Realized in 4 Steps</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Step 1 */}
                        <div className="text-center space-y-4 p-6">
                            <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mx-auto text-xl font-serif mb-4">1</div>
                            <h3 className="font-serif text-xl text-primary">Consultation</h3>
                            <p className="text-sm text-primary/70 leading-relaxed">We discuss your brand values, target demographic, and aesthetic preferences to outline the perfect product range.</p>
                        </div>
                        {/* Step 2 */}
                        <div className="text-center space-y-4 p-6">
                            <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mx-auto text-xl font-serif mb-4">2</div>
                            <h3 className="font-serif text-xl text-primary">Formulation</h3>
                            <p className="text-sm text-primary/70 leading-relaxed">Select from our premium base formulas and signature scents, or collaborate to develop something entirely bespoke.</p>
                        </div>
                        {/* Step 3 */}
                        <div className="text-center space-y-4 p-6">
                            <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mx-auto text-xl font-serif mb-4">3</div>
                            <h3 className="font-serif text-xl text-primary">Design</h3>
                            <p className="text-sm text-primary/70 leading-relaxed">Our design team creates elegant labels and packaging that perfectly align with your visual identity and our sustainable ethos.</p>
                        </div>
                        {/* Step 4 */}
                        <div className="text-center space-y-4 p-6">
                            <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mx-auto text-xl font-serif mb-4">4</div>
                            <h3 className="font-serif text-xl text-primary">Production</h3>
                            <p className="text-sm text-primary/70 leading-relaxed">We handle manufacturing, quality control, and shipping, delivering your polished, hospitality-ready products.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivateLabel;
