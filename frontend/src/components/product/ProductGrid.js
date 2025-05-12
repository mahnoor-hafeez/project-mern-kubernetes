import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ProductCard from './ProductCard';
const ProductGrid = ({ products, loading = false }) => {
    if (loading) {
        return (_jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6", children: [...Array(8)].map((_, index) => (_jsxs("div", { className: "card animate-pulse", children: [_jsx("div", { className: "aspect-square bg-gray-200" }), _jsxs("div", { className: "p-4", children: [_jsx("div", { className: "h-4 bg-gray-200 rounded w-1/4 mb-2" }), _jsx("div", { className: "h-5 bg-gray-200 rounded w-3/4 mb-3" }), _jsx("div", { className: "flex mb-3", children: [...Array(5)].map((_, i) => (_jsx("div", { className: "h-4 w-4 bg-gray-200 rounded-full mr-1" }, i))) }), _jsx("div", { className: "h-6 bg-gray-200 rounded w-1/3 mt-2" })] })] }, index))) }));
    }
    if (products.length === 0) {
        return (_jsxs("div", { className: "text-center py-12", children: [_jsx("h3", { className: "text-xl font-medium text-gray-700 mb-2", children: "No products found" }), _jsx("p", { className: "text-gray-500", children: "Try adjusting your search or filter to find what you're looking for." })] }));
    }
    return (_jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6", children: products.map((product) => (_jsx(ProductCard, { product: product }, product._id))) }));
};
export default ProductGrid;
