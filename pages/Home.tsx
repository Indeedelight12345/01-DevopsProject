
import React, { useState } from 'react';
import { Search, Bell, SlidersHorizontal } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../constants';
import { Category } from '../types';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = PRODUCTS.filter(p => 
    (activeCategory === 'All' || p.category === activeCategory) &&
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="px-6 pt-6 pb-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-sm font-medium text-slate-400">Welcome back,</h2>
          <h1 className="text-2xl font-black text-slate-900">Alex 👋</h1>
        </div>
        <button className="p-3 bg-white rounded-2xl border border-gray-100 shadow-sm relative">
          <Bell size={20} className="text-slate-700" />
          <span className="absolute top-3 right-3 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
        </button>
      </div>

      {/* Search Bar */}
      <div className="flex gap-3 mb-8">
        <div className="flex-grow relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search unique items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-gray-100 rounded-2xl py-4 pl-12 pr-4 text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all shadow-sm"
          />
        </div>
        <button className="p-4 bg-slate-900 rounded-2xl text-white shadow-lg">
          <SlidersHorizontal size={20} />
        </button>
      </div>

      {/* Featured Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-lg text-slate-900">Weekly Highlights</h3>
          <button className="text-xs font-bold text-indigo-600">See All</button>
        </div>
        <div className="flex gap-4 overflow-x-auto no-scrollbar py-2 -mx-2 px-2">
          {PRODUCTS.filter(p => p.featured).map(product => (
            <div key={product.id} className="min-w-[280px]">
              <div className="relative h-44 rounded-[32px] overflow-hidden group">
                <img src={product.image} className="w-full h-full object-cover" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex flex-col justify-end p-6">
                  <h4 className="text-white font-bold text-lg">{product.name}</h4>
                  <p className="text-white/80 text-sm font-medium">${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="mb-8 overflow-x-auto no-scrollbar flex gap-4 py-2">
        {CATEGORIES.map(cat => (
          <button
            key={cat.name}
            onClick={() => setActiveCategory(cat.name as Category)}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl whitespace-nowrap transition-all duration-300 font-bold text-sm ${
              activeCategory === cat.name 
              ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20 translate-y-[-2px]' 
              : 'bg-white text-slate-500 border border-gray-100'
            }`}
          >
            <span>{cat.icon}</span>
            {cat.name}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 gap-4">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
