'use client'; 

import React, { useState } from 'react'

import Topbar from '../Topbar'
import FilterBar from '../FoundTab/FilterBar'

import FoundTable from '../FoundTab/FoundTable'
import Categories from '../FoundTab/Categories'
import Finished from '../FoundTab/categories/Finished'
import NonReclaimed from '../FoundTab/categories/NonReclaimed'
import Reclaimed from '../FoundTab/categories/Reclaimed'

const Found: React.FC = () => {

    const [selectedCategory, setSelectedCategory] = useState<string>("");
    

    return (
        <>
            <div className='flex flex-col w-full '>
                <Topbar title={"Found Items"} />
                <div className='bg-[#99b3ff60] px-6'>
                    <FilterBar />
                    <Categories
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory} />
                    {/* <FoundTable /> */}
                    {
                        selectedCategory === "Non Reclaimed" ?
                            <FoundTable /> :
                            selectedCategory === "Reclaimed" ?
                                <Reclaimed /> :
                                selectedCategory === "Finished" ?
                                    <Finished /> :
                                    <></>
                    }
                </div>
            </div>
        </>
    )
}

export default Found