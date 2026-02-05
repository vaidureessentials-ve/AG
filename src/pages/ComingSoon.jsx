import React from 'react';
import { Link } from 'react-router-dom';

const ComingSoon = () => {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-serif text-primary mb-6">Coming Soon</h1>
            <p className="text-secondary text-lg max-w-md mb-10 font-light">
                We are currently crafting this experience. Please check back later.
            </p>
            <Link
                to="/"
                className="px-8 py-3 bg-primary text-white text-sm font-bold tracking-widest uppercase hover:bg-primary/90 transition-colors"
            >
                Back to Home
            </Link>
        </div>
    );
};

export default ComingSoon;
