'use client'
import React, { useState } from 'react'
import { Form, FormField, FormItem, FormLabel, FormControl } from '../ui/form';
import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from '../ui/popover';
const Report: React.FC = () => {
    const [openForm, setOpenForm] = useState<boolean>(false);
    return (
        <div>
            {/* <button
                className='bg-bgPrimary text-white px-4 py2'
                onClick={() => {
                    setOpenForm((prevValues) => { return (!prevValues); });
                }}>Report</button> */}
            <Popover>
                <PopoverTrigger>Open</PopoverTrigger>
                <PopoverContent><form><label>Yes</label></form></PopoverContent>
            </Popover>

            <div>

            </div>
        </div>
    )
}

export default Report