import React from 'react'
import './Navbar.css'
import logo from '../../Images/logo.svg'
const Navbar = () => {
    return (
        <nav>
            <div className="navbar-logo">
                <img src={logo} alt="navbar logo" id='logo-pic'/>
            </div>
            <div className="navbar-menu">
                <ul className="nav-links">
                    <li>
                        <a href="">ABOUT</a>
                    </li>
                    <li>
                        <a href="">WORK</a>
                    </li>
                    <li>
                        <a href="">CONTACT</a>
                    </li>
                    {/* <li>
                        <a href="">.last()</a>
                    </li> */}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;