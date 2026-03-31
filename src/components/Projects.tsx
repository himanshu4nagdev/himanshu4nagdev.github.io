import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import iotImage from "@/assets/iot-projects.jpg";
import glideImage from "@/assets/glide-projects.jpg";
import bubbleImage from "@/assets/bubble-projects.jpg";
import softrImage from "@/assets/3d_printing.png";
import loveableImage from "@/assets/loveable-projects.jpg";
import cursorImage from "@/assets/cursor-projects.jpg";
import vlsiImage from "@/assets/vlsi-projects.jpg";
import droneImage from "@/assets/drone-projects.jpg";
import roboticsImage from "@/assets/robotics-projects.jpg";
import aiImage from "@/assets/ai-projects.jpg";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Drone Technology Projects",
      image: droneImage,
      description: "UAV systems and aerial technology solutions",
      link: "https://docs.google.com/presentation/d/1QGCqRpiHgqcnZ8hsIVT_cswYqeWZfCBlRFAF4qYs_tk/edit?usp=sharing"
    },
    {
      title: "Robotics Projects",
      image: roboticsImage,
      description: "Autonomous robots and intelligent automation",
      link: "https://docs.google.com/presentation/d/1eJa2t4mozf3ymmWC-tmZ6ZYFcCXb8wVMP8BLcPfOXhs/edit?usp=sharing"
    },
    {
      title: "AI Projects",
      image: aiImage,
      description: "Artificial intelligence and machine learning solutions",
      link: "https://docs.google.com/presentation/d/1RNN02tySW-iPV_4UcxB1DTdD5RT1Kn2k6s2-dD3bQWI/edit?usp=sharing"
    },
    {
      title: "IoT Projects",
      image: iotImage,
      description: "Smart connected devices and sensor networks",
      link: "https://docs.google.com/presentation/d/1AxaFsuna_SEmFQBurkc_dJY7OUsJh4BdXFlmPyz7dBs/edit?usp=sharing"
    },
    {
      title: "Glide Projects",
      image: glideImage,
      description: "No-code mobile app development",
      link: "https://docs.google.com/presentation/d/1_Lv-HhzHJAPCmXbm0FR0RNnNOTrch5PrHyhm65pJ-Jg/edit?usp=sharing"
    },
    {
      title: "Bubble Projects",
      image: bubbleImage,
      description: "Full-stack web applications without code",
      link: "https://docs.google.com/presentation/d/1qHGwnAN8UywLRMAOdAzC2BKthXMLqepvlxo7rbnrxLQ/edit?usp=sharing"
    },
    {
      title: "3D Printing Projects",
      image: softrImage,
      description: "Client portals and internal tools",
      link: "https://docs.google.com/presentation/d/1uT1Apxc_34SosbEHqAxhekFPD0fGFAUDCoygp7q2SVI/edit?usp=sharing"
    },
    {
      title: "Loveable.dev Projects",
      image: loveableImage,
      description: "AI-powered development solutions",
      link: "https://docs.google.com/presentation/d/1JvG4QAKO4bHLypCQbqJhOMQlIsOiMuVGdikAdmldcYw/edit?usp=sharing"
    },
    {
      title: "Cursor + MCP Projects",
      image: cursorImage,
      description: "Next-gen AI coding assistance",
      link: "https://docs.google.com/presentation/d/1zKCIGaFkYIIyG5NUH9CTGXXV3FHtxVgRSmYH2oyXv4I/edit?usp=sharing"
    },
    {
      title: "VLSI Projects",
      image: vlsiImage,
      description: "Chip design and semiconductor solutions",
      link: "https://docs.google.com/presentation/d/1JTPiTS5yP2fKHkDeI7En4o7-kVIAuXNVXBso5bV1Mxc/edit?usp=sharing"
    },
    {
      title: "N8N Projects",
      image: iotImage,
      description: "Workflow automation and integration solutions",
      link: "https://docs.google.com/presentation/d/1bk3WtWeRKXF6EVp5VXDLybj_K5JeuUfKm0FroPx9gKY/edit?usp=sharing"
    },
    {
      title: "Scratch/PictoBlox Projects",
      image: roboticsImage,
      description: "Visual programming and block-based coding",
      link: "https://docs.google.com/presentation/d/1KySGnn_gIVuttgd6MlPBumYMCSJi7vgR8NJYDKNip68/edit?usp=sharing"
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
            {projects.map((project, index) => {
              const CardContent = (
                <>
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
                </>
              );

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group gradient-card rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:glow-primary"
                >
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                      {CardContent}
                    </a>
                  ) : (
                    CardContent
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Products Section */}
          <div className="mt-20">
            <h3 className="text-3xl md:text-4xl font-display text-center mb-4 text-gradient">
              Products
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-12 rounded-full" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Active Products",
                  description: "Products currently live and available for use",
                  link: "https://docs.google.com/presentation/d/1Xn9XMcPf14ZGF5oD8XJBrYOQqsfMP_T7hhLrcPH00uc/edit?usp=sharing",
                  icon: "🚀",
                },
                {
                  title: "On Demand Products",
                  description: "Products available on request and customization",
                  link: "https://docs.google.com/presentation/d/1jBWL-292cUegYX4KFZE_QG5f5dZH4KDOv8apNz7Ok28/edit?usp=sharing",
                  icon: "⚡",
                },
                {
                  title: "Planned Products",
                  description: "Upcoming products in the pipeline",
                  link: "https://docs.google.com/presentation/d/1M1k-a7csqYCr62GGzhGPCeXemapXRdnJ4qHfEcNs3qs/edit?usp=sharing",
                  icon: "📋",
                },
              ].map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
                >
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block gradient-card rounded-xl p-8 border border-border hover:border-primary transition-all duration-300 hover:glow-primary text-center group"
                  >
                    <span className="text-4xl mb-4 block">{product.icon}</span>
                    <h4 className="text-xl font-display mb-2 text-primary group-hover:text-gradient transition-colors">
                      {product.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {product.description}
                    </p>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Events Section */}
          <div className="mt-20">
            <h3 className="text-3xl md:text-4xl font-display text-center mb-4 text-gradient">
              Events
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-12 rounded-full" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Past Events */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="gradient-card rounded-xl p-8 border border-border"
              >
                <h4 className="text-2xl font-display mb-6 text-primary">
                  Past Events
                </h4>
                <div className="space-y-6">
                  <a
                    href="https://aiss.iiitd.edu.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 rounded-lg bg-background/50 border border-border hover:border-primary transition-all duration-300 hover:glow-primary"
                  >
                    <h5 className="text-lg font-display mb-2 text-accent">
                      Learning LLM from Scratch
                    </h5>
                    <p className="text-foreground mb-2">
                      31st July - 2nd Aug 2025
                    </p>
                    <p className="text-muted-foreground text-sm mb-2">
                      Taught basics of transformer encoder part, referring to the GitHub repo by{" "}
                      <a 
                        href="https://github.com/rasbt/LLMs-from-scratch"
                        className="text-primary hover:underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        rasbt/LLMs-from-scratch
                      </a>
                    </p>
                    <p className="text-muted-foreground text-sm italic">
                      Blog for this session is under progress
                    </p>
                  </a>

                  <a
                    href="https://www.linkedin.com/posts/hnagdev_ai-artificialintelligence-healthcareinnovation-ugcPost-7410603855870124032-UIuE?utm_source=share&utm_medium=member_desktop&rcm=ACoAABeyXpYBJyYSBSLdTPaSAkwJ6490MFtmlq4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 rounded-lg bg-background/50 border border-border hover:border-primary transition-all duration-300 hover:glow-primary"
                  >
                    <h5 className="text-lg font-display mb-2 text-accent">
                      Vibecoding Session
                    </h5>
                    <p className="text-foreground mb-1">
                      Dec 5, 2025
                    </p>
                    <p className="text-muted-foreground text-sm">
                      AIIMS (Ripsscon AI Workshop)
                    </p>
                  </a>
                </div>
              </motion.div>

              {/* Upcoming Events */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="gradient-card rounded-xl p-8 border border-border"
              >
                <h4 className="text-2xl font-display mb-6 text-primary">
                  Upcoming Events
                </h4>
                <div className="p-4 rounded-lg bg-background/50 border border-border">
                  <h5 className="text-lg font-display mb-2 text-accent">
                    Vibecoding using Cursor + MCP
                  </h5>
                  <p className="text-foreground mb-1">
                    Date to be decided
                  </p>
                  <p className="text-muted-foreground text-sm">
                    IIITD
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
