import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Zap, GraduationCap } from "lucide-react";

const BookAppointment = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Calendar,
      title: "Project Consultation",
      description: "Get expert advice on your technical projects and implementation strategies"
    },
    {
      icon: Zap,
      title: "Vibe Coding Training",
      description: "Learn modern development practices with AI-powered tools and workflows"
    },
    {
      icon: GraduationCap,
      title: "Mentoring Sessions",
      description: "One-on-one guidance for career growth and technical skill development"
    }
  ];

  return (
    <section id="appointment" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-display text-center mb-4 text-gradient">
            Book an Appointment
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-12 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="gradient-card rounded-xl p-6 border border-border hover:border-secondary hover:glow-secondary transition-all duration-300"
                >
                  <Icon className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-xl font-display mb-2 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <p className="text-lg text-muted-foreground mb-6">
              Ready to collaborate on innovative solutions? Let's discuss your project or learning goals.
            </p>
            <a
              href="https://topmate.io/himanshu_nagdev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-accent text-accent-foreground rounded-full font-medium hover:glow-secondary transition-all duration-300 hover:scale-105 text-lg"
            >
              Schedule a Consultation
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookAppointment;
