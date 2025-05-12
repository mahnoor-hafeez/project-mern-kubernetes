import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { ShoppingBag, Truck, ShieldCheck, Clock } from 'lucide-react';
import { getProducts } from '../services/api';
import ProductCard from '../components/product/ProductCard';
import { Link } from 'react-router-dom';
const HomePage = () => {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [newArrivals, setNewArrivals] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const products = await getProducts();
                // Simulate featured products and new arrivals
                setFeaturedProducts(products.slice(0, 4));
                setNewArrivals(products.slice(4, 8));
            }
            catch (error) {
                console.error('Error fetching products:', error);
            }
            finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);
    // Sample featured products for development
    const sampleProducts = [
        {
            _id: '1',
            name: 'Wireless Noise-Cancelling Headphones',
            description: 'Premium wireless headphones with active noise cancellation for immersive sound experience.',
            price: 249.99,
            imageUrl: 'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            category: 'Electronics',
            inStock: true,
            rating: 4.8,
            numReviews: 127,
            createdAt: '2023-01-15T08:00:00Z',
        },
        {
            _id: '2',
            name: 'Smart Fitness Watch',
            description: 'Track your fitness goals with this sleek and feature-packed smart watch.',
            price: 199.99,
            imageUrl: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            category: 'Electronics',
            inStock: true,
            rating: 4.5,
            numReviews: 89,
            createdAt: '2023-02-10T10:30:00Z',
        },
        {
            _id: '3',
            name: 'Premium Leather Backpack',
            description: 'Stylish and durable leather backpack perfect for work or travel.',
            price: 129.99,
            imageUrl: 'https://images.pexels.com/photos/934673/pexels-photo-934673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            category: 'Accessories',
            inStock: true,
            rating: 4.7,
            numReviews: 65,
            createdAt: '2023-03-20T14:45:00Z',
        },
        {
            _id: '4',
            name: 'Designer Sunglasses',
            description: 'Protect your eyes in style with these premium designer sunglasses.',
            price: 159.99,
            imageUrl: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            category: 'Accessories',
            inStock: true,
            rating: 4.6,
            numReviews: 42,
            createdAt: '2023-04-05T09:15:00Z',
        },
    ];
    const sampleNewArrivals = [
        {
            _id: '5',
            name: 'Minimalist Analog Watch',
            description: 'Elegant minimalist watch with a premium leather strap.',
            price: 179.99,
            imageUrl: 'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            category: 'Accessories',
            inStock: true,
            rating: 4.9,
            numReviews: 28,
            createdAt: '2023-05-12T16:20:00Z',
        },
        {
            _id: '6',
            name: 'Wireless Charging Pad',
            description: 'Fast wireless charging pad compatible with all Qi-enabled devices.',
            price: 39.99,
            imageUrl: 'https://images.pexels.com/photos/4526407/pexels-photo-4526407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            category: 'Electronics',
            inStock: true,
            rating: 4.4,
            numReviews: 54,
            createdAt: '2023-05-25T11:10:00Z',
        },
        {
            _id: '7',
            name: 'Premium Cotton T-Shirt',
            description: 'Ultra-soft premium cotton t-shirt with a modern fit.',
            price: 29.99,
            imageUrl: 'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            category: 'Clothing',
            inStock: true,
            rating: 4.3,
            numReviews: 76,
            createdAt: '2023-06-01T08:45:00Z',
        },
        {
            _id: '8',
            name: 'Portable Bluetooth Speaker',
            description: 'Compact yet powerful Bluetooth speaker with 20 hours of battery life.',
            price: 89.99,
            imageUrl: 'https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            category: 'Electronics',
            inStock: true,
            rating: 4.7,
            numReviews: 35,
            createdAt: '2023-06-15T14:30:00Z',
        },
    ];
    return (_jsxs("div", { children: [_jsx("section", { className: "bg-gradient-to-r from-blue-600 to-blue-700 text-white", children: _jsx("div", { className: "container-custom py-20 md:py-24", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 items-center", children: [_jsxs("div", { className: "order-2 md:order-1 animate-fadeIn", children: [_jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-4", children: "Shop the Latest Trends" }), _jsx("p", { className: "text-xl opacity-90 mb-8 max-w-xl", children: "Discover premium products with fast shipping and exceptional quality. Your one-stop destination for all your shopping needs." }), _jsxs("div", { className: "flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4", children: [_jsx(Link, { to: "/products", className: "btn bg-white text-blue-600 hover:bg-blue-50 focus:ring-white px-8 py-3 text-lg font-semibold", children: "Shop Now" }), _jsx(Link, { to: "/products/electronics", className: "btn border-2 border-white/60 bg-transparent hover:bg-white/10 focus:ring-white px-8 py-3 text-lg font-semibold", children: "Browse Electronics" })] })] }), _jsx("div", { className: "order-1 md:order-2 animate-fadeIn", children: _jsx("img", { src: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Shopping Experience", className: "rounded-lg shadow-xl w-full" }) })] }) }) }), _jsx("section", { className: "py-12 bg-white", children: _jsx("div", { className: "container-custom", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: [_jsxs("div", { className: "flex items-start p-6 transition-transform hover:translate-y-[-5px]", children: [_jsx("div", { className: "bg-blue-100 p-3 rounded-full mr-4", children: _jsx(Truck, { className: "text-blue-600", size: 24 }) }), _jsxs("div", { children: [_jsx("h3", { className: "font-semibold text-lg mb-2", children: "Free Shipping" }), _jsx("p", { className: "text-gray-600", children: "On all orders over $50" })] })] }), _jsxs("div", { className: "flex items-start p-6 transition-transform hover:translate-y-[-5px]", children: [_jsx("div", { className: "bg-orange-100 p-3 rounded-full mr-4", children: _jsx(ShieldCheck, { className: "text-orange-600", size: 24 }) }), _jsxs("div", { children: [_jsx("h3", { className: "font-semibold text-lg mb-2", children: "Secure Payment" }), _jsx("p", { className: "text-gray-600", children: "100% secure checkout" })] })] }), _jsxs("div", { className: "flex items-start p-6 transition-transform hover:translate-y-[-5px]", children: [_jsx("div", { className: "bg-green-100 p-3 rounded-full mr-4", children: _jsx(Clock, { className: "text-green-600", size: 24 }) }), _jsxs("div", { children: [_jsx("h3", { className: "font-semibold text-lg mb-2", children: "Fast Delivery" }), _jsx("p", { className: "text-gray-600", children: "Quick delivery options" })] })] }), _jsxs("div", { className: "flex items-start p-6 transition-transform hover:translate-y-[-5px]", children: [_jsx("div", { className: "bg-purple-100 p-3 rounded-full mr-4", children: _jsx(ShoppingBag, { className: "text-purple-600", size: 24 }) }), _jsxs("div", { children: [_jsx("h3", { className: "font-semibold text-lg mb-2", children: "Easy Returns" }), _jsx("p", { className: "text-gray-600", children: "30-day return policy" })] })] })] }) }) }), _jsx("section", { className: "py-16 bg-gray-50", children: _jsxs("div", { className: "container-custom", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl font-bold mb-4", children: "Featured Products" }), _jsx("p", { className: "text-gray-600 max-w-2xl mx-auto", children: "Discover our handpicked selection of premium products that exemplify quality, style, and innovation." })] }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: loading ? (Array(4).fill(0).map((_, index) => (_jsxs("div", { className: "card animate-pulse", children: [_jsx("div", { className: "aspect-square bg-gray-200" }), _jsxs("div", { className: "p-4", children: [_jsx("div", { className: "h-4 bg-gray-200 rounded w-1/4 mb-2" }), _jsx("div", { className: "h-5 bg-gray-200 rounded w-3/4 mb-3" }), _jsx("div", { className: "flex mb-3", children: [...Array(5)].map((_, i) => (_jsx("div", { className: "h-4 w-4 bg-gray-200 rounded-full mr-1" }, i))) }), _jsx("div", { className: "h-6 bg-gray-200 rounded w-1/3 mt-2" })] })] }, index)))) : ((featuredProducts.length > 0 ? featuredProducts : sampleProducts).map((product) => (_jsx(ProductCard, { product: product }, product._id)))) }), _jsx("div", { className: "text-center mt-10", children: _jsx(Link, { to: "/products", className: "btn btn-outline hover:bg-blue-50 px-8 py-3", children: "View All Products" }) })] }) }), _jsx("section", { className: "py-16 bg-white", children: _jsxs("div", { className: "container-custom", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl font-bold mb-4", children: "New Arrivals" }), _jsx("p", { className: "text-gray-600 max-w-2xl mx-auto", children: "Be the first to discover our latest additions - fresh styles and innovative products just added to our collection." })] }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: loading ? (Array(4).fill(0).map((_, index) => (_jsxs("div", { className: "card animate-pulse", children: [_jsx("div", { className: "aspect-square bg-gray-200" }), _jsxs("div", { className: "p-4", children: [_jsx("div", { className: "h-4 bg-gray-200 rounded w-1/4 mb-2" }), _jsx("div", { className: "h-5 bg-gray-200 rounded w-3/4 mb-3" }), _jsx("div", { className: "flex mb-3", children: [...Array(5)].map((_, i) => (_jsx("div", { className: "h-4 w-4 bg-gray-200 rounded-full mr-1" }, i))) }), _jsx("div", { className: "h-6 bg-gray-200 rounded w-1/3 mt-2" })] })] }, index)))) : ((newArrivals.length > 0 ? newArrivals : sampleNewArrivals).map((product) => (_jsx(ProductCard, { product: product }, product._id)))) })] }) }), _jsx("section", { className: "py-20 bg-blue-600 text-white", children: _jsxs("div", { className: "container-custom text-center", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-6", children: "Ready to Elevate Your Shopping Experience?" }), _jsx("p", { className: "text-xl opacity-90 mb-8 max-w-2xl mx-auto", children: "Join thousands of satisfied customers who have discovered the joy of shopping with us. Special offers await!" }), _jsx(Link, { to: "/products", className: "btn bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold", children: "Start Shopping" })] }) })] }));
};
export default HomePage;
