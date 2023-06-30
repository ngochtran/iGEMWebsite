import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuTitles } from './MenuTitles';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuEnter = (index) => {
    setActiveMenu(index);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  return (
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
                <span className="navbar-title">{menu.title}</span>
                <ul className={`navbar-dropdown ${activeMenu === index ? 'show' : ''}`}>
                  {menu.submenu.map((subMenu) => (
                    <li key={subMenu.title} className="navbar-dropdown-item">
                      <Link to={`/${subMenu.title}`}>{subMenu.title}</Link>
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
  );
};

export default Navbar;