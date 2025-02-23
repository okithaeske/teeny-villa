"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './styles/Navbar.module.css'; // Adjust the path if necessary

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (href: string) => pathname.startsWith(href);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav style={{
      backgroundColor: '#f8f9fa',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      position: 'relative',
      zIndex: 100,

    }}>
      <Link href="/" style={{ fontSize: '1.5em', fontWeight: 'bold', textDecoration: 'none', color: '#333' }}>
        Teeny Villa
      </Link>
      
      {/* Desktop Navigation - Hidden on mobile */}
      <ul className={styles.hideOnMobile} style={{
        listStyleType: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        gap: '20px',
      }}>
        <li style={isActive('/') ? {color: '#007bff', fontWeight: 'bold'} : {}}>
          <Link href="/" style={{ textDecoration: 'none', color: '#333', transition: 'color 0.3s ease' }}>Home</Link>
        </li>
        <li style={isActive('/about') ? {color: '#007bff', fontWeight: 'bold'} : {}}>
          <Link href="/about" style={{ textDecoration: 'none', color: '#333', transition: 'color 0.3s ease' }}>About</Link>
        </li>
        <li style={isActive('/contact') ? {color: '#007bff', fontWeight: 'bold'} : {}}>
          <Link href="/contact" style={{ textDecoration: 'none', color: '#333', transition: 'color 0.3s ease' }}>Contact</Link>
        </li>
      </ul>

      {/* Toggle Button for Mobile */}
      <button 
        onClick={toggleMenu} 
        style={{ 
          background: 'none', 
          border: 'none', 
          cursor: 'pointer',
          fontSize: '1.5em'
        }}
        className={styles.hideOnDesktop}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Side Panel */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: isMenuOpen ? 0 : '-100%',
        width: '250px',
        height: '100vh',
        backgroundColor: '#f8f9fa',
        transition: 'left 0.3s ease-in-out',
        zIndex: 10,
        overflowY: 'auto',
      }}>
        <ul style={{
          listStyleType: 'none',
          padding: '20px',
          margin: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
        }}>
          <li style={isActive('/') ? {color: '#007bff', fontWeight: 'bold'} : {}}>
            <Link href="/" onClick={toggleMenu} style={{ textDecoration: 'none', color: '#333', transition: 'color 0.3s ease' }}>Home</Link>
          </li>
          <li style={isActive('/about') ? {color: '#007bff', fontWeight: 'bold'} : {}}>
            <Link href="/about" onClick={toggleMenu} style={{ textDecoration: 'none', color: '#333', transition: 'color 0.3s ease' }}>About</Link>
          </li>
          <li style={isActive('/contact') ? {color: '#007bff', fontWeight: 'bold'} : {}}>
            <Link href="/contact" onClick={toggleMenu} style={{ textDecoration: 'none', color: '#333', transition: 'color 0.3s ease' }}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;