import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import Button from "../../atoms/Button";

const AboutMe = () => {
  return (
    <section className="py-20 px-4 md:py-32 max-w-3xl mx-auto text-center">
      <motion.div
        className="flex justify-center mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Avatar className="h-24 w-24 border-2 border-primary shadow-md">
          <AvatarImage src="/me.jpg" alt="Jonathan Lopez" />
          <AvatarFallback>JL</AvatarFallback>
        </Avatar>
      </motion.div>

      <motion.h2
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        About Me
      </motion.h2>

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
            Download Resume
          </a>
        </Button>
      </motion.div>
    </section>
  );
};

export default AboutMe;