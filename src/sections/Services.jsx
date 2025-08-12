import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const services = [
  { id: 1, title: "Administrative Assistant", bullets: ["📅 Calendar & email management", "📦 Vendor coordination", "📊 Reports & docs"] },
  { id: 2, title: "Customer Support", bullets: ["🎫 Ticket triage", "💬 Live chat support", "📋 CRM updates"] },
  { id: 3, title: "Lead Generation", bullets: ["🔍 Prospect research", "📧 Cold outreach", "📂 Lists & CRM import"] },
  { id: 4, title: "Accounting", bullets: ["💰 Bookkeeping", "🧾 Invoice processing", "✅ Reconciliation"] },
];

const Card = ({ s, idx, isMobile }) => (
  <motion.div
    initial={{
      opacity: 0,
      scale: 0.95,
      rotateY: isMobile ? 6 : 0,
      rotateX: isMobile ? -6 : 0,
    }}
    animate={
      isMobile
        ? {
            rotateY: [6, -6, 6],
            rotateX: [-6, 6, -6],
            transition: { duration: 3, ease: "easeInOut" },
          }
        : {}
    }
    whileInView={{ opacity: 1, scale: 1 }}
    whileHover={{
      rotateX: 8,
      rotateY: -8,
      scale: 1.05,
      boxShadow: "0 25px 50px rgba(0,0,0,0.15), 0 0 30px rgba(0,242,255,0.4)",
    }}
    whileTap={{
      rotateX: 8,
      rotateY: -8,
      scale: 1.05,
      boxShadow: "0 25px 50px rgba(0,0,0,0.15), 0 0 30px rgba(0,242,255,0.4)",
    }}
    viewport={{ once: true }}
    transition={{ type: "spring", stiffness: 200, damping: 15 }}
    className="relative p-6 rounded-xl shadow-lg border border-transparent 
               bg-gradient-to-br from-[#2a2a2a] via-[#333] to-[#2a2a2a]
               hover:border-[#00f2ff] 
               transform-gpu transition-all duration-300"
    style={{ transformStyle: "preserve-3d" }}
  >
    {/* Glow background */}
    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/10 to-transparent opacity-70 blur-xl pointer-events-none"></div>

    <h3
      className="font-bold text-lg text-[#00f2ff] drop-shadow-lg"
      style={{ transform: "translateZ(30px)" }}
    >
      {s.title}
    </h3>
    <ul
      className="mt-3 text-gray-300 text-sm space-y-2 list-disc list-inside"
      style={{ transform: "translateZ(25px)" }}
    >
      {s.bullets.map((b, i) => (
        <li key={i}>{b}</li>
      ))}
    </ul>
    <div className="mt-5" style={{ transform: "translateZ(20px)" }}>
      <a
        href="#contact"
        className="block text-center px-4 py-2 rounded-lg 
                   bg-[#00f2ff] text-black font-semibold 
                   hover:bg-cyan-400 transition shadow-lg"
      >
        Hire for this
      </a>
    </div>
  </motion.div>
);

export default function Services() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);
    }
  }, []);

  return (
    <section
      id="services"
      className="py-16 bg-gradient-to-b from-[#e4002b0d] to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-extrabold text-center text-black drop-shadow-lg"
        >
          Our Premium Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-gray-600 mt-3 max-w-2xl mx-auto"
        >
          Flexible, skilled assistants across common business functions.
        </motion.p>

        {/* Desktop Grid */}
        <div className="hidden sm:grid mt-10 grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, idx) => (
            <Card key={s.id} s={s} idx={idx} isMobile={false} />
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="sm:hidden mt-8">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            spaceBetween={16}
            slidesPerView={1.1}
            loop
          >
            {services.map((s, idx) => (
              <SwiperSlide key={s.id}>
                <Card s={s} idx={idx} isMobile={isMobile} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
