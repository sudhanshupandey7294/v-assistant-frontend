import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const steps = [
  {
    title: 'Tell Us Your Needs 📝',
    description:
      'Fill out a quick form so we understand your business requirements and goals.',
  },
  {
    title: 'We Match the Right VA 🤝',
    description:
      'Based on your needs, we connect you with a skilled and vetted virtual assistant.',
  },
  {
    title: 'Start Delegating 🚀',
    description:
      'Begin assigning tasks and enjoy more free time to focus on growth.',
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="py-20 relative overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, rgba(228,0,43,0.07) 0%, rgba(228,0,43,0.15) 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold text-center text-black relative"
        >
          <span className="relative z-10">
            ✨ How It Works ✨
          </span>
        </motion.h2>

        {/* Steps */}
        <div className="mt-14 grid gap-10 grid-cols-1 sm:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -8,
                scale: 1.05, // Only smooth motion, no glow
              }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-lg relative overflow-hidden"
            >
              {/* Floating blurred light removed */}

              {/* Icon */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-gray-500 to-gray-700 shadow-md"
              >
                <CheckCircleIcon className="w-10 h-10 text-white" />
              </motion.div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-bold text-gray-900">{step.title}</h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
