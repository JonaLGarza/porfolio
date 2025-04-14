import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";
import { useState } from "react";
import ProjectFilter from "../../molecules/Filter/Filter";

interface IProjects {
    title: string,
    description: string,
    link?: string,
    tags: string[]
}

const projects: IProjects[] = [
  {
    title: "Signal Processor UI",
    description: "Enterprise-grade signal analysis interface built with React, Tailwind, and Three.js.",
    tags: ["React", "Three.js", "Tailwind"],
  },
  {
    title: "Client Web App",
    description: "Custom ordering platform for Jonathan’s charcuterie business using Vite + Tailwind.",
    tags: ["Vite", "Tailwind", "Storybook"],
  },
  {
    title: "Rentals Admin Dashboard",
    description: "Internal booking and analytics panel for house rentals in Saltillo.",
    tags: ["Next.js", "Charts", "Firebase"],
  },
];

const Projects = () => {
    const [query, setQuery] = useState("");

    const filtered = projects.filter((project) => {
        const text = `${project.title} ${project.description} ${project.tags.join(" ")}`.toLowerCase();
        return text.includes(query.toLowerCase());
    });

    return (
        <section className="py-20 px-4 md:py-32 max-w-6xl mx-auto text-center">
        <motion.h2
            className="text-3xl font-bold mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            Featured Projects
        </motion.h2>

        <ProjectFilter query={query} onQueryChange={setQuery} placeholder={"Search project by keyword"} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, i) => (
            <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
            >
                <Card className="text-left h-full">
                <CardHeader>
                    <CardTitle className="flex items-center justify-between text-xl">
                    {project.title}
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 hover:text-primary"
                    >
                        <ExternalLink className="size-4" />
                    </a>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                    </p>
                    <ul className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                    {project.tags.map((tag) => (
                        <li
                        key={tag}
                        className="bg-muted px-2 py-0.5 rounded-md dark:bg-muted/30"
                        >
                        {tag}
                        </li>
                    ))}
                    </ul>
                </CardContent>
                </Card>
            </motion.div>
            ))}
        </div>
        </section>
    );
};

export default Projects;
