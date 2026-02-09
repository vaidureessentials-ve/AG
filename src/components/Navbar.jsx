import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [expandedItem, setExpandedItem] = useState(null);


    const toggleSubmenu = (name) => {
        setExpandedItem(expandedItem === name ? null : name);
    };

    return (
        <nav className="fixed w-full z-50 bg-white shadow-sm h-20 flex items-center transition-all duration-300">
            <div className="max-w-7xl w-full mx-auto px-6 flex justify-between items-center relative">
                {/* Mobile Menu Button - Moved to start for left positioning */}
                <button
                    className="md:hidden z-20 text-primary"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} className="text-black" /> : <Menu size={24} />}
                </button>

                {/* Logo - Centered on Mobile using absolute positioning */}
                <Link
                    to="/"
                    className="text-4xl font-serif font-semibold tracking-wider absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 text-primary"
                    onClick={() => window.scrollTo(0, 0)}
                >
                    VAIDURE
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {/* Products with Mega Menu */}
                    <div className="relative group h-full flex items-center">
                        <span
                            className="transition-colors font-medium text-sm tracking-wide py-6 text-black hover:text-secondary cursor-default"
                        >
                            Products
                        </span>

                        {/* Dropdown Menu */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-2xl transition-all duration-300 transform origin-top opacity-0 scale-y-95 invisible group-hover:opacity-100 group-hover:scale-y-100 group-hover:visible pt-6 pb-8 px-10 z-50 mt-2 border-t border-gray-200">
                            <div className="flex flex-row gap-8">
                                {[
                                    { name: 'Gift Set', img: '/product-1.png', path: '/gift-set' },
                                    { name: 'Dry Amenity', img: '/product-2.png', path: '/dry-amenity' },
                                    { name: 'Wet Amenity', img: '/product-3.png', path: '/wet-amenity' }
                                ].map((product) => (
                                    <Link to={product.path} key={product.name} className="group/item flex flex-col items-center space-y-4">
                                        <div className="overflow-hidden border border-black/10 w-48 h-48 flex-shrink-0">
                                            <img
                                                src={product.img}
                                                alt={product.name}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-105"
                                            />
                                        </div>
                                        <p className="text-black text-sm font-serif tracking-[0.2em] uppercase group-hover/item:text-secondary transition-colors duration-300">
                                            {product.name}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>


                    {/* Sustainability with Dropdown */}
                    <div className="relative group h-full flex items-center">
                        <span
                            className="transition-colors font-medium text-sm tracking-wide py-6 text-black hover:text-secondary cursor-default"
                        >
                            Sustainability
                        </span>

                        {/* Dropdown Menu */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-2xl transition-all duration-300 transform origin-top opacity-0 scale-y-95 invisible group-hover:opacity-100 group-hover:scale-y-100 group-hover:visible pt-4 pb-6 px-8 z-50 min-w-[190px] mt-2 border-t border-gray-200">
                            <div className="flex flex-col gap-3">
                                <Link
                                    to="/eco-materials"
                                    className="text-black text-sm font-serif tracking-wide hover:text-secondary transition-colors duration-300 py-2 border-b border-black/10"
                                >
                                    Eco Materials
                                </Link>
                                <Link
                                    to="/refill-program"
                                    className="text-black text-sm font-serif tracking-wide hover:text-secondary transition-colors duration-300 py-2 border-b border-black/10"
                                >
                                    Refill Program
                                </Link>
                                <Link
                                    to="/certifications"
                                    className="text-black text-sm font-serif tracking-wide hover:text-secondary transition-colors duration-300 py-2"
                                >
                                    Certifications
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Customization with Dropdown */}
                    <div className="relative group h-full flex items-center">
                        <span
                            className="transition-colors font-medium text-sm tracking-wide py-6 text-black hover:text-secondary cursor-default"
                        >
                            Customization
                        </span>

                        {/* Dropdown Menu */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-2xl transition-all duration-300 transform origin-top opacity-0 scale-y-95 invisible group-hover:opacity-100 group-hover:scale-y-100 group-hover:visible pt-4 pb-6 px-8 z-50 min-w-[180px] mt-2 border-t border-gray-200">
                            <div className="flex flex-col gap-3">
                                <Link
                                    to="/private-label"
                                    className="text-black text-sm font-serif tracking-wide hover:text-secondary transition-colors duration-300 py-2 border-b border-black/10"
                                >
                                    Private Label
                                </Link>
                                <Link
                                    to="/packaging"
                                    className="text-black text-sm font-serif tracking-wide hover:text-secondary transition-colors duration-300 py-2 border-b border-black/10"
                                >
                                    Packaging
                                </Link>
                                <Link
                                    to="/fragrance"
                                    className="text-black text-sm font-serif tracking-wide hover:text-secondary transition-colors duration-300 py-2"
                                >
                                    Fragrance
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* B2BSolutions with Dropdown */}
                    <div className="relative group h-full flex items-center">
                        <span
                            className="transition-colors font-medium text-sm tracking-wide py-6 text-black hover:text-secondary cursor-default"
                        >
                            B2BSolutions
                        </span>

                        {/* Dropdown Menu */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-2xl transition-all duration-300 transform origin-top opacity-0 scale-y-95 invisible group-hover:opacity-100 group-hover:scale-y-100 group-hover:visible pt-4 pb-6 px-8 z-50 min-w-[240px] mt-2 border-t border-gray-200">
                            <div className="flex flex-col gap-3">
                                {[
                                    'Hotel & Resort Amenity',
                                    'Corporate Gifting',
                                    'Hospital Amenities'
                                ].map((item) => (
                                    <Link
                                        to="/coming-soon"
                                        key={item}
                                        className="text-black text-sm font-serif tracking-wide hover:text-secondary transition-colors duration-300 py-2 border-b border-black/10 last:border-0"
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {[
                        { name: 'About Us', path: '/about' },
                        { name: 'Contact Us', path: '/contact' }
                    ].map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className="transition-colors font-medium text-sm tracking-wide text-black hover:text-secondary"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Spacer for Mobile Right to balance flex (Optional, but keeps flex consistent if needed, though absolute center handles logo) */}
                <div className="md:hidden w-6"></div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-8 px-6 flex flex-col space-y-6 animate-fade-in-down h-[calc(100vh-80px)] overflow-y-auto">
                    {[
                        {
                            name: 'Products',
                            subItems: [
                                { name: 'Gift Set', path: '/gift-set' },
                                { name: 'Dry Amenity', path: '/dry-amenity' },
                                { name: 'Wet Amenity', path: '/wet-amenity' }
                            ]
                        },
                        {
                            name: 'Sustainability',
                            subItems: [
                                { name: 'Eco Materials', path: '/eco-materials' },
                                { name: 'Refill Program', path: '/refill-program' },
                                { name: 'Certifications', path: '/certifications' }
                            ]
                        },
                        {
                            name: 'Customization',
                            subItems: [
                                { name: 'Private Label', path: '/private-label' },
                                { name: 'Packaging', path: '/packaging' },
                                { name: 'Fragrance', path: '/fragrance' }
                            ]
                        },
                        {
                            name: 'B2BSolutions',
                            subItems: [
                                { name: 'Hotel & Resort Amenity', path: '/coming-soon' },
                                { name: 'Corporate Gifting', path: '/coming-soon' },
                                { name: 'Hospital Amenities', path: '/coming-soon' }
                            ]
                        },
                        { name: 'About Us', path: '/about' },
                        { name: 'Contact Us', path: '/contact' }
                    ].map((item) => (
                        <div key={item.name} className="flex flex-col">
                            {item.subItems ? (
                                <>
                                    <button
                                        onClick={() => toggleSubmenu(item.name)}
                                        className="flex justify-between items-center text-black text-lg font-medium w-full text-left"
                                    >
                                        {item.name}
                                        {expandedItem === item.name ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                    </button>

                                    {/* Sub-menu */}
                                    {expandedItem === item.name && (
                                        <div className="flex flex-col space-y-4 pl-4 mt-4 border-l border-gray-200">
                                            {item.subItems.map(subItem => (
                                                <Link
                                                    key={subItem.name}
                                                    to={subItem.path}
                                                    className="text-gray-600 text-base hover:text-primary transition-colors"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <Link
                                    to={item.path}
                                    className="text-black text-lg font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
