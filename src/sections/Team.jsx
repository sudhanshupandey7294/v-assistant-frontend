import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  BanknotesIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";

const teamMembers = [
  { name: "Anita Sharma", role: "Accounting VA", icon: BanknotesIcon },
  { name: "Akash Mehra", role: "Social Media VA", icon: ChatBubbleLeftRightIcon },
  { name: "Binoy Patel", role: "Data Entry VA", icon: DocumentTextIcon },
  { name: "Ranjan Verma", role: "Lead Generation VA", icon: UsersIcon },
];

export default function Team() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);
    }
  }, []);

  return (
    <section
      id="team"
      className="py-20 relative"
      style={{ backgroundColor: "#e4002b" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold text-center text-black tracking-tight drop-shadow-md"
        >
          Meet Our Team
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-4 text-center text-gray max-w-2xl mx-auto text-lg font-medium"
        >
          Our virtual assistants are handpicked, vetted, and trained to deliver
          exceptional results in their respective fields.
        </motion.p>

        {/* Team Cards */}
        <div
          className="mt-12 grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
          style={{ perspective: "1000px" }}
        >
          {teamMembers.map((member, index) => {
            const Icon = member.icon;
            return (
              <motion.div
                key={index}
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
                        transition: {
                          duration: 3,
                          ease: "easeInOut",
                        },
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
                className="relative bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-100 transform-gpu"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Glow background */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-50 via-white to-white opacity-60 blur-xl pointer-events-none"></div>

                {/* Icon Circle */}
                <div
                  className="relative w-28 h-28 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-red-100 to-red-200 border-4 border-white shadow-xl"
                  style={{ transform: "translateZ(40px)" }}
                >
                  <Icon className="w-12 h-12 text-red-500 drop-shadow-lg" />
                </div>

                {/* Name */}
                <h3
                  className="mt-6 font-semibold text-lg text-gray-900"
                  style={{ transform: "translateZ(25px)" }}
                >
                  {member.name}
                </h3>

                {/* Role */}
                <p
                  className="text-sm text-gray-500"
                  style={{ transform: "translateZ(20px)" }}
                >
                  {member.role}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
