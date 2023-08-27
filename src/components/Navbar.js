import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MenuTitles } from './MenuTitles';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

library.add(faCaretDown);

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuEnter = (index) => {
    setActiveMenu(index);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  const [scroll, setScroll] = useState(0)

  const showProgressBar = () => {
    const scrollTop = document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const value = (scrollTop / height) * 100
    setScroll(value)
  }

  useEffect(() => {
    window.addEventListener('scroll', showProgressBar)
    return () => window.removeEventListener('scroll', showProgressBar)
  }, [])

  return (
    <header className="App-header">
      <div className='row nav-area'>
        <div className="col-sm-2 logo">
          <a href="/">
            <img id="phage-logo" src="https://static.igem.wiki/teams/4951/wiki/graphics/phagelogo.png" alt="Phage Logo" />
          </a>
        </div>
        <div className='col'>
        <nav className="navbar">
        <ul className="navbar-menu">
          {MenuTitles.map((menu, index) => (
            <li
              key={menu.title}
              className={`navbar-item ${menu.submenu ? 'has-dropdown' : ''}`}
              onMouseEnter={() => handleMenuEnter(index)}
              onMouseLeave={handleMenuLeave}
            >
              {menu.submenu ? (
                <>
                  <span className="navbar-title">{menu.title} <FontAwesomeIcon icon={['fas', 'caret-down']} /></span>
                  <ul className={`navbar-dropdown ${activeMenu === index ? 'show' : ''}`}>
                    {menu.submenu.map((subMenu) => (
                      <li key={subMenu.title} className="navbar-dropdown-item">
                        <Link to={`/${subMenu.title}`}>{subMenu.display}</Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link to={`/${menu.title}`} className="navbar-title">
                  {menu.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
        </div>
        <div> 
          <div className="progress-container">
            <div className="progress-line" style={{width: `${scroll}%`}}>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;