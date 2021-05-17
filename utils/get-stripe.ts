/**
 * This is a singleton to ensure we only instantiate Stripe once.
 */
import { Stripe, loadStripe } from '@stripe/stripe-js';

type StripePromiseResult = Promise<Stripe | null>;
let stripePromise: StripePromiseResult;
const getStripe = (): StripePromiseResult => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      process.env.NEXT_PUBLIC_REACT_APP_STRIPE_API_PUBLIC!
    );
  }
  return stripePromise;
};

export default getStripe;
