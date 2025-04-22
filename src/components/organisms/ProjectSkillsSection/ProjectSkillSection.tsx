import { SkillPill } from "../../atoms/SkillPill/SkillPill";
import { ProjectCard } from "../../molecules/ProjectCard/ProjectCard";
import { useTranslation } from "react-i18next";

interface Project {
  title: string;
  description: string;
  badges: string[];
}

export default function ProjectsSkillsSection() {
  const { t } = useTranslation();

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto space-y-16">
      {/* Skills Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6">{t("skills.heading")}</h2>
        <div className="flex flex-wrap gap-3">
          {(t("skills.items", { returnObjects: true }) as string[]).map((skill) => (    
            <SkillPill key={skill} label={skill} />
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6">{t("projects_section.heading")}</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(t("projects_section.items", { returnObjects: true }) as Project[]).map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              badges={project.badges}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
