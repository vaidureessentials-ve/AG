import React from 'react';
import { Instagram, Linkedin, Facebook, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#121212] text-white py-12 border-t border-gray-800 font-sans">
            <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">

                {/* Brand Column */}
                <div className="flex flex-col items-center md:items-start space-y-6">
                    <div className="flex flex-col mb-2 items-center md:items-start">
                        <Link to="/" className="inline-block" onClick={() => window.scrollTo(0, 0)}><h2 className="text-3xl font-serif font-bold tracking-wide text-white mb-4">VAIDURE</h2></Link>
                        <p className="text-white text-sm leading-relaxed font-medium">
                            Pure Care. Thoughtfully Crafted.<br />
                            Beautifully Branded.
                        </p>
                    </div>
                    <div className="flex space-x-4 justify-center md:justify-start">
                        <a href="https://www.instagram.com/vaidure_essentials" target="_blank" rel="noopener noreferrer" className="p-3 border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 text-white">
                            <Instagram size={20} />
                        </a>
                        <a href="https://www.facebook.com/vaidureessentials" target="_blank" rel="noopener noreferrer" className="p-3 border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 text-white">
                            <Facebook size={20} />
                        </a>
                        <a href="https://www.youtube.com/@vaidureessentials" target="_blank" rel="noopener noreferrer" className="p-3 border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 text-white">
                            <Youtube size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/vaidure-essentials-52a1923a5/" target="_blank" rel="noopener noreferrer" className="p-3 border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 text-white">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>

                {/* Products */}
                <div>
                    <h3 className="text-sm font-bold text-white tracking-widest uppercase mb-8">PRODUCTS</h3>
                    <ul className="space-y-4 text-white text-sm">
                        <li><Link to="/products" className="hover:opacity-80 transition-opacity block">Wet Amenities</Link></li>
                        <li><Link to="/products" className="hover:opacity-80 transition-opacity block">Dry Amenities</Link></li>
                        <li><Link to="/products" className="hover:opacity-80 transition-opacity block">Gift Sets</Link></li>
                        <li><Link to="/products" className="hover:opacity-80 transition-opacity block">Customization</Link></li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h3 className="text-sm font-bold text-white tracking-widest uppercase mb-8">COMPANY</h3>
                    <ul className="space-y-4 text-white text-sm">
                        <li><Link to="/about" className="hover:opacity-80 transition-opacity block">About Us</Link></li>
                        <li><Link to="/about" className="hover:opacity-80 transition-opacity block">Sustainability</Link></li>
                        <li><Link to="/contact" className="hover:opacity-80 transition-opacity block">B2B Solutions</Link></li>
                        <li><Link to="/contact" className="hover:opacity-80 transition-opacity block">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Get In Touch */}
                <div>
                    <h3 className="text-sm font-bold text-white tracking-widest uppercase mb-8">GET IN TOUCH</h3>
                    <div className="text-white space-y-4 text-sm leading-relaxed">
                        <p>
                            <a href="mailto:support@vaidure.com" className="hover:opacity-80 transition-opacity block mb-1">support@vaidure.com</a>
                        </p>
                        <p>
                            <a href="tel:+919522700027" className="hover:opacity-80 transition-opacity block">+91 95227 00027</a>
                        </p>
                        <p className="pt-2">
                            Orbit, Vijay Nagar, Scheme 54 PU4<br />
                            Indore, Madhya Pradesh 452010
                        </p>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="max-w-7xl w-full mx-auto px-6 mt-8 pt-8 border-t border-gray-800 text-center text-xs text-white">
                <p className="uppercase tracking-wider">© 2026 VAIDURE. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
