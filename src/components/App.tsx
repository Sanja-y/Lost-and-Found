'use client';

import React, { useState } from "react";

import Sidebar from "./Sidebar/Sidebar";
import Lost from "./Tabs/Lost";
import Found from "./Tabs/Found";
import Inguard from "./Tabs/Inguard";
import LostForm from "~/form/LostForm";
import FoundForm from "~/form/FoundForm";
const App: React.FC = () => {
    const [selected, setSelected] = useState<string>("")

    return (
        <div className="flex">
            <Sidebar
                setSelected={setSelected}
                selected={selected} />
            {
                selected === "Lost Item" ? 
                <Lost />
                :
                selected === "Found Item" ?
                <Found />
                :
                selected === "Inguard" ?
                <Inguard />
                :
                <></>
            }
            {/* For now! Route Later */}
            {/* <LostForm /> */}
            {/* <FoundForm /> */}
        </div>
    )
}

export default App;