import React from 'react';

const EcoMaterials = () => {
    return (
        <div className="min-h-screen py-24 px-6 bg-background">
            <div className="max-w-7xl mx-auto">
                {/* Centered Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif text-primary mb-4">
                        Eco Materials
                    </h1>
                    <p className="text-secondary text-lg font-light">
                        Responsible material choices for everyday personal care.
                    </p>
                </div>

                {/* Two Column Section - Content Left, Image Right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Plant-Based Ingredients Content */}
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-serif text-primary">
                            Plant-Based Ingredients
                        </h2>
                        <p className="text-secondary text-base leading-relaxed">
                            We prioritize naturally derived ingredients sourced responsibly, ensuring safety, performance, and suitability for sensitive skin while respecting environmental balance.
                        </p>
                    </div>

                    {/* Right Side - Image */}
                    <div className="w-full">
                        <img
                            src="/eco-materials.png"
                            alt="Plant-based ingredients including aloe vera, berries, and natural botanicals"
                            className="w-full h-auto object-cover shadow-lg"
                        />
                    </div>
                </div>

                {/* Two Column Section - Image Left, Content Right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-20">
                    {/* Left Side - Image */}
                    <div className="w-full">
                        <img
                            src="/reduced-plastic.png"
                            alt="Plastic recycling process showing transformation from bottles to recycled material to product"
                            className="w-full h-auto object-cover shadow-lg"
                        />
                    </div>

                    {/* Right Side - Reduced Plastic Use Content */}
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-serif text-primary">
                            Reduced Plastic Use
                        </h2>
                        <p className="text-secondary text-base leading-relaxed">
                            Our packaging is designed to minimize plastic usage while maintaining durability, hygiene, and a refined premium finish suitable for hospitality environments.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EcoMaterials;
