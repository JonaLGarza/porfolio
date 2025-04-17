import { cn } from "../../../lib/utils";

export function SectionHeading({ title, className }: { title: string; className?: string }) {
  return (
    <h2 className={cn("text-2xl font-bold tracking-tight", className)}>
      {title}
    </h2>
  );
}
