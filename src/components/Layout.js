import React from 'react'
import { Link } from 'react-router-dom'

function Layout({children}) {
    const nav=()=>{
        return(
        <ul className="nav nav-tabs bg-primary">
            <li className="nav-items">
                <Link to="/" className="text-light nav-link">Home</Link></li>
                <li className="nav-items">
                <Link to="/signup" className="text-light nav-link">Sign Up</Link></li>
                
        </ul>)
    }
    return (
        <>
            {nav()}
            <div className="container">
                {children}
            </div>
        </>
    )
}

export default Layout
