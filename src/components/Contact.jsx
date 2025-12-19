import { motion } from "framer-motion";
import "../styles/Contact.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";


function Contact () {
    return (
        <section id="contact" className="contact">
            <motion.h2
            initial = {{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}>
                Contact
            </motion.h2>
            <motion.p
            initial = {{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{delay: 0.2}}>
                Feel free to reach out for collaborations or opportunities.
            </motion.p>
            <div className="contact-links">
                <a href="mailto:yashkulkarni025@gmail.com"> <FaEnvelope /> Email</a>
                <a href="https://github.com/YashLibert"><FaGithub /> GitHub</a>
                <a href="https://www.linkedin.com/in/yash-kulkarni-703414290/"><FaLinkedin /> LinkedIn</a>
            </div>
        </section>
    );
}


export default Contact;