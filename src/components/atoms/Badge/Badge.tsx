import { cn } from "../../../lib/utils";

export function Badge({ label, className }: { label: string; className?: string }) {
  return (
    <span className={cn("px-2 py-0.5 rounded-md text-xs font-medium bg-primary text-white", className)}>
      {label}
    </span>
  );
}
