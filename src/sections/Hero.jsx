
import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaUsers, FaLaptop, FaBullhorn } from 'react-icons/fa'; // marketing icons

const assistants = [
  { name: 'Anita Sharma', role: 'Accounting' },
  { name: 'Akash Mehra', role: 'Social Media' },
  { name: 'Binoy Patel', role: 'Data Entry' },
  { name: 'Ranjan Verma', role: 'Lead Generation' },
];

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#e4002b] via-[#b00020] to-[#800016] min-h-screen relative overflow-hidden">
      
      {/* Floating background marketing icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: [0, 20, 0], opacity: 0.15 }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 left-10 text-white text-6xl"
        >
          <FaChartLine />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: [0, -20, 0], opacity: 0.15 }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-32 right-12 text-white text-7xl"
        >
          <FaUsers />
        </motion.div>
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: [0, 15, 0], opacity: 0.15 }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute top-1/3 right-1/4 text-white text-6xl"
        >
          <FaLaptop />
        </motion.div>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: [0, -15, 0], opacity: 0.15 }}
          transition={{ duration: 9, repeat: Infinity }}
          className="absolute bottom-16 left-1/4 text-white text-6xl"
        >
          <FaBullhorn />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto py-24 px-6 flex flex-col md:flex-row items-center gap-16 text-white">

        {/* Left Side Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex-1"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
            Trusted Remote Assistants to Power Your Business
          </h1>
          <p className="mt-6 max-w-xl text-gray-200 text-lg leading-relaxed drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">
            Hire skilled, vetted virtual assistants for admin, accounting, lead-gen, social media and more — scale quickly without the overhead.
          </p>

          <div className="mt-8 flex gap-6">
            <a
              href="#contact"
              className="btn-primary px-8 py-3 rounded-full font-semibold shadow-lg shadow-white
                         hover:shadow-[0_0_20px_5px_rgba(228,0,43,0.8)] transition-shadow duration-300 inline-flex items-center justify-center bg-gray-900 bg-opacity-50 text-white"
            >
              Get Started
            </a>
            <a
              href="#services"
              className="px-6 py-3 rounded-full bg-white/90 border-2 border-white hover:bg-white text-red-800 transition-colors duration-300"
            >
              Browse Services
            </a>
          </div>
        </motion.div>

       {/* Featured Assistants */}
<div className="flex-1 w-full relative">
  <h3 className="text-4xl font-extrabold text-white mb-4 text-center">Featured Assistants</h3>

  {/* Floating Blurred Background Lights */}
  <div className="absolute w-40 h-40 bg-red-500 rounded-full blur-3xl opacity-30 -top-10 -left-5 animate-pulse"></div>
  <div className="absolute w-40 h-40 bg-pink-500 rounded-full blur-3xl opacity-30 bottom-5 right-0 animate-pulse"></div>

  {/* Desktop & Tablet */}
  <div className="hidden sm:flex gap-6 p-8 rounded-2xl shadow-[0_0_25px_rgba(228,0,43,0.7)] overflow-x-auto border border-red-500/40 bg-transparent">
    {assistants.map(({ name, role }, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.05, y: -6, boxShadow: '0 0 20px rgba(255,255,255,0.8)' }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="relative flex flex-col items-center gap-3 p-4 border border-white rounded-lg bg-transparent min-w-[160px] shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.9)] group"
      >
        <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg shadow-white/60 bg-transparent flex items-center justify-center">
          <img
            src="https://via.placeholder.com/64"
            alt="Assistant"
            className="w-full h-full object-cover"
          />
        </div>
        <h4 className="font-semibold text-lg text-white">{name}</h4>
        <p className="text-sm text-white font-medium">{role}</p>
        <span className="absolute left-0 bottom-0 w-full h-[3px] bg-white opacity-70 animate-pulse group-hover:w-0 transition-all duration-500"></span>
      </motion.div>
    ))}
  </div>

  {/* Mobile View Floating Animation */}
  <div className="sm:hidden flex flex-col gap-6 p-6 rounded-2xl shadow-[0_0_25px_rgba(228,0,43,0.7)] border border-red-500/40 bg-transparent">
    {assistants.map(({ name, role }, i) => (
      <motion.div
        key={i}
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="relative flex items-center gap-4 p-4 border border-white rounded-lg bg-transparent shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.9)] group"
      >
        <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg shadow-white/60 bg-transparent flex items-center justify-center">
          <img
            src="https://via.placeholder.com/64"
            alt="Assistant"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-lg text-white">{name}</h4>
          <p className="text-sm text-white font-medium">{role}</p>
        </div>
        <span className="absolute left-0 bottom-0 w-full h-[3px] bg-white opacity-70 animate-pulse group-hover:w-0 transition-all duration-500"></span>
      </motion.div>
    ))}
  </div>

  {/* Contact Section */}
  <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-8 relative">
    {/* WhatsApp */}
    <motion.a
      href="https://wa.me/9971101450"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05, y: -4 }}
      whileTap={{ scale: 0.98 }}
      className="relative px-8 py-4 rounded-2xl bg-gradient-to-r from-green-500 via-green-400 to-green-600 shadow-[0_8px_20px_rgba(0,255,0,0.5)] text-white font-bold tracking-wide overflow-hidden group"
    >
      <span className="relative z-10 flex items-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16.862 14.513c-.279-.14-1.646-.812-1.9-.905-.255-.093-.441-.14-.627.14-.186.279-.72.905-.88 1.091-.162.186-.325.21-.604.07-.279-.14-1.178-.435-2.243-1.387-.828-.737-1.387-1.646-1.547-1.925-.162-.279-.017-.43.122-.57.126-.125.279-.325.419-.488.14-.162.186-.279.279-.465.093-.186.047-.349-.023-.488-.07-.14-.627-1.507-.858-2.065-.226-.543-.456-.47-.627-.479-.162-.008-.349-.01-.535-.01-.186 0-.488.07-.744.349-.256.279-.977.953-.977 2.325 0 1.372 1 2.693 1.14 2.88.14.186 1.963 3.007 4.75 4.214.665.287 1.184.458 1.588.586.666.212 1.272.182 1.75.11.534-.079 1.646-.67 1.88-1.316.233-.647.233-1.202.163-1.316-.07-.116-.256-.186-.535-.326z"/>
        </svg>
        WhatsApp Us
      </span>
      <span className="absolute left-0 bottom-0 w-full h-[3px] bg-green-300 opacity-70 animate-pulse group-hover:w-0 transition-all duration-500"></span>
    </motion.a>

    {/* Email */}
    <motion.a
      href="mailto:deepaka9va@gmail.com"
      whileHover={{ scale: 1.05, y: -4 }}
      whileTap={{ scale: 0.98 }}
      className="relative px-8 py-4 rounded-2xl bg-gradient-to-r from-red-500 via-pink-500 to-red-600 shadow-[0_8px_20px_rgba(228,0,43,0.5)] text-white font-bold tracking-wide overflow-hidden group"
    >
      <span className="relative z-10 flex items-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4C2.897 4 2 4.897 2 6V18C2 19.103 2.897 20 4 20H20C21.103 20 22 19.103 22 18V6C22 4.897 21.103 4 20 4ZM20 6L12 11L4 6H20ZM4 18V8L12 13L20 8V18H4Z"/>
        </svg>
        Email Us
      </span>
      <span className="absolute left-0 bottom-0 w-full h-[3px] bg-pink-300 opacity-70 animate-pulse group-hover:w-0 transition-all duration-500"></span>
    </motion.a>
  </div>
</div>


      </div>
    </section>
  );
}
