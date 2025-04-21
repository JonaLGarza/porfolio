import { AlertTriangle } from "lucide-react";

export function FallbackMessage({ title = "Oops!", message = "Something went wrong." }: { title?: string; message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center text-muted-foreground">
      <AlertTriangle className="w-10 h-10 text-red-500 mb-4" />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="max-w-md">{message}</p>
    </div>
  );
}