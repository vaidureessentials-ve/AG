import React, { useState } from 'react';
import { X } from 'lucide-react';

const PopupForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to a backend
        console.log('Form submitted:', formData);
        alert('Thank you! We will get in touch soon.');
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fade-in">
            <div className="bg-white w-full max-w-md rounded-lg shadow-2xl relative overflow-hidden animate-scale-up">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <X size={24} />
                </button>

                {/* Header */}
                <div className="bg-primary/5 p-6 text-center border-b border-gray-100">
                    <h2 className="text-2xl font-serif text-primary mb-2">Let's Get in Touch!</h2>
                    <p className="text-sm text-gray-500">We'd love to hear from you.</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                            placeholder="Your Name"
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                            placeholder="Your Phone Number"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                            placeholder="Your Email Address"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            rows="3"
                            className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                            placeholder="How can we help you?"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary text-white py-3 rounded-sm font-medium hover:bg-white hover:text-black active:bg-white active:text-black border border-transparent hover:border-primary active:border-primary transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:-translate-y-0.5 cursor-pointer focus:outline-none"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PopupForm;
