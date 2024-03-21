import { METHODS } from '@/constants';
import { NextApiResponse } from 'next';

interface RequestParam {
  method: METHODS;
  body: string;
}

export default async function handler(req: RequestParam, res: NextApiResponse) {
  if (req.method !== METHODS.POST) {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  const messages = JSON.parse(req.body);
  let response;
  try {
    response = await fetch('http://127.0.0.1:5000/process', {
      method: 'POST',
      mode: "cors",

      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages,
      }),
    });
  } catch (error) {
    console.error('Error:', error);
    return res.json({ error: 'An error occurred' });
  }

  try {
    const data = await response.json();
    console.log(data);
    console.log(data.message);
    return res.status(200).json(data);
  } catch (error) {
    console.error('Error:', error);
    return res.json({ error: 'An error occurred' });
  }
}
