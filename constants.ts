import { Product } from './types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "UltraBook Pro X1",
    category: "Laptops",
    price: 1299,
    originalPrice: 1499,
    rating: 4.8,
    reviews: 124,
    image: "https://picsum.photos/seed/laptop1/600/600",
    description: "Experience specific performance with the UltraBook Pro X1. Featuring the latest M2 chip and a stunning liquid retina display.",
    specs: { "Processor": "M2 Pro", "RAM": "16GB", "Storage": "512GB SSD" },
    isNew: true
  },
  {
    id: 2,
    name: "Galaxy View S24",
    category: "Smartphones",
    price: 999,
    rating: 4.7,
    reviews: 89,
    image: "https://picsum.photos/seed/phone1/600/600",
    description: "The ultimate Android experience with AI-powered camera features and all-day battery life.",
    specs: { "Screen": "6.8 inch OLED", "Camera": "200MP Main", "Battery": "5000mAh" }
  },
  {
    id: 3,
    name: "SonicBass ANC Headphones",
    category: "Audio",
    price: 249,
    originalPrice: 349,
    rating: 4.5,
    reviews: 210,
    image: "https://picsum.photos/seed/audio1/600/600",
    description: "Immerse yourself in music with industry-leading active noise cancellation.",
    specs: { "Type": "Over-ear", "Battery Life": "30 Hours", "Connectivity": "Bluetooth 5.3" }
  },
  {
    id: 4,
    name: "Mechanical Keychron K2",
    category: "Accessories",
    price: 89,
    rating: 4.9,
    reviews: 340,
    image: "https://picsum.photos/seed/keyb1/600/600",
    description: "A tactile wireless mechanical keyboard for Mac and Windows users.",
    specs: { "Switches": "Brown", "Backlight": "RGB", "Layout": "75%" }
  },
  {
    id: 5,
    name: "Gaming Beast G15",
    category: "Laptops",
    price: 1899,
    rating: 4.6,
    reviews: 56,
    image: "https://picsum.photos/seed/laptop2/600/600",
    description: "Dominate the competition with the high-refresh rate display and RTX 4080 graphics.",
    specs: { "GPU": "RTX 4080", "RAM": "32GB", "Refresh Rate": "240Hz" }
  },
  {
    id: 6,
    name: "Pixel Buds Pro",
    category: "Audio",
    price: 199,
    rating: 4.4,
    reviews: 112,
    image: "https://picsum.photos/seed/buds1/600/600",
    description: "Premium sound with Silent Seal and hands-free Google Assistant.",
    specs: { "Type": "In-ear", "Water Resistance": "IPX4", "Charging": "Wireless" }
  },
  {
    id: 7,
    name: "PowerBank 20000mAh",
    category: "Accessories",
    price: 49,
    rating: 4.8,
    reviews: 530,
    image: "https://picsum.photos/seed/bank1/600/600",
    description: "Fast charging portable charger compatible with all USB-C devices.",
    specs: { "Capacity": "20000mAh", "Output": "65W PD", "Ports": "2x USB-C, 1x USB-A" }
  },
  {
    id: 8,
    name: "SmartWatch Series 9",
    category: "Accessories",
    price: 399,
    rating: 4.7,
    reviews: 150,
    image: "https://picsum.photos/seed/watch1/600/600",
    description: "Your essential companion for a healthy life is now even more powerful.",
    specs: { "Display": "Always-On Retina", "Sensors": "Blood Oxygen, ECG", "Water Resistant": "50m" },
    isNew: true
  }
];

export const CATEGORIES = ['All', 'Laptops', 'Smartphones', 'Audio', 'Accessories'];