import { motion } from "framer-motion";
import Button from "../../atoms/Button";
import { Download } from "lucide-react";
import ResumeHeader from "../ResumeeHeader/ResumeeHeader";

const AboutMe = () => {
  return (
    <section className="py-5 px-4 md:py-5 max-w-4xl mx-auto">
      <ResumeHeader />
      <motion.p
        className="text-muted-foreground text-lg leading-relaxed mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        I’m Jonathan Arturo López de la Garza, a passionate creative and results-driven senior software engineer with 8+ years of experience designing and building scalable web and mobile applications using React, Next.js, NestJS, and modern TypeScript stacks. Adept in atomic design, Storybook-driven UIs, and API architecture. Founder of multiple ventures including JG Charcutería and Nos imperii. Passionate about clean code, seamless UX, and pushing the limits of front-end innovation with tools like Three.js and Docker.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
      >
        <Button variant="secondary" asChild>

          <a href="/jonathanlopezresumee.pdf" download>
            <Download size={16} />Download Resume
          </a>
        </Button>
      </motion.div>
    </section>
  );
};

export default AboutMe;