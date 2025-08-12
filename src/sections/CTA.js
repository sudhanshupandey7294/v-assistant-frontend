import React from 'react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-br from-[#e4002b] via-[#ff4d6d] to-[#ff758c] text-white">
      {/* Background floating circles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15, scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-72 h-72 rounded-full bg-white blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15, scale: [1.2, 1, 1.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-white blur-3xl"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-extrabold tracking-tight"
        >
          Ready to <span className="relative">
            Save Time
            <motion.span
              layoutId="underline"
              className="absolute left-0 bottom-0 w-full h-1 bg-white rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </span> and Grow Your Business?
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-4 text-lg sm:text-xl text-gray-100"
        >
          Hire a professional virtual assistant today and focus on what matters most.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-8 px-8 py-4 rounded-full text-lg font-semibold text-white 
                     bg-gradient-to-r from-[#ffecd2] to-[#fcb69f] shadow-lg 
                     hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] 
                     transition-all duration-300"
        >
          🚀 Get Started
        </motion.a>
      </div>
    </section>
  );
}
