import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-display text-center mb-4 text-gradient">
            About Me
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-12 rounded-full" />

          <div className="gradient-card rounded-2xl p-8 md:p-12 border border-border glow-primary">
            <p className="text-lg text-foreground leading-relaxed">
              I am a passionate high agency engineer with a diverse background in automation, AI/ML deployment, and quality assurance, thriving at the intersection of innovation and efficiency. My journey began with creating technical drawings and innovative projects during my graduation, followed by product development and research automation at IIT Delhi. I contributed to the R&D of high-end oscilloscopes at Keysight Technologies, honing my skills in regression testing and automation.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed mt-6">
              With expertise in Python, Selenium, Docker, Kubernetes, and Linux—skills I utilized for deploying and automating warehouse web applications at GreyOrange—I expanded into the VLSI domain through a PG Diploma from IISc Bangalore, gaining hands-on experience in chip design.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed mt-6">
              Beyond my technical roles, I take pride in teaching and mentoring. I started during my graduation days on YouTube, helping friends prepare for exams the night before. "I have now streamlined all my efforts toward creating production-ready deployments and performing rigorous QA on them at the Centre of AI, IIITD
            </p>
            
            <p className="text-lg text-foreground leading-relaxed mt-6 font-medium">
              As a patent holder, I bring a creative edge to problem-solving and system optimization. Let's connect to collaborate on impactful solutions!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
