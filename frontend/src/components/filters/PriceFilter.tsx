import React from 'react';

import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface PriceFilterProps {
  minPrice: number;
  maxPrice: number;
  onPriceChange: (min: number, max: number) => void;
}

const PriceFilter: React.FC<PriceFilterProps> = ({
  minPrice,
  maxPrice,
  onPriceChange,
}) => {
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

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setMin(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  return (
    <div className="border rounded-lg overflow-hidden mb-6">
      <div 
        className="flex items-center justify-between p-4 bg-gray-50 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="font-medium">Price Range</h3>
        {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </div>

      {isExpanded && (
        <div className="p-4">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="min-price" className="block text-sm font-medium text-gray-700 mb-1">
                Min ($)
              </label>
              <input
                type="number"
                id="min-price"
                className="input"
                min={rangeMin}
                max={max}
                value={min}
                onChange={handleMinChange}
              />
            </div>
            <div>
              <label htmlFor="max-price" className="block text-sm font-medium text-gray-700 mb-1">
                Max ($)
              </label>
              <input
                type="number"
                id="max-price"
                className="input"
                min={min}
                max={rangeMax}
                value={max}
                onChange={handleMaxChange}
              />
            </div>
          </div>

          <div className="mt-2 px-2">
            <input
              type="range"
              min={rangeMin}
              max={rangeMax}
              value={min}
              onChange={handleMinChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <input
              type="range"
              min={rangeMin}
              max={rangeMax}
              value={max}
              onChange={handleMaxChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2"
            />
          </div>

          <div className="flex items-center justify-between mt-4">
            <button
              onClick={handleReset}
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Reset
            </button>
            <button
              onClick={handleApply}
              className="btn btn-primary py-1.5 px-4 text-sm"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceFilter;