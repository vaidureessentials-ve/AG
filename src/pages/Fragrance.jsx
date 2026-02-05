import React from 'react';

const Fragrance = () => {
    return (
        <div className="min-h-screen py-24 px-6 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">
                        Fragrance
                    </h1>
                    <p className="text-secondary text-lg font-light leading-relaxed">
                        Signature fragrances crafted to define identity, emotion, and memory.
                    </p>
                </div>

                {/* Aloevera & Neem Section - Content Left, Image Right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-24">
                    {/* Left Side - Content */}
                    <div className="space-y-4 order-2 md:order-1">
                        <h2 className="text-3xl md:text-4xl font-serif text-primary">
                            Aloevera & Neem
                        </h2>
                        <p className="text-secondary text-base leading-relaxed">
                            A refreshing and purifying blend, Aloe Vera and Neem combines the soothing hydration of aloe with the natural cleansing power of neem. Known for their calming and antibacterial properties, this duo gently cleanses, nourishes, and protects the skin, leaving it fresh, balanced, and revitalized—ideal for everyday care and hygienic hospitality use.
                        </p>
                    </div>

                    {/* Right Side - Image */}
                    <div className="w-full order-1 md:order-2">
                        <img
                            src="/fragrance-aloe-neem.png"
                            alt="Fresh aloe vera slices and neem leaves"
                            className="w-full h-64 md:h-96 object-cover"
                        />
                    </div>
                </div>

                {/* Oudh & Musk Section - Image Left, Content Right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-24 cb-24">
                    {/* Left Side - Image */}
                    <div className="w-full">
                        <img
                            src="/fragrance-oudh-musk.png"
                            alt="Oudh wood and musk flowers"
                            className="w-full h-64 md:h-96 object-cover"
                        />
                    </div>

                    {/* Right Side - Content */}
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-serif text-primary">
                            Oudh & Musk
                        </h2>
                        <p className="text-secondary text-base leading-relaxed">
                            A rich and timeless blend, Oudh and Musk brings together the deep, woody warmth of rare oudh with the soft, sensual depth of musk. The fragrance opens with an earthy, resinous character and settles into a smooth, comforting base that feels elegant and enduring. Sophisticated yet calming, it creates a sense of quiet luxury—perfect for refined personal care experiences and premium hospitality spaces.
                        </p>
                    </div>
                </div>

                {/* Peach & Beary Section - Content Left, Image Right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-24 pb-24">
                    {/* Left Side - Content */}
                    <div className="space-y-4 order-2 md:order-1">
                        <h2 className="text-3xl md:text-4xl font-serif text-primary">
                            Peach & Beary
                        </h2>
                        <p className="text-secondary text-base leading-relaxed">
                            A vibrant and uplifting blend, Peach and Berry combines the juicy sweetness of ripe peach with the fresh, slightly tangy notes of berries. Light, fruity, and refreshing, this fragrance delivers a cheerful burst of freshness that feels soft on the senses and leaves a pleasant, long-lasting impression—perfect for modern, feel-good personal care.
                        </p>
                    </div>

                    {/* Right Side - Image */}
                    <div className="w-full order-1 md:order-2">
                        <img
                            src="/fragrance-peach-berry.png"
                            alt="Fresh peaches and blueberries"
                            className="w-full h-64 md:h-96 object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fragrance;
