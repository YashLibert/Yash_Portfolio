import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";

const projects = [
    {
        title: "React Portfolio Website",
        description: "A personal portfolio website built using React to showcase my projects and skills.",
        image: project1,
        github: "https://github.com/YashLibert/Yash_Portfolio",
    },

    {
        title: "Intellligent Pesticide System",
        description: "An AI-powered smart agriculture system that detects plant diseases from images and optimizes pesticide usage, with blockchain-based spray record transparency.",
        image: project2,
        github: "https://github.com/YashLibert/Intelligent-Pesticide-System",
    },

    {
        title: "OralAI-Oral Cancer Triage System",
        description: "AI triage engine combining EfficientNet image classification with lifestyle risk scoring to automate oral cancer screening in rural camps — 96.2% accuracy, < 8s response, 70–80% specialist workload reduction.",
        image: project3,
        github: "https://github.com/YashLibert/ai-oral-cancer-triage",
    },

    {
        title: "AgriLink-AI-Powered Agri Value Chain Platform",
        description: "AgriLink, an AI-powered agri value chain platform with XGBoost price prediction (R²=0.898), demand forecasting, blockchain traceability, and an Export Adviser connecting Maharashtra farmers to global markets.",
        image: project4,
        github: "https://github.com/AeroNexis/Agri-Link",
    }
];

export default projects;