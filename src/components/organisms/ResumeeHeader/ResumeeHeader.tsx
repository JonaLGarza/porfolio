import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import { SectionHeading } from "../../atoms/SectionHeading.tsx/SectionHeading";

export default function ResumeHeader() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto py-12 px-4 relative">
      {/* Background Glow */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-29 left-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 bg-purple-500/50 rounded-full blur-xs animate-pulse sm:top-15 sm:left-2 sm:translate-x-0 sm:translate-y-0" />
      </motion.div>

      {/* Section Heading */}
      <motion.div
        className="absolute top-0 left-0 w-full text-center md:text-left px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <SectionHeading title="Resume Overview" className="mb-6 text-primary" />
      </motion.div>

      {/* Avatar + Name */}
      <motion.div
        className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start sm:gap-4 w-full py-5"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Avatar className="h-24 w-24 border-2 border-primary shadow-md mb-4 sm:mb-0">
          <AvatarImage src="/porfolio/me.jpg" alt="Jonathan Lopez" />
          <AvatarFallback>JL</AvatarFallback>
        </Avatar>
        <div className="text-center sm:text-left pt-5">
          <h1 className="text-2xl font-bold">Jonathan Arturo López de la Garza</h1>
          <p className="text-sm text-muted-foreground">
            Senior Frontend Engineer • React Expert • DevOps Enthusiast
          </p>
        </div>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        className="relative z-10 text-sm text-muted-foreground space-y-2 text-center md:text-right w-full md:w-auto border-t md:border-t-0 md:border-l border-muted pt-6 md:pt-0 md:pl-6"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p className="flex items-center justify-center md:justify-end gap-2">
          <MapPin className="w-4 h-4" /> Saltillo, Coahuila
        </p>
        <p className="flex items-center justify-center md:justify-end gap-2">
          <Phone className="w-4 h-4" /> +52 (844) 879 81 24
        </p>
        <p className="flex items-center justify-center md:justify-end gap-2">
          <Mail className="w-4 h-4" /> jonathanlgarza@outlook.com
        </p>
        <p className="flex items-center justify-center md:justify-end gap-2">
          <Linkedin className="w-4 h-4" />
          <a
            href="https://www.linkedin.com/in/jonathanlgarza/"
            target="_blank"
            className="underline"
          >
            LinkedIn
          </a>
        </p>
        <p className="flex items-center justify-center md:justify-end gap-2">
          <Github className="w-4 h-4" />
          <a
            href="https://github.com/JonaLGarza"
            target="_blank"
            className="underline"
          >
            GitHub
          </a>
        </p>
      </motion.div>
    </section>
  );
}
