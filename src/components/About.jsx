import { motion } from "framer-motion";
import "../styles/About.css";

function About() {
    return (
        <section id="about" className="about">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                About Me </motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}>
                Hi, I’m Yash, a Mechanical Engineering student passionate about software development. I build modern, responsive web applications using React and have experience with backend development, allowing me to work across the MERN stack.

I enjoy creating real-world projects, learning new technologies, and continuously improving my skills to meet industry standards. My goal is to grow into a strong full-stack developer and build scalable, impactful software. </motion.p>
        </section>
    );
}

export default About;