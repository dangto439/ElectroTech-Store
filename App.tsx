import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { CartSidebar } from './components/CartSidebar';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetail } from './pages/ProductDetail';

const Footer: React.FC = () => (
  <footer className="bg-slate-900 text-gray-300 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h3 className="text-white text-lg font-bold mb-4">ElectroTech</h3>
        <p className="text-sm">Premium electronics store providing the latest gadgets and accessories for tech enthusiasts.</p>
      </div>
      <div>
        <h4 className="text-white font-medium mb-4">Shop</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:text-blue-400">Laptops</a></li>
          <li><a href="#" className="hover:text-blue-400">Smartphones</a></li>
          <li><a href="#" className="hover:text-blue-400">Cameras</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-medium mb-4">Support</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:text-blue-400">Help Center</a></li>
          <li><a href="#" className="hover:text-blue-400">Returns</a></li>
          <li><a href="#" className="hover:text-blue-400">Warranty</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-medium mb-4">Newsletter</h4>
        <div className="flex">
          <input type="email" placeholder="Enter your email" className="px-3 py-2 bg-gray-800 rounded-l-md focus:outline-none w-full" />
          <button className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700">Subscribe</button>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-gray-800 text-center text-sm">
      &copy; 2024 ElectroTech Store. All rights reserved.
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col font-sans">
          <Navbar />
          <CartSidebar />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              {/* Fallback route */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;