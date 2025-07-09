export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: number;
  inStock: boolean;
}

export const dummyProducts: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro',
    price: 999.99,
    description: 'Latest Apple iPhone with titanium design and A17 Pro chip',
    image: 'https://picsum.photos/200/200?random=1',
    category: 'Electronics',
    rating: 4.8,
    inStock: true
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24',
    price: 899.99,
    description: 'Flagship Samsung phone with AI-powered camera',
    image: 'https://picsum.photos/200/200?random=2',
    category: 'Electronics',
    rating: 4.7,
    inStock: true
  },
  {
    id: '3',
    name: 'MacBook Air M3',
    price: 1299.99,
    description: 'Ultra-thin laptop with M3 chip and all-day battery',
    image: 'https://picsum.photos/200/200?random=3',
    category: 'Computers',
    rating: 4.9,
    inStock: false
  },
  {
    id: '4',
    name: 'Sony WH-1000XM5',
    price: 349.99,
    description: 'Industry-leading noise canceling headphones',
    image: 'https://picsum.photos/200/200?random=4',
    category: 'Audio',
    rating: 4.6,
    inStock: true
  },
  {
    id: '5',
    name: 'iPad Pro 12.9"',
    price: 1099.99,
    description: 'Professional tablet with M2 chip and Liquid Retina display',
    image: 'https://picsum.photos/200/200?random=5',
    category: 'Tablets',
    rating: 4.8,
    inStock: true
  },
  {
    id: '6',
    name: 'Apple Watch Series 9',
    price: 399.99,
    description: 'Advanced smartwatch with health monitoring',
    image: 'https://picsum.photos/200/200?random=6',
    category: 'Wearables',
    rating: 4.5,
    inStock: true
  },
  {
    id: '7',
    name: 'Nintendo Switch OLED',
    price: 349.99,
    description: 'Portable gaming console with vibrant OLED screen',
    image: 'https://picsum.photos/200/200?random=7',
    category: 'Gaming',
    rating: 4.7,
    inStock: false
  },
  {
    id: '8',
    name: 'Tesla Model Y',
    price: 54999.99,
    description: 'Electric SUV with autopilot and supercharging',
    image: 'https://picsum.photos/200/200?random=8',
    category: 'Automotive',
    rating: 4.4,
    inStock: true
  },
  {
    id: '9',
    name: 'DJI Mini 4 Pro',
    price: 759.99,
    description: 'Compact drone with 4K camera and obstacle avoidance',
    image: 'https://picsum.photos/200/200?random=9',
    category: 'Drones',
    rating: 4.6,
    inStock: true
  },
  {
    id: '10',
    name: 'Dyson V15 Detect',
    price: 649.99,
    description: 'Cordless vacuum with laser dust detection',
    image: 'https://picsum.photos/200/200?random=10',
    category: 'Home',
    rating: 4.3,
    inStock: true
  }
];