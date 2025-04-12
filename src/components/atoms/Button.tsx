import { Button as ShadButton } from "../ui/button";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "default" | "outline";
}

export default function Button({ children, variant = "default" }: ButtonProps) {
  return <ShadButton variant={variant}>{children}</ShadButton>;
}
