import React, { useRef, useEffect, useState } from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';

import { Link } from 'react-router-dom';
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
                // We have 3 sets of 4 items. Reset when we reach the start of the 2nd set (item index 4)
                const items = scrollContainer.children;
                if (items.length >= 12) { // Ensure we have rendered enough items
                    const firstItemOffset = items[0].offsetLeft;
                    const resetPoint = items[4].offsetLeft; // Start of the 2nd set

                    // The distance to scroll is the difference between the start of set 2 and start of set 1
                    const scrollDistance = resetPoint - firstItemOffset;

                    // If we've scrolled past the first set, jump back to 0 (which looks identical to resetPoint)
                    if (scrollContainer.scrollLeft >= scrollDistance) {
                        scrollContainer.scrollLeft = scrollContainer.scrollLeft - scrollDistance;
                    }
                }
            }
            animationFrameId = requestAnimationFrame(animateScroll);
        };

        animationFrameId = requestAnimationFrame(animateScroll);

        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused]);





    const featuredProducts = [
        { id: 1, title: 'Luxury Welcome Kit', category: 'GUEST ESSENTIALS', image: '/botanical-collection.png', link: '/gift-set' },
        { id: 2, title: 'Peach & Berries', category: 'PREMIUM COLLECTION', image: '/peach-berry-conditioner.png', link: '/wet-amenity' },
        { id: 3, title: 'Glow Naturally', category: 'PURE ELEGANCE', image: '/ss-image.png', link: '/dry-amenity' },
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
                            { id: 1, name: 'SHOWER GEL', src: '/assets/marquee-1.png' },
                            { id: 2, name: 'HAIR SHAMPOO', src: '/assets/marquee-2.png' },
                            { id: 3, name: 'HAIR CONDITIONER', src: '/assets/marquee-3.png' },
                            { id: 4, name: 'BODY LOTION', src: '/assets/marquee-4.png' },
                            // Set 2
                            { id: 5, name: 'SHOWER GEL', src: '/assets/marquee-1.png' },
                            { id: 6, name: 'HAIR SHAMPOO', src: '/assets/marquee-2.png' },
                            { id: 7, name: 'HAIR CONDITIONER', src: '/assets/marquee-3.png' },
                            { id: 8, name: 'BODY LOTION', src: '/assets/marquee-4.png' },
                            // Set 3
                            { id: 9, name: 'SHOWER GEL', src: '/assets/marquee-1.png' },
                            { id: 10, name: 'HAIR SHAMPOO', src: '/assets/marquee-2.png' },
                            { id: 11, name: 'HAIR CONDITIONER', src: '/assets/marquee-3.png' },
                            { id: 12, name: 'BODY LOTION', src: '/assets/marquee-4.png' },
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
            <section className="pt-24 pb-32 px-6 bg-paper">
                <div className="max-w-7xl w-full mx-auto">
                    <div className="text-center mb-20 animate-fade-in-up">
                        <span className="text-secondary text-xs font-bold tracking-[0.25em] uppercase mb-4 block">OUR COLLECTIONS</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-primary">Crafted With Love</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Wet Amenities */}
                        <Link to="/wet-amenity" className="group relative cursor-pointer block">
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
                                <span className="text-xs font-bold tracking-widest border-b border-white pb-1 inline-block hover:text-white/80 transition-colors drop-shadow-md">
                                    VIEW COLLECTION →
                                </span>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 pointer-events-none"></div>
                        </Link>

                        {/* Dry Amenities */}
                        <Link to="/dry-amenity" className="group relative cursor-pointer block">
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
                                <span className="text-xs font-bold tracking-widest border-b border-white pb-1 inline-block hover:text-white/80 transition-colors drop-shadow-md">
                                    VIEW COLLECTION →
                                </span>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 pointer-events-none"></div>
                        </Link>

                        {/* Gift Set */}
                        <Link to="/gift-set" className="group relative cursor-pointer block">
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
                                <span className="text-xs font-bold tracking-widest border-b border-white pb-1 inline-block hover:text-white/80 transition-colors drop-shadow-md">
                                    VIEW COLLECTION →
                                </span>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 pointer-events-none"></div>
                        </Link>
                    </div>


                </div>
            </section>

            {/* Featured Collections */}
            <section className="pt-32 pb-40 px-6 bg-background">
                <div className="max-w-7xl w-full mx-auto">
                    <div className="flex flex-col items-center text-center mb-20 animate-fade-in-up">
                        <div>
                            <span className="text-secondary text-xs font-bold tracking-[0.25em] uppercase mb-4 block">Curated Selection</span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif">Featured Collections</h2>
                        </div>
                        <Link to="/products" className="hidden md:inline-block premium-link text-primary text-sm font-medium tracking-widest uppercase mt-10">
                            VIEW ALL
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {featuredProducts.map(product => (
                            <ProductCard
                                key={product.id}
                                title={product.title}
                                category={product.category}
                                image={product.image}
                                link={product.link}
                            />
                        ))}
                    </div>

                    <div className="mt-12 text-center md:hidden">
                        <Link to="/products" className="inline-block border-b border-primary pb-1 font-medium">VIEW ALL COLLECTIONS</Link>
                    </div>
                </div>
            </section>

            {/* The VAIDURE Philosophy */}
            <section className="py-24 md:py-32 px-6 bg-white flex items-center justify-center">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2 order-2 md:order-1 space-y-8">
                        <span className="text-secondary text-xs font-bold tracking-[0.25em] uppercase block">Our Philosophy</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight">
                            Conscious Luxury, Elegantly Delivered.
                        </h2>
                        <p className="text-primary/80 font-light text-lg leading-relaxed">
                            We believe that true luxury should never come at the expense of our planet. VAIDURE merges the finest botanical ingredients with state-of-the-art sustainable packaging to create amenities that nourish the body and respect the earth.
                        </p>
                        <div className="pt-4">
                            <Link to="/about" className="inline-block border-b border-primary pb-1 font-medium text-sm tracking-widest uppercase hover:text-secondary hover:border-secondary transition-colors">
                                Discover Our Story
                            </Link>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 order-1 md:order-2">
                        {/* Placeholder image for philosophy section */}
                        <div className="w-full h-[400px] md:h-[500px] bg-gray-100 flex items-center justify-center overflow-hidden shadow-xl">
                            <img src="/Bottom.png" alt="Conscious luxury and sustainability" className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
                            <span className="hidden text-gray-400 font-serif tracking-widest uppercase">Philosophy Image</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-32 px-6 bg-paper text-center">
                <div className="max-w-3xl mx-auto">
                    <span className="text-secondary text-xs font-bold tracking-[0.25em] uppercase mb-4 block">Join The Inner Circle</span>
                    <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">Elevate Your Inbox</h2>
                    <p className="text-primary/70 font-light text-lg mb-10">
                        Subscribe to receive exclusive offers, early access to new collections, and insights into sustainable hospitality.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-4 justify-center" onSubmit={(e) => e.preventDefault()}>
                        <input 
                            type="email" 
                            placeholder="Enter your email address" 
                            className="px-6 py-4 w-full sm:w-96 bg-white border border-black/10 focus:outline-none focus:border-secondary font-light text-sm"
                            required
                        />
                        <button type="submit" className="bg-primary text-white hover:bg-secondary px-8 py-4 transition-colors duration-300 uppercase tracking-widest text-xs font-medium">
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Home;
