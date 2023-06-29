import React, { useState } from 'react'
import {Button} from './Button'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Dropdown from './Dropdown'
import {menuItems} from "../menuItems"
import MenuItems from "./MenuItems"

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDrowpdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    Stanford
                </Link>

                <div className='menu-icon' onClick={handleClick}> 
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/project' className='nav-links' onClick={closeMobileMenu}>
                            Project <i className='fas fa-caret-down' />
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className='nav-item'>
                        <Link to='/wetlab' className='nav-links' onClick={closeMobileMenu}>
                            Wet Lab <i className='fas fa-caret-down' />
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className='nav-item'>
                        <Link to='/humanpractices' className='nav-links' onClick={closeMobileMenu}>
                            Human Practices <i className='fas fa-caret-down' />
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className='nav-item'>
                        <Link to='/team' className='nav-links' onClick={closeMobileMenu}>
                            Team <i className='fas fa-caret-down' />
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className='nav-item'>
                        <Link to='/safety' className='nav-links' onClick={closeMobileMenu}>
                            Safety
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/awards' className='nav-links' onClick={closeMobileMenu}>
                            Awards <i className='fas fa-caret-down' />
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
