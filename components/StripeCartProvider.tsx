import stripe from '../utils/get-stripe';
import { CartProvider } from 'use-shopping-cart';
import React from 'react';

const StripeCartProvider: React.FC = ({ children }) => (
  <CartProvider mode="checkout-session" stripe={stripe()} currency="USD">
    <>{children}</>
  </CartProvider>
);

export default StripeCartProvider;
