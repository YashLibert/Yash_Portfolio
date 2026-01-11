import {motion} from 'framer-motion';
import { useState, useEffect } from "react";
import "../styles/Hero.css";
import profile from "../assets/profile_img.png";


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
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>

      <div className="hero-content">
        <motion.div
          className="hero-img-wrapper"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}>
          <img
            src={profile}
            alt="Yash Kulkarni - Profile"
            className="hero-img"
          />
          <div className="img-ring"></div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}>
          Hi, I'm <span className="name-highlight">Yash</span>
        </motion.h1>

        <motion.h2
          className="typing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}>
          <span className="typing-prefix">A </span>
          {text}
          <span className="cursor">|</span>
        </motion.h2>

        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}>
          I build clean, responsive web interfaces using React, with experience in 
          full-stack development using the MERN stack. Passionate about creating 
          intuitive user experiences.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}>
          <a href="/resume.pdf" download className="primary-btn">
            <span>Download Resume</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1V11M8 11L11 8M8 11L5 8M2 14H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="https://github.com/YashLibert" target="_blank" rel="noopener noreferrer" className="secondary-btn">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/yash-kulkarni-703414290/" target="_blank" rel="noopener noreferrer" className="secondary-btn">
            LinkedIn
          </a>
          <a href="https://leetcode.com/u/yashkulkarni025/" target="_blank" rel="noopener noreferrer" className="secondary-btn">
            LeetCode
          </a>
        </motion.div>
      </div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}>
        <div className="scroll-down">
          <span>Scroll Down</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 4V16M10 16L6 12M10 16L14 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;