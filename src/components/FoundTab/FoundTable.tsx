import React from 'react'

// import { Table, TableHead, TableBody, TableContainer, TableRow, TableCell } from '@mui/material'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../ui/table"

function createFoundItemData(
    imgUrl: string,
    description: string,
    owner: string,
    place: string,
    storage: string,
    status: string,
) {
    return { imgUrl, description, owner, place, storage, status }
}

const rows = [
    createFoundItemData("ille", "therila", "yara iruntha enakku enne", "en veedu tha", "light ah tha irukku", "Found"),
    createFoundItemData("irukku", "therila", "yara iruntha enakku enne", "en veedu tha", "light ah tha irukku", "Found"),

]
const FoundTable: React.FC = () => {
    return (
        <div className='w-full'>
            {/* <form className='flex border-1 border-gray-700' onClick={(e) => { e.preventDefault() }}>
                <button type='submit'>Search</button>
                <input type='search' placeholder='Search lost/found or inguard' className='px-10 w-full' />
            </form> */}

            <Table className='w-full'>
                <TableHeader className='w-full'>
                    <TableRow>
                        <TableHead>Photos</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Owner</TableHead>
                        <TableHead>Place</TableHead>
                        <TableHead>Storage</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className='w-full'>
                    {
                        rows.map((row) => {
                            return (
                                <TableRow key={row.description}>
                                    <TableCell>{row.imgUrl}</TableCell>
                                    <TableCell>{row.description}</TableCell>
                                    <TableCell>{row.owner}</TableCell>
                                    <TableCell>{row.place}</TableCell>
                                    <TableCell>{row.storage}</TableCell>
                                    <TableCell style={{ color: "#30437B", }}>
                                        <span className='border-2 w-full font-bold border-bgPrimary px-6 py-2 rounded-md'>{row.status}</span>
                                    </TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>

        </div>
    )
}

export default FoundTable