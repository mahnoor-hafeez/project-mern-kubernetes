import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);
    const { state } = useCart();
    const navigate = useNavigate();
    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            }
            else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    // Handle search submit
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
            setSearchQuery('');
            setIsMenuOpen(false);
        }
    };
    // Toggle mobile menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (_jsx("header", { className: `sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-md'}`, children: _jsxs("div", { className: "container-custom py-4", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx(Link, { to: "/", className: "flex items-center", children: _jsx("span", { className: "text-2xl font-bold text-blue-600", children: "ShopEase" }) }), _jsxs("nav", { className: "hidden md:flex items-center space-x-8", children: [_jsx(Link, { to: "/", className: "font-medium hover:text-blue-600 transition-colors", children: "Home" }), _jsx(Link, { to: "/products", className: "font-medium hover:text-blue-600 transition-colors", children: "All Products" }), _jsx(Link, { to: "/products/electronics", className: "font-medium hover:text-blue-600 transition-colors", children: "Electronics" }), _jsx(Link, { to: "/products/clothing", className: "font-medium hover:text-blue-600 transition-colors", children: "Clothing" })] }), _jsxs("div", { className: "hidden md:flex items-center space-x-4", children: [_jsxs("form", { onSubmit: handleSearchSubmit, className: "relative", children: [_jsx("input", { type: "text", placeholder: "Search products...", className: "w-64 pl-3 pr-10 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value) }), _jsx("button", { type: "submit", className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600", children: _jsx(Search, { size: 18 }) })] }), _jsxs(Link, { to: "/cart", className: "relative p-2 text-gray-700 hover:text-blue-600 transition-colors", children: [_jsx(ShoppingCart, { size: 24 }), state.totalItems > 0 && (_jsx("span", { className: "absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center", children: state.totalItems }))] })] }), _jsxs("div", { className: "flex items-center space-x-4 md:hidden", children: [_jsxs(Link, { to: "/cart", className: "relative p-2 text-gray-700 hover:text-blue-600 transition-colors", children: [_jsx(ShoppingCart, { size: 24 }), state.totalItems > 0 && (_jsx("span", { className: "absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center", children: state.totalItems }))] }), _jsx("button", { onClick: toggleMenu, className: "p-2 text-gray-700 hover:text-blue-600 transition-colors", children: isMenuOpen ? _jsx(X, { size: 24 }) : _jsx(Menu, { size: 24 }) })] })] }), isMenuOpen && (_jsxs("div", { className: "md:hidden mt-4 pb-4 animate-fadeIn", children: [_jsxs("form", { onSubmit: handleSearchSubmit, className: "relative mb-4", children: [_jsx("input", { type: "text", placeholder: "Search products...", className: "w-full pl-3 pr-10 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value) }), _jsx("button", { type: "submit", className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600", children: _jsx(Search, { size: 18 }) })] }), _jsxs("nav", { className: "flex flex-col space-y-4", children: [_jsx(Link, { to: "/", className: "font-medium hover:text-blue-600 transition-colors", onClick: () => setIsMenuOpen(false), children: "Home" }), _jsx(Link, { to: "/products", className: "font-medium hover:text-blue-600 transition-colors", onClick: () => setIsMenuOpen(false), children: "All Products" }), _jsx(Link, { to: "/products/electronics", className: "font-medium hover:text-blue-600 transition-colors", onClick: () => setIsMenuOpen(false), children: "Electronics" }), _jsx(Link, { to: "/products/clothing", className: "font-medium hover:text-blue-600 transition-colors", onClick: () => setIsMenuOpen(false), children: "Clothing" })] })] }))] }) }));
};
export default Navbar;
