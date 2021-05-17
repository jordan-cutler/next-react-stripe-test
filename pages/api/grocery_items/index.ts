import { NextApiRequest, NextApiResponse } from 'next';
import { sampleGroceryData } from '../../../utils/sample-data';

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(sampleGroceryData)) {
      throw new Error('Cannot find user data');
    }

    res.status(200).json(sampleGroceryData);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
