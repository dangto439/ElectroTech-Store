import { Product } from '../types';
import { MOCK_PRODUCTS } from '../constants';

/**
 * SERVICE LAYER
 * This file acts as an abstraction for your Backend API.
 * Currently, it returns mock data with a slight delay to simulate network latency.
 * Later, replace the Promise resolutions with actual fetch() or axios calls.
 */

const LATENCY = 500; // Simulate 500ms network delay

export const ProductService = {
  getAllProducts: async (): Promise<Product[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(MOCK_PRODUCTS);
      }, LATENCY);
    });
  },

  getProductById: async (id: number): Promise<Product | undefined> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const product = MOCK_PRODUCTS.find((p) => p.id === id);
        resolve(product);
      }, LATENCY);
    });
  },

  getProductsByCategory: async (category: string): Promise<Product[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (category === 'All') {
          resolve(MOCK_PRODUCTS);
        } else {
          resolve(MOCK_PRODUCTS.filter((p) => p.category === category));
        }
      }, LATENCY);
    });
  }
};