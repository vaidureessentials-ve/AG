import React from 'react';

const ContactForm = () => {
    return (
        <div className="bg-transparent p-6 md:p-8 rounded-lg max-w-md w-full mx-auto text-left border border-white/10">
            <h2 className="text-2xl md:text-3xl font-serif text-white mb-4 md:mb-6 text-center">Let's Get in Touch!</h2>

            <form className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-white mb-1">Name *</label>
                    <input
                        type="text"
                        id="name"
                        className="w-full bg-white/5 border border-white/20 rounded p-2 text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-white mb-1">Phone Number *</label>
                    <input
                        type="tel"
                        id="phone"
                        className="w-full bg-white/5 border border-white/20 rounded p-2 text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-white mb-1">Email *</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full bg-white/5 border border-white/20 rounded p-2 text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-white mb-1">Message *</label>
                    <textarea
                        id="message"
                        rows="2"
                        className="w-full bg-white/5 border border-white/20 rounded p-2 text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors resize-none"
                        required
                    ></textarea>
                </div>

                <div className="pt-4">
                    <button
                        type="submit"
                        className="w-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-semibold py-3 rounded-full transition-colors duration-300 uppercase tracking-wide cursor-pointer text-sm"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
