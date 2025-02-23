"use client";

import { NextPage } from "next";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import {
  FaMapMarkerAlt,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import MapComponent from "../../components/map";

// ✅ Image Slider Component
const ImageSlider: React.FC<{ villaPhotos: string[] }> = ({ villaPhotos }) => {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  useEffect(() => {
    if (villaPhotos.length === 0) return;

    const interval = setInterval(() => {
      setCurrentPhoto((prevPhoto) => (prevPhoto + 1) % villaPhotos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [villaPhotos]);

  return (
    <div className="relative w-full max-w-3xl mx-auto mt-6">
      <img
        src={`/images/villa-photo${currentPhoto + 1}.jpg`}
        alt={villaPhotos[currentPhoto]}
        className="object-cover rounded-lg shadow-lg transition-opacity duration-500"
        style={{ width: "1400px", height: "500px" }}
      />
      <h3 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 text-white px-4 py-1 rounded-md">
        {villaPhotos[currentPhoto]}
      </h3>
    </div>
  );
};

// Main HomePage Component
const HomePage: NextPage = () => {
  const villaPhotos = [
    "Front View",
    "Living Room",
    "Bedroom",
    "Kitchen",
    "Garden",
    "Pool Area",
  ];


  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Teeny Villa - Home</title>
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[680px] flex flex-col items-center justify-center text-center bg-cover bg-center bg-[url('/images/hero.jpg')]">
        <div className="bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-center">
          <h1 className="text-white text-4xl font-bold">
            Welcome to Teeny Villa
          </h1>
          <p className="text-white mt-2">
            Experience luxury in the heart of nature.
          </p>
          <button className="mt-4 px-6 py-2 bg-white text-black font-semibold rounded-md shadow-md hover:bg-gray-200 transition">
            Book Now
          </button>
        </div>
      </section>

      {/* Image Slider Section */}
      <section className="py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Photos of Teeny Villa
        </h2>
        <ImageSlider villaPhotos={villaPhotos} />
      </section>

      {/* Interactive Map */}
      <section className="py-12 text-center bg-slate-300">
      <h2 className="text-3xl font-bold text-gray-800">Our Locations</h2>
        <div className="mt-4 flex flex-col items-center">
          <FaMapMarkerAlt className="text-red-700 text-3xl" />
          <p className="mt-2 text-gray-600">Explore our villas on the map below:</p>
          <MapComponent /> {/* Add Map Component here */}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-gray-400">
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          What Our Guests Say
        </h2>
        <div className="flex justify-center mt-6 space-x-6">
          {["John Doe", "Jane Smith", "Mike Johnson"].map((guest, index) => (
            <div
              key={index}
              className="w-80 bg-slate-600 p-6 shadow-md rounded-lg text-center">
              <p className="italic">
                "Teeny Villa provided an unforgettable experience with their
                exceptional service and beautiful locations."
              </p>
              <h4 className="mt-3 font-semibold">{guest}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>© 2023 Teeny Villa. All rights reserved.</p>
        <div className="flex justify-center mt-4 space-x-4">
          <a
            href="https://twitter.com/teenyvilla"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-2xl hover:text-blue-400 transition" />
          </a>
          <a
            href="https://facebook.com/teenyvilla"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-2xl hover:text-blue-500 transition" />
          </a>
          <a
            href="https://instagram.com/teenyvilla"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl hover:text-pink-500 transition" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
