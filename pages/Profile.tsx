
import React from 'react';
import { Settings, ChevronRight, Package, CreditCard, MapPin, ShieldCheck, LogOut } from 'lucide-react';
import { ORDERS } from '../constants';

const Profile: React.FC = () => {
  const menuItems = [
    { icon: <Package size={20} className="text-indigo-600" />, label: 'Order History', count: 3 },
    { icon: <CreditCard size={20} className="text-emerald-500" />, label: 'Payment Methods' },
    { icon: <MapPin size={20} className="text-rose-500" />, label: 'Shipping Addresses' },
    { icon: <ShieldCheck size={20} className="text-amber-500" />, label: 'Privacy & Security' },
  ];

  return (
    <div className="px-6 pt-8 pb-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-black text-slate-900">Profile</h1>
        <button className="p-3 bg-white rounded-2xl border border-gray-100 shadow-sm text-slate-400">
          <Settings size={20} />
        </button>
      </div>

      {/* User Info */}
      <div className="flex flex-col items-center mb-10">
        <div className="relative mb-4">
          <div className="w-28 h-28 rounded-[40px] overflow-hidden border-4 border-white shadow-xl">
            <img src="https://picsum.photos/seed/alex/200" className="w-full h-full object-cover" alt="Profile" />
          </div>
          <div className="absolute bottom-1 right-1 bg-indigo-600 p-2 rounded-xl text-white border-2 border-white shadow-lg">
            <Settings size={14} />
          </div>
        </div>
        <h2 className="text-xl font-bold text-slate-900">Alex Johnston</h2>
        <p className="text-slate-400 font-medium text-sm">alex.j@luxury.com</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-10">
        <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm text-center">
          <p className="text-2xl font-black text-slate-900">12</p>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Orders</p>
        </div>
        <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm text-center">
          <p className="text-2xl font-black text-indigo-600">840</p>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Points</p>
        </div>
      </div>

      {/* Menu */}
      <div className="space-y-3 mb-10">
        {menuItems.map((item, idx) => (
          <button 
            key={idx} 
            className="w-full flex items-center justify-between p-5 bg-white rounded-3xl border border-gray-100 hover:shadow-md transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="p-2 bg-gray-50 rounded-xl group-hover:bg-indigo-50 transition-colors">
                {item.icon}
              </div>
              <span className="font-bold text-slate-700">{item.label}</span>
            </div>
            <div className="flex items-center gap-2">
              {item.count && <span className="bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-lg text-xs font-bold">{item.count}</span>}
              <ChevronRight size={18} className="text-slate-300 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-lg text-slate-900">Recent Orders</h3>
          <button className="text-xs font-bold text-indigo-600">View All</button>
        </div>
        <div className="space-y-3">
          {ORDERS.map(order => (
            <div key={order.id} className="p-4 bg-white rounded-2xl border border-gray-100 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-slate-400 mb-1">{order.id}</p>
                <p className="text-sm font-bold text-slate-800">{order.date}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-black text-slate-900">${order.total}</p>
                <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider">{order.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="w-full flex items-center justify-center gap-2 p-5 text-rose-500 font-bold border-2 border-rose-50 rounded-3xl hover:bg-rose-50 transition-colors">
        <LogOut size={20} />
        Sign Out
      </button>
    </div>
  );
};

export default Profile;
