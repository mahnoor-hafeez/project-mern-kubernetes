import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
const CategoryFilter = ({ categories, selectedCategory, onChange, }) => {
    const [isExpanded, setIsExpanded] = useState(true);
    return (_jsxs("div", { className: "border rounded-lg overflow-hidden mb-6", children: [_jsxs("div", { className: "flex items-center justify-between p-4 bg-gray-50 cursor-pointer", onClick: () => setIsExpanded(!isExpanded), children: [_jsx("h3", { className: "font-medium", children: "Categories" }), isExpanded ? _jsx(ChevronUp, { size: 18 }) : _jsx(ChevronDown, { size: 18 })] }), isExpanded && (_jsx("div", { className: "p-4", children: _jsxs("ul", { className: "space-y-2", children: [_jsx("li", { children: _jsx("button", { className: `w-full text-left py-1 px-2 rounded hover:bg-gray-100 ${selectedCategory === null ? 'bg-blue-50 text-blue-600 font-medium' : ''}`, onClick: () => onChange(null), children: "All Categories" }) }), categories.map((category) => (_jsx("li", { children: _jsxs("button", { className: `w-full text-left py-1 px-2 rounded flex items-center justify-between hover:bg-gray-100 ${selectedCategory === category.value ? 'bg-blue-50 text-blue-600 font-medium' : ''}`, onClick: () => onChange(category.value), children: [_jsx("span", { children: category.name }), _jsx("span", { className: "text-sm text-gray-500", children: category.count })] }) }, category.value)))] }) }))] }));
};
export default CategoryFilter;
