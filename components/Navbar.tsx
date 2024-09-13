"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the sidebar when clicking outside of it
  const handleClickOutside = (event: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-b from-[#1a1b1e] to-[#16171a] shadow-lg border-b border-[#28292d]">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        {/* Logo and Text */}
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="h-6 w-6 text-white" />
          <span className="font-bold text-lg text-white">Heartful Mind</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex flex-grow justify-center space-x-6">
          <Link href="#" className="text-white hover:text-gray-400" prefetch={false}>
            Home
          </Link>
          <Link href="/ChatMind" className="text-white hover:text-gray-400" prefetch={false}>
            Chatbot
          </Link>
          <Link href="/docs/intro" className="text-white hover:text-gray-400" prefetch={false}>
            Docs
          </Link>
          <Link href="#" className="text-white hover:text-gray-400" prefetch={false}>
            Our Team
          </Link>
          <Link href="#" className="text-white hover:text-gray-400" prefetch={false}>
            Contact Us
          </Link>
        </nav>

        {/* Login Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="#"
            className="inline-flex h-9 items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            prefetch={false}
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center text-white focus:outline-none"
        >
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </button>
      </div>

      {/* Mobile Menu Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed inset-y-0 right-0 bg-[#1a1b1e] text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
        style={{ width: "60vw" }}
      >
        <div className="flex flex-col items-start gap-6 p-6">
          <Link href="#" className="text-lg font-medium hover:text-gray-400" prefetch={false} onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/ChatMind" className="text-lg font-medium hover:text-gray-400" prefetch={false} onClick={toggleMenu}>
            Chatbot
          </Link>
          <Link href="/docs/intro" className="text-lg font-medium hover:text-gray-400" prefetch={false} onClick={toggleMenu}>
            Docs
          </Link>
          <Link href="#" className="text-lg font-medium hover:text-gray-400" prefetch={false} onClick={toggleMenu}>
            Our Team
          </Link>
          <Link href="#" className="text-lg font-medium hover:text-gray-400" prefetch={false} onClick={toggleMenu}>
            Contact Us
          </Link>
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            prefetch={false}
            onClick={toggleMenu}
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

const MenuIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const MountainIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
  </svg>
);

export default Navbar;
