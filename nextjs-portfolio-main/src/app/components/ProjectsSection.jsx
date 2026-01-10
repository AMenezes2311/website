"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Face Encrypt",
    description: `Software responsible for data protection by combining facial recognition and encryption, 
    ensuring secure access to sensitive directories. Ideal for both personal and professional use.`,
    image: "/images/projects/1.png",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Soccer World Website",
    description: `The Soccer World is connected to two brother websites. New features were added to the websites 
    (such a program filtering, newsletter, and weather information). Most importantly, adjusted the websites to function as a unified 
    digital ecosystem.\n
    *Source code not public`,
    image: "/images/projects/2.png",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Fairness Analysis in FER",
    description:
      "This project investigates fairness and demographic bias in facial emotion recognition systems. A CNN-based model was trained and evaluated on the FER2013 dataset, with a custom analysis pipeline used to measure performance disparities across demographic groups. The results highlight how aggregate accuracy can obscure systematic bias in real-world AI systems.",
    image: "/images/projects/3.png",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "/",
    backgroundPosition: "50%",
  },
  {
    id: 4,
    title: "Deep Learning for Skin Lesion Classification",
    description:
      "This project applies deep learning to classify skin lesions as malignant or benign using dermoscopic images. A CNN with transfer learning was trained on the ISIC dataset, with performance evaluated using ROC-AUC and validation accuracy to assess clinical screening potential.",
    image: "/images/projects/4.png",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "CS2 Charm Finder",
    description:
      "A web application that fetches and displays CS2 tournament charms. Search for charms by player name, filter and sort results by price or title, and export data to CSV. Built with Next.js and features a clean, responsive interface with card and table views.",
    image: "/images/projects/5.png",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "/",
    backgroundPosition: "55% center",
  },
  {
    id: 6,
    title: "CS2 Pattern Finder",
    description:
      "A full-stack web application that identifies rare CS2 knife pattern seeds currently listed for sale. The app cross-references predefined pattern tiers with live CSFloat market data, allowing users to filter by knife type, finish, tier, and float value. Built with FastAPI and React, featuring resilient API handling, rate-limit retries, and a modern responsive UI.",
    image: "/images/projects/6.png",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "/",
    backgroundPosition: "55% center",
    backgroundSize: "225%",
  },
  {
    id: 7,
    title: "AI Receipt Tracker",
    description:
      "A Next.js + Supabase web app that turns receipt photos into structured transactions using AI, with secure login, private image storage, and a transaction history where users can review, correct, and manage extracted merchant/date/category/amount details.",
    image: "/images/projects/7.png",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "CS2 Skin Matcher",
    description:
      "Suggests matching CS2 knife and glove skins using computer-vision embeddings. Images are preprocessed, embedded with pretrained models (ResNet/CLIP), and compared via cosine similarity to rank the closest matches. Includes batch embedding generation, similarity search, and boosting.",
    image: "/images/projects/8.png",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "/",
    backgroundPosition: "90% center",
  },
  {
    id: 9,
    title: "Real-time Image Classification Web App",
    description:
      "Lightweight computer-vision app showcasing transfer learning in practice with MobileNetV2, fast preprocessing (OpenCV/NumPy), and cached model loading for smooth UX.",
    image: "/images/projects/9.png",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "/",
    backgroundSize: "255%",
    backgroundPosition: "90% center",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6"></div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              backgroundSize={project.backgroundSize}
              backgroundPosition={project.backgroundPosition}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
