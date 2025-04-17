import { Button as ShadButton } from "../ui/button";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "secondary" | "ghost" | "destructive" | "link";
  asChild?: boolean;
  size?: "default" | "sm" | "lg" | "icon";
  onClick?: () => void;
  className?: string;
}

export default function Button({ children, variant = "default", asChild = false, size = "default", onClick, className }: ButtonProps) {
  return (
    <ShadButton variant={variant} asChild={asChild} size={size} onClick={onClick} className={className}>
      {children}
    </ShadButton>
  );
}
