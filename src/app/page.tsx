"use client";

import { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import styles from './styles/Home.module.css';
import { FaMapMarkerAlt, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const HomePage: NextPage = () => {
  const villaPhotos = [
    'Front View', 
    'Living Room', 
    'Bedroom',
    'Kitchen',
    'Garden',
    'Pool Area'
  ];
  
  const [currentPhoto, setCurrentPhoto] = useState(0);

  useEffect(() => {
    // Set up an interval to change the photo every 5 seconds
    const interval = setInterval(() => {
      // Cycle through photos forward-only
      setCurrentPhoto((prevPhoto) => {
        if (prevPhoto < villaPhotos.length - 1) {
          return prevPhoto + 1;
        } else {
          // Reset to the first photo after the last one
          return 0;
        }
      });
    }, 5000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [villaPhotos.length]);

  return (
    <div>
      <Head>
        <title>Teeny Villa - Home</title>
      </Head>
      <Navbar />

      {/* Hero Section with Parallax Effect and Image */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Welcome to Teeny Villa</h1>
          <p>Experience luxury in the heart of nature.</p>
          <button className={styles.ctaButton}>Book Now</button>
        </div>
        <div className={styles.heroImage}>
          <img src="/images/hero.jpg" alt="Teeny Villa Hero" />
        </div>
      </section>

    {/* Featured Photos */}
    <section className={styles.featured}>
        <h2>Photos of Teeny Villa</h2>
        <div className={styles.featuredGrid}>
          {villaPhotos.map((photo, index) => (
            <div 
              key={index} 
              className={`${styles.card} ${index === currentPhoto ? styles.active : ''}`}
              style={{ 
                transform: `translateX(${(index - currentPhoto) * 100}%)`,
                opacity: index === currentPhoto ? 1 : 0.5,
                zIndex: index === currentPhoto ? 2 : 1,
                transition: 'all 0.5s ease-out'
              }}
            >
              <div className={styles.cardImageWrapper}>
                <img src={`/images/villa-photo${index + 1}.jpg`} alt={photo} className={styles.cardImage} />
              </div>
              <h3>{photo}</h3>
              <p>Take a closer look at our beautiful villa.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Map */}
      <section className={styles.mapSection}>
        <h2>Our Locations</h2>
        <div className={styles.mapContainer}>
          <FaMapMarkerAlt className={styles.mapIcon} />
          <p>Explore our villas on the map below:</p>
          <div className={styles.mapPlaceholder}>Map goes here</div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonials}>
        <h2>What Our Guests Say</h2>
        <div className={styles.testimonialsContainer}>
          {['John Doe', 'Jane Smith', 'Mike Johnson'].map((guest, index) => (
            <div key={index} className={`${styles.testimonialCard} ${index === 0 ? styles.active : ''}`}>
              <p>"Teeny Villa provided an unforgettable experience with their exceptional service and beautiful locations."</p>
              <h4>{guest}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>© 2023 Teeny Villa. All rights reserved.</p>
          <div className={styles.socialIcons}>
            <a href="https://twitter.com/teenyvilla" target="_blank" rel="noopener noreferrer"><FaTwitter className={styles.socialIcon} /></a>
            <a href="https://facebook.com/teenyvilla" target="_blank" rel="noopener noreferrer"><FaFacebook className={styles.socialIcon} /></a>
            <a href="https://instagram.com/teenyvilla" target="_blank" rel="noopener noreferrer"><FaInstagram className={styles.socialIcon} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;