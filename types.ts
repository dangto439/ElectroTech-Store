export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  specs: Record<string, string>;
  isNew?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export type Category = 'All' | 'Laptops' | 'Smartphones' | 'Audio' | 'Accessories';

export enum SortOption {
  RECOMMENDED = 'Recommended',
  PRICE_LOW_HIGH = 'Price: Low to High',
  PRICE_HIGH_LOW = 'Price: High to Low',
  NEWEST = 'Newest Arrivals'
}