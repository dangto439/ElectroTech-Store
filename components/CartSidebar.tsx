import React from 'react';
import { useCart } from '../context/CartContext';
import { Button } from './Button';
import { X, Trash2, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CartSidebar: React.FC = () => {
  const { isCartOpen, toggleCart, cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity" 
        onClick={toggleCart}
      />

      {/* Sidebar */}
      <div className="absolute inset-y-0 right-0 max-w-md w-full flex">
        <div className="h-full w-full flex flex-col bg-white shadow-xl transform transition-transform">
          
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-6 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Shopping Cart</h2>
            <button onClick={toggleCart} className="text-gray-400 hover:text-gray-500">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
            {cart.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-gray-500">Your cart is empty.</p>
                <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={toggleCart}
                >
                    Continue Shopping
                </Button>
              </div>
            ) : (
              <ul className="space-y-6">
                {cart.map((item) => (
                  <li key={item.id} className="flex py-2">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <Link to={`/product/${item.id}`} onClick={toggleCart}>
                                {item.name}
                            </Link>
                          </h3>
                          <p className="ml-4">${item.price * item.quantity}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="flex items-center border border-gray-300 rounded-md">
                          <button 
                            className="p-1 hover:bg-gray-100"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-2 font-medium">{item.quantity}</span>
                          <button 
                            className="p-1 hover:bg-gray-100"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="font-medium text-red-600 hover:text-red-500 flex items-center"
                        >
                          <Trash2 className="w-4 h-4 mr-1" />
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                <p>Subtotal</p>
                <p>${cartTotal.toFixed(2)}</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500 mb-6">
                Shipping and taxes calculated at checkout.
              </p>
              <Button className="w-full" size="lg" onClick={() => {
                  toggleCart();
                  alert("Proceeding to checkout (Mock)");
              }}>
                Checkout
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};