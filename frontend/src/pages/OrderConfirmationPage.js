import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, Package, CreditCard } from 'lucide-react';
import { getOrderById } from '../services/api';
const OrderConfirmationPage = () => {
    const { id } = useParams();
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    // Sample order for development
    const sampleOrder = {
        _id: id || '123456789',
        items: [
            {
                productId: '1',
                name: 'Wireless Noise-Cancelling Headphones',
                price: 249.99,
                imageUrl: 'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                quantity: 1,
            },
            {
                productId: '6',
                name: 'Wireless Charging Pad',
                price: 39.99,
                imageUrl: 'https://images.pexels.com/photos/4526407/pexels-photo-4526407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                quantity: 2,
            },
        ],
        shippingAddress: {
            fullName: 'John Doe',
            address: '123 Main Street',
            city: 'New York',
            postalCode: '10001',
            country: 'United States',
        },
        paymentMethod: 'Card',
        itemsPrice: 329.97,
        shippingPrice: 4.99,
        taxPrice: 26.40,
        totalPrice: 361.36,
        isPaid: true,
        paidAt: new Date().toISOString(),
        isDelivered: false,
        createdAt: new Date().toISOString(),
    };
    // Fetch order
    useEffect(() => {
        const fetchOrder = async () => {
            setLoading(true);
            try {
                if (id) {
                    const fetchedOrder = await getOrderById(id);
                    setOrder(fetchedOrder);
                }
            }
            catch (error) {
                console.error('Error fetching order:', error);
                setOrder(sampleOrder);
            }
            finally {
                setLoading(false);
            }
        };
        fetchOrder();
    }, [id]);
    if (loading) {
        return (_jsx("div", { className: "container-custom py-12", children: _jsxs("div", { className: "bg-white rounded-lg shadow-sm p-8 max-w-3xl mx-auto animate-pulse", children: [_jsx("div", { className: "h-8 bg-gray-200 w-2/3 mb-4" }), _jsx("div", { className: "h-4 bg-gray-200 w-full mb-8" }), _jsx("div", { className: "h-24 bg-gray-200 rounded-lg mb-8" }), _jsxs("div", { className: "grid grid-cols-2 gap-4 mb-8", children: [_jsxs("div", { children: [_jsx("div", { className: "h-5 bg-gray-200 w-1/3 mb-2" }), _jsx("div", { className: "h-4 bg-gray-200 w-full mb-1" }), _jsx("div", { className: "h-4 bg-gray-200 w-3/4" })] }), _jsxs("div", { children: [_jsx("div", { className: "h-5 bg-gray-200 w-1/3 mb-2" }), _jsx("div", { className: "h-4 bg-gray-200 w-full mb-1" }), _jsx("div", { className: "h-4 bg-gray-200 w-3/4" })] })] }), _jsx("div", { className: "h-12 bg-gray-200 rounded-lg" })] }) }));
    }
    if (!order) {
        return (_jsxs("div", { className: "container-custom py-12 text-center", children: [_jsx("h2", { className: "text-2xl font-semibold mb-4", children: "Order Not Found" }), _jsx("p", { className: "text-gray-600 mb-6", children: "The order you're looking for doesn't exist or has been removed." }), _jsx(Link, { to: "/products", className: "btn btn-primary", children: "Continue Shopping" })] }));
    }
    return (_jsx("div", { className: "bg-gray-50 py-12", children: _jsx("div", { className: "container-custom", children: _jsxs("div", { className: "bg-white rounded-lg shadow-sm p-8 max-w-3xl mx-auto", children: [_jsxs("div", { className: "text-center mb-8 animate-fadeIn", children: [_jsx("div", { className: "flex justify-center mb-4", children: _jsx(CheckCircle, { className: "h-16 w-16 text-green-500" }) }), _jsx("h1", { className: "text-3xl font-bold mb-2", children: "Order Confirmed!" }), _jsx("p", { className: "text-gray-600 text-lg", children: "Thank you for your purchase. Your order has been received." })] }), _jsxs("div", { className: "bg-gray-50 rounded-lg p-4 mb-8 text-center", children: [_jsx("p", { className: "text-gray-600", children: "Order ID" }), _jsx("p", { className: "font-semibold text-lg", children: order._id })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-8", children: [_jsxs("div", { children: [_jsxs("div", { className: "flex items-center space-x-2 mb-3", children: [_jsx(Package, { className: "text-blue-600", size: 20 }), _jsx("h3", { className: "font-semibold text-lg", children: "Shipping Information" })] }), _jsxs("div", { className: "text-gray-700", children: [_jsx("p", { className: "font-medium", children: order.shippingAddress.fullName }), _jsx("p", { children: order.shippingAddress.address }), _jsxs("p", { children: [order.shippingAddress.city, ", ", order.shippingAddress.postalCode] }), _jsx("p", { children: order.shippingAddress.country })] })] }), _jsxs("div", { children: [_jsxs("div", { className: "flex items-center space-x-2 mb-3", children: [_jsx(CreditCard, { className: "text-blue-600", size: 20 }), _jsx("h3", { className: "font-semibold text-lg", children: "Payment Information" })] }), _jsxs("div", { className: "text-gray-700", children: [_jsxs("p", { children: [_jsx("span", { className: "font-medium", children: "Method:" }), " ", order.paymentMethod] }), _jsxs("p", { children: [_jsx("span", { className: "font-medium", children: "Status:" }), ' ', _jsx("span", { className: "text-green-600 font-medium", children: "Paid" })] }), _jsxs("p", { children: [_jsx("span", { className: "font-medium", children: "Date:" }), ' ', new Date(order.paidAt || order.createdAt).toLocaleDateString()] }), _jsxs("p", { children: [_jsx("span", { className: "font-medium", children: "Amount:" }), " $", order.totalPrice.toFixed(2)] })] })] })] }), _jsxs("div", { className: "mb-8", children: [_jsx("h3", { className: "font-semibold text-lg mb-4", children: "Order Items" }), _jsx("div", { className: "border rounded-lg overflow-hidden", children: _jsxs("table", { className: "w-full", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { children: [_jsx("th", { className: "py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Product" }), _jsx("th", { className: "py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Quantity" }), _jsx("th", { className: "py-3 px-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Price" })] }) }), _jsx("tbody", { className: "divide-y divide-gray-200", children: order.items.map((item) => (_jsxs("tr", { children: [_jsx("td", { className: "py-4 px-4", children: _jsxs("div", { className: "flex items-center", children: [_jsx("img", { src: item.imageUrl, alt: item.name, className: "h-16 w-16 object-cover rounded mr-4" }), _jsx("div", { children: _jsx(Link, { to: `/product/${item.productId}`, className: "font-medium text-gray-900 hover:text-blue-600 transition-colors", children: item.name }) })] }) }), _jsx("td", { className: "py-4 px-4", children: _jsx("span", { className: "text-gray-700", children: item.quantity }) }), _jsx("td", { className: "py-4 px-4 text-right", children: _jsxs("span", { className: "font-medium", children: ["$", (item.price * item.quantity).toFixed(2)] }) })] }, item.productId))) }), _jsxs("tfoot", { className: "bg-gray-50", children: [_jsxs("tr", { children: [_jsx("td", { colSpan: 2, className: "py-3 px-4 text-right font-medium", children: "Subtotal" }), _jsxs("td", { className: "py-3 px-4 text-right font-medium", children: ["$", order.itemsPrice.toFixed(2)] })] }), _jsxs("tr", { children: [_jsx("td", { colSpan: 2, className: "py-3 px-4 text-right font-medium", children: "Shipping" }), _jsxs("td", { className: "py-3 px-4 text-right font-medium", children: ["$", order.shippingPrice.toFixed(2)] })] }), _jsxs("tr", { children: [_jsx("td", { colSpan: 2, className: "py-3 px-4 text-right font-medium", children: "Tax" }), _jsxs("td", { className: "py-3 px-4 text-right font-medium", children: ["$", order.taxPrice.toFixed(2)] })] }), _jsxs("tr", { children: [_jsx("td", { colSpan: 2, className: "py-3 px-4 text-right text-lg font-semibold", children: "Total" }), _jsxs("td", { className: "py-3 px-4 text-right text-lg font-semibold", children: ["$", order.totalPrice.toFixed(2)] })] })] })] }) })] }), _jsx("div", { className: "text-center", children: _jsx(Link, { to: "/products", className: "btn btn-primary inline-block px-8 py-3", children: "Continue Shopping" }) })] }) }) }));
};
export default OrderConfirmationPage;
