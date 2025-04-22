import { SkillPill } from "../../atoms/SkillPill/SkillPill";
import { ProjectCard } from "../../molecules/ProjectCard/ProjectCard";

export default function ProjectsSkillsSection() {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto space-y-16">
      {/* Skills Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {[
            "Frontend",
            "Redux",
            "TypeScript",
            "Tailwind",
            "Storybook",
            "NestJS",
            "Django",
            ".NET Core",
          ].map((skill) => (    
            <SkillPill key={skill} label={skill} />
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="Build-Runant Raat-prodön"
            badges={["Frontend", "UX"]}
            description="Minimalist advertisement platform for one-off user friendly websites."
          />
          <ProjectCard
            title="Rentals Admin Dashboard"
            badges={["Next.js", "Redux", "Docker", "Firebase"]}
            description="Internal booking and analytics panel for house rentals in Saltillo."
          />
          <ProjectCard
            title="Component Library"
            badges={["React", "Storybook", "Tailwind", "Docker"]}
            description="Atomic-oriented front-end component library initiative with CSS variable-first approach."
          />
        </div>
      </div>
    </section>
  );
}
