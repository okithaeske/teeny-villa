"use client";

/*
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./styles/Navbar.module.css"; // Adjust the path if necessary

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (href: string) => pathname.startsWith(href);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center text-2xl font-bold">
            <Link href="/"> Teeny Villa </Link>
            <div className="hidden md:block">
              <Link href="/"className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
              <Link href="/about"className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">About</Link>
              <Link href="/contact"className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
              <Link href="/gallery"className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Gallery</Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/"className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
          <Link href="/about"className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">About</Link>
          <Link href="/contact"className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
          <Link href="/gallery"className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Gallery</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;*/

import { useState } from "react";
import Link from "next/link";  // ✅ Import Link for Next.js
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white sticky top-0 w-full shadow-md z-100 py-6">
      <div className="container mx-auto px-6 py-4 flex justify-center justify-items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">Teeny Villa</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 w-full justify-center items-center">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          <Link href="/about" className="hover:text-gray-400">About</Link>
          <Link href="/gallery" className="hover:text-gray-400">Gallery</Link>
          <Link href="/contact" className="hover:text-gray-400">Contact Us</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu (Sliding Animation) */}
      {/* <div
        className={`md:hidden absolute top-16 left-0 w-full bg-gray-800 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <Link href="/" className="block px-6 py-3 hover:bg-gray-700">Home</Link>
        <Link href="/about" className="block px-6 py-3 hover:bg-gray-700">About</Link>
        <Link href="/gallery" className="block px-6 py-3 hover:bg-gray-700">Gallery</Link>
        <Link href="/contact" className="block px-6 py-3 hover:bg-gray-700">Contact Us</Link>
      </div> */}
    </nav>
  );
};

export default Navbar;

