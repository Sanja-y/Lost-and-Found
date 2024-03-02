'use client'

import React, { useState, } from 'react'
import Topbar from '../Topbar'
import Report from '../LostTab/Report'
import LostTable from '../LostTab/LostTable'
import LostFilterBar from '../LostTab/LostFilterBar'
import { PlusCircle } from 'lucide-react';
const Lost: React.FC = () => {
  const types: string[] = ["Electronics", "Documents", "Others", "Reset"]
  const [type, setType] = useState<string>("Reset")

  return (
    <div  className='w-full flex flex-col px-6'>
      <Topbar title={"Lost Items"} />
      {/* <Report /> */}
      <LostFilterBar type={type} setType={setType} types={types} />
      <LostTable type={type} setType={setType} />

      <div className='flex justify-end'>
          <button onClick={()=>{}}><PlusCircle style={{color:"#30437B"}} className='mr-5 mt-4'/></button>
      </div>
    </div>
  )
}

export default Lost