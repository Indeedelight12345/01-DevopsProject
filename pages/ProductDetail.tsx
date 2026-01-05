
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, Star, ShoppingBag, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { getProductInsight } from '../services/geminiService';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.id === id);
  const [insight, setInsight] = useState<string | null>(null);
  const [loadingInsight, setLoadingInsight] = useState(false);

  useEffect(() => {
    if (product) {
      setLoadingInsight(true);
      getProductInsight(product.name, product.description)
        .then(res => setInsight(res))
        .finally(() => setLoadingInsight(false));
    }
  }, [product]);

  if (!product) return <div className="p-10 text-center font-bold">Product not found</div>;

  return (
    <div className="relative">
      {/* Top Bar */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
        <button 
          onClick={() => navigate(-1)}
          className="p-3 bg-white/90 backdrop-blur rounded-2xl shadow-sm text-slate-800 active:scale-90 transition-transform"
        >
          <ArrowLeft size={20} />
        </button>
        <button className="p-3 bg-white/90 backdrop-blur rounded-2xl shadow-sm text-slate-800">
          <Heart size={20} />
        </button>
      </div>

      {/* Main Image */}
      <div className="h-[450px] w-full overflow-hidden rounded-b-[48px] shadow-lg">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="px-6 py-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-2">{product.category}</p>
            <h1 className="text-3xl font-black text-slate-900 leading-tight">{product.name}</h1>
          </div>
          <div className="bg-indigo-50 px-4 py-2 rounded-2xl">
            <span className="text-xl font-black text-indigo-600">${product.price}</span>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center gap-1">
            <Star size={18} className="fill-yellow-400 text-yellow-400" />
            <span className="font-bold text-slate-800">{product.rating}</span>
          </div>
          <span className="text-slate-400 text-sm">|</span>
          <span className="text-slate-500 font-medium text-sm">{product.reviews} reviews</span>
        </div>

        {/* AI Insight Box */}
        <div className="bg-indigo-600 rounded-3xl p-6 mb-8 text-white relative overflow-hidden shadow-xl shadow-indigo-600/20">
          <div className="absolute top-0 right-0 p-4 opacity-20">
            <Sparkles size={48} />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles size={16} />
              <span className="text-[10px] font-bold uppercase tracking-[2px]">AI Style Insight</span>
            </div>
            {loadingInsight ? (
              <div className="space-y-2">
                <div className="h-4 w-full bg-white/20 rounded animate-pulse"></div>
                <div className="h-4 w-2/3 bg-white/20 rounded animate-pulse"></div>
              </div>
            ) : (
              <p className="text-sm font-medium leading-relaxed italic">
                "{insight}"
              </p>
            )}
          </div>
        </div>

        <div className="mb-10">
          <h3 className="font-bold text-lg mb-3">About this item</h3>
          <p className="text-slate-500 leading-loose text-sm">
            {product.description}
          </p>
        </div>

        {/* Action Button */}
        <button className="w-full bg-slate-900 text-white rounded-3xl py-5 flex items-center justify-center gap-3 shadow-xl shadow-slate-900/20 hover:scale-[1.02] transition-transform active:scale-95 font-bold">
          <ShoppingBag size={20} />
          Add to bag • ${product.price}
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
