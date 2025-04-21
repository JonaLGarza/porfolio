import { Briefcase, Code2, GraduationCap } from "lucide-react";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const timelineData: TimelineItemProps[] = [
  {
    year: "2020 – Present",
    title: "Senior Frontend Developer – ArteDigital",
    description: "Developed and deployed 6+ scalable apps with advanced A/B testing, Storybook integration, and atomic design.",
    icon: <Briefcase className="size-4" />,
  },
  {
    year: "2018 – 2020",
    title: "Full Stack Developer – Hexaware",
    description: "Built reusable boilerplates and improved UI/UX across several React and .NET applications.",
    icon: <Code2 className="size-4" />,
  },
  {
    year: "2017 – 2018",
    title: "Full Stack Developer – Nos Imperii, Teisense, Calisis",
    description: "Created ERP, OEE dashboards, and blockchain apps winning 6+ hackathons for innovation.",
    icon: <Code2 className="size-4" />,
  },
  {
    year: "2015 – 2017",
    title: "UTC – Associate Degree in IT Engineering",
    description: "Completed technical degree with a focus on full stack development and systems design.",
    icon: <GraduationCap className="size-4" />,
  },
];

export default function TimelineSection() {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-8">Timeline</h2>
      <ol className="relative border-l border-muted-foreground/30 space-y-10">
        {timelineData.map(({ year, title, description, icon }) => (
          <li key={year} className="ml-4">
            <div className="absolute -left-[9px] top-1 w-4 h-4 bg-primary rounded-full flex items-center justify-center">
              {icon}
            </div>
            <div className="pl-6">
              <div className="text-sm text-muted-foreground mb-1">{year}</div>
              <div className="font-semibold text-base mb-1">{title}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
