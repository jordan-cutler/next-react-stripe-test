import { NextApiRequest, NextApiResponse } from 'next';
import { sampleGroceryData } from '../../../utils/sample-data';
import { validateCartItems } from 'use-shopping-cart/src/serverUtil';
import Stripe from 'stripe';
import { DOMAIN_URL } from '../../../constants/app-metadata';

const stripe = new Stripe(process.env.STRIPE_SECRET_API_KEY, {
  apiVersion: '2020-08-27',
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const cartItems = req.body;
      const line_items = validateCartItems(sampleGroceryData, cartItems);
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        submit_type: 'pay',
        mode: 'payment',
        success_url: `${DOMAIN_URL}/confirmation`,
        cancel_url: `${DOMAIN_URL}/home`,
      });

      res.status(200).json(session);
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
};

export default handler;
