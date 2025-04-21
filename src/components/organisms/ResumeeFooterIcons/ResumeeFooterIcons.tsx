import { useEffect, useRef } from "react";
import { SiReact, SiTypescript, SiNestjs, SiDocker, SiTailwindcss, SiStorybook, SiGithub, SiJirasoftware, SiAmazonwebservices, SiVuedotjs, SiAngular, SiDotnet, SiChromatic } from "react-icons/si";

const icons = [
  { icon: SiReact, label: "React" },
  { icon: SiVuedotjs, label: "Vue.js" },
  { icon: SiAngular, label: "Angular" },
  { icon: SiStorybook, label: "Storybook" },
  { icon: SiTailwindcss, label: "Tailwind" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: SiAmazonwebservices, label: "AWS" },
  { icon: SiDotnet, label: ".NET" },
  { icon: SiChromatic, label: "Chromatic" },
  { icon: SiNestjs, label: "NestJS" },
  { icon: SiDocker, label: "Docker" },
  { icon: SiGithub, label: "GitHub" },
  { icon: SiJirasoftware, label: "Jira" },
];

export default function ResumeFooterIcons() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const scrollStep = 1;
    const maxScroll = carousel.scrollWidth / 2;

    const autoScroll = () => {
      if (carousel.scrollLeft >= maxScroll) {
        carousel.scrollLeft = 0;
      } else {
        carousel.scrollLeft += scrollStep;
      }
    };

    const interval = setInterval(autoScroll, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 px-4 max-w-4xl mx-auto text-center">
      <h2 className="text-xl font-semibold mb-6">Tech Stack</h2>
      <div
        ref={carouselRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide whitespace-nowrap"
      >
        {[...icons, ...icons].map(({ icon: Icon, label }, idx) => (
          <div
            key={`${label}-${idx}`}
            className="flex flex-col items-center min-w-[80px] text-muted-foreground hover:text-foreground transition-colors"
          >
            <Icon className="text-3xl mb-1" />
            <span className="text-xs whitespace-nowrap">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
