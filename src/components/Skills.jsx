import { motion } from "framer-motion";
import skills from "../data/skills";
import "../styles/Skills.css";

function Skills() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1, y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section id="skills" className="skills">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}>
                Skills & Technologies
            </motion.h2>

            <motion.p
                className="skills-subtitle"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}>
                Technologies I work with to bring ideas to life
            </motion.p>

            <motion.div
                className="skills-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}>
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="skill-card"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, y: -5, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                        whileTap={{ scale: 0.95 }}>
                        <div className="skill-content">
                            <span className="skill-name">{skill}</span>
                        </div>
                        <div className="skill-glow"></div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}


export default Skills;