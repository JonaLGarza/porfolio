import { Badge } from "../../atoms/Badge/Badge";

interface ProjectCardProps {
  title: string;
  description: string;
  badges: string[];
}

export function ProjectCard({ title, description, badges }: ProjectCardProps) {
  return (
    <div className="border border-muted rounded-lg p-4 shadow-sm bg-background">
      <h3 className="text-base font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground mb-3">{description}</p>
      <div className="flex flex-wrap gap-2">
        {badges.map((badge) => (
          <Badge key={badge} label={badge} className="bg-muted text-foreground" />
        ))}
      </div>
    </div>
  );
}
