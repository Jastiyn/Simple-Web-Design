import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaHome, FaTshirt, FaStore, FaShoppingCart, FaUser } from 'react-icons/fa';
import logo from '../assets/nubdexchange_logo.png';

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogin = () => navigate('/login');
  const handleSignup = () => navigate('/signup');

  return (
    <nav className="navbar">
      <div style={{ display: 'flex', alignItems: 'center', height: '30px' }}>
        <img src={logo} alt="Logo" className="logo" style={{ height: '100%' }} />
      </div>

      <ul className="nav-list">
        <li>
          <NavLink to="/">
            <FaHome style={{ marginRight: '5px' }} />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/section/uniforms">
            <FaTshirt style={{ marginRight: '5px' }} />
            Uniforms
          </NavLink>
        </li>
        <li>
          <NavLink to="/section/school-merch">
            <FaStore style={{ marginRight: '5px' }} />
            School Merch
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart">
            <FaShoppingCart style={{ marginRight: '5px' }} />
            Cart
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile">
            <FaUser style={{ marginRight: '5px' }} />
            Profile
          </NavLink>
        </li>
      </ul>

      <div>
        <button onClick={handleLogin} style={{ marginRight: '10px' }}>
          Login
        </button>
        <button onClick={handleSignup}>
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;