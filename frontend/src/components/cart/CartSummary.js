import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useCart } from '../../context/CartContext';
import { ShoppingBag, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';
const TAX_RATE = 0.08; // 8% tax rate
const SHIPPING_COST = 4.99; // Fixed shipping cost
const CartSummary = ({ showCheckoutButton = true }) => {
    const { state } = useCart();
    const subtotal = state.totalPrice;
    const tax = subtotal * TAX_RATE;
    const shipping = state.items.length > 0 ? SHIPPING_COST : 0;
    const total = subtotal + tax + shipping;
    return (_jsxs("div", { className: "bg-gray-50 rounded-lg p-6 sticky top-24", children: [_jsx("h2", { className: "text-xl font-semibold mb-6", children: "Order Summary" }), _jsxs("div", { className: "space-y-4 mb-6", children: [_jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-gray-600", children: "Subtotal" }), _jsxs("span", { children: ["$", subtotal.toFixed(2)] })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-gray-600", children: "Tax (8%)" }), _jsxs("span", { children: ["$", tax.toFixed(2)] })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-gray-600", children: "Shipping" }), _jsx("span", { children: shipping > 0 ? `$${shipping.toFixed(2)}` : 'Free' })] }), _jsx("div", { className: "border-t border-gray-200 pt-4 mt-4" }), _jsxs("div", { className: "flex justify-between font-semibold text-lg", children: [_jsx("span", { children: "Total" }), _jsxs("span", { children: ["$", total.toFixed(2)] })] })] }), showCheckoutButton && (_jsxs(_Fragment, { children: [_jsxs(Link, { to: "/checkout", className: `btn w-full ${state.items.length > 0
                            ? 'btn-primary'
                            : 'bg-gray-400 text-white cursor-not-allowed'} mb-4 flex items-center justify-center`, "aria-disabled": state.items.length === 0, onClick: (e) => {
                            if (state.items.length === 0) {
                                e.preventDefault();
                            }
                        }, children: [_jsx(CreditCard, { size: 18, className: "mr-2" }), "Proceed to Checkout"] }), _jsxs(Link, { to: "/products", className: "btn btn-outline w-full flex items-center justify-center", children: [_jsx(ShoppingBag, { size: 18, className: "mr-2" }), "Continue Shopping"] })] }))] }));
};
export default CartSummary;
