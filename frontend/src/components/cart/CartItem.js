import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
const CartItem = ({ item }) => {
    const { updateQuantity, removeFromCart } = useCart();
    const handleQuantityChange = (newQuantity) => {
        if (newQuantity >= 1) {
            updateQuantity(item.productId, newQuantity);
        }
    };
    const handleRemove = () => {
        removeFromCart(item.productId);
    };
    return (_jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-center py-6 border-b border-gray-200 animate-fadeIn", children: [_jsx("div", { className: "w-full sm:w-20 h-20 mr-0 sm:mr-6 mb-4 sm:mb-0 flex-shrink-0", children: _jsx(Link, { to: `/product/${item.productId}`, children: _jsx("img", { src: item.imageUrl, alt: item.name, className: "w-full h-full object-cover rounded" }) }) }), _jsxs("div", { className: "flex-grow mr-0 sm:mr-6 mb-4 sm:mb-0", children: [_jsx(Link, { to: `/product/${item.productId}`, className: "text-lg font-medium hover:text-blue-600 transition-colors", children: item.name }), _jsxs("p", { className: "text-sm text-gray-500 mt-1", children: ["$", item.price.toFixed(2), " per item"] })] }), _jsxs("div", { className: "flex items-center border border-gray-300 rounded-md mb-4 sm:mb-0 mr-0 sm:mr-6", children: [_jsx("button", { onClick: () => handleQuantityChange(item.quantity - 1), className: "p-2 hover:bg-gray-100 text-gray-600 transition-colors", disabled: item.quantity <= 1, children: _jsx(Minus, { size: 16 }) }), _jsx("span", { className: "px-3 py-1 border-x border-gray-300 min-w-[40px] text-center", children: item.quantity }), _jsx("button", { onClick: () => handleQuantityChange(item.quantity + 1), className: "p-2 hover:bg-gray-100 text-gray-600 transition-colors", children: _jsx(Plus, { size: 16 }) })] }), _jsxs("div", { className: "flex items-center justify-between w-full sm:w-auto", children: [_jsxs("span", { className: "font-semibold text-lg", children: ["$", (item.price * item.quantity).toFixed(2)] }), _jsx("button", { onClick: handleRemove, className: "ml-6 text-gray-500 hover:text-red-500 transition-colors", children: _jsx(Trash2, { size: 20 }) })] })] }));
};
export default CartItem;
