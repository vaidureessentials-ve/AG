import React from 'react';

const Fragrance = () => {
    return (
        <div className="min-h-screen pt-20 bg-background animate-fade-in text-primary">
            <div className="relative py-24 md:py-32 bg-paper text-center px-6 animate-fade-in-up">
                <span className="block text-secondary text-xs font-bold tracking-[0.25em] uppercase mb-6">The Olfactive Journey</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary mb-8 leading-tight">
                    Signature Fragrances
                </h1>
                <p className="text-primary/80 max-w-2xl mx-auto font-light text-lg leading-relaxed">
                    Scent is the strongest tie to memory. Our master perfumers have crafted a library of signature fragrances designed to define identity, evoke deep emotion, and leave a lasting impression of quiet luxury.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-24">

                {/* Aloevera & Neem Section - Content Left, Image Right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Left Side - Content */}
                    <div className="space-y-6 order-2 md:order-1">
                        <span className="text-secondary text-xs tracking-[0.25em] font-bold uppercase block">Purifying & Fresh</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-primary">
                            Aloevera & Neem
                        </h2>
                        <div className="space-y-4 text-primary/80 font-light text-lg leading-relaxed border-l-2 border-secondary/30 pl-6">
                            <p><strong>Top Notes:</strong> Crisp green leaves, morning dew.</p>
                            <p><strong>Heart Notes:</strong> Cooling aloe vera, subtle earthy neem.</p>
                            <p><strong>Base Notes:</strong> White woods, clean musk.</p>
                        </div>
                        <p className="text-primary/80 text-lg leading-relaxed font-light mt-6">
                            A refreshing and purifying botanical blend. This fragrance combines the soothing, aquatic hydration of aloe with the natural, herbaceous power of neem. It gently revitalizes the senses, leaving a trail that is incredibly clean, balanced, and vibrant—ideal for health-conscious retreats and wellness resorts.
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-32">
                    {/* Left Side - Image */}
                    <div className="w-full">
                        <img
                            src="/fragrance-oudh-musk.png"
                            alt="Oudh wood and musk flowers"
                            className="w-full h-80 md:h-[500px] object-cover"
                        />
                    </div>

                    {/* Right Side - Content */}
                    <div className="space-y-6">
                        <span className="text-secondary text-xs tracking-[0.25em] font-bold uppercase block">Deep & Sensual</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-primary">
                            Oudh & Musk
                        </h2>
                        <div className="space-y-4 text-primary/80 font-light text-lg leading-relaxed border-l-2 border-secondary/30 pl-6">
                            <p><strong>Top Notes:</strong> Spiced saffron, smoked amber.</p>
                            <p><strong>Heart Notes:</strong> Rich agarwood (oudh), velvety rose.</p>
                            <p><strong>Base Notes:</strong> Warm musk, dark vanilla bean.</p>
                        </div>
                        <p className="text-primary/80 text-lg leading-relaxed font-light mt-6">
                            A rich, timeless, and unapologetically luxurious blend. This scent brings together the deep, woody warmth of rare oudh with the soft, sensual depth of musk. It opens with an earthy, resinous character and settles into a comforting base that is elegant and enduring. Perfect for premium urban hotels and refined evening sanctuaries.
                        </p>
                    </div>
                </div>

                {/* Peach & Berry Section - Content Left, Image Right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-32 pb-16">
                    {/* Left Side - Content */}
                    <div className="space-y-6 order-2 md:order-1">
                        <span className="text-secondary text-xs tracking-[0.25em] font-bold uppercase block">Vibrant & Uplifting</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-primary">
                            Peach & Berry
                        </h2>
                        <div className="space-y-4 text-primary/80 font-light text-lg leading-relaxed border-l-2 border-secondary/30 pl-6">
                            <p><strong>Top Notes:</strong> Sun-ripened peach, wild blueberries.</p>
                            <p><strong>Heart Notes:</strong> Sweet nectarine, subtle floral blossoms.</p>
                            <p><strong>Base Notes:</strong> Light sandalwood, spun sugar.</p>
                        </div>
                        <p className="text-primary/80 text-lg leading-relaxed font-light mt-6">
                            A vibrant and deeply uplifting blend. Peach & Berry captures the juicy, sun-drenched sweetness of ripe orchards paired with the fresh, slightly tangy bite of wild berries. Light, fruity, and incredibly refreshing, this fragrance delivers a cheerful burst of morning energy that feels universally loved and approachable.
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
