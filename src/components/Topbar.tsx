import React from 'react'

interface TopbarProps {
    title: string
}

import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { IconButton } from '@mui/material';

const Topbar: React.FC<TopbarProps> = ({ title }) => {
    return (
        <div className=' mt-6 mb-8 flex justify-between items-start px-8 w-full '>
            <h1 className='text-3xl font-semibold text-bgPrimary'>{title}</h1>
            <div className='flex space-x-3'>
                <form className='flex border-1 border-gray-700' onClick={(e) => { e.preventDefault() }}>
                    <button type='submit'>Search</button>
                    <input type='search' placeholder='Search here' className='px-10' />
                </form>
                <IconButton>
                    <NotificationsOutlinedIcon style={{ color: "#30437B" }} />
                </IconButton>
                <IconButton>
                    <AccountCircleOutlinedIcon style={{ color: "#30437B" }}  />
                </IconButton>
            </div>
        </div>
    )
}

export default Topbar