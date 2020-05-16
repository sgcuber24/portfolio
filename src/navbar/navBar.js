import React from 'react';
import '../css/main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavItemsLarge from './navItemsLarge';
function NavBar(props) {
  return (
    <div className="flex justify-between">
      <h1 className="text-white font-bold text-xl sm:text-3xl">Sriram G</h1>
      <button
        className="text-2xl text-white lg:hidden focus:outline-none"
        onClick={() => props.onClickHandler()}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <NavItemsLarge />
    </div>
  );
}

export default NavBar;
