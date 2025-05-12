import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, ChevronRight, Star, Truck, RefreshCw, ShieldCheck } from 'lucide-react';
import { getProductById, getProducts } from '../services/api';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/product/ProductCard';
const ProductDetailPage = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const [product, setProduct] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [addedToCart, setAddedToCart] = useState(false);
    // Sample product and related products for development
    const sampleProduct = {
        _id: '1',
        name: 'Wireless Noise-Cancelling Headphones',
        description: 'Premium wireless headphones with active noise cancellation for immersive sound experience. Features up to 30 hours of battery life, comfortable over-ear design, and high-resolution audio for an exceptional listening experience.\n\nThe advanced noise-cancelling technology adapts to your environment, blocking out distractions while preserving the quality of your music. Intuitive touch controls allow for easy navigation of your playlist and calls.',
        price: 249.99,
        imageUrl: 'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        category: 'Electronics',
        inStock: true,
        rating: 4.8,
        numReviews: 127,
        createdAt: '2023-01-15T08:00:00Z',
    };
    const sampleRelatedProducts = [
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
        {
            _id: '14',
            name: 'True Wireless Earbuds',
            description: 'Premium wireless earbuds with superior sound quality and long battery life.',
            price: 129.99,
            imageUrl: 'https://images.pexels.com/photos/8000624/pexels-photo-8000624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            category: 'Electronics',
            inStock: true,
            rating: 4.6,
            numReviews: 48,
            createdAt: '2023-08-20T13:45:00Z',
        },
    ];
    // Additional product images (simulated)
    const productImages = [
        sampleProduct.imageUrl,
        'https://images.pexels.com/photos/3394665/pexels-photo-3394665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/1591/technology-music-sound-things.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/3761020/pexels-photo-3761020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ];
    // Fetch product and related products
    useEffect(() => {
        const fetchProductData = async () => {
            setLoading(true);
            try {
                if (id) {
                    const fetchedProduct = await getProductById(id);
                    setProduct(fetchedProduct || sampleProduct);
                    // Get related products (same category)
                    const allProducts = await getProducts();
                    const relatedProds = allProducts
                        .filter(p => p.category === fetchedProduct.category && p._id !== fetchedProduct._id)
                        .slice(0, 4);
                    setRelatedProducts(relatedProds.length > 0 ? relatedProds : sampleRelatedProducts);
                }
            }
            catch (error) {
                console.error('Error fetching product:', error);
                setProduct(sampleProduct);
                setRelatedProducts(sampleRelatedProducts);
            }
            finally {
                setLoading(false);
            }
        };
        fetchProductData();
    }, [id]);
    // Handle quantity change
    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value);
        if (value >= 1) {
            setQuantity(value);
        }
    };
    // Handle add to cart
    const handleAddToCart = () => {
        if (product) {
            addToCart({
                productId: product._id,
                name: product.name,
                price: product.price,
                imageUrl: product.imageUrl,
            });
            // Show success message
            setAddedToCart(true);
            setTimeout(() => setAddedToCart(false), 3000);
        }
    };
    if (loading) {
        return (_jsx("div", { className: "container-custom py-12", children: _jsxs("div", { className: "animate-pulse", children: [_jsx("div", { className: "h-6 bg-gray-200 w-1/3 mb-4" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [_jsx("div", { className: "aspect-square bg-gray-200 rounded-lg" }), _jsxs("div", { children: [_jsx("div", { className: "h-8 bg-gray-200 w-3/4 mb-4" }), _jsx("div", { className: "h-4 bg-gray-200 w-1/3 mb-6" }), _jsx("div", { className: "h-4 bg-gray-200 w-full mb-2" }), _jsx("div", { className: "h-4 bg-gray-200 w-full mb-2" }), _jsx("div", { className: "h-4 bg-gray-200 w-3/4 mb-8" }), _jsx("div", { className: "h-10 bg-gray-200 w-1/3 mb-4" }), _jsx("div", { className: "h-12 bg-gray-200 w-full mb-6" })] })] })] }) }));
    }
    if (!product) {
        return (_jsxs("div", { className: "container-custom py-12 text-center", children: [_jsx("h2", { className: "text-2xl font-semibold mb-4", children: "Product Not Found" }), _jsx("p", { className: "text-gray-600 mb-6", children: "The product you're looking for doesn't exist or has been removed." }), _jsx(Link, { to: "/products", className: "btn btn-primary", children: "Browse Products" })] }));
    }
    return (_jsxs("div", { className: "bg-white", children: [_jsx("div", { className: "bg-gray-50 py-4 border-b border-gray-100", children: _jsx("div", { className: "container-custom", children: _jsxs("nav", { className: "flex text-sm", children: [_jsx(Link, { to: "/", className: "text-gray-500 hover:text-blue-600 transition-colors", children: "Home" }), _jsx(ChevronRight, { className: "mx-2 text-gray-400", size: 16 }), _jsx(Link, { to: "/products", className: "text-gray-500 hover:text-blue-600 transition-colors", children: "Products" }), _jsx(ChevronRight, { className: "mx-2 text-gray-400", size: 16 }), _jsx(Link, { to: `/products/${product.category.toLowerCase()}`, className: "text-gray-500 hover:text-blue-600 transition-colors", children: product.category }), _jsx(ChevronRight, { className: "mx-2 text-gray-400", size: 16 }), _jsx("span", { className: "text-gray-900 font-medium", children: product.name })] }) }) }), _jsx("div", { className: "container-custom py-12", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-12", children: [_jsxs("div", { children: [_jsx("div", { className: "mb-4 aspect-square overflow-hidden rounded-lg bg-gray-100", children: _jsx("img", { src: productImages[activeImageIndex], alt: product.name, className: "w-full h-full object-contain" }) }), _jsx("div", { className: "grid grid-cols-4 gap-2", children: productImages.map((image, index) => (_jsx("button", { className: `aspect-square rounded overflow-hidden border-2 ${activeImageIndex === index ? 'border-blue-500' : 'border-transparent'}`, onClick: () => setActiveImageIndex(index), children: _jsx("img", { src: image, alt: `${product.name} - view ${index + 1}`, className: "w-full h-full object-cover" }) }, index))) })] }), _jsxs("div", { children: [_jsx("h1", { className: "text-3xl font-bold mb-2", children: product.name }), _jsxs("div", { className: "flex items-center mb-4", children: [_jsx("div", { className: "flex", children: [...Array(5)].map((_, i) => (_jsx(Star, { size: 18, className: i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300" }, i))) }), _jsxs("span", { className: "ml-2 text-sm text-gray-600", children: [product.rating.toFixed(1), " (", product.numReviews, " reviews)"] })] }), _jsx("div", { className: "mb-6", children: _jsxs("span", { className: "text-2xl font-bold text-gray-900", children: ["$", product.price.toFixed(2)] }) }), _jsx("div", { className: "mb-8", children: _jsx("p", { className: "text-gray-700 whitespace-pre-line", children: product.description }) }), _jsx("div", { className: "mb-6", children: _jsx("span", { className: `inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${product.inStock
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-red-100 text-red-800'}`, children: product.inStock ? 'In Stock' : 'Out of Stock' }) }), _jsxs("div", { className: "mb-6", children: [_jsx("label", { htmlFor: "quantity", className: "block text-sm font-medium text-gray-700 mb-2", children: "Quantity" }), _jsxs("div", { className: "flex items-center", children: [_jsx("button", { onClick: () => setQuantity(prev => (prev > 1 ? prev - 1 : 1)), className: "p-2 border border-gray-300 rounded-l-md bg-gray-50 hover:bg-gray-100", disabled: !product.inStock, children: "-" }), _jsx("input", { type: "number", id: "quantity", min: "1", value: quantity, onChange: handleQuantityChange, className: "border-y border-gray-300 p-2 w-16 text-center focus:outline-none disabled:bg-gray-100", disabled: !product.inStock }), _jsx("button", { onClick: () => setQuantity(prev => prev + 1), className: "p-2 border border-gray-300 rounded-r-md bg-gray-50 hover:bg-gray-100", disabled: !product.inStock, children: "+" })] })] }), _jsx("div", { className: "mb-8", children: _jsxs("button", { onClick: handleAddToCart, disabled: !product.inStock, className: `w-full py-3 rounded-md font-medium flex items-center justify-center ${product.inStock
                                            ? 'bg-blue-600 text-white hover:bg-blue-700'
                                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`, children: [_jsx(ShoppingCart, { className: "mr-2", size: 20 }), addedToCart ? 'Added to Cart!' : 'Add to Cart'] }) }), _jsx("div", { className: "border-t border-gray-200 pt-6", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [_jsxs("div", { className: "flex items-start", children: [_jsx(Truck, { className: "text-blue-600 mr-3 flex-shrink-0", size: 20 }), _jsxs("div", { children: [_jsx("h4", { className: "font-medium text-sm", children: "Free Shipping" }), _jsx("p", { className: "text-gray-500 text-xs", children: "On orders over $50" })] })] }), _jsxs("div", { className: "flex items-start", children: [_jsx(RefreshCw, { className: "text-blue-600 mr-3 flex-shrink-0", size: 20 }), _jsxs("div", { children: [_jsx("h4", { className: "font-medium text-sm", children: "Easy Returns" }), _jsx("p", { className: "text-gray-500 text-xs", children: "30-day money back" })] })] }), _jsxs("div", { className: "flex items-start", children: [_jsx(ShieldCheck, { className: "text-blue-600 mr-3 flex-shrink-0", size: 20 }), _jsxs("div", { children: [_jsx("h4", { className: "font-medium text-sm", children: "Secure Checkout" }), _jsx("p", { className: "text-gray-500 text-xs", children: "Protected payment" })] })] })] }) })] })] }) }), _jsx("section", { className: "bg-gray-50 py-16", children: _jsxs("div", { className: "container-custom", children: [_jsx("h2", { className: "text-2xl font-bold mb-8", children: "Related Products" }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6", children: relatedProducts.map(product => (_jsx(ProductCard, { product: product }, product._id))) })] }) })] }));
};
export default ProductDetailPage;
