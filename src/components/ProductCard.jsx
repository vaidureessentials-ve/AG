import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ title, image, category, link }) => {
    return (
        <Link to={link || '/products'} className="group relative block overflow-hidden">
            <div className="aspect-[4/5] w-full overflow-hidden bg-gray-200">
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white/80 text-xs tracking-widest uppercase mb-1">{category}</span>
                <h3 className="text-white text-xl font-serif mb-4">{title}</h3>
                <span className="text-white text-sm font-medium underline underline-offset-4">Discover</span>
            </div>
        </Link>
    );
};

export default ProductCard;
