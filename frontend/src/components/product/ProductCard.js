import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useState } from 'react';
const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const [isHovered, setIsHovered] = useState(false);
    const [showAddedMessage, setShowAddedMessage] = useState(false);
    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart({
            productId: product._id,
            name: product.name,
            price: product.price,
            imageUrl: product.imageUrl,
        });
        // Show added to cart message
        setShowAddedMessage(true);
        setTimeout(() => setShowAddedMessage(false), 2000);
    };
    return (_jsx(Link, { to: `/product/${product._id}`, className: "group", onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false), children: _jsxs("div", { className: "card h-full flex flex-col", children: [_jsxs("div", { className: "relative overflow-hidden aspect-square", children: [_jsx("img", { src: product.imageUrl, alt: product.name, className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" }), _jsx("button", { className: "absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm text-gray-700 hover:text-red-500 transition-colors", onClick: (e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                // Add wishlist functionality here
                            }, children: _jsx(Heart, { size: 18 }) }), _jsx("div", { className: `absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`, children: _jsxs("button", { onClick: handleAddToCart, className: "btn btn-primary flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300", children: [_jsx(ShoppingCart, { size: 18 }), _jsx("span", { children: "Add to Cart" })] }) }), showAddedMessage && (_jsx("div", { className: "absolute bottom-0 left-0 right-0 bg-green-500 text-white text-center py-2 animate-fadeIn", children: "Added to cart!" }))] }), _jsxs("div", { className: "p-4 flex-grow flex flex-col", children: [_jsx("span", { className: "text-sm text-gray-500 uppercase", children: product.category }), _jsx("h3", { className: "font-medium text-gray-900 mt-1 mb-2 line-clamp-2", children: product.name }), _jsxs("div", { className: "flex items-center mb-3", children: [_jsx("div", { className: "flex", children: [...Array(5)].map((_, i) => (_jsx("span", { className: i < product.rating ? "text-yellow-400" : "text-gray-300", children: "\u2605" }, i))) }), _jsxs("span", { className: "text-xs text-gray-500 ml-2", children: ["(", product.numReviews, ")"] })] }), _jsx("div", { className: "mt-auto", children: _jsxs("span", { className: "font-semibold text-lg", children: ["$", product.price.toFixed(2)] }) })] })] }) }));
};
export default ProductCard;
