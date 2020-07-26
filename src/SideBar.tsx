import React from "react"

interface SideBarTypes {
    internalController: React.Dispatch<React.SetStateAction<string>>;
}

const SideBar = ({internalController}: SideBarTypes) => {
    return (
        <div className="sideBar">
            <button onClick={() => internalController("/home")}>Home</button>
            <button onClick={() => internalController("/counter")}>Counter</button>
            <button onClick={() => internalController("/textbox")}>Word List</button>
            <button onClick={() => internalController("/aboutme")}>About Me</button>
        </div>
    )
}

export default SideBar;