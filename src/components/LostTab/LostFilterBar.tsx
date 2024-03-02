"use client"

import * as React from "react"
import { addDays, format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"

import { cn } from "../../lib/utils"
import { Button } from "../ui/button"
import { Calendar } from "../ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "../ui/popover"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu"


interface LostFilterBarProps extends React.HTMLAttributes<HTMLDivElement> {
    type: string,
    setType: React.Dispatch<React.SetStateAction<string>>,
    types: string[],
}

const LostFilterBar: React.FC<LostFilterBarProps> = ({ type, setType, types }) => {
    const [date, setDate] = React.useState<DateRange | undefined>({
        from: new Date(2024, 0, 20),
        to: addDays(new Date(2024, 0, 20), 20),
    })
    return (
        <div className='flex justify-between w-full  py-6'>
            <div className='flex items-start space-x-4'>
                <div>
                    <form className='flex border-1 border-gray-700' onClick={(e) => { e.preventDefault() }}>
                        <button type='submit'>Search</button>
                        <input type='search' placeholder='Search here' className='px-10' />
                    </form>
                </div>
                <div className={cn("grid gap-2 text-bgPrimary",)}>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                id="date"
                                variant={"outline"}
                                className={cn(
                                    "w-[300px] justify-center items-center text-center font-normal",
                                    !date && "text-muted-foreground text-bgPrimary"
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date?.from ? (
                                    date.to ? (
                                        <>
                                            {format(date.from, "LLL dd, y")} -{" "}
                                            {format(date.to, "LLL dd, y")}
                                        </>
                                    ) : (
                                        format(date.from, "LLL dd, y")
                                    )
                                ) : (
                                    <span>Pick a date</span>
                                )}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                initialFocus
                                mode="range"
                                defaultMonth={date?.from}
                                selected={date}
                                onSelect={setDate}
                                numberOfMonths={2}
                            />
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
            <div>
                <DropdownMenu>
                    <DropdownMenuTrigger>Categories</DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Select type</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {
                            types?.map((selected,idx) => {
                                return (
                                    <DropdownMenuItem onClick={()=>{setType(selected)}}>{selected}</DropdownMenuItem>
                                )
                            })
                        }
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div>
                <span>Status</span>
            </div>
        </div>
    )
}

export default LostFilterBar