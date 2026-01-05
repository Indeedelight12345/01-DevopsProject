
import React, { useState } from 'react';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { CartItem } from '../types';

const Cart: React.FC = () => {
  // Mock cart items based on initial data
  const [items, setItems] = useState<CartItem[]>(
    PRODUCTS.slice(0, 2).map(p => ({ ...p, quantity: 1 }))
  );

  const updateQuantity = (id: string, delta: number) => {
    setItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 10.00;
  const total = subtotal + shipping;

  return (
    <div className="px-6 pt-8">
      <h1 className="text-3xl font-black text-slate-900 mb-8">My Bag</h1>

      <div className="space-y-6 mb-10">
        {items.length > 0 ? items.map(item => (
          <div key={item.id} className="flex gap-4 bg-white p-4 rounded-3xl border border-gray-100 shadow-sm">
            <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
              <img src={item.image} className="w-full h-full object-cover" alt="" />
            </div>
            <div className="flex-grow flex flex-col justify-between py-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-slate-800 line-clamp-1">{item.name}</h3>
                  <p className="text-xs font-medium text-slate-400 mt-1">{item.category}</p>
                </div>
                <button 
                  onClick={() => removeItem(item.id)}
                  className="p-2 text-rose-400 hover:text-rose-600 transition-colors"
                >
                  <Trash2 size={18} />
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="font-black text-indigo-600">${item.price.toFixed(2)}</span>
                <div className="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-100">
                  <button 
                    onClick={() => updateQuantity(item.id, -1)}
                    className="p-1 text-slate-600 hover:bg-white rounded-lg transition-colors"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="px-3 text-xs font-bold text-slate-800">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, 1)}
                    className="p-1 text-slate-600 hover:bg-white rounded-lg transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )) : (
          <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-100">
            <p className="text-slate-400 font-medium">Your bag is empty.</p>
          </div>
        )}
      </div>

      {items.length > 0 && (
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm mb-6">
          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center text-sm font-medium">
              <span className="text-slate-400">Subtotal</span>
              <span className="text-slate-800 font-bold">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center text-sm font-medium">
              <span className="text-slate-400">Shipping</span>
              <span className="text-slate-800 font-bold">${shipping.toFixed(2)}</span>
            </div>
            <div className="h-px bg-gray-100"></div>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-slate-900">Total</span>
              <span className="text-2xl font-black text-indigo-600">${total.toFixed(2)}</span>
            </div>
          </div>
          
          <button className="w-full bg-slate-900 text-white rounded-2xl py-5 flex items-center justify-center gap-3 font-bold hover:bg-indigo-600 transition-colors group">
            Checkout now
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
