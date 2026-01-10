import { motion } from "framer-motion";
import projects from "../data/projects";
import "../styles/Projects.css";


function Projects() {
    return (
        <section id="projects" className="projects">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}>
                Projects
            </motion.h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="project-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -10, scale: 1.02 }}
                        viewport={{ once: true }}>
                        <div className="project-image-wrapper">
                            <img src={project.image}
                                alt={project.title}
                                className="project-img"
                            />
                        </div>
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-links">
                                <a href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    View on GitHub →
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}


export default Projects;