import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 py-6">
      <div className="container px-16">
        <nav className="flex gap-4">
          <NavLink to="/" className="text-white font-bold ">
            Home
          </NavLink>
          <NavLink to="/about" className="text-white font-bold ">
            About
          </NavLink>
          <NavLink to="/add" className="text-white font-bold ">
            Add User
          </NavLink>
          <NavLink to="/edit/1" className="text-white font-bold ">
            Edit
          </NavLink>
          <NavLink to="/userinfo" className="text-white font-bold ">
            User Info
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
