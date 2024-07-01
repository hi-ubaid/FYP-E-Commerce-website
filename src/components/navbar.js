import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import './navbar.css';
import logo from '../logo.png';

export const Navbar = ({ onSearch }) => {
  return (
    <nav className="navbar">
      <div className="brand">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="logo" />
          <span className="text-2xl font-bold">CLOTHIFY</span>
        </Link>
      </div>
      <div className="links">
        <Link to="/" className="text-white">Home</Link>
        <Link to="/AboutUs" className="text-white">About Us</Link>
        <Link to="/EmailRestAPI" className="text-white">Contact</Link>
        <Link to="/SignUp" className="text-white">Register</Link>
        <Link to="/team" className="text-white">Team</Link> {/* Added link to Team page */}
        <Link to="/cart">
          <ShoppingCart size={32} className="text-white" />
        </Link>
      </div>
    </nav>
  );
};