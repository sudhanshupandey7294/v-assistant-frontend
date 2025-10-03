
import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { icon: FaFacebook, url: "https://facebook.com/yourpage", color: "#1877F2" },
    { icon: FaLinkedin, url: "https://www.linkedin.com/company/a9va/"
, color: "#0A66C2" },
    { icon: FaTwitter, url: "https://twitter.com/yourcompany", color: "#1DA1F2" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-950 to-black text-gray-300 py-12">
      {/* Floating glow circles */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-red-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-cyan-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        
        {/* Brand Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white tracking-wide drop-shadow-lg">
            VirtualAssist Pro
          </h3>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Providing skilled, reliable, and efficient virtual assistants so you
            can focus on growing your business with ease.
          </p>
        </motion.div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-white mb-4 text-lg relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-red-500 after:animate-pulse">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            {["Services", "Team", "Testimonials", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-white transition duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-white mb-4 text-lg relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-cyan-400 after:animate-pulse">
            Contact
          </h4>
          <p className="text-sm">📧 deepakv@a9va.com</p>
          <p className="text-sm">📞 +15129385516</p>
          <p className="text-sm mt-2">📍 30 N Gould St Ste R, Sheridan, WY 82801</p>

          {/* Social Icons */}
          <div className="flex space-x-5 mt-5">
            {socialLinks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 8 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                >
                  {/* Glow Circle */}
                  <span
                    className="absolute inset-0 rounded-full blur-md opacity-50 group-hover:opacity-100 transition"
                    style={{ backgroundColor: item.color }}
                  ></span>
                  {/* Icon */}
                  <Icon
                    size={22}
                    className="relative text-white drop-shadow-md group-hover:text-black transition-colors duration-300"
                    style={{ backgroundColor: item.color, padding: "6px", borderRadius: "50%" }}
                  />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-5 relative z-10">
        © {new Date().getFullYear()} <span className="text-white">VirtualAssist Pro</span>. All rights reserved.
      </div>
    </footer>
  );
}
