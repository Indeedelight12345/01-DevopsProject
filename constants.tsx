
import { Product, Order } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Minimalist Wireless Headphones',
    price: 299.99,
    description: 'Experience pure sound with our flagship wireless headphones. Features active noise cancellation and 40-hour battery life.',
    category: 'Tech',
    rating: 4.8,
    reviews: 124,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    featured: true,
  },
  {
    id: '2',
    name: 'Cotton Oversized Tee',
    price: 45.00,
    description: 'Premium heavyweight cotton oversized t-shirt in bone white. Perfect for minimalist styling.',
    category: 'Fashion',
    rating: 4.5,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '3',
    name: 'Smart Ceramic Vase',
    price: 78.50,
    description: 'Handcrafted ceramic vase with a matte finish. Designed to complement any modern living space.',
    category: 'Home',
    rating: 4.9,
    reviews: 56,
    image: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&w=800&q=80',
    featured: true,
  },
  {
    id: '4',
    name: 'Glow Face Serum',
    price: 64.00,
    description: 'A vitamin-C infused serum for a radiant complexion. Vegan and cruelty-free.',
    category: 'Beauty',
    rating: 4.7,
    reviews: 210,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '5',
    name: 'Aluminum Mechanical Keyboard',
    price: 189.99,
    description: 'Ultra-thin mechanical keyboard with hot-swappable switches and RGB lighting.',
    category: 'Tech',
    rating: 4.6,
    reviews: 42,
    image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '6',
    name: 'Natural Leather Wallet',
    price: 55.00,
    description: 'Slim bifold wallet made from vegetable-tanned leather that develops a beautiful patina over time.',
    category: 'Fashion',
    rating: 4.8,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80',
  }
];

export const ORDERS: Order[] = [
  { id: '#LX-9902', date: 'Oct 24, 2023', total: 344.99, status: 'Delivered', items: 2 },
  { id: '#LX-8812', date: 'Sep 12, 2023', total: 78.50, status: 'Delivered', items: 1 },
  { id: '#LX-7721', date: 'Aug 05, 2023', total: 124.00, status: 'Delivered', items: 3 },
];

export const CATEGORIES: { name: string; icon: string }[] = [
  { name: 'All', icon: '✨' },
  { name: 'Tech', icon: '💻' },
  { name: 'Fashion', icon: '👕' },
  { name: 'Home', icon: '🏠' },
  { name: 'Beauty', icon: '💄' },
];
