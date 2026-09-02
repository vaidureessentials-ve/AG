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
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-serif text-primary">
                            Plant-Based Ingredients
                        </h2>
                        <p className="text-secondary text-base leading-relaxed">
                            We prioritize naturally derived ingredients sourced responsibly, ensuring safety, performance, and suitability for sensitive skin while respecting environmental balance.
                        </p>
                        <p className="text-primary/80 text-base leading-relaxed">
                            Our bespoke formulations harness the power of nature’s most effective botanicals. From soothing Aloe Vera extracts and antioxidant-rich berries to cold-pressed essential oils, every ingredient is chosen for its specific nourishing properties. We strictly avoid harsh sulfates, parabens, and synthetic dyes, ensuring a pure, revitalizing experience that guests can trust.
                        </p>
                        <ul className="space-y-2 mt-4 text-primary/80 text-sm">
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></span> 100% Vegan & Cruelty-Free</li>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></span> Free from harsh chemicals</li>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></span> Biodegradable formulations</li>
                        </ul>
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
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-serif text-primary">
                            Reduced Plastic Use
                        </h2>
                        <p className="text-secondary text-base leading-relaxed">
                            Our packaging is designed to minimize plastic usage while maintaining durability, hygiene, and a refined premium finish suitable for hospitality environments.
                        </p>
                        <p className="text-primary/80 text-base leading-relaxed">
                            We are committed to transitioning towards a circular economy. This means incorporating PCR (Post-Consumer Recycled) plastics into our bottles, offering biodegradable alternatives for dry amenities like bamboo toothbrushes, and heavily promoting our large-format bulk refill systems. By choosing Vaidure's dispenser solutions, hotels can reduce their single-use plastic waste by up to 80% annually without compromising on the luxury feel.
                        </p>
                    </div>
                </div>

                {/* Ethical Sourcing Section (New) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-32">
                    {/* Left Side - Content */}
                    <div className="space-y-6 order-2 md:order-1">
                        <h2 className="text-3xl md:text-4xl font-serif text-primary">
                            Ethical Sourcing
                        </h2>
                        <p className="text-secondary text-base leading-relaxed">
                            True sustainability extends beyond the product itself; it encompasses the people and communities behind it.
                        </p>
                        <p className="text-primary/80 text-base leading-relaxed">
                            We partner exclusively with suppliers who share our unwavering commitment to fair labor practices and sustainable harvesting. Our supply chain is carefully vetted to ensure transparency and accountability at every step, allowing you to provide amenities that are as ethically sound as they are luxurious.
                        </p>
                    </div>

                    {/* Right Side - Image Placeholder (Can be updated later) */}
                    <div className="w-full order-1 md:order-2 bg-paper p-12 flex items-center justify-center">
                         <div className="text-center space-y-4">
                             <div className="w-16 h-16 rounded-full border border-secondary/40 flex items-center justify-center mx-auto mb-4">
                                <span className="text-secondary text-2xl">🌿</span>
                             </div>
                             <h3 className="font-serif text-2xl text-primary">Conscious Luxury</h3>
                             <p className="text-sm text-primary/60 font-light">Ethically harvested, thoughtfully crafted.</p>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EcoMaterials;
