import {motion} from 'framer-motion';
import { useState, useEffect } from "react";
import "../styles/Hero.css";
import profile from "../assets/profile.png";


const roles = ["React Developer", "MERN Stack Developer", "Mechanical Engineer"];

function Hero() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!deleting && subIndex < roles[index].length) {
        setText(roles[index].substring(0, subIndex + 1));
        setSubIndex(subIndex + 1);
      } else if (deleting && subIndex > 0) {
        setText(roles[index].substring(0, subIndex - 1));
        setSubIndex(subIndex - 1);
      } else if (!deleting && subIndex === roles[index].length) {
        setTimeout(() => setDeleting(true), 1200);
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((index + 1) % roles.length);
      }
    }, deleting ? 60 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  return (
    <section className="hero">
      <motion.img
        src={profile}
        alt="Profile"
        className="hero-img"
        initial={{ opacity: 0, scale: 0.85, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      />

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Hi, I’m <span>Yash</span>
      </motion.h1>

      <motion.p
        className="hero-tagline"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
      >
        I build clean, responsive web interfaces using React, with basic experience in full-stack development using the MERN stack.
      </motion.p>

      <motion.h2
        className="typing"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {text}
        <span className="cursor">|</span>
      </motion.h2>

      <motion.div
        className="hero-actions"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65 }}
      >
        <a href="/resume.pdf" download className="primary-btn">
          Download Resume
        </a>
        <a href="https://github.com/YashLibert" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/yash-kulkarni-703414290/" target="_blank">LinkedIn</a>
      </motion.div>

      <div className="scroll-down">↓</div>
    </section>
  );
}

export default Hero;