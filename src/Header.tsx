import React from "react"

interface HeaderTypes {
    internalController: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({internalController}: HeaderTypes) => {
    return (
        <>
            <button onClick={() => internalController("/home")}>Home</button>
            <button onClick={() => internalController("/counter")}>Counter</button>
            <button onClick={() => internalController("/textbox")}>TextBox</button>
        </>
    )
}

export default Header;