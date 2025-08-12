import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BriefcaseIcon, RocketLaunchIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";

const testimonials = [
  {
    name: "Priya Desai",
    role: "Startup Founder",
    icon: RocketLaunchIcon,
    quote: "The virtual assistant I hired saved me countless hours each week 🚀 Highly recommend!",
    img: "https://via.placeholder.com/80",
  },
  {
    name: "Rahul Kumar",
    role: "Marketing Director",
    icon: BriefcaseIcon,
    quote: "Professional, reliable, and efficient 💼 Couldn’t ask for more.",
    img: "https://via.placeholder.com/80",
  },
  {
    name: "Aditi Singh",
    role: "E-commerce Owner",
    icon: ShoppingBagIcon,
    quote: "From data entry to social media, they handle it all flawlessly 🛒",
    img: "https://via.placeholder.com/80",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 3 seconds on mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const CurrentIcon = testimonials[index].icon;

  const ImageWithIcon = ({ img, Icon }) => (
    <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-pink-500 shadow-md flex items-center justify-center bg-gray-100">
      <img
        src={img}
        alt="Profile"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <Icon className="w-8 h-8 text-pink-600 z-10" />
    </div>
  );

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-center text-black drop-shadow-lg"
        >
          🌟 What Our Clients Say
        </motion.h2>

        {/* Mobile Carousel */}
        <div className="sm:hidden mt-10 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-200"
            >
              <ImageWithIcon img={testimonials[index].img} Icon={CurrentIcon} />
              <p className="mt-4 text-gray-700 italic">“{testimonials[index].quote}”</p>
              <h4 className="mt-4 font-semibold text-lg text-gray-900">{testimonials[index].name}</h4>
              <p className="text-sm text-gray-500">{testimonials[index].role}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Desktop & Tablet Grid */}
        <div className="hidden sm:grid mt-10 gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {testimonials.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-200 hover:shadow-xl hover:scale-105 transition-transform duration-300"
              >
                <ImageWithIcon img={t.img} Icon={Icon} />
                <p className="mt-4 text-gray-700 italic">“{t.quote}”</p>
                <h4 className="mt-4 font-semibold text-lg text-gray-900">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.role}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
