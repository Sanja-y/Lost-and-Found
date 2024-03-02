'use client'; 

import React, { useState } from 'react'

interface SidebarContentProps{
    setSelected :  React.Dispatch<React.SetStateAction<string>>;
    selected: string;
}


let SidebarOptions: string[] = ["Found Item", "Lost Item", "Inguard", "Cancel"];

export const SidebarContent: React.FC<SidebarContentProps> = ({setSelected,selected}) => {
    
    return (
        <div className='flex flex-col w-full'>
            {
                SidebarOptions.map((option, idx) => {
                    return (
                        <button className={`text-md font-semibold transition-all duration-100 
                        py-1 
                        ${option === selected ? 'bg-[#6e8ce780] border-r-4 border-pink-400 ' : 'hover:bg-[#6e8ce780] '}`}
                            value={idx}
                            name={option}
                            onClick={() => {
                                setSelected(option);
                                console.log(selected)
                            }}
                        >{option}</button>
                    )
                })
            }
        </div>
    )
}
