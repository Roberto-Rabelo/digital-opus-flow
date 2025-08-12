import SiteHeader from "@/components/layout/SiteHeader";
import AboutSection from "@/components/sections/AboutSection";
import AcademicSection from "@/components/sections/AcademicSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Seu Nome",
    jobTitle: "Desenvolvedor(a) Full Stack C#",
    url: "https://seusite.com/",
    sameAs: [
      "https://www.linkedin.com/in/seu-usuario",
      "https://github.com/seu-usuario"
    ],
    knowsAbout: ["C#", ".NET", "ASP.NET Core", "Angular", "SQL Server", "Azure", "Docker"],
  };

  return (
    <div>
      <SiteHeader />
      <main className="container mx-auto py-10 space-y-16">
        <AboutSection />
        <AcademicSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
};

export default Index;
