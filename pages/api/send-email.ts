import { NextApiRequest, NextApiResponse  } from 'next';

import { sendEmail, sendToMe } from 'utils/sendEmail';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === 'POST') {
      const { name, email, phone } = req.body;
      await sendEmail({ name, email, phone });
      await sendToMe({ name, email, phone });
      return res.status(200).end();
    }
    return res.status(404).json({
        error: {
            code: 'not_found',
            messgae: "The requested endpoint was not found or doesn't support this method."
        }
    });
}   