import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full top-0 left-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
      <h1 className="text-4xl font-strong  tracking-wide ml-6 ">
        RetrofitmentKit
      </h1>



        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 mr-6">
          <li><Link 
                to="/" 
                  className="text-black text-lg hover:text-gray-500"
                  onClick={() => {
                    scrollToHome();
                    setMenuOpen(false);
                 }}
                >
                 Home
              </Link></li>
          <li>
             <Link 
                to="/" 
                  className="text-black text-lg hover:text-gray-500"
                  onClick={() => {
                    scrollToAbout();
                    setMenuOpen(false);
                 }}
                >
                 About
              </Link>
          </li>
          <Link
              to="/"
              className="text-black text-lg hover:text-gray-500"
              onClick={() => {
              scrollToContact();
              setMenuOpen(false);
             }}
            >
            Contact
          </Link>
          
        </ul>

        {/* Hamburger Icon */}
        <div 
          className="md:hidden text-3xl cursor-pointer text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`absolute top-16 right-5 w-52 bg-white shadow-2xl rounded-lg p-4 transition-all duration-300 ${menuOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col space-y-3 text-center">
          <li><Link 
                to="/" 
                  className="text-black text-lg hover:text-gray-500"
                  onClick={() => {
                    scrollToHome();
                    setMenuOpen(false);
                 }}
                >
                 Home
              </Link></li>
          <li>
             <Link 
                to="/" 
                  className="text-black text-lg hover:text-gray-500"
                  onClick={() => {
                    scrollToAbout();
                    setMenuOpen(false);
                 }}
                >
                 About
              </Link>
          </li>
          <Link
              to="/"
              className="text-black text-lg hover:text-gray-500"
              onClick={() => {
              scrollToContact();
              setMenuOpen(false);
             }}
            >
            Contact
          </Link>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
