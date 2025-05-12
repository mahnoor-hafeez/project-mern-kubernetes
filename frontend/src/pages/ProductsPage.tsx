import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { getProducts, getProductsByCategory, searchProducts } from '../services/api';
import { Product } from '../types';
import ProductGrid from '../components/product/ProductGrid';
import CategoryFilter from '../components/filters/CategoryFilter';
import PriceFilter from '../components/filters/PriceFilter';

const ProductsPage = () => {
  const location = useLocation();
  const { category } = useParams<{ category?: string }>();
  
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter states
  const [selectedCategory, setSelectedCategory] = useState<string | null>(category || null);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [sortOption, setSortOption] = useState('featured');
  
  // Get search query from URL
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('search');
  
  // Sample categories for development
  const categories = [
    { name: 'Electronics', value: 'electronics', count: 12 },
    { name: 'Clothing', value: 'clothing', count: 8 },
    { name: 'Accessories', value: 'accessories', count: 15 },
    { name: 'Home', value: 'home', count: 10 },
    { name: 'Beauty', value: 'beauty', count: 6 },
  ];
  
  // Sample products for development
  const sampleProducts: Product[] = [
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
    {
      _id: '9',
      name: 'Designer Coffee Mug',
      description: 'Stylish and functional ceramic coffee mug with minimalist design.',
      price: 24.99,
      imageUrl: 'https://images.pexels.com/photos/1793035/pexels-photo-1793035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Home',
      inStock: true,
      rating: 4.5,
      numReviews: 42,
      createdAt: '2023-07-05T10:25:00Z',
    },
    {
      _id: '10',
      name: 'Luxury Scented Candle',
      description: 'Hand-poured scented candle with natural ingredients and long burn time.',
      price: 34.99,
      imageUrl: 'https://images.pexels.com/photos/5644488/pexels-photo-5644488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Home',
      inStock: true,
      rating: 4.8,
      numReviews: 29,
      createdAt: '2023-07-12T15:40:00Z',
    },
    {
      _id: '11',
      name: 'Organic Face Serum',
      description: 'Nourishing organic face serum with vitamin C for radiant skin.',
      price: 49.99,
      imageUrl: 'https://images.pexels.com/photos/6624862/pexels-photo-6624862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Beauty',
      inStock: true,
      rating: 4.9,
      numReviews: 37,
      createdAt: '2023-07-20T09:15:00Z',
    },
    {
      _id: '12',
      name: 'Premium Denim Jeans',
      description: 'Classic denim jeans with a perfect fit and premium quality.',
      price: 79.99,
      imageUrl: 'https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Clothing',
      inStock: true,
      rating: 4.6,
      numReviews: 51,
      createdAt: '2023-07-25T14:20:00Z',
    },
  ];
  
  // Fetch products based on category or search query
  useEffect(() => {
    const fetchProductData = async () => {
      setLoading(true);
      try {
        let fetchedProducts: Product[] = [];
        
        if (searchQuery) {
          fetchedProducts = await searchProducts(searchQuery);
        } else if (category) {
          fetchedProducts = await getProductsByCategory(category);
        } else {
          fetchedProducts = await getProducts();
        }
        
        setProducts(fetchedProducts.length > 0 ? fetchedProducts : sampleProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts(sampleProducts);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProductData();
  }, [category, searchQuery]);
  
  // Apply filters and sorting
  useEffect(() => {
    let result = [...products];
    
    // Apply category filter
    if (selectedCategory) {
      result = result.filter(
        (product) => product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }
    
    // Apply price filter
    result = result.filter(
      (product) => product.price >= priceRange.min && product.price <= priceRange.max
    );
    
    // Apply sorting
    switch (sortOption) {
      case 'price-low-high':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // featured - no specific sorting
        break;
    }
    
    setFilteredProducts(result);
  }, [products, selectedCategory, priceRange, sortOption]);
  
  // Handle category change
  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
  };
  
  // Handle price range change
  const handlePriceChange = (min: number, max: number) => {
    setPriceRange({ min, max });
  };
  
  // Handle sort change
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };
  
  // Toggle mobile filters
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };
  
  return (
    <div className="container-custom py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          {searchQuery
            ? `Search results for "${searchQuery}"`
            : category
            ? `${category.charAt(0).toUpperCase() + category.slice(1)}`
            : 'All Products'}
        </h1>
        <p className="text-gray-600">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
        </p>
      </div>
      
      {/* Mobile filter toggle */}
      <div className="lg:hidden mb-4">
        <button
          onClick={toggleFilters}
          className="w-full flex items-center justify-center space-x-2 btn btn-outline py-3"
        >
          <SlidersHorizontal size={20} />
          <span>{showFilters ? 'Hide Filters' : 'Show Filters'}</span>
        </button>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters - Desktop (always visible) & Mobile (toggleable) */}
        <aside 
          className={`lg:w-1/4 ${
            showFilters ? 'block' : 'hidden lg:block'
          } lg:sticky lg:top-24 lg:h-fit`}
        >
          {/* Mobile filter header */}
          <div className="flex items-center justify-between mb-4 lg:hidden">
            <h2 className="text-xl font-semibold">Filters</h2>
            <button onClick={toggleFilters} className="text-gray-500">
              <X size={24} />
            </button>
          </div>
          
          {/* Category filter */}
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onChange={handleCategoryChange}
          />
          
          {/* Price filter */}
          <PriceFilter
            minPrice={0}
            maxPrice={1000}
            onPriceChange={handlePriceChange}
          />
        </aside>
        
        {/* Products */}
        <div className="flex-1">
          {/* Sort options */}
          <div className="mb-6 flex justify-end">
            <div className="flex items-center">
              <label htmlFor="sort" className="text-sm font-medium text-gray-700 mr-2">
                Sort by:
              </label>
              <select
                id="sort"
                className="input py-2 min-w-[180px]"
                value={sortOption}
                onChange={handleSortChange}
              >
                <option value="featured">Featured</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="newest">Newest Arrivals</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
          
          {/* Product grid */}
          <ProductGrid products={filteredProducts} loading={loading} />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;