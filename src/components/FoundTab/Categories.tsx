'use client'; 

import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu"
interface CategoriesProps {
    selectedCategory: string;
    setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

const Categories: React.FC<CategoriesProps> = ({ selectedCategory, setSelectedCategory }) => {
    const categories: string[] = ["Non Reclaimed", "Reclaimed", "Finished"]
    return (
        <>
        {/* Menu for larger screens */}
            <div className='flex w-full max-sm:hidden'>
                {
                    categories.map((category, idx) => {
                        return (
                            <button
                                key={idx}
                                className={`w-1/3 text-lg font-semibold py-3  border-2 border-bgPrimary 
                        hover:bg-[#527af05d] transition-all duration-200
                         ${category === selectedCategory ? 'bg-bgPrimary text-white hover:bg-bgPrimary' : 'text-bgPrimary bg-white'}
                         ${idx === 0 ? 'border-r-0 rounded-l-md' : idx === categories.length - 1 ? 'border-l-0 rounded-r-md' : 'border-2'}`}
                                onClick={() => { setSelectedCategory(category); }}>{category}</button>
                        )
                    })
                }
            </div>
       {/*Menu for smaller screens  */}
            <div className='flex justify-center w-full'>
                <div className='max-sm:block hidden'>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <button className={`w-full text-lg font-semibold py-3 px-2 
                                                border-2 border-bgPrimary rounded-md
                                                hover:bg-[#527af05d] transition-all 
                                                duration-200 text-white bg-bgPrimary`}>
                                {selectedCategory}
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Categories</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            {
                                categories.map((category, idx) => {
                                    return (
                                        <DropdownMenuItem>
                                            <button
                                                key={idx}
                                                className={`w-full text-lg font-semibold py-3 px-2 
                                                border-2 border-bgPrimary rounded-md
                                                hover:bg-[#527af05d] transition-all duration-200 
                                             ${category === selectedCategory ? 'bg-bgPrimary text-white hover:bg-bgPrimary' : 'text-bgPrimary'}
                                         `}
                                                onClick={() => { setSelectedCategory(category); }}>{category}
                                            </button>
                                        </DropdownMenuItem>
                                    )

                                })

                            }
                        </DropdownMenuContent>
                    </DropdownMenu>

                </div>
            </div>
        </>
    )
}

export default Categories