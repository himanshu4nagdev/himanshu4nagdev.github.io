import { motion } from "framer-motion";
import { Mail, MapPin, Award } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-hero py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-display mb-4 text-primary">Connect</h3>
            <div className="space-y-3">
              <a 
                href="mailto:himanshunagdev.hn@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                himanshunagdev.hn@gmail.com
              </a>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                New Delhi, India
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-display mb-4 text-primary">Expertise</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Automation & AI/ML</li>
              <li>• VLSI & Chip Design</li>
              <li>• IoT & Embedded Systems</li>
              <li>• No-Code Development</li>
              <li>• Quality Assurance</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-display mb-4 text-primary">Recognition</h3>
            <div className="flex items-start gap-2 text-muted-foreground">
              <Award className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
              <p>Patent holder with contributions to innovative solutions in automation and system optimization</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-border pt-8 text-center"
        >
          <p className="text-muted-foreground">
            &copy; {new Date().getFullYear()} Himanshu Nagdev. Crafted with passion for innovation.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
