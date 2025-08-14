// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";

// // ⚠️ Update these imports to your actual file names/paths

// import paymentGatewayLogo from "../assets/services/payment-gateway.png";
// import customDesignLogo from "../assets/services/custom-design.png";
// import graphicDesignLogo from "../assets/services/graphic-design.png";
// import shopifyLogo from "../assets/services/shopify.png";
// import smoLogo from "../assets/services/smo.png";
// import websiteMaintenanceLogo from "../assets/services/website-maintenance.png";
// import websiteDevelopmentLogo from "../assets/services/website-development.png";

// const services = [
 
//   {
//     title: "Payment Gateway Integration",
//     desc: "Secure, seamless checkout with Razorpay, Stripe, PayPal and more.",
//     img: paymentGatewayLogo,
//   },
//   {
//     title: "Custom Design",
//     desc: "Unique, on-brand UI/UX that delights users and drives conversions.",
//     img: customDesignLogo,
//   },
//   {
//     title: "Graphic Design",
//     desc: "Logos, banners, posters & social creatives that stand out.",
//     img: graphicDesignLogo,
//   },
//   {
//     title: "Shopify",
//     desc: "Store setup, theme customization, apps & optimization for sales.",
//     img: shopifyLogo,
//   },
//   {
//     title: "SMO",
//     desc: "Profile optimization, content strategy & growth across platforms.",
//     img: smoLogo,
//   },
//   {
//     title: "Website Maintenance",
//     desc: "Updates, backups, bug fixes & monitoring to keep things smooth.",
//     img: websiteMaintenanceLogo,
//   },
//   {
//     title: "Website Development",
//     desc: "Modern, scalable full-stack builds with clean, secure code.",
//     img: websiteDevelopmentLogo,
//   },
// ];

// const Card = ({ s, isMobile }) => (
//   <motion.div
//     initial={{
//       opacity: 0,
//       y: 30,
//       rotateY: isMobile ? 6 : 0,
//       rotateX: isMobile ? -6 : 0,
//       scale: 1.02,
//     }}
//     animate={
//       isMobile
//         ? {
//             rotateY: [6, -6, 6],
//             rotateX: [-6, 6, -6],
//             transition: { duration: 3, ease: "easeInOut", repeat: Infinity },
//           }
//         : {}
//     }
//     whileInView={{ opacity: 1, y: 0 }}
//     whileHover={{
//       rotateY: 8,
//       rotateX: -8,
//       scale: 1.05,
//       boxShadow:
//         "0 25px 50px rgba(0,0,0,0.2), 0 0 30px rgba(228,0,43,0.3)",
//     }}
//     whileTap={{
//       rotateY: 8,
//       rotateX: -8,
//       scale: 1.05,
//       boxShadow:
//         "0 25px 50px rgba(0,0,0,0.2), 0 0 30px rgba(228,0,43,0.3)",
//     }}
//     transition={{ type: "spring", stiffness: 200, damping: 15 }}
//     viewport={{ once: true }}
//     className="relative bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-100 transform-gpu"
//     style={{ transformStyle: "preserve-3d" }}
//   >
//     {/* Glow background (red theme to match your Team cards) */}
//     <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-50 via-white to-white opacity-60 blur-xl pointer-events-none"></div>

//     {/* Logo circle */}
//     <div
//       className="relative w-28 h-28 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-red-100 to-red-200 border-4 border-white shadow-xl overflow-hidden"
//       style={{ transform: "translateZ(40px)" }}
//     >
//       <img
//         src={s.img}
//         alt={s.title}
//         className="w-16 h-16 object-contain"
//         loading="lazy"
//       />
//     </div>

//     <h3
//       className="mt-6 font-semibold text-lg text-gray-900"
//       style={{ transform: "translateZ(25px)" }}
//     >
//       {s.title}
//     </h3>
//     <p
//       className="text-sm text-gray-600 mt-2"
//       style={{ transform: "translateZ(20px)" }}
//     >
//       {s.desc}
//     </p>
//   </motion.div>
// );

// export default function Services() {
//   const [isMobile, setIsMobile] = useState(false);


//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       setIsMobile(window.innerWidth < 768); 
//     }
    
//   }, []);

//   return (
//     <section id="services" className="py-20 bg-gradient-to-b from-[#e4002b0d] to-white">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//           viewport={{ once: true }}
//           className="text-5xl font-extrabold text-center text-black tracking-tight drop-shadow-md"
//         >
//           Our Premium Services
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
//           viewport={{ once: true }}
//           className="mt-4 text-center text-gray-600 max-w-2xl mx-auto text-lg font-medium"
//         >
//           Powerful, secure and visually stunning solutions—built to grow your business.
//         </motion.p>

//         {/* Desktop grid */}
//         <div
//           className="hidden md:grid mt-12 grid-cols-2 lg:grid-cols-4 gap-10"
//           style={{ perspective: "1000px" }}
//         >
//           {services.map((s, i) => (
//             <Card key={i} s={s} isMobile={false} />
//           ))}
//         </div>

//         {/* Mobile slider (auto 1.5s + swipe) */}
//         <div className="md:hidden mt-10" style={{ perspective: "1000px" }}>
//           <Swiper
//             modules={[Autoplay]}
//             spaceBetween={16}
//             slidesPerView={1.05}
//             centeredSlides={true}
//             loop={true}
//             grabCursor={true}
//             autoplay={{ delay: 1500, disableOnInteraction: false }}
//             speed={600}
//           >
//             {services.map((s, i) => (
//               <SwiperSlide key={i}>
//                 <Card s={s} isMobile={true} />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </section>
//   );
// }




// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";

// // ⚠️ Update these imports to your actual file names/paths
// import paymentGatewayLogo from "../assets/services/payment-gateway.png";
// import customDesignLogo from "../assets/services/custom-design.png";
// import graphicDesignLogo from "../assets/services/graphic-design.png";
// import shopifyLogo from "../assets/services/shopify.png";
// import smoLogo from "../assets/services/smo.png";
// import websiteMaintenanceLogo from "../assets/services/website-maintenance.png";
// import websiteDevelopmentLogo from "../assets/services/website-development.png";

// const services = [
//   {
//     title: "Payment Gateway Integration",
//     desc: "Secure, seamless checkout with Razorpay, Stripe, PayPal and more.",
//     img: paymentGatewayLogo,
//   },
//   {
//     title: "Custom Design",
//     desc: "Unique, on-brand UI/UX that delights users and drives conversions.",
//     img: customDesignLogo,
//   },
//   {
//     title: "Graphic Design",
//     desc: "Logos, banners, posters & social creatives that stand out.",
//     img: graphicDesignLogo,
//   },
//   {
//     title: "Shopify",
//     desc: "Store setup, theme customization, apps & optimization for sales.",
//     img: shopifyLogo,
//   },
//   {
//     title: "SMO",
//     desc: "Profile optimization, content strategy & growth across platforms.",
//     img: smoLogo,
//   },
//   {
//     title: "Website Maintenance",
//     desc: "Updates, backups, bug fixes & monitoring to keep things smooth.",
//     img: websiteMaintenanceLogo,
//   },
//   {
//     title: "Website Development",
//     desc: "Modern, scalable full-stack builds with clean, secure code.",
//     img: websiteDevelopmentLogo,
//   },
// ];

// const Card = ({ s, isMobile }) => (
//   <motion.div
//     initial={{
//       opacity: 0,
//       y: 30,
//       rotateY: isMobile ? 6 : 0,
//       rotateX: isMobile ? -6 : 0,
//       scale: 1.02,
//     }}
//     animate={
//       isMobile
//         ? {
//             rotateY: [6, -6, 6],
//             rotateX: [-6, 6, -6],
//             transition: { duration: 3, ease: "easeInOut", repeat: Infinity },
//           }
//         : {}
//     }
//     whileInView={{ opacity: 1, y: 0 }}
//     whileHover={{
//       rotateY: 8,
//       rotateX: -8,
//       scale: 1.05,
//       boxShadow:
//         "0 25px 50px rgba(0,0,0,0.2), 0 0 30px rgba(228,0,43,0.3)",
//     }}
//     whileTap={{
//       rotateY: 8,
//       rotateX: -8,
//       scale: 1.05,
//       boxShadow:
//         "0 25px 50px rgba(0,0,0,0.2), 0 0 30px rgba(228,0,43,0.3)",
//     }}
//     transition={{ type: "spring", stiffness: 200, damping: 15 }}
//     viewport={{ once: true }}
//     className="relative bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-100 transform-gpu"
//     style={{ transformStyle: "preserve-3d" }}
//   >
//     {/* Glow background (red theme to match your Team cards) */}
//     <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-50 via-white to-white opacity-60 blur-xl pointer-events-none"></div>

//     {/* Logo circle */}
//     <div
//       className="relative w-28 h-28 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-red-100 to-red-200 border-4 border-white shadow-xl overflow-hidden"
//       style={{ transform: "translateZ(40px)" }}
//     >
//       <img
//         src={s.img}
//         alt={s.title}
//         className="w-full h-full object-cover rounded-full"
//         loading="lazy"
//       />
//     </div>

//     <h3
//       className="mt-6 font-semibold text-lg text-gray-900"
//       style={{ transform: "translateZ(25px)" }}
//     >
//       {s.title}
//     </h3>
//     <p
//       className="text-sm text-gray-600 mt-2"
//       style={{ transform: "translateZ(20px)" }}
//     >
//       {s.desc}
//     </p>
//   </motion.div>
// );

// export default function Services() {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       setIsMobile(window.innerWidth < 768); 
//     }
//   }, []);

//   return (
//     <section id="services" className="py-20 bg-gradient-to-b from-[#e4002b0d] to-white">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//           viewport={{ once: true }}
//           className="text-5xl font-extrabold text-center text-black tracking-tight drop-shadow-md"
//         >
//           Our Premium Services
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
//           viewport={{ once: true }}
//           className="mt-4 text-center text-gray-600 max-w-2xl mx-auto text-lg font-medium"
//         >
//           Powerful, secure and visually stunning solutions—built to grow your business.
//         </motion.p>

//         {/* Desktop grid */}
//         <div
//           className="hidden md:grid mt-12 grid-cols-2 lg:grid-cols-4 gap-10"
//           style={{ perspective: "1000px" }}
//         >
//           {services.map((s, i) => (
//             <Card key={i} s={s} isMobile={false} />
//           ))}
//         </div>

//         {/* Mobile grid (all cards visible in row) */}
//         <div className="md:hidden mt-10 flex flex-row gap-4 overflow-x-auto px-2">
//           {services.map((s, i) => (
//             <Card key={i} s={s} isMobile={true} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// ⚠️ Update these imports to your actual file names/paths
import paymentGatewayLogo from "../assets/services/payment-gateway.png";
import customDesignLogo from "../assets/services/custom-design.png";
import graphicDesignLogo from "../assets/services/graphic-design.png";
import shopifyLogo from "../assets/services/shopify.png";
import smoLogo from "../assets/services/smo.png";
import websiteMaintenanceLogo from "../assets/services/website-maintenance.png";
import websiteDevelopmentLogo from "../assets/services/website-development.png";

const services = [
  {
    title: "Payment Gateway Integration",
    desc: "Secure, seamless checkout with Razorpay, Stripe, PayPal and more.",
    img: paymentGatewayLogo,
  },
  {
    title: "Custom Design",
    desc: "Unique, on-brand UI/UX that delights users and drives conversions.",
    img: customDesignLogo,
  },
  {
    title: "Graphic Design",
    desc: "Logos, banners, posters & social creatives that stand out.",
    img: graphicDesignLogo,
  },
  {
    title: "Shopify",
    desc: "Store setup, theme customization, apps & optimization for sales.",
    img: shopifyLogo,
  },
  {
    title: "SMO",
    desc: "Profile optimization, content strategy & growth across platforms.",
    img: smoLogo,
  },
  {
    title: "Website Maintenance",
    desc: "Updates, backups, bug fixes & monitoring to keep things smooth.",
    img: websiteMaintenanceLogo,
  },
  {
    title: "Website Development",
    desc: "Modern, scalable full-stack builds with clean, secure code.",
    img: websiteDevelopmentLogo,
  },
];

const Card = ({ s, isMobile }) => (
  <motion.div
    initial={{
      opacity: 0,
      y: 30,
      rotateY: isMobile ? 6 : 0,
      rotateX: isMobile ? -6 : 0,
      scale: 1.02,
    }}
    animate={
      isMobile
        ? {
            rotateY: [6, -6, 6],
            rotateX: [-6, 6, -6],
            transition: { duration: 3, ease: "easeInOut", repeat: Infinity },
          }
        : {}
    }
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{
      rotateY: 8,
      rotateX: -8,
      scale: 1.05,
      boxShadow:
        "0 25px 50px rgba(0,0,0,0.2), 0 0 30px rgba(228,0,43,0.3)",
    }}
    whileTap={{
      rotateY: 8,
      rotateX: -8,
      scale: 1.05,
      boxShadow:
        "0 25px 50px rgba(0,0,0,0.2), 0 0 30px rgba(228,0,43,0.3)",
    }}
    transition={{ type: "spring", stiffness: 200, damping: 15 }}
    viewport={{ once: true }}
    className="relative bg-[#fdf2e8] rounded-2xl shadow-lg p-6 text-center border border-[#e0cfc2] transform-gpu"
    style={{ transformStyle: "preserve-3d" }}
  >
    {/* Glow background */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-50 via-white to-white opacity-40 blur-xl pointer-events-none"></div>

    {/* Logo circle */}
    <div
      className="relative w-28 h-28 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-red-100 to-red-200 border-2 border-[#e0cfc2] shadow-xl overflow-hidden"
      style={{ transform: "translateZ(40px)" }}
    >
      <img
        src={s.img}
        alt={s.title}
        className="w-full h-full object-cover rounded-full"
        loading="lazy"
      />
    </div>

    <h3
      className="mt-6 font-semibold text-lg text-gray-900"
      style={{ transform: "translateZ(25px)" }}
    >
      {s.title}
    </h3>
    <p
      className="text-sm text-gray-600 mt-2"
      style={{ transform: "translateZ(20px)" }}
    >
      {s.desc}
    </p>

    {/* Hire button */}
    <a
      href="#contact"
      className="mt-4 inline-block px-6 py-2 rounded-full bg-red-500 text-white font-semibold hover:bg-red-600 transition-colors duration-300"
    >
      Hire
    </a>
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
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold text-center text-black tracking-tight drop-shadow-md"
        >
          Our Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-4 text-center text-gray-700 max-w-2xl mx-auto text-lg font-medium"
        >
          Powerful, secure and visually stunning solutions—built to grow your business.
        </motion.p>

        {/* Desktop grid */}
        <div
          className="hidden md:grid mt-12 grid-cols-2 lg:grid-cols-4 gap-8"
          style={{ perspective: "1000px" }}
        >
          {services.map((s, i) => (
            <Card key={i} s={s} isMobile={false} />
          ))}
        </div>

        {/* Mobile grid */}
        <div className="md:hidden mt-10 flex flex-row gap-4 overflow-x-auto px-2">
          {services.map((s, i) => (
            <Card key={i} s={s} isMobile={true} />
          ))}
        </div>
      </div>
    </section>
  );
}

