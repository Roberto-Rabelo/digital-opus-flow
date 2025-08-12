import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const softSkills = [
  "Comunicação", "Colaboração", "Resolução de Problemas", "Proatividade", "Liderança", "Gestão de Tempo", "Adaptabilidade"
];

const hardSkills = [
  "C#", ".NET", "ASP.NET Core", "Entity Framework", "Angular", "TypeScript", "RxJS", "SQL Server", "Azure", "Docker", "CI/CD", "TDD"
];

const SkillsSection = () => {
  return (
    <section id="skills" aria-labelledby="skills-title" className="mt-16">
      <div className="container mx-auto">
        <h2 id="skills-title" className="text-2xl md:text-3xl font-bold mb-6">Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Soft Skills</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {softSkills.map((s) => (
                <Badge key={s} variant="secondary">{s}</Badge>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Hard Skills</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {hardSkills.map((s) => (
                <Badge key={s} variant="secondary">{s}</Badge>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
