import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ title, image, category, link }) => {
    return (
        <Link to={link || '/products'} className="group relative block w-full outline-none">
            <div className="aspect-[4/5] w-full overflow-hidden bg-[#F3F1ED] mb-6">
                {image && (
                    <img
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-110"
                    />
                )}
            </div>
            <div className="flex flex-col items-center text-center">
                <span className="text-secondary text-[10px] tracking-[0.2em] uppercase mb-3 block">{category}</span>
                <h3 className="text-primary text-2xl font-serif mb-4 transition-colors group-hover:text-secondary">{title}</h3>
                <span className="premium-link text-xs tracking-widest uppercase text-primary">Discover</span>
            </div>
        </Link>
    );
};

export default ProductCard;
