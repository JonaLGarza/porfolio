import { SiReact, SiTypescript, SiNestjs, SiDocker, SiTailwindcss, SiStorybook, SiGithub, SiJirasoftware, SiAmazonwebservices, SiVuedotjs, SiAngular, SiDotnet, SiChromatic } from "react-icons/si";

const icons = [
  { icon: SiReact, label: "React" },
  { icon: SiVuedotjs, label: "Vue.js" },
  { icon: SiAngular, label: "Angular" },
  { icon: SiStorybook, label: "Storybook" },
  { icon: SiTailwindcss, label: "Tailwind" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: SiAmazonwebservices, label: "AWS" },
  { icon: SiDotnet, label: ".NET" },
  { icon: SiChromatic, label: "Chromatic" },
  { icon: SiNestjs, label: "NestJS" },
  { icon: SiDocker, label: "Docker" },
  { icon: SiGithub, label: "GitHub" },
  { icon: SiJirasoftware, label: "Jira" },

];

export default function ResumeFooterIcons() {
  return (
    <section className="py-12 px-4 max-w-4xl mx-auto text-center">
      <h2 className="text-xl font-semibold mb-6">Tech Stack</h2>
      <div className="flex justify-center flex-wrap gap-6">
        {icons.map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors">
            <Icon className="text-3xl mb-1" />
            <span className="text-xs">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}