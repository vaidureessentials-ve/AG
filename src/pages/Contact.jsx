import React from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';

const Contact = () => {
    return (
        <div className="min-h-screen bg-[#FDFBF7] pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                {/* Left Column: Contact Details */}
                <div className="space-y-8 md:space-y-12 animate-fade-in-left">
                    <div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#1a1a1a] mb-4 md:mb-6">Contact Us</h1>
                        <p className="text-base md:text-lg text-[#555] font-light max-w-md leading-relaxed">
                            Get in touch with us for inquiries, support, or business collaboration.
                        </p>
                    </div>

                    {/* Contact Info Card */}
                    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
                        {/* Email */}
                        <div className="flex items-start gap-4">
                            <div className="mt-1">
                                <Mail className="w-5 h-5 text-[#1a1a1a]" />
                            </div>
                            <div>
                                <p className="text-sm text-[#1a1a1a] font-bold">Email: <span className="font-normal text-gray-600 break-all">vaidureessentials@gmail.com</span></p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-4">
                            <div className="mt-1">
                                <Phone className="w-5 h-5 text-[#1a1a1a]" />
                            </div>
                            <div>
                                <p className="text-sm text-[#1a1a1a] font-bold">Phone: <span className="font-normal text-gray-600">+91 95227 00027</span></p>
                            </div>
                        </div>

                        {/* WhatsApp */}
                        <div className="flex items-start gap-4">
                            <div className="mt-1">
                                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                            </div>
                            <div>
                                <p className="text-sm text-[#1a1a1a] font-bold">WhatsApp: <a href="https://wa.me/919522700027" target="_blank" rel="noopener noreferrer" className="font-normal text-gray-600 hover:text-black hover:underline">Chat on WhatsApp</a></p>
                            </div>
                        </div>
                    </div>

                    {/* Footer Text */}
                    <div>
                        <p className="text-[#555] leading-relaxed">
                            Our team is available Monday to Friday, 9 AM – 6 PM, to assist you with all your needs.
                        </p>
                    </div>
                </div>

                {/* Right Column: Enquiry Form */}
                <div className="animate-fade-in-right">
                    <form className="space-y-6 bg-[#FDFBF7]"> {/* Keeping background consistent/transparent if needed, usually direct on page */}

                        {/* Full Name */}
                        <div>
                            <label className="block text-[#1a1a1a] font-medium mb-2">Full Name</label>
                            <input
                                type="text"
                                className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
                                placeholder="Enter your full name"
                            />
                        </div>

                        {/* Email ID */}
                        <div>
                            <label className="block text-[#1a1a1a] font-medium mb-2">Email ID</label>
                            <input
                                type="email"
                                className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
                                placeholder="Enter your email address"
                            />
                        </div>

                        {/* City */}
                        <div>
                            <label className="block text-[#1a1a1a] font-medium mb-2">City</label>
                            <input
                                type="text"
                                className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
                                placeholder="Enter your city"
                            />
                        </div>

                        {/* Contact Number */}
                        <div>
                            <label className="block text-[#1a1a1a] font-medium mb-2">Contact Number</label>
                            <input
                                type="tel"
                                className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
                                placeholder="Enter your contact number"
                            />
                        </div>

                        {/* Requirement */}
                        <div>
                            <label className="block text-[#1a1a1a] font-medium mb-2">Requirement</label>
                            <textarea
                                rows="3"
                                className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-black transition-colors resize-none"
                                placeholder="Write your requirement details here..."
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <button
                                type="button"
                                className="w-full bg-black text-white hover:bg-gray-800 font-medium py-3 rounded-lg transition-all duration-300 shadow-lg"
                            >
                                Submit Enquiry
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;
