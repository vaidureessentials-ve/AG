import React, { useRef, useEffect, useState } from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';


const Home = () => {
    const scrollContainerRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 300;
            const container = scrollContainerRef.current;
            const targetScroll = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
            container.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
            });
        }
    };

    // Auto-scroll functionality
    useEffect(() => {
        let animationFrameId;
        const scrollContainer = scrollContainerRef.current;

        const animateScroll = () => {
            if (!isPaused && scrollContainer) {
                // Smooth continuous scroll
                scrollContainer.scrollLeft += 1; // Adjust speed here (e.g., 0.5 for slower, 1.5 for faster)

                // Seamless loop: Measure exactly where the second set starts
                // We have 3 sets of 15 items. Reset when we reach the start of the 2nd set (item index 15)
                const items = scrollContainer.children;
                if (items.length >= 30) { // Ensure we have rendered enough items
                    const resetPoint = items[15].offsetLeft; // Start of the 2nd set

                    // If we've scrolled past the first set, jump back to 0 (which looks identical to resetPoint)
                    if (scrollContainer.scrollLeft >= resetPoint) {
                        // Maintain sub-pixel smoothness by subtracting the exact width
                        scrollContainer.scrollLeft = scrollContainer.scrollLeft - resetPoint;
                    }
                }
            }
            animationFrameId = requestAnimationFrame(animateScroll);
        };

        animationFrameId = requestAnimationFrame(animateScroll);

        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused]);


    const featuredProducts = [
        { id: 1, title: 'Botanical Collection', category: 'Bath Amenities', image: '/product-1.png' },
        { id: 2, title: 'Peach & Berries Conditioner', category: 'Sustainable Essentials', image: '/peach-berry-conditioner.png' },
        { id: 5, title: 'Signature Scents', category: 'Ambience', image: '/Signature Scents.png' },
        { id: 3, title: 'Luxury Linens', category: 'Bed & Bath', image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=800&auto=format&fit=crop' },
        { id: 4, title: 'Spa Essentials', category: 'Wellness', image: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=800&auto=format&fit=crop' },
        { id: 6, title: 'Cotton Robes', category: 'Comfort', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop' },
    ];

    return (
        <div className="animate-fade-in mt-20">

            {/* Customization & Contact Section */}
            <Hero />

            {/* Partner Marquee (Carousel) */}
            <div className="py-24 bg-white overflow-hidden relative group/carousel">
                <p className="text-center text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-16">OUR PRODUCTS</p>

                <div
                    className="relative max-w-7xl w-full mx-auto px-6 md:px-12"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Left Arrow */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-primary p-2 rounded-full shadow-md transition-all duration-300 opacity-0 group-hover/carousel:opacity-100"
                        aria-label="Scroll Left"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-primary p-2 rounded-full shadow-md transition-all duration-300 opacity-0 group-hover/carousel:opacity-100"
                        aria-label="Scroll Right"
                    >
                        <ChevronRight size={24} />
                    </button>

                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto scrollbar-hide scroll-smooth gap-x-16 px-4 pb-4 items-center"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {/* Define items with names and explicit paths */}
                        {/* Tripling the array for seamless infinite scroll (1/3 logic) */}
                        {[
                            // Set 1
                            { id: 1, name: 'Handwash', src: '/assets/marquee-1.png' },
                            { id: 2, name: 'Body Lotion', src: '/assets/marquee-2.png' },
                            { id: 3, name: 'Shampoo', src: '/assets/marquee-3.png' },
                            { id: 4, name: 'Conditioner', src: '/assets/marquee-4.png' },
                            { id: 5, name: 'Shower Gel', src: '/assets/marquee-5.png' },
                            { id: 6, name: 'Handwash', src: '/assets/marquee-6.jpg' },
                            { id: 7, name: 'Shower Gel', src: '/assets/marquee-7.jpg' },
                            { id: 8, name: 'Shampoo', src: '/assets/marquee-8.jpg' },
                            { id: 9, name: 'Conditioner', src: '/assets/marquee-9.jpg' },
                            { id: 10, name: 'Body Lotion', src: '/assets/marquee-10.png' },
                            { id: 11, name: 'Conditioner', src: '/assets/marquee-11.png' },
                            { id: 12, name: 'Handwash', src: '/assets/marquee-12.png' },
                            { id: 13, name: 'Shampoo', src: '/assets/marquee-13.png' },
                            { id: 14, name: 'Shower Gel', src: '/assets/marquee-14.png' },
                            { id: 15, name: 'Body Lotion', src: '/assets/marquee-15.png' },
                            // Set 2
                            { id: 16, name: 'Handwash', src: '/assets/marquee-1.png' },
                            { id: 17, name: 'Body Lotion', src: '/assets/marquee-2.png' },
                            { id: 18, name: 'Shampoo', src: '/assets/marquee-3.png' },
                            { id: 19, name: 'Conditioner', src: '/assets/marquee-4.png' },
                            { id: 20, name: 'Shower Gel', src: '/assets/marquee-5.png' },
                            { id: 21, name: 'Handwash', src: '/assets/marquee-6.jpg' },
                            { id: 22, name: 'Shower Gel', src: '/assets/marquee-7.jpg' },
                            { id: 23, name: 'Shampoo', src: '/assets/marquee-8.jpg' },
                            { id: 24, name: 'Conditioner', src: '/assets/marquee-9.jpg' },
                            { id: 25, name: 'Body Lotion', src: '/assets/marquee-10.png' },
                            { id: 26, name: 'Conditioner', src: '/assets/marquee-11.png' },
                            { id: 27, name: 'Handwash', src: '/assets/marquee-12.png' },
                            { id: 28, name: 'Shampoo', src: '/assets/marquee-13.png' },
                            { id: 29, name: 'Shower Gel', src: '/assets/marquee-14.png' },
                            { id: 30, name: 'Body Lotion', src: '/assets/marquee-15.png' },
                            // Set 3
                            { id: 31, name: 'Handwash', src: '/assets/marquee-1.png' },
                            { id: 32, name: 'Body Lotion', src: '/assets/marquee-2.png' },
                            { id: 33, name: 'Shampoo', src: '/assets/marquee-3.png' },
                            { id: 34, name: 'Conditioner', src: '/assets/marquee-4.png' },
                            { id: 35, name: 'Shower Gel', src: '/assets/marquee-5.png' },
                            { id: 36, name: 'Handwash', src: '/assets/marquee-6.jpg' },
                            { id: 37, name: 'Shower Gel', src: '/assets/marquee-7.jpg' },
                            { id: 38, name: 'Shampoo', src: '/assets/marquee-8.jpg' },
                            { id: 39, name: 'Conditioner', src: '/assets/marquee-9.jpg' },
                            { id: 40, name: 'Body Lotion', src: '/assets/marquee-10.png' },
                            { id: 41, name: 'Conditioner', src: '/assets/marquee-11.png' },
                            { id: 42, name: 'Handwash', src: '/assets/marquee-12.png' },
                            { id: 43, name: 'Shampoo', src: '/assets/marquee-13.png' },
                            { id: 44, name: 'Shower Gel', src: '/assets/marquee-14.png' },
                            { id: 45, name: 'Body Lotion', src: '/assets/marquee-15.png' },
                        ].map((item) => (
                            <div key={`item-${item.id}`} className="flex flex-col items-center flex-shrink-0 group/item min-w-[140px]">
                                <img
                                    src={item.src}
                                    alt={item.name}
                                    className="h-44 md:h-52 w-auto object-contain hover:scale-110 transition-transform duration-500 max-w-none mb-6 flex-shrink-0"
                                />
                                <span className="text-secondary text-sm font-medium tracking-wider opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover/item:translate-y-0 text-center">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Collections Showcase */}
            <section className="pt-8 pb-24 px-6 bg-paper-texture">
                <div className="max-w-7xl w-full mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-secondary text-xs font-bold tracking-[0.25em] uppercase mb-4 block">OUR COLLECTIONS</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-medium text-primary">Crafted With Love</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Wet Amenities */}
                        <div className="group relative cursor-pointer">
                            <div className="overflow-hidden aspect-[4/3] mb-4">
                                <img
                                    src="/product-3.png"
                                    alt="Wet Amenities"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="absolute bottom-8 left-8 text-white z-10">
                                <h3 className="text-2xl font-serif font-medium mb-1 drop-shadow-md">Wet Amenities</h3>
                                <p className="text-sm text-white/90 mb-3 drop-shadow-md font-light">Premium shampoos, conditioners, and body care</p>
                                <a href="/products" className="text-xs font-bold tracking-widest border-b border-white pb-1 inline-block hover:text-white/80 transition-colors drop-shadow-md">
                                    VIEW COLLECTION →
                                </a>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 pointer-events-none"></div>
                        </div>

                        {/* Dry Amenities */}
                        <div className="group relative cursor-pointer">
                            <div className="overflow-hidden aspect-[4/3] mb-4">
                                <img
                                    src="/product-2.png"
                                    alt="Dry Amenities"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="absolute bottom-8 left-8 text-white z-10">
                                <h3 className="text-2xl font-serif font-medium mb-1 drop-shadow-md">Dry Amenities</h3>
                                <p className="text-sm text-white/90 mb-3 drop-shadow-md font-light">Complete guest care kits for hotels</p>
                                <a href="/products" className="text-xs font-bold tracking-widest border-b border-white pb-1 inline-block hover:text-white/80 transition-colors drop-shadow-md">
                                    VIEW COLLECTION →
                                </a>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 pointer-events-none"></div>
                        </div>

                        {/* Body Care */}
                        <div className="group relative cursor-pointer">
                            <div className="overflow-hidden aspect-[4/3] mb-4">
                                <img
                                    src="/product-1.png"
                                    alt="Gift Set"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="absolute bottom-8 left-8 text-white z-10">
                                <h3 className="text-2xl font-serif font-medium mb-1 drop-shadow-md">Gift Set</h3>
                                <p className="text-sm text-white/90 mb-3 drop-shadow-md font-light">Luxury personal care collection</p>
                                <a href="/products" className="text-xs font-bold tracking-widest border-b border-white pb-1 inline-block hover:text-white/80 transition-colors drop-shadow-md">
                                    VIEW COLLECTION →
                                </a>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 pointer-events-none"></div>
                        </div>
                    </div>


                </div>
            </section>

            {/* Featured Collections */}
            <section className="pt-32 pb-24 px-6 bg-background">
                <div className="max-w-7xl w-full mx-auto">
                    <div className="flex flex-col items-center text-center mb-12">
                        <div>
                            <span className="text-secondary text-sm tracking-widest uppercase mb-2 block">Curated Selection</span>
                            <h2 className="text-3xl md:text-4xl font-serif">Featured Collections</h2>
                        </div>
                        <a href="/products" className="hidden md:inline-block text-primary hover:text-secondary border-b border-primary hover:border-secondary transition-colors pb-1 text-sm font-medium tracking-wide mt-6">
                            VIEW ALL
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {featuredProducts.map(product => (
                            <ProductCard
                                key={product.id}
                                title={product.title}
                                category={product.category}
                                image={product.image}
                            />
                        ))}
                    </div>

                    <div className="mt-12 text-center md:hidden">
                        <a href="/products" className="inline-block border-b border-primary pb-1 font-medium">VIEW ALL COLLECTIONS</a>
                    </div>
                </div>
            </section>












        </div>
    );
};

export default Home;
