import { GroceryItem } from '../interfaces';

export const sampleGroceryData: GroceryItem[] = [
  {
    id: '1',
    name: 'Bananas',
    description: 'Yummy yellow fruit',
    sku: '1',
    price: 400,
    image:
      'https://images.unsplash.com/photo-1574226516831-e1dff420e562?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=225&q=80',
    currency: 'USD',
  },
  {
    id: '2',
    name: 'Tangerines',
    sku: '1',
    price: 100,
    image:
      'https://images.unsplash.com/photo-1482012792084-a0c3725f289f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=225&q=80',
    currency: 'USD',
  },
];
