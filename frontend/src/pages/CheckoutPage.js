import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CheckoutForm from '../components/checkout/CheckoutForm';
import CartSummary from '../components/cart/CartSummary';
const CheckoutPage = () => {
    const { state } = useCart();
    const navigate = useNavigate();
    // Redirect to cart if cart is empty
    useEffect(() => {
        if (state.items.length === 0) {
            navigate('/cart');
        }
    }, [state.items.length, navigate]);
    if (state.items.length === 0) {
        return null; // Will redirect in useEffect
    }
    return (_jsx("div", { className: "bg-gray-50 py-12", children: _jsxs("div", { className: "container-custom", children: [_jsx("h1", { className: "text-3xl font-bold mb-8", children: "Checkout" }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [_jsx("div", { className: "lg:col-span-2", children: _jsx("div", { className: "bg-white rounded-lg shadow-sm p-6", children: _jsx(CheckoutForm, {}) }) }), _jsx("div", { className: "lg:col-span-1", children: _jsx(CartSummary, { showCheckoutButton: false }) })] })] }) }));
};
export default CheckoutPage;
