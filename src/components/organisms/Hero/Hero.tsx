import { motion } from "framer-motion";
import Button from "../../atoms/Button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden text-center py-20 px-4 md:py-32">
      {/* Optional animated background */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-black opacity-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      <motion.h1
        className="text-4xl md:text-6xl font-extrabold mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hi, I'm Jonathan 👋
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        A Senior Frontend Engineer crafting scalable interfaces with React, TypeScript, and modern UI architecture.
      </motion.p>

      <motion.div
        className="mt-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
      >
        <Button>
          <a href="#projects" onClick={() => navigate("/projects")}>See My Work</a>
        </Button>
      </motion.div>
    </section>
  );
};

export default Hero;