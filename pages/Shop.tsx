import React, { useEffect, useState } from 'react';
import { ProductService } from '../services/api';
import { Product, Category } from '../types';
import { ProductCard } from '../components/ProductCard';
import { CATEGORIES } from '../constants';
import { Filter } from 'lucide-react';

export const Shop: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<Category | string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const data = await ProductService.getProductsByCategory(selectedCategory);
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [selectedCategory]);

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Shop Electronics</h1>
            <p className="text-gray-500 mt-1">Find the best gear for your needs.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
             {/* Search */}
             <div className="relative">
               <input 
                 type="text" 
                 placeholder="Search products..." 
                 className="w-full sm:w-64 pl-4 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
               />
             </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filter */}
          <aside className="w-full lg:w-64 flex-shrink-0">
             <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 sticky top-24">
               <div className="flex items-center gap-2 mb-4">
                 <Filter className="w-5 h-5 text-gray-500" />
                 <h3 className="font-semibold text-gray-900">Categories</h3>
               </div>
               <div className="space-y-2">
                 {CATEGORIES.map((cat) => (
                   <button
                     key={cat}
                     onClick={() => setSelectedCategory(cat)}
                     className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                       selectedCategory === cat 
                        ? 'bg-blue-50 text-blue-600 font-medium' 
                        : 'text-gray-600 hover:bg-gray-50'
                     }`}
                   >
                     {cat}
                   </button>
                 ))}
               </div>
             </div>
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
             {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1,2,3,4,5,6].map(i => (
                    <div key={i} className="bg-white rounded-xl h-96 shadow-sm p-4 animate-pulse">
                      <div className="w-full h-48 bg-gray-200 rounded mb-4"></div>
                      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  ))}
                </div>
             ) : (
                <>
                  {filteredProducts.length === 0 ? (
                    <div className="text-center py-20">
                      <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
                      <button 
                        onClick={() => {setSelectedCategory('All'); setSearchQuery('');}}
                        className="mt-4 text-blue-600 hover:underline"
                      >
                        Reset Filters
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  )}
                </>
             )}
          </main>
        </div>
      </div>
    </div>
  );
};