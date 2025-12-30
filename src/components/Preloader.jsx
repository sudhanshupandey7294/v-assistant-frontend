import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import anva from "../assets/services/anva.png"; // replace with your actual logo path

export default function Preloader({ onFinish }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onFinish(), 400); // small delay before hide
          return 100;
        }
        return prev + 1;
      });
    }, 25); // speed of counter
    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.6 } }}
        className="fixed inset-0 bg-[#0a0a0a] flex flex-col items-center justify-center z-[9999] overflow-hidden"
      >
        {/* Blurred glowing circle */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute w-72 h-72 rounded-full bg-[#e4002b] opacity-40 blur-3xl"
        />

        {/* Logo with pulse */}
        <motion.img
          src={anva} // replace with your actual logo path
          alt="Logo"
          className="w-28 h-28 rounded-full shadow-[0_0_30px_#e4002b]"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />

        {/* Counter */}
        <motion.div
          key={count}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-4xl font-bold text-white drop-shadow-[0_0_10px_#e4002b]"
        >
          {count}%
        </motion.div>

        {/* Sub text */}
        <p className="text-gray-400 text-sm mt-2 tracking-widest">
          Loading your experience...
        </p>
      </motion.div>
    </AnimatePresence>
  );
}
