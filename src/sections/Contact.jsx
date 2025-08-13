// import React, { useState } from 'react'
// import axios from 'axios'

// export default function Contact(){
//   const [form, setForm] = useState({ name:'', email:'', company:'', role:'', message:'' })
//   const [status, setStatus] = useState({ loading:false, msg:'', error:false })

//   function onChange(e){
//     setForm(f=>({ ...f, [e.target.name]: e.target.value }))
//   }

//   async function onSubmit(e){
//     e.preventDefault()
//     setStatus({ loading:true, msg:'', error:false })
//     try{
//       const base = process.env.REACT_APP_API_URL || ''
//       const res = await axios.post(`${base}/api/contact`, form, { headers:{ 'Content-Type': 'application/json' } })
//       setStatus({ loading:false, msg: res.data.message || 'Thanks — we will contact you shortly.', error:false })
//       setForm({ name:'', email:'', company:'', role:'', message:'' })
//     }catch(err){
//       console.error(err)
//       setStatus({ loading:false, msg: err.response?.data?.error || 'Submission failed. Try again later.', error:true })
//     }
//   }

//   return (
//     <section id="contact" className="py-16 bg-gray-50">
//       <div className="max-w-3xl mx-auto px-6">
//         <h2 className="text-2xl font-semibold">Share your requirements</h2>
//         <p className="text-gray-600 mt-2">Tell us which assistant you need — we will propose matches.</p>

//         <form onSubmit={onSubmit} className="mt-6 grid gap-3">
//           <input name="name" value={form.name} onChange={onChange} placeholder="Your name*" className="border rounded px-4 py-2" required />
//           <input name="email" value={form.email} onChange={onChange} placeholder="Email*" className="border rounded px-4 py-2" type="email" required />
//           <input name="company" value={form.company} onChange={onChange} placeholder="Company" className="border rounded px-4 py-2" />
//           <select name="role" value={form.role} onChange={onChange} className="border rounded px-4 py-2">
//             <option value="">Select role (optional)</option>
//             <option>Administrative</option>
//             <option>Customer Support</option>
//             <option>Lead Generation</option>
//             <option>Accounting</option>
//           </select>
//           <textarea name="message" value={form.message} onChange={onChange} rows="4" placeholder="Tell us more" className="border rounded px-4 py-2" />

//           <div className="flex items-center gap-4">
//             <button type="submit" className="btn-primary" disabled={status.loading}>{status.loading ? 'Sending...' : 'Send request'}</button>
//             <div className={`text-sm ${status.error ? 'text-red-600' : 'text-gray-600'}`}>{status.msg}</div>
//           </div>
//         </form>
//       </div>
//     </section>
//   )
// }

import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    message: "",
  });
  const [status, setStatus] = useState({ loading: false, msg: "", error: false });

  function onChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ loading: true, msg: "", error: false });
    try {
      const base = process.env.REACT_APP_API_URL || "";
      const res = await axios.post(`${base}/api/contact`, form, {
        headers: { "Content-Type": "application/json" },
      });
      setStatus({
        loading: false,
        msg: res.data.message || "Thanks — we will contact you shortly.",
        error: false,
      });
      setForm({ name: "", email: "", company: "", role: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus({
        loading: false,
        msg: err.response?.data?.error || "Submission failed. Try again later.",
        error: true,
      });
    }
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const inputClasses =
    "border border-gray-300 rounded-xl px-4 py-3 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-200";

  return (
    <motion.section
      id="contact"
      className="py-20 relative"
      style={{
        backgroundColor: "rgba(228, 0, 43, 0.08)", // low-opacity #e4002b like Team.jsx
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-3xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold text-center text-black tracking-tight drop-shadow-md"
        >
          Share Your Requirements
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-4 text-center text-gray-800 max-w-2xl mx-auto text-lg font-medium"
        >
          Tell us which assistant you need — we will propose the perfect matches.
        </motion.p>

        {/* Contact Form */}
        <motion.form
          onSubmit={onSubmit}
          className="mt-10 grid gap-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <input
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder="Your Name*"
            className={inputClasses}
            required
          />
          <input
            name="email"
            value={form.email}
            onChange={onChange}
            placeholder="Email*"
            type="email"
            className={inputClasses}
            required
          />
          <input
            name="company"
            value={form.company}
            onChange={onChange}
            placeholder="Company"
            className={inputClasses}
          />
          <select
            name="role"
            value={form.role}
            onChange={onChange}
            className={inputClasses}
          >
            <option value="">Select role (optional)</option>
            <option>Payment Gateway Integration</option>
            <option>Custom Design</option>
            <option>Graphic Design</option>
            <option>Shopify</option>
            <option>Website Maintainance</option>
            <option>Website Development</option>
            <option>SMO</option>
          </select>
          <textarea
            name="message"
            value={form.message}
            onChange={onChange}
            rows="4"
            placeholder="Tell us more"
            className={`${inputClasses} resize-none`}
          />

          {/* Button & Status */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <motion.button
              type="submit"
              disabled={status.loading}
              whileHover={{ scale: 1.05, backgroundColor: "#b91c1c" }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition-colors duration-300"
            >
              {status.loading ? "Sending..." : "Send Request"}
            </motion.button>
            <motion.div
              className={`text-sm ${status.error ? "text-red-600" : "text-gray-700"}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {status.msg}
            </motion.div>
          </div>
        </motion.form>
      </div>
    </motion.section>
  );
}
