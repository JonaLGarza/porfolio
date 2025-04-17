import AboutMe from "../components/organisms/AboutMe/AboutMe";
import { Helmet } from 'react-helmet-async';
import ProjectsSkillsSection from "../components/organisms/ProjectSkillsSection/ProjectSkillSection";
import ResumeFooterIcons from "../components/organisms/ResumeeFooterIcons/ResumeeFooterIcons";
import TimelineSection from "../components/organisms/TimeLineSection.tsx/TimeLineSection";

export default function HomePage() {
    return <>
      <Helmet>
        <title>Jonathan Lopez – Senior Frontend Engineer</title>
        <meta
          name="description"
          content="Portfolio of Jonathan Arturo López de la Garza, Senior Frontend Engineer specialized in React, TypeScript, and enterprise-grade UI."
        />
      </Helmet>
      <main>
        <AboutMe />
        <ProjectsSkillsSection />
        <TimelineSection />
        <ResumeFooterIcons />
      </main>
      <footer className="text-center py-10 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Jonathan Lopez. All rights reserved.
      </footer>
    </>
}
