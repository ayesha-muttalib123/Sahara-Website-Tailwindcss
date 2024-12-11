"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gray-900 text-white fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="text-xl font-bold text-yellow-400">
          <Link href="/">Sahara Group</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className="hover:text-yellow-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-yellow-400 transition">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-yellow-400 transition">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-yellow-400 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="block md:hidden text-xl"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-2/3 bg-gray-800 text-white transform transition-transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="text-2xl p-4 text-white"
          onClick={closeMenu}
        >
          &times;
        </button>
        <ul className="flex flex-col space-y-6 mt-8 px-6">
          <li>
            <Link href="/" className="hover:text-yellow-400 transition" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-yellow-400 transition" onClick={closeMenu}>
              About Us
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-yellow-400 transition" onClick={closeMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-yellow-400 transition" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
