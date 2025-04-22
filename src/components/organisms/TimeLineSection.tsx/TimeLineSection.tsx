import { Briefcase, Code2, GraduationCap } from "lucide-react";
import { useTranslation } from "react-i18next";

interface TimelineItemProps {
  id: string;
  icon: React.ReactNode;
}

export default function TimelineSection() {
  const { t } = useTranslation();

  const timelineData: TimelineItemProps[] = [
    {
      id: "timeline1",
      icon: <Briefcase className="size-4" />,
    },
    {
      id: "timeline2",
      icon: <Code2 className="size-4" />,
    },
    {
      id: "timeline3",
      icon: <Code2 className="size-4" />,
    },
    {
      id: "timeline4",
      icon: <GraduationCap className="size-4" />,
    },
  ];

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-8">{t("timeline_heading")}</h2>
      <ol className="relative border-l border-muted-foreground/30 space-y-10">
        {timelineData.map(({ id, icon }) => (
          <li key={id} className="ml-4">
            <div className="absolute -left-[9px] top-1 w-4 h-4 bg-primary rounded-full flex items-center justify-center">
              {icon}
            </div>
            <div className="pl-6">
              <div className="text-sm text-muted-foreground mb-1">{t(`${id}.year`)}</div>
              <div className="font-semibold text-base mb-1">{t(`${id}.title`)}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{t(`${id}.description`)}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
