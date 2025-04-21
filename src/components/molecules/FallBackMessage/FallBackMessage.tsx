import { AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function FallbackMessage({
  title = "Oops!",
  message = "Something went wrong."
}: { title?: string; message?: string }) {
  const navigate = useNavigate();

  const handleReload = () => {
    window.location.reload();
  };

  const handleGoHome = () => {
    navigate("/porfolio");
  };

  return (
    <div className="flex flex-col items-center justify-center py-16 text-center text-muted-foreground">
      <AlertTriangle className="w-10 h-10 text-red-500 mb-4" />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="max-w-md mb-6">{message}</p>
      <div className="flex gap-4">
        <button
          onClick={handleReload}
          className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600"
        >
          Reload Page
        </button>
        <button
          onClick={handleGoHome}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
}