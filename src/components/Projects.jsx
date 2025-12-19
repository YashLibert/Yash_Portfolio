import { motion } from "framer-motion";
import projects from "../data/projects";
import "../styles/Projects.css";
import { section } from "framer-motion/client";

function Projects() {
    return (
        <section id="projects" className="projects">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}>
                Projects
            </motion.h2>
            <div className="project-card">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="project-card"
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.3 }}>
                        <img src={project.image} alt= {project.title} className="project-img" />    
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="project-links">
                            <a href={project.github} target="_blank">Github</a>
                            <a href={project.live} target="_blank">Live</a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}


export default Projects;