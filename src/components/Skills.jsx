import { motion } from "framer-motion";
import skills from "../data/skills";
import "../styles/Skills.css";

function Skills(){
    return (
        <section id="skills" className="skills">
            <motion.h2
            initial = {{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}>
                Skills
            </motion.h2>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <motion.div
                    key={index}
                    className="skill-card"
                    whileHover={{scale: 1.1}}
                    transition={{type: "spring", stiffness: 300}}>
                        {skill}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}


export default Skills;