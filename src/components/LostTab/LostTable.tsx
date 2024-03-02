'use client'
import React, { useState, useEffect } from 'react'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../ui/table"
// function createLostItemData(
//     imgUrl: string,
//     title: string,
//     description: string,
//     date: string,
//     time: string,
//     owner: string,
//     place: string,
//     storage: string,
//     status: string,
//     category: string,
// ) {
//     return { imgUrl, title, description, date, time, owner, place, storage, status, category }
// }
// const rows = [
//     createLostItemData("None", "Phone", "iPhone", "none", "none", "Sundhar", "Kuniyamuthur", "128GB", "Found", "Electronics"),
//     createLostItemData("None", "Laptop", "Dell Latitutde 3400", "none", "none", "Sanjay🐻", "Kuniyamuthur", "256GB", "Found", "Electronics"),
// createLostItemData("ille", "therila", "yara iruntha enakku enne", "en veedu tha", "light ah tha irukku", "Found", "Documents"),
// createLostItemData("irukku", "therila", "yara iruntha enakku enne", "en veedu tha", "light ah tha irukku", "Found", "Others"),

// ]
interface Rows {
    imgUrl: string,
    title: string,
    description: string,
    date: string,
    time: string,
    owner: string,
    place: string,
    storage: string,
    status: string,
    category: string,
}
interface LostTableProps {
    type: string,
    setType: React.Dispatch<React.SetStateAction<string>>,
   
}

const LostTable: React.FC<LostTableProps> = ({ type, setType, }) => {
    const [response, setResponse] = useState("");
    const [rows, setRows] = useState<Rows[]>([])
    const fetchData = async () => {
        try {
            const res = await fetch('/api/LostAPI');
            const data = await res.json();
            setResponse(data.LostItems);
            console.log(response)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    interface ApiResponse {
        message: string[],

    }
  
   

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <>
            {
                Array.isArray(response) && response.length!==0?
                // table
                    type === "Reset" ?
                        <div>
                            <Table >
                                <TableHeader >

                                    <TableRow>
                                        <TableHead>Photos</TableHead>
                                        <TableHead>Title</TableHead>
                                        <TableHead>Description</TableHead>
                                        <TableHead>Date & Time Lost</TableHead>
                                        <TableHead>Owner</TableHead>
                                        <TableHead>Address</TableHead>
                                        <TableHead>Storage</TableHead>
                                        <TableHead>Category</TableHead>

                                    </TableRow>

                                </TableHeader>
                                <TableBody>
                                    {
                                        response?.map((item, idx) => {
                                            return (
                                                <TableRow>
                                                    <TableCell>{item.imgUrl}</TableCell>
                                                    <TableCell>{item.title}</TableCell>
                                                    <TableCell>{item.description}</TableCell>
                                                    <TableCell>{item.date} @ {item.time}</TableCell>
                                                    <TableCell>{item.owner}</TableCell>
                                                    <TableCell>{item.place}</TableCell>
                                                    <TableCell>{item.storage}</TableCell>
                                                    <TableCell>{item.category}</TableCell>
                                                </TableRow>
                                            )
                                        })
                                    }
                                </TableBody>
                            </Table>
                            {/* <button onClick={fetchData}>Fetch Data</button> */}

                        </div>
                        :
                        <div>
                            <Table >
                                <TableHeader >

                                    <TableRow>
                                        <TableHead>Photos</TableHead>
                                        <TableHead>Description</TableHead>
                                        <TableHead>Owner</TableHead>
                                        <TableHead>Place</TableHead>
                                        <TableHead>Storage</TableHead>
                                        <TableHead>Category</TableHead>

                                    </TableRow>

                                </TableHeader>
                                <TableBody>
                                    {
                                        response?.filter(item => item.category.includes(type))?.map((filteredItem, idx) => {
                                            return (
                                                <>
                                                    {
                                                        <TableRow>
                                                            <TableCell>{filteredItem.imgUrl}</TableCell>
                                                            <TableCell>{filteredItem.description}</TableCell>
                                                            <TableCell>{filteredItem.owner}</TableCell>
                                                            <TableCell>{filteredItem.place}</TableCell>
                                                            <TableCell>{filteredItem.storage}</TableCell>
                                                            <TableCell>{filteredItem.category}</TableCell>
                                                        </TableRow>

                                                    }
                                                </>
                                            )
                                        })
                                    }
                                </TableBody>
                            </Table>
                            {/* <button onClick={fetchData}>Fetch Data</button> */}
                        </div>
                    :
                    <div>
                        <span>Loading</span>
                        {/* <button onClick={()=>{fetchData}}>Fetch Data</button> */}
                        {/* <button onClick={fetchData}>Fetch Data</button> */}
                    </div>
            }
        </>
    )
}

export default LostTable