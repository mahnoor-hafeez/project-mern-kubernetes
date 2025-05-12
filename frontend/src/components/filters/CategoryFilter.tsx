import React from 'react';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Category {
  name: string;
  value: string;
  count: number;
}

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string | null;
  onChange: (category: string | null) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onChange,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="border rounded-lg overflow-hidden mb-6">
      <div 
        className="flex items-center justify-between p-4 bg-gray-50 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="font-medium">Categories</h3>
        {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </div>

      {isExpanded && (
        <div className="p-4">
          <ul className="space-y-2">
            <li>
              <button
                className={`w-full text-left py-1 px-2 rounded hover:bg-gray-100 ${
                  selectedCategory === null ? 'bg-blue-50 text-blue-600 font-medium' : ''
                }`}
                onClick={() => onChange(null)}
              >
                All Categories
              </button>
            </li>
            {categories.map((category) => (
              <li key={category.value}>
                <button
                  className={`w-full text-left py-1 px-2 rounded flex items-center justify-between hover:bg-gray-100 ${
                    selectedCategory === category.value ? 'bg-blue-50 text-blue-600 font-medium' : ''
                  }`}
                  onClick={() => onChange(category.value)}
                >
                  <span>{category.name}</span>
                  <span className="text-sm text-gray-500">{category.count}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CategoryFilter;