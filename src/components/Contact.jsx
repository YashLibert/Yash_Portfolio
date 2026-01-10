import { motion } from "framer-motion";
import "../styles/Contact.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";


function Contact () {
    const contactLinks = [
        {
            icon: <FaEnvelope />,
            label: "Email",
            href: "mailto:yashkulkarni025@gmail.com",
            text: "yashkulkarni025@gmail.com"
        },
        {
            icon: <FaGithub />,
            label: "GitHub",
            href: "https://github.com/YashLibert",
             text: "YashLibert"
        },
        {
            icon: <FaLinkedin />,
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/yash-kulkarni-703414290/",
            text: "Yash Kulkarni"   
        },
    ];

    return (
        <section id="contact" className="contact">
          <motion.div
          className="contact-container"
          initial = {{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.6}}
          viewport={{once: true}}>

            <motion.h2
            initial = {{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}>
                Get In Touch
            </motion.h2>
            <motion.p
            className="contact-subtitle"
            initial = {{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{delay: 0.2, duration: 0.6}}
            viewport={{once: true}}>
                Feel free to reach out for collaborations or opportunities.
            </motion.p>

            <div className="contact-links">
            {contactLinks.map((link,index) => (
                <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                initial = {{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{delay: 0.3 + index * 0.1, duration: 0.5}}
                whileHover={{y: -5, scale: 1.05}}
                viewport={{once: true}}>
                    
                    <div className="contact-icon">{link.icon}</div>
                    <div className="contact-info">
                    <span className="contact-label">{link.label}</span>
                    <span className="contact-text">{link.text}</span>
                    </div>
                </motion.a>
            ))}
            </div>

            <motion.div
            className="contact-footer"
            initial = {{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{delay: 0.8, duration: 0.6}}
            viewport={{once: true}}>
                <p>Let's build something amazing together! 🚀</p>
            </motion.div>
          </motion.div>
        </section>
    );
}


export default Contact;