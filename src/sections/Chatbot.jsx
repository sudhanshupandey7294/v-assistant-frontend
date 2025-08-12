// src/sections/Chatbot.jsx
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';



function getSessionId() {
  let sid = localStorage.getItem('dservices_chat_session');
  if (!sid) {
    // use crypto.randomUUID if available:
    sid = (typeof crypto !== 'undefined' && crypto.randomUUID) ? crypto.randomUUID() : 'sess_' + Date.now() + '_' + Math.floor(Math.random()*10000);
    localStorage.setItem('dservices_chat_session', sid);
  }
  return sid;
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]); // { role, content }
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const sessionIdRef = useRef(getSessionId());
  const chatBoxRef = useRef(null);

  useEffect(() => {
    // optional: load recent conversation (you could create a GET /api/chat/history endpoint)
    // for now we just start empty
  }, []);

  useEffect(() => {
    // scroll to bottom on new message
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight + 100;
    }
  }, [messages, open]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user', content: input.trim() };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    setLoading(true);

    try {
        const base = process.env.REACT_APP_API_URL || "";
    //   const res = await axios.post( 'https://dbackend-one.vercel.app/api/chat', {
    const res = await axios.post(`${base}/api/chat`, {
        message: userMsg.content,
        sessionId: sessionIdRef.current
      });
      const assistantReply = res.data?.reply || 'Sorry, no reply.';
      setMessages((m) => [...m, { role: 'assistant', content: assistantReply }]);
    } catch (err) {
      console.error('Chat error', err);
      setMessages((m) => [...m, { role: 'assistant', content: 'Sorry — something went wrong. Try again later.' }]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage();
  };

  return (
    <>
      {/* Floating bubble */}
      <div className="fixed bottom-6 left-6 z-50">
        <AnimatePresence>
          {!open && (
            <motion.button
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300 }}
              onClick={() => setOpen(true)}
              className="relative rounded-full p-3 bg-gradient-to-br from-green-400 to-green-600 text-white shadow-2xl border-4 border-white hover:scale-105 transform transition"
            >
              {/* glowy ring */}
              <span className="absolute -inset-2 rounded-full bg-green-400 opacity-20 blur-xl animate-pulse"></span>

              <FaRobot size={24} className="relative z-10" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-6 left-6 z-50 w-[320px] md:w-[420px] bg-gradient-to-tr from-white/80 to-white/70 backdrop-blur-lg rounded-xl shadow-2xl border border-white/30 overflow-hidden"
          >
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <FaRobot size={18} />
                </div>
                <div>
                  <div className="font-semibold">D -SERVICES AI</div>
                  <div className="text-xs opacity-80">We’re here to help — ask anything</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => { setOpen(false); }}
                  className="bg-white/20 hover:bg-white/30 p-2 rounded-md"
                  aria-label="Close chat"
                >
                  <FaTimes />
                </button>
              </div>
            </div>

            {/* messages */}
            <div ref={chatBoxRef} className="h-64 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-white/80 to-white/60">
              {messages.length === 0 && (
                <div className="text-center text-sm text-gray-500">Hi 👋 — ask me about our services or joining D -SERVICES.</div>
              )}

              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`${m.role === 'user' ? 'bg-blue-600 text-white rounded-xl rounded-tr-none' : 'bg-gray-100 text-gray-800 rounded-xl rounded-tl-none'} max-w-[80%] px-3 py-2 text-sm shadow`}>
                    {m.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-800 rounded-xl px-3 py-2 text-sm shadow animate-pulse">Thinking…</div>
                </div>
              )}
            </div>

            {/* input */}
            <form onSubmit={handleSubmit} className="p-3 bg-white/80 flex items-center gap-2">
              <input
                className="flex-1 px-3 py-2 rounded-lg border border-gray-200 focus:outline-none"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={loading}
              />
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-md disabled:opacity-60"
                disabled={loading}
                aria-label="Send message"
              >
                <FaPaperPlane />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}