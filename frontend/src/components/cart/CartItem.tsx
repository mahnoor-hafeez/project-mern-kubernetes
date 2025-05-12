import React from 'react';
import { Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { CartItem as CartItemType } from '../../types';
import { Link } from 'react-router-dom';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      updateQuantity(item.productId, newQuantity);
    }
  };
  
  const handleRemove = () => {
    removeFromCart(item.productId);
  };
  
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center py-6 border-b border-gray-200 animate-fadeIn">
      {/* Product Image */}
      <div className="w-full sm:w-20 h-20 mr-0 sm:mr-6 mb-4 sm:mb-0 flex-shrink-0">
        <Link to={`/product/${item.productId}`}>
          <img 
            src={item.imageUrl} 
            alt={item.name} 
            className="w-full h-full object-cover rounded"
          />
        </Link>
      </div>
      
      {/* Product Details */}
      <div className="flex-grow mr-0 sm:mr-6 mb-4 sm:mb-0">
        <Link to={`/product/${item.productId}`} className="text-lg font-medium hover:text-blue-600 transition-colors">
          {item.name}
        </Link>
        <p className="text-sm text-gray-500 mt-1">
          ${item.price.toFixed(2)} per item
        </p>
      </div>
      
      {/* Quantity Controls */}
      <div className="flex items-center border border-gray-300 rounded-md mb-4 sm:mb-0 mr-0 sm:mr-6">
        <button 
          onClick={() => handleQuantityChange(item.quantity - 1)}
          className="p-2 hover:bg-gray-100 text-gray-600 transition-colors"
          disabled={item.quantity <= 1}
        >
          <Minus size={16} />
        </button>
        <span className="px-3 py-1 border-x border-gray-300 min-w-[40px] text-center">
          {item.quantity}
        </span>
        <button 
          onClick={() => handleQuantityChange(item.quantity + 1)}
          className="p-2 hover:bg-gray-100 text-gray-600 transition-colors"
        >
          <Plus size={16} />
        </button>
      </div>
      
      {/* Price and Remove */}
      <div className="flex items-center justify-between w-full sm:w-auto">
        <span className="font-semibold text-lg">
          ${(item.price * item.quantity).toFixed(2)}
        </span>
        <button 
          onClick={handleRemove}
          className="ml-6 text-gray-500 hover:text-red-500 transition-colors"
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;