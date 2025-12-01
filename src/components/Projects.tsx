import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import iotImage from "@/assets/iot-projects.jpg";
import glideImage from "@/assets/glide-projects.jpg";
import bubbleImage from "@/assets/bubble-projects.jpg";
import softrImage from "@/assets/softr-projects.jpg";
import loveableImage from "@/assets/loveable-projects.jpg";
import cursorImage from "@/assets/cursor-projects.jpg";
import vlsiImage from "@/assets/vlsi-projects.jpg";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "IoT Projects",
      image: iotImage,
      description: "Smart connected devices and sensor networks"
    },
    {
      title: "Glide Projects",
      image: glideImage,
      description: "No-code mobile app development"
    },
    {
      title: "Bubble Projects",
      image: bubbleImage,
      description: "Full-stack web applications without code"
    },
    {
      title: "Softr Projects",
      image: softrImage,
      description: "Client portals and internal tools"
    },
    {
      title: "Loveable.dev Projects",
      image: loveableImage,
      description: "AI-powered development solutions"
    },
    {
      title: "Cursor + MCP Projects",
      image: cursorImage,
      description: "Next-gen AI coding assistance"
    },
    {
      title: "VLSI Projects",
      image: vlsiImage,
      description: "Chip design and semiconductor solutions"
    }
  ];

  return (
    <section id="projects" className="py-20 gradient-hero">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display text-center mb-4 text-gradient">
            Projects
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-12 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group gradient-card rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:glow-primary"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-display mb-2 text-primary group-hover:text-gradient transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
