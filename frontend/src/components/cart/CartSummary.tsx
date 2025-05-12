import React from 'react';
import { useCart } from '../../context/CartContext';
import { ShoppingBag, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

const TAX_RATE = 0.08; // 8% tax rate
const SHIPPING_COST = 4.99; // Fixed shipping cost

interface CartSummaryProps {
  showCheckoutButton?: boolean;
}

const CartSummary: React.FC<CartSummaryProps> = ({ showCheckoutButton = true }) => {
  const { state } = useCart();
  
  const subtotal = state.totalPrice;
  const tax = subtotal * TAX_RATE;
  const shipping = state.items.length > 0 ? SHIPPING_COST : 0;
  const total = subtotal + tax + shipping;
  
  return (
    <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
      <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
      
      <div className="space-y-4 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">Tax (8%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">Shipping</span>
          <span>{shipping > 0 ? `$${shipping.toFixed(2)}` : 'Free'}</span>
        </div>
        
        <div className="border-t border-gray-200 pt-4 mt-4"></div>
        
        <div className="flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      
      {showCheckoutButton && (
        <>
          <Link
            to="/checkout"
            className={`btn w-full ${
              state.items.length > 0
                ? 'btn-primary'
                : 'bg-gray-400 text-white cursor-not-allowed'
            } mb-4 flex items-center justify-center`}
            aria-disabled={state.items.length === 0}
            onClick={(e) => {
              if (state.items.length === 0) {
                e.preventDefault();
              }
            }}
          >
            <CreditCard size={18} className="mr-2" />
            Proceed to Checkout
          </Link>
          
          <Link
            to="/products"
            className="btn btn-outline w-full flex items-center justify-center"
          >
            <ShoppingBag size={18} className="mr-2" />
            Continue Shopping
          </Link>
        </>
      )}
    </div>
  );
};

export default CartSummary;