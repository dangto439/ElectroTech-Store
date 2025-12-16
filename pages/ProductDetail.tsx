import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ProductService } from '../services/api';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { Button } from '../components/Button';
import { Star, ArrowLeft, Truck, ShieldCheck, RefreshCw, ShoppingCart } from 'lucide-react';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        setLoading(true);
        try {
          const data = await ProductService.getProductById(Number(id));
          setProduct(data);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center">Product not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/shop" className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Shop
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Image Section */}
            <div className="p-8 bg-gray-100 flex items-center justify-center relative">
               <img 
                 src={product.image} 
                 alt={product.name} 
                 className="max-w-full max-h-[500px] object-contain drop-shadow-xl" 
               />
            </div>

            {/* Info Section */}
            <div className="p-8 md:p-12">
              <span className="text-blue-600 font-medium text-sm tracking-wide uppercase">{product.category}</span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">{product.name}</h1>
              
              <div className="flex items-center mb-6">
                <div className="flex items-center text-yellow-400">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current opacity-50" />
                </div>
                <span className="ml-2 text-gray-500 text-sm">({product.reviews} reviews)</span>
              </div>

              <div className="text-4xl font-bold text-gray-900 mb-6">
                ${product.price}
                {product.originalPrice && (
                  <span className="ml-3 text-2xl text-gray-400 line-through font-normal">${product.originalPrice}</span>
                )}
              </div>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {product.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button size="lg" onClick={() => addToCart(product)} className="flex-1 flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg" className="flex-1">
                  Buy Now
                </Button>
              </div>

              {/* Specs */}
              <div className="border-t border-gray-100 pt-8">
                <h3 className="font-bold text-gray-900 mb-4">Technical Specifications</h3>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 px-4 py-2 rounded-lg">
                      <dt className="text-xs text-gray-500 uppercase font-semibold">{key}</dt>
                      <dd className="text-sm font-medium text-gray-900">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-100">
                <div className="flex flex-col items-center text-center">
                  <Truck className="w-6 h-6 text-gray-400 mb-2" />
                  <span className="text-xs text-gray-500">Free Shipping</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <ShieldCheck className="w-6 h-6 text-gray-400 mb-2" />
                  <span className="text-xs text-gray-500">2 Year Warranty</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <RefreshCw className="w-6 h-6 text-gray-400 mb-2" />
                  <span className="text-xs text-gray-500">30 Day Returns</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};