import React from "react"

interface HeaderTypes {
    internalController: React.Dispatch<React.SetStateAction<string>>;
}

const DeadLanding = ({internalController}: HeaderTypes) => {
    return (
        <>
            <h1>Avast Matey, you've reached the Dead Landing Page</h1>
            <h4>Use the top Nav Bar to return, or click this link</h4>
            <button onClick={() => {internalController("/home")}}><b>Save Me</b></button>
        </>
    )
}

export default DeadLanding