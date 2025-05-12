import React from 'react';
import { useState, useEffect } from 'react';
import { ShoppingBag, Truck, ShieldCheck, Clock } from 'lucide-react';
import { getProducts } from '../services/api';
import { Product } from '../types';
import ProductCard from '../components/product/ProductCard';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [newArrivals, setNewArrivals] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts();
        
        // Simulate featured products and new arrivals
        setFeaturedProducts(products.slice(0, 4));
        setNewArrivals(products.slice(4, 8));
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, []);
  
  // Sample featured products for development
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
  ];
  
  const sampleNewArrivals: Product[] = [
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
  
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container-custom py-20 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 animate-fadeIn">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Shop the Latest Trends
              </h1>
              <p className="text-xl opacity-90 mb-8 max-w-xl">
                Discover premium products with fast shipping and exceptional quality. Your one-stop destination for all your shopping needs.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/products" className="btn bg-white text-blue-600 hover:bg-blue-50 focus:ring-white px-8 py-3 text-lg font-semibold">
                  Shop Now
                </Link>
                <Link to="/products/electronics" className="btn border-2 border-white/60 bg-transparent hover:bg-white/10 focus:ring-white px-8 py-3 text-lg font-semibold">
                  Browse Electronics
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2 animate-fadeIn">
              <img 
                src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Shopping Experience" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-start p-6 transition-transform hover:translate-y-[-5px]">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Truck className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Free Shipping</h3>
                <p className="text-gray-600">On all orders over $50</p>
              </div>
            </div>
            
            <div className="flex items-start p-6 transition-transform hover:translate-y-[-5px]">
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <ShieldCheck className="text-orange-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Secure Payment</h3>
                <p className="text-gray-600">100% secure checkout</p>
              </div>
            </div>
            
            <div className="flex items-start p-6 transition-transform hover:translate-y-[-5px]">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <Clock className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
                <p className="text-gray-600">Quick delivery options</p>
              </div>
            </div>
            
            <div className="flex items-start p-6 transition-transform hover:translate-y-[-5px]">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <ShoppingBag className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Easy Returns</h3>
                <p className="text-gray-600">30-day return policy</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of premium products that exemplify quality, style, and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {loading ? (
              Array(4).fill(0).map((_, index) => (
                <div key={index} className="card animate-pulse">
                  <div className="aspect-square bg-gray-200"></div>
                  <div className="p-4">
                    <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                    <div className="h-5 bg-gray-200 rounded w-3/4 mb-3"></div>
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="h-4 w-4 bg-gray-200 rounded-full mr-1"></div>
                      ))}
                    </div>
                    <div className="h-6 bg-gray-200 rounded w-1/3 mt-2"></div>
                  </div>
                </div>
              ))
            ) : (
              (featuredProducts.length > 0 ? featuredProducts : sampleProducts).map((product) => (
                <ProductCard key={product._id} product={product} />
              ))
            )}
          </div>
          
          <div className="text-center mt-10">
            <Link 
              to="/products" 
              className="btn btn-outline hover:bg-blue-50 px-8 py-3"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
      
      {/* New Arrivals */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">New Arrivals</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Be the first to discover our latest additions - fresh styles and innovative products just added to our collection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {loading ? (
              Array(4).fill(0).map((_, index) => (
                <div key={index} className="card animate-pulse">
                  <div className="aspect-square bg-gray-200"></div>
                  <div className="p-4">
                    <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                    <div className="h-5 bg-gray-200 rounded w-3/4 mb-3"></div>
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="h-4 w-4 bg-gray-200 rounded-full mr-1"></div>
                      ))}
                    </div>
                    <div className="h-6 bg-gray-200 rounded w-1/3 mt-2"></div>
                  </div>
                </div>
              ))
            ) : (
              (newArrivals.length > 0 ? newArrivals : sampleNewArrivals).map((product) => (
                <ProductCard key={product._id} product={product} />
              ))
            )}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Shopping Experience?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have discovered the joy of shopping with us. Special offers await!
          </p>
          <Link
            to="/products"
            className="btn bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold"
          >
            Start Shopping
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;