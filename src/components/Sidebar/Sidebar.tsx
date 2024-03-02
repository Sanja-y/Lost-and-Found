import React from 'react'
import { SidebarContent } from './SidebarContent'

interface SidebarProps {
  setSelected :  React.Dispatch<React.SetStateAction<string>>;
  selected: string;
}
const Sidebar: React.FC<SidebarProps> = ({setSelected,selected}) => {
  return (
    <div className='bg-bgPrimary text-white flex flex-col justify-start items-center w-[15%] h-screen'>
        <h1 className='text-3xl font-semibold mt-6 mb-8'>Lost & Found</h1>
        <SidebarContent setSelected={setSelected} selected = {selected}/>
    </div>
  )
}

export default Sidebar