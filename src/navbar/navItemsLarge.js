import React from 'react';
import '../css/main.css';
import { NavLink } from 'react-router-dom';
function NavItemsLarge(props) {
  const menuItems = ['Home', 'Skills', 'Projects', 'Contact'];
  return (
    <div className="bg-black14 flex flex-wrap justify-right hidden lg:inline-block">
      {menuItems.map((menuItem) => (
        <NavLink
          key={menuItem}
          to={menuItem === 'Home' ? '/' : menuItem.toLowerCase()}
          exact
          className="text-xl ml-10 text-white focus:outline-none text-center p-1"
          activeClassName="border-custom-blue-button border-b-2"
        >
          {menuItem}
        </NavLink>
      ))}
    </div>
  );
}

export default NavItemsLarge;
