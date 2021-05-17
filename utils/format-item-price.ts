import { GroceryItem } from '../interfaces';
import { formatCurrencyString } from 'use-shopping-cart';

export const formatItemPrice = (item: GroceryItem) => {
  return formatCurrencyString({
    value: item.price,
    currency: item.currency,
    language: 'en-US',
  });
};
