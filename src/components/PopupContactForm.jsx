import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const PopupContactForm = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasClosed, setHasClosed] = useState(false);

    useEffect(() => {
        // Check if the user has arguably seen it this session? 
        // For now, user said "website open or reload", so simple timer is best.
        // We could use sessionStorage to prevent it reappearing on every reload if desired, 
        // but user specifically said "reload", so I will stick to just a timer per mount.

        const timer = setTimeout(() => {
            if (!hasClosed) {
                setIsVisible(true);
            }
        }, 5000);

        return () => clearTimeout(timer);
    }, [hasClosed]);

    if (!isVisible) return null;

    const handleClose = () => {
        setIsVisible(false);
        setHasClosed(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle form submission
        alert("Thank you! We will get in touch shortly.");
        handleClose();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
                onClick={handleClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-white w-full max-w-lg rounded-lg shadow-2xl transform transition-all duration-300 animate-fade-in-up overflow-hidden">

                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-black transition-colors z-10"
                >
                    <X size={24} />
                </button>

                <div className="flex flex-col md:flex-row">
                    {/* Form Section */}
                    <div className="w-full p-8">
                        <div className="text-center mb-6">
                            <h2 className="text-2xl font-serif text-primary mb-2">Let's Get in Touch!</h2>
                            <p className="text-gray-600 text-sm">We'd love to hear from you.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="popup-name" className="block text-gray-700 text-sm font-medium mb-1">Name *</label>
                                <input
                                    type="text"
                                    id="popup-name"
                                    className="w-full bg-gray-50 border border-gray-200 rounded p-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="popup-phone" className="block text-gray-700 text-sm font-medium mb-1">Phone Number *</label>
                                    <input
                                        type="tel"
                                        id="popup-phone"
                                        className="w-full bg-gray-50 border border-gray-200 rounded p-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="popup-email" className="block text-gray-700 text-sm font-medium mb-1">Email *</label>
                                    <input
                                        type="email"
                                        id="popup-email"
                                        className="w-full bg-gray-50 border border-gray-200 rounded p-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="popup-message" className="block text-gray-700 text-sm font-medium mb-1">Message *</label>
                                <textarea
                                    id="popup-message"
                                    rows="3"
                                    className="w-full bg-gray-50 border border-gray-200 rounded p-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none text-sm"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary text-white border border-primary hover:bg-white hover:text-primary font-medium py-3 rounded transition-all duration-300 uppercase tracking-widest text-xs shadow-md mt-2 cursor-pointer"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopupContactForm;
