import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, Package, CreditCard } from 'lucide-react';
import { getOrderById } from '../services/api';
import { Order } from '../types';

const OrderConfirmationPage = () => {
  const { id } = useParams<{ id: string }>();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  
  // Sample order for development
  const sampleOrder: Order = {
    _id: id || '123456789',
    items: [
      {
        productId: '1',
        name: 'Wireless Noise-Cancelling Headphones',
        price: 249.99,
        imageUrl: 'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        quantity: 1,
      },
      {
        productId: '6',
        name: 'Wireless Charging Pad',
        price: 39.99,
        imageUrl: 'https://images.pexels.com/photos/4526407/pexels-photo-4526407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        quantity: 2,
      },
    ],
    shippingAddress: {
      fullName: 'John Doe',
      address: '123 Main Street',
      city: 'New York',
      postalCode: '10001',
      country: 'United States',
    },
    paymentMethod: 'Card',
    itemsPrice: 329.97,
    shippingPrice: 4.99,
    taxPrice: 26.40,
    totalPrice: 361.36,
    isPaid: true,
    paidAt: new Date().toISOString(),
    isDelivered: false,
    createdAt: new Date().toISOString(),
  };
  
  // Fetch order
  useEffect(() => {
    const fetchOrder = async () => {
      setLoading(true);
      try {
        if (id) {
          const fetchedOrder = await getOrderById(id);
          setOrder(fetchedOrder);
        }
      } catch (error) {
        console.error('Error fetching order:', error);
        setOrder(sampleOrder);
      } finally {
        setLoading(false);
      }
    };
    
    fetchOrder();
  }, [id]);
  
  if (loading) {
    return (
      <div className="container-custom py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 max-w-3xl mx-auto animate-pulse">
          <div className="h-8 bg-gray-200 w-2/3 mb-4"></div>
          <div className="h-4 bg-gray-200 w-full mb-8"></div>
          
          <div className="h-24 bg-gray-200 rounded-lg mb-8"></div>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div>
              <div className="h-5 bg-gray-200 w-1/3 mb-2"></div>
              <div className="h-4 bg-gray-200 w-full mb-1"></div>
              <div className="h-4 bg-gray-200 w-3/4"></div>
            </div>
            <div>
              <div className="h-5 bg-gray-200 w-1/3 mb-2"></div>
              <div className="h-4 bg-gray-200 w-full mb-1"></div>
              <div className="h-4 bg-gray-200 w-3/4"></div>
            </div>
          </div>
          
          <div className="h-12 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    );
  }
  
  if (!order) {
    return (
      <div className="container-custom py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Order Not Found</h2>
        <p className="text-gray-600 mb-6">
          The order you're looking for doesn't exist or has been removed.
        </p>
        <Link to="/products" className="btn btn-primary">
          Continue Shopping
        </Link>
      </div>
    );
  }
  
  return (
    <div className="bg-gray-50 py-12">
      <div className="container-custom">
        <div className="bg-white rounded-lg shadow-sm p-8 max-w-3xl mx-auto">
          {/* Success Message */}
          <div className="text-center mb-8 animate-fadeIn">
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
            <p className="text-gray-600 text-lg">
              Thank you for your purchase. Your order has been received.
            </p>
          </div>
          
          {/* Order ID */}
          <div className="bg-gray-50 rounded-lg p-4 mb-8 text-center">
            <p className="text-gray-600">Order ID</p>
            <p className="font-semibold text-lg">{order._id}</p>
          </div>
          
          {/* Order Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Shipping Information */}
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <Package className="text-blue-600" size={20} />
                <h3 className="font-semibold text-lg">Shipping Information</h3>
              </div>
              <div className="text-gray-700">
                <p className="font-medium">{order.shippingAddress.fullName}</p>
                <p>{order.shippingAddress.address}</p>
                <p>
                  {order.shippingAddress.city}, {order.shippingAddress.postalCode}
                </p>
                <p>{order.shippingAddress.country}</p>
              </div>
            </div>
            
            {/* Payment Information */}
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <CreditCard className="text-blue-600" size={20} />
                <h3 className="font-semibold text-lg">Payment Information</h3>
              </div>
              <div className="text-gray-700">
                <p>
                  <span className="font-medium">Method:</span> {order.paymentMethod}
                </p>
                <p>
                  <span className="font-medium">Status:</span>{' '}
                  <span className="text-green-600 font-medium">Paid</span>
                </p>
                <p>
                  <span className="font-medium">Date:</span>{' '}
                  {new Date(order.paidAt || order.createdAt).toLocaleDateString()}
                </p>
                <p>
                  <span className="font-medium">Amount:</span> ${order.totalPrice.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
          
          {/* Order Items */}
          <div className="mb-8">
            <h3 className="font-semibold text-lg mb-4">Order Items</h3>
            
            <div className="border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Product
                    </th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Quantity
                    </th>
                    <th className="py-3 px-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {order.items.map((item) => (
                    <tr key={item.productId}>
                      <td className="py-4 px-4">
                        <div className="flex items-center">
                          <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="h-16 w-16 object-cover rounded mr-4"
                          />
                          <div>
                            <Link
                              to={`/product/${item.productId}`}
                              className="font-medium text-gray-900 hover:text-blue-600 transition-colors"
                            >
                              {item.name}
                            </Link>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-gray-700">{item.quantity}</span>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <span className="font-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-gray-50">
                  <tr>
                    <td colSpan={2} className="py-3 px-4 text-right font-medium">
                      Subtotal
                    </td>
                    <td className="py-3 px-4 text-right font-medium">
                      ${order.itemsPrice.toFixed(2)}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2} className="py-3 px-4 text-right font-medium">
                      Shipping
                    </td>
                    <td className="py-3 px-4 text-right font-medium">
                      ${order.shippingPrice.toFixed(2)}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2} className="py-3 px-4 text-right font-medium">
                      Tax
                    </td>
                    <td className="py-3 px-4 text-right font-medium">
                      ${order.taxPrice.toFixed(2)}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2} className="py-3 px-4 text-right text-lg font-semibold">
                      Total
                    </td>
                    <td className="py-3 px-4 text-right text-lg font-semibold">
                      ${order.totalPrice.toFixed(2)}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
          
          {/* Continue Shopping */}
          <div className="text-center">
            <Link
              to="/products"
              className="btn btn-primary inline-block px-8 py-3"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;