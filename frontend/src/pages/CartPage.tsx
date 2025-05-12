import React from 'react';

import { useCart } from '../context/CartContext';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

const CartPage = () => {
  const { state } = useCart();
  
  return (
    <div className="bg-gray-50 py-12">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
        
        {state.items.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-50 p-4 rounded-full">
                <ShoppingBag className="h-12 w-12 text-blue-500" />
              </div>
            </div>
            <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Link
              to="/products"
              className="btn btn-primary inline-block px-8 py-3"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-6">
                  Items ({state.totalItems})
                </h2>
                
                <div className="divide-y divide-gray-200">
                  {state.items.map((item) => (
                    <CartItem key={item.productId} item={item} />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Cart Summary */}
            <div className="lg:col-span-1">
              <CartSummary />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;