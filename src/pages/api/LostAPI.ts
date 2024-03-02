// pages/api/LostAPI.ts

import { NextApiRequest, NextApiResponse } from "next";

// {
//     imgUrl: "none",
//     title: "",
//     description: "",
//     date: "",
//     time: "",
//     owner: "",
//     place: "",
//     storage: "",
//     category: "",

// },
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
const reponse = {
    LostItems,
}
export default function LostAPIHandler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === 'GET') {
        res.status(200).json(reponse);
        res.status(200).json({message: 'Yes'})
    }
    else {
        // Handle other HTTP methods
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}