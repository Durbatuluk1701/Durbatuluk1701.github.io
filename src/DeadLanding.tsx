import React from "react"
import { Link } from "react-router-dom"

const DeadLanding: React.FC = () => {
    return (
        <>
            <h1>Avast Matey, you've reached the Dead Landing Page</h1>
            <h4>Use the top Nav Bar to return, or click this link</h4>
            <Link to="/home"><b>Save Me</b></Link>
        </>
    )
}

export default DeadLanding