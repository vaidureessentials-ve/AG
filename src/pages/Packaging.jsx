import React from 'react';

const Packaging = () => {
    return (
        <div className="min-h-screen pt-20 bg-background animate-fade-in text-primary">
            <div className="relative py-24 md:py-32 bg-paper text-center px-6 animate-fade-in-up">
                <span className="block text-secondary text-xs font-bold tracking-[0.25em] uppercase mb-6">Form Meets Function</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary mb-8 leading-tight">
                    Sustainable Packaging
                </h1>
                <p className="text-primary/80 max-w-2xl mx-auto font-light text-lg leading-relaxed">
                    Thoughtfully designed packaging that balances our uncompromising commitment to the environment with the functional and aesthetic demands of premium hospitality.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-24">

                {/* Two Column Section - Image Left, Content Right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Left Side - Image */}
                    <div className="w-full">
                        <img
                            src="/packaging-image.png"
                            alt="Plastic recycling process showing transformation from bottles to recycled material to product"
                            className="w-full h-80 md:h-[500px] object-cover"
                        />
                    </div>

                    {/* Right Side - Sustainable Materials Content */}
                    <div className="space-y-6">
                        <span className="text-secondary text-xs tracking-[0.25em] font-bold uppercase block">The Circular Economy</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-primary">
                            Intelligent Materials
                        </h2>
                        <p className="text-primary/80 text-lg leading-relaxed font-light">
                            We are systematically phasing out virgin plastics. Our bottles are manufactured using PCR (Post-Consumer Recycled) materials, breathing new life into existing plastics and significantly reducing our carbon footprint.
                        </p>
                        <p className="text-primary/80 text-lg leading-relaxed font-light">
                            Beyond PCR, we utilize biodegradable additives, sustainable bamboo, and unbleached kraft paper for our dry amenities, ensuring that every touchpoint reflects a genuine commitment to environmental stewardship.
                        </p>
                    </div>
                </div>

                {/* Design Customization Section - Content Left, Image Right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-32">
                    {/* Left Side - Content */}
                    <div className="space-y-6 order-2 md:order-1">
                        <span className="text-secondary text-xs tracking-[0.25em] font-bold uppercase block">Bespoke Aesthetics</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-primary">
                            Design Customization
                        </h2>
                        <p className="text-primary/80 text-lg leading-relaxed font-light">
                            Your amenities should be a seamless extension of your interior design. We offer extensive customization options, allowing you to tailor the shape, finish, and color palette of your bottles to match your brand's unique identity.
                        </p>
                        <p className="text-primary/80 text-lg leading-relaxed font-light">
                            From soft-touch frosted finishes and elegant pump dispensers to minimalist typography and metallic foil stamping, we ensure your packaging communicates absolute luxury at first glance.
                        </p>
                    </div>

                    {/* Right Side - Image */}
                    <div className="w-full order-1 md:order-2">
                        <img
                            src="/design-customization.png"
                            alt="Elegant packaging collection showing various bottle shapes and boxes"
                            className="w-full h-80 md:h-[500px] object-cover"
                        />
                    </div>
                </div>

                {/* Bulk & Retail Ready Section - Image Left, Content Right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-32 pb-16">
                    {/* Left Side - Image */}
                    <div className="w-full">
                        <img
                            src="/bulk-retail-ready.png"
                            alt="Corrugated cardboard boxes for bulk packaging and retail display"
                            className="w-full h-80 md:h-[500px] object-cover"
                        />
                    </div>

                    {/* Right Side - Content */}
                    <div className="space-y-6">
                        <span className="text-secondary text-xs tracking-[0.25em] font-bold uppercase block">Operational Excellence</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-primary">
                            Built to Scale
                        </h2>
                        <p className="text-primary/80 text-lg leading-relaxed font-light">
                            Whether you are outfitting a boutique 10-room retreat or managing procurement for a global hotel chain, our packaging is engineered for the rigors of hospitality operations.
                        </p>
                        <p className="text-primary/80 text-lg leading-relaxed font-light">
                            Our bottles are designed for durability and ease of handling by housekeeping staff. We also provide secure, tamper-evident bulk solutions that ensure hygiene and product integrity from our manufacturing floor directly to your dispensers.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Packaging;
