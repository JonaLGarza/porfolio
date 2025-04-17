import { cn } from "../../../lib/utils";

interface SkillPillProps {
  label: string;
  className?: string;
}

export function SkillPill({ label, className }: SkillPillProps) {
  return (
    <span
      className={cn(
        "px-3 py-1 rounded-full border text-xs font-medium text-muted-foreground border-muted-foreground/20",
        className
      )}
    >
      {label}
    </span>
  );
}
