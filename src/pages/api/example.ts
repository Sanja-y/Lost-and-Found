// pages/api/example.ts

import { NextApiRequest, NextApiResponse } from 'next';

const LostItems = [
  {
      imgUrl: "none",
      title: "Phone",
      description: "iPhone",
      date: "none",
      time: "none",
      owner: "Sundhar",
      place: "Kuniyamuthur",
      storage: "128GB",
      category: "Electronics",

  },
  {
      imgUrl: "none",
      title: "Laptop",
      description: "Dell Latitutde 3400",
      date: "none",
      time: "none",
      owner: "Sanjay🐻",
      place: "Kuniyamuthur",
      storage: "256GB",
      category: "Electronics",

  },

]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Handle GET request
    res.status(200).json({ message: 'GET request received' });
  } else if (req.method === 'POST') {
    // Handle POST request
    res.status(200).json({ message: 'POST request received' });
  } else {
    // Handle other HTTP methods
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
