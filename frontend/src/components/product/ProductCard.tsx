import React from 'react';

import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Product } from '../../types';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [showAddedMessage, setShowAddedMessage] = useState(false);
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addToCart({
      productId: product._id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
    });
    
    // Show added to cart message
    setShowAddedMessage(true);
    setTimeout(() => setShowAddedMessage(false), 2000);
  };
  
  return (
    <Link
      to={`/product/${product._id}`}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card h-full flex flex-col">
        {/* Product Image */}
        <div className="relative overflow-hidden aspect-square">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Wishlist button */}
          <button
            className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm text-gray-700 hover:text-red-500 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              // Add wishlist functionality here
            }}
          >
            <Heart size={18} />
          </button>
          
          {/* Add to cart overlay */}
          <div 
            className={`absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : ''
            }`}
          >
            <button
              onClick={handleAddToCart}
              className="btn btn-primary flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
            >
              <ShoppingCart size={18} />
              <span>Add to Cart</span>
            </button>
          </div>
          
          {/* Added to cart message */}
          {showAddedMessage && (
            <div className="absolute bottom-0 left-0 right-0 bg-green-500 text-white text-center py-2 animate-fadeIn">
              Added to cart!
            </div>
          )}
        </div>
        
        {/* Product Info */}
        <div className="p-4 flex-grow flex flex-col">
          <span className="text-sm text-gray-500 uppercase">{product.category}</span>
          <h3 className="font-medium text-gray-900 mt-1 mb-2 line-clamp-2">{product.name}</h3>
          
          {/* Rating */}
          <div className="flex items-center mb-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < product.rating ? "text-yellow-400" : "text-gray-300"}>
                  ★
                </span>
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-2">({product.numReviews})</span>
          </div>
          
          {/* Price */}
          <div className="mt-auto">
            <span className="font-semibold text-lg">${product.price.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;