import React, { useEffect, useState } from 'react';
import { ProductService } from '../services/api';
import { Product } from '../types';
import { ProductCard } from '../components/ProductCard';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, Clock } from 'lucide-react';

export const Home: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await ProductService.getAllProducts();
        // Just take the first 4 as "Featured"
        setFeaturedProducts(products.slice(0, 4));
      } catch (error) {
        console.error("Error fetching products", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Next Gen Tech <br />
              <span className="text-blue-500">For Your Life</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Discover the latest gadgets, high-performance laptops, and crystal-clear audio gear. Upgrade your workflow today.
            </p>
            <div className="flex space-x-4">
              <Link to="/shop">
                <Button size="lg" className="rounded-full">
                  Shop Now
                </Button>
              </Link>
              <Link to="/shop?category=Deals">
                <Button variant="outline" size="lg" className="rounded-full text-white border-white hover:bg-white hover:text-slate-900">
                  View Deals
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center p-4">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Free Fast Shipping</h3>
              <p className="text-gray-600">On all orders over $50</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">2 Year Warranty</h3>
              <p className="text-gray-600">On all electronics</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Expert help whenever you need it</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Trending Now</h2>
            <p className="text-gray-500 mt-1">Top rated products chosen by our experts</p>
          </div>
          <Link to="/shop" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
            View All <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        {loading ? (
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {[1,2,3,4].map(i => (
               <div key={i} className="bg-gray-200 rounded-xl h-80 animate-pulse"></div>
             ))}
           </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
      
      {/* Promo Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
           <div className="mb-8 md:mb-0 md:w-1/2">
             <span className="text-accent font-bold uppercase tracking-wider text-sm">Limited Time Offer</span>
             <h2 className="text-4xl font-bold mt-2 mb-4">Up to 30% Off Audio Gear</h2>
             <p className="text-gray-400 mb-6 max-w-md">Upgrade your listening experience with our premium selection of headphones and speakers.</p>
             <Link to="/shop?category=Audio">
                <Button>Shop Audio Sale</Button>
             </Link>
           </div>
           <div className="md:w-1/2 flex justify-center">
             <div className="w-full max-w-sm bg-gray-800 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
               <img src="https://picsum.photos/seed/audio1/600/600" alt="Headphones" className="w-full rounded-lg shadow-2xl" />
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};