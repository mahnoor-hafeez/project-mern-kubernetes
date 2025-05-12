import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCart } from '../context/CartContext';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
const CartPage = () => {
    const { state } = useCart();
    return (_jsx("div", { className: "bg-gray-50 py-12", children: _jsxs("div", { className: "container-custom", children: [_jsx("h1", { className: "text-3xl font-bold mb-8", children: "Your Shopping Cart" }), state.items.length === 0 ? (_jsxs("div", { className: "bg-white rounded-lg shadow-sm p-8 text-center max-w-2xl mx-auto", children: [_jsx("div", { className: "flex justify-center mb-4", children: _jsx("div", { className: "bg-blue-50 p-4 rounded-full", children: _jsx(ShoppingBag, { className: "h-12 w-12 text-blue-500" }) }) }), _jsx("h2", { className: "text-xl font-semibold mb-2", children: "Your cart is empty" }), _jsx("p", { className: "text-gray-600 mb-6", children: "Looks like you haven't added any products to your cart yet." }), _jsx(Link, { to: "/products", className: "btn btn-primary inline-block px-8 py-3", children: "Start Shopping" })] })) : (_jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [_jsx("div", { className: "lg:col-span-2", children: _jsxs("div", { className: "bg-white rounded-lg shadow-sm p-6", children: [_jsxs("h2", { className: "text-xl font-semibold mb-6", children: ["Items (", state.totalItems, ")"] }), _jsx("div", { className: "divide-y divide-gray-200", children: state.items.map((item) => (_jsx(CartItem, { item: item }, item.productId))) })] }) }), _jsx("div", { className: "lg:col-span-1", children: _jsx(CartSummary, {}) })] }))] }) }));
};
export default CartPage;
