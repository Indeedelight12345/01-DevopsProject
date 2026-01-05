
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Plus } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link 
      to={`/product/${product.id}`}
      className="group block bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-500"
    >
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <button className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur shadow-sm rounded-full text-gray-800 hover:bg-indigo-600 hover:text-white transition-colors duration-300">
          <Plus size={18} />
        </button>
      </div>
      
      <div className="p-4">
        <p className="text-[11px] font-semibold text-indigo-600 uppercase tracking-widest mb-1">{product.category}</p>
        <h3 className="text-sm font-bold text-slate-800 line-clamp-1 mb-1">{product.name}</h3>
        
        <div className="flex items-center gap-1 mb-2">
          <Star size={12} className="fill-yellow-400 text-yellow-400" />
          <span className="text-xs font-bold text-slate-600">{product.rating}</span>
          <span className="text-xs text-slate-400">({product.reviews})</span>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-base font-black text-slate-900">${product.price.toFixed(2)}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
