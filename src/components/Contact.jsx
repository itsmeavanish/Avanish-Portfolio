import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [color,setcolor]=useState("orange")
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const API_BASE = import.meta.env.VITE_API_BASE_URL || "https://avanish-portfolio-ten.vercel.app";

  const isValidEmail = (value) => /.+@.+\..+/.test(value);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      alert("Please fill out all fields.");
      return;
    }
    if (!isValidEmail(form.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    setLoading(true);
  
    try {
      const response = await fetch(`${API_BASE}/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
  
      if (response.ok) {
        alert("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("❌ Failed to send message. Try again later.");
      }
    } catch (error) {
      console.error(error);
      alert("⚠️ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  


  return (
    <div
      className={`mt-6 xl:mt-8 flex xl:flex-row flex-col gap-6 overflow-hidden w-full max-w-6xl mx-auto px-4`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.7] bg-gradient-to-br from-[#0b0b0f]/80 to-[#151528]/80 p-6 rounded-2xl backdrop-blur-md border border-white/10 shadow-lg shadow-black/30'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText} text-[36px] leading-tight`}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-6 flex flex-col gap-5'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary/80 py-3 px-5 placeholder:text-secondary text-white rounded-lg outline-none border border-white/10 focus:border-primary/60 focus:ring-2 focus:ring-primary/30 transition-all font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary/80 py-3 px-5 placeholder:text-secondary text-white rounded-lg outline-none border border-white/10 focus:border-primary/60 focus:ring-2 focus:ring-primary/30 transition-all font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={5}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary/80 py-3 px-5 placeholder:text-secondary text-white rounded-lg outline-none border border-white/10 focus:border-primary/60 focus:ring-2 focus:ring-primary/30 transition-all font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:shadow-lg hover:scale-[1.02] active:scale-[0.99] transition-transform'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='flex-1 min-h-[260px] bg-gradient-to-br from-[#101018]/70 to-[#12122a]/70 rounded-2xl p-6 backdrop-blur-md border border-white/10 shadow-lg shadow-black/30'
      >
        <div className='h-full flex flex-col justify-center'>
          <h4 className='text-white text-[22px] font-semibold mb-2'>Let's Connect</h4>
          <p className='text-secondary text-[14px] leading-relaxed mb-4'>
            Prefer email? Reach me directly or find me on socials below.
          </p>
          <a href='mailto:avanishupadhyay633@gmail.com' className='text-[14px] text-white/90 underline underline-offset-4 mb-4 w-fit'>
            avanishupadhyay633@gmail.com
          </a>
          <div className='flex items-center gap-4 mt-2'>
            <a href='https://github.com/itsmeavanish' target='_blank' rel='noreferrer' className='opacity-90 hover:opacity-100 transition-opacity'>
              <img src='/icons/github.svg' alt='github' className='w-6 h-6' />
            </a>
            <a href='https://www.linkedin.com/in/avanish633/' target='_blank' rel='noreferrer' className='opacity-90 hover:opacity-100 transition-opacity'>
              <img src='/icons/linkedin.svg' alt='linkedin' className='w-6 h-6' />
            </a>
            <a href='https://www.instagram.com/theycallmeavanish/?hl=en' target='_blank' rel='noreferrer' className='opacity-90 hover:opacity-100 transition-opacity'>
              <img src='/icons/instagram.svg' alt='instagram' className='w-6 h-6' />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
