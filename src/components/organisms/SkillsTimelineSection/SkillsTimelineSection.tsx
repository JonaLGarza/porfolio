import { Download, Code2, Terminal, Wrench } from "lucide-react";
import Button from "../../atoms/Button";

export default function SkillsTimelineSection() {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12">
        {/* Skills */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-6">Skills</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Code2 size={16} /> React, Next.js, Redux</li>
            <li className="flex items-center gap-2"><Code2 size={16} /> TypeScript, JavaScript, Node.js</li>
            <li className="flex items-center gap-2"><Terminal size={16} /> NestJS, Express.js, .NET Core</li>
            <li className="flex items-center gap-2"><Wrench size={16} /> Docker, Firebase, AWS</li>
            <li className="flex items-center gap-2"><Wrench size={16} /> PostgreSQL, MongoDB, Prisma</li>
            <li className="flex items-center gap-2"><Code2 size={16} /> Storybook, Tailwind CSS, Material UI</li>
            <li className="flex items-center gap-2"><Terminal size={16} /> Agile, GitHub, CI/CD</li>
            <li className="flex items-center gap-2"><Code2 size={16} /> Webpack, Mono Repos, Atomic Design</li>
          </ul>
        </div>

        {/* Timeline */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-6">Timeline</h2>
          <ol className="border-l border-muted-foreground/30 space-y-6 pl-4 text-sm">
            <li>
              <div className="mb-1 text-muted-foreground">2024 – Present</div>
              <div className="font-semibold">Senior Frontend Engineer – ZaiNar</div>
              <ul className="list-disc ml-5">
                <li>Leading frontend on 3D signal visualization platform</li>
                <li>Working with React, Tailwind CSS, Three.js and Storybook</li>
                <li>Collaborating closely with backend and design teams for enterprise-grade architecture</li>
              </ul>
            </li>
            <li>
              <div className="mb-1 text-muted-foreground">2023 – 2024</div>
              <div className="font-semibold">CTO – Brincoleo</div>
              <ul className="list-disc ml-5">
                <li>Founded and scaled a bounce house rental platform</li>
                <li>Managed development, team hiring, and platform deployment</li>
                <li>Won multiple hackathons for innovation and technical execution</li>
              </ul>
            </li>
            <li>
              <div className="mb-1 text-muted-foreground">2020 – 2023</div>
              <div className="font-semibold">Senior Frontend Developer – ArteDigital</div>
              <ul className="list-disc ml-5">
                <li>Built and deployed 6+ enterprise applications from scratch</li>
                <li>Designed and implemented A/B testing and SSO systems</li>
                <li>Created reusable design system with Storybook and atomic design</li>
                <li>Improved scalability and performance with Redux, Context, and custom hooks</li>
              </ul>
            </li>
            <li>
              <div className="mb-1 text-muted-foreground">2018 – 2020</div>
              <div className="font-semibold">Full Stack Developer – Hexaware</div>
              <ul className="list-disc ml-5">
                <li>Created and maintained a full-stack boilerplate with React + Redux</li>
                <li>Refactored for React Context upon 16.3 release</li>
                <li>Integrated .NET and .NET Core backend services</li>
                <li>Redesigned UI/UX, resulting in a 53% increase in user retention</li>
              </ul>
            </li>
            <li>
              <div className="mb-1 text-muted-foreground">2017 – 2018</div>
              <div className="font-semibold">Full Stack Developer – Nos Imperii, Teisense, Calisis</div>
              <ul className="list-disc ml-5">
                <li>Developed blockchain real estate platform with Django and Solidity</li>
                <li>Built OEE dashboard platform using ASP.NET WPF and WebSockets</li>
                <li>Led Nos Imperii’s technology team to win 6+ national and international hackathons</li>
              </ul>
            </li>
          </ol>
          <Button className="mt-6" asChild>
            <a
              href="/assets/jonathanlopezresumee.pdf"
              download
              className="inline-flex items-center gap-2"
            >
              <Download size={16} /> Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
