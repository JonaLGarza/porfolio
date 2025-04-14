import { Mail, Github, Linkedin, FileUser } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../../atoms/Button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 md:py-32 max-w-3xl mx-auto text-center">
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get in Touch
      </motion.h2>

      <motion.p
        className="text-muted-foreground mb-8 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        I'm always open to discussing new opportunities, collaborations, or side projects.
      </motion.p>

      <motion.div
        className="flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <Button asChild>
          <a href="mailto:jonathanlgarza@outlook.com" target="_blank" rel="noopener noreferrer">
            <Mail className="mr-2 size-4" /> Email
          </a>
        </Button>
        <Button asChild>
          <a href="https://github.com/JonaLGarza" target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 size-4" /> GitHub
          </a>
        </Button>
        <Button asChild>
          <a href="https://linkedin.com/in/jonathanlgarza" target="_blank" rel="noopener noreferrer">
            <Linkedin className="mr-2 size-4" /> LinkedIn
          </a>
        </Button>
        <Button asChild>
          <a href="/jonathanlopezresumee.pdf" download>
            <FileUser className="mr-2 size-4" /> Resumee
          </a>
        </Button>
      </motion.div>
    </section>
  );
};

export default Contact;