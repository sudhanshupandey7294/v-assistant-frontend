// src/components/ServicesPricing.jsx
import React from "react";
import { motion } from "framer-motion";

const pricing = [
  {
    service: "Website Development",
    scope: "Custom website design & development",
    price: "Starting at $300",
  },
  {
    service: "Website Maintenance",
    scope: "Four updates per month included",
    price: "$100 / month",
  },
  {
    service: "Email Management",
    scope: "100 emails/day (client provides data)",
    price: "$10 / day",
  },
  {
    service: "Cold Calling",
    scope: "50 calls/day",
    price: "$30 / day",
  },
  {
    service: "Graphic Designing",
    scope: "Social media posts & reels",
    price: "$8 / post, $9 / reel",
  },
  {
    service: "Social Media Marketing",
    scope: "Scheduling up to 20 posts + 4 reels per day",
    price: "$30 / day",
  },
  {
    service: "Content Creation",
    scope: "Blog posts, captions, or marketing copy",
    price: "$15 / content piece",
  },
];

export default function ServicesPricing() {
  return (
    <section id="pricing" className="py-16 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Services & Pricing
        </motion.h2>

        {/* Pricing Table */}
        <div className="overflow-x-auto shadow-xl rounded-2xl">
          <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden">
            <thead className="bg-[#003366] text-white text-left">
              <tr>
                <th className="py-4 px-6">Service</th>
                <th className="py-4 px-6">Scope / Notes</th>
                <th className="py-4 px-6">Price</th>
              </tr>
            </thead>
            <tbody>
              {pricing.map((item, index) => (
                <motion.tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-50"
                  whileHover={{
                    scale: 1.01,
                    backgroundColor: "rgba(0, 242, 255, 0.05)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <td className="py-4 px-6 font-semibold">{item.service}</td>
                  <td className="py-4 px-6">{item.scope}</td>
                  <td className="py-4 px-6 text-[#003366] font-bold">
                    {item.price}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
