import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
const NotFoundPage = () => {
    return (_jsx("div", { className: "bg-gray-50 min-h-[70vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "max-w-md w-full text-center", children: [_jsx("h1", { className: "text-9xl font-bold text-blue-600", children: "404" }), _jsx("h2", { className: "mt-6 text-3xl font-bold text-gray-900", children: "Page Not Found" }), _jsx("p", { className: "mt-2 text-gray-600", children: "The page you're looking for doesn't exist or has been moved." }), _jsx("div", { className: "mt-8", children: _jsx(Link, { to: "/", className: "btn btn-primary inline-flex items-center px-8 py-3", children: "Go to Homepage" }) })] }) }));
};
export default NotFoundPage;
