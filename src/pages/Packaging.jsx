import React from 'react';

const Packaging = () => {
    return (
        <div className="min-h-screen py-24 px-6 bg-background">
            <div className="max-w-7xl mx-auto">
                {/* Centered Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif text-primary mb-4">
                        Packaging
                    </h1>
                    <p className="text-secondary text-lg font-light">
                        Thoughtfully designed packaging that balances sustainability, functionality, and refined aesthetics.
                    </p>
                </div>

                {/* Two Column Section - Image Left, Content Right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Image */}
                    <div className="w-full">
                        <img
                            src="/packaging-image.png"
                            alt="Plastic recycling process showing transformation from bottles to recycled material to product"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Right Side - Sustainable Materials Content */}
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-serif text-primary">
                            Sustainable Materials
                        </h2>
                        <p className="text-secondary text-base leading-relaxed">
                            Our packaging solutions prioritize recyclable, refill-friendly, and responsibly sourced materials—helping brands reduce environmental impact while maintaining premium presentation.
                        </p>
                    </div>
                </div>

                {/* Design Customization Section - Content Left, Image Right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-24">
                    {/* Left Side - Content */}
                    <div className="space-y-4 order-2 md:order-1">
                        <h2 className="text-3xl md:text-4xl font-serif text-primary">
                            Design Customization
                        </h2>
                        <p className="text-secondary text-base leading-relaxed">
                            From bottle shapes and finishes to labeling and color palettes, every detail is customizable. We ensure your packaging reflects your brand’s identity with clarity, elegance, and distinction.
                        </p>
                    </div>

                    {/* Right Side - Image */}
                    <div className="w-full order-1 md:order-2">
                        <img
                            src="/design-customization.png"
                            alt="Elegant packaging collection showing various bottle shapes and boxes"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>

                {/* Bulk & Retail Ready Section - Image Left, Content Right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-24 pb-24">
                    {/* Left Side - Image */}
                    <div className="w-full">
                        <img
                            src="/bulk-retail-ready.png"
                            alt="Corrugated cardboard boxes for bulk packaging and retail display"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Right Side - Content */}
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-serif text-primary">
                            Bulk & Retail Ready
                        </h2>
                        <p className="text-secondary text-base leading-relaxed">
                            Whether for hotels, resorts, airlines, or retail shelves, our packaging is engineered for durability, ease of use, and seamless scalability across multiple distribution channels.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Packaging;
