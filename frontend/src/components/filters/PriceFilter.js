import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
const PriceFilter = ({ minPrice, maxPrice, onPriceChange, }) => {
    const [isExpanded, setIsExpanded] = useState(true);
    const [min, setMin] = useState(minPrice);
    const [max, setMax] = useState(maxPrice);
    const [rangeMin, setRangeMin] = useState(0);
    const [rangeMax, setRangeMax] = useState(1000);
    // Initialize range values
    useEffect(() => {
        setRangeMin(minPrice);
        setRangeMax(maxPrice);
    }, [minPrice, maxPrice]);
    const handleMinChange = (e) => {
        const value = parseInt(e.target.value);
        setMin(value);
    };
    const handleMaxChange = (e) => {
        const value = parseInt(e.target.value);
        setMax(value);
    };
    const handleApply = () => {
        onPriceChange(min, max);
    };
    const handleReset = () => {
        setMin(rangeMin);
        setMax(rangeMax);
        onPriceChange(rangeMin, rangeMax);
    };
    return (_jsxs("div", { className: "border rounded-lg overflow-hidden mb-6", children: [_jsxs("div", { className: "flex items-center justify-between p-4 bg-gray-50 cursor-pointer", onClick: () => setIsExpanded(!isExpanded), children: [_jsx("h3", { className: "font-medium", children: "Price Range" }), isExpanded ? _jsx(ChevronUp, { size: 18 }) : _jsx(ChevronDown, { size: 18 })] }), isExpanded && (_jsxs("div", { className: "p-4", children: [_jsxs("div", { className: "grid grid-cols-2 gap-4 mb-4", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "min-price", className: "block text-sm font-medium text-gray-700 mb-1", children: "Min ($)" }), _jsx("input", { type: "number", id: "min-price", className: "input", min: rangeMin, max: max, value: min, onChange: handleMinChange })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "max-price", className: "block text-sm font-medium text-gray-700 mb-1", children: "Max ($)" }), _jsx("input", { type: "number", id: "max-price", className: "input", min: min, max: rangeMax, value: max, onChange: handleMaxChange })] })] }), _jsxs("div", { className: "mt-2 px-2", children: [_jsx("input", { type: "range", min: rangeMin, max: rangeMax, value: min, onChange: handleMinChange, className: "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" }), _jsx("input", { type: "range", min: rangeMin, max: rangeMax, value: max, onChange: handleMaxChange, className: "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2" })] }), _jsxs("div", { className: "flex items-center justify-between mt-4", children: [_jsx("button", { onClick: handleReset, className: "text-sm text-gray-600 hover:text-gray-900", children: "Reset" }), _jsx("button", { onClick: handleApply, className: "btn btn-primary py-1.5 px-4 text-sm", children: "Apply" })] })] }))] }));
};
export default PriceFilter;
