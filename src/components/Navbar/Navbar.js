import React from 'react'
import './Navbar.css'
const Navbar = () => {
    return (
        <nav>
            <div className="navbar-logo">
                James Yoo.
            </div>
            <div className="navbar-menu">
                <ul className="nav-links">
                    <li><a href="">.about()</a></li>
                    <li><a href="">.work()</a></li>
                    <li><a href="">.contact()</a></li>
                    <li><a href="">.last()</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;