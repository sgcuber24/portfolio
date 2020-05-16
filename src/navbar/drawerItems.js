import React from 'react';
import '../css/main.css';
import { NavLink } from 'react-router-dom';
function DrawerItems(props) {
  const menuItems = ['Home', 'Skills', 'Projects', 'Contact'];
  return (
    <div className="bg-black14 h-full flex flex-wrap flex-col w-64 content-center justify-center">
      {menuItems.map((menuItem) => (
        <NavLink
          key={menuItem}
          to={menuItem === 'Home' ? '/' : menuItem.toLowerCase()}
          exact
          className="text-xl pb-4 mt-10 text-white focus:outline-none text-center"
          activeClassName="border-blue-500 border-b-4"
          onClick={() => {
            props.onClickHandler();
          }}
        >
          {menuItem}
        </NavLink>
      ))}
    </div>
  );
}

export default DrawerItems;
