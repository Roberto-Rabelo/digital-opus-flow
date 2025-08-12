import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "API Financeira .NET",
    desc: "API REST com ASP.NET Core, EF Core, autenticação JWT e testes de integração.",
    stack: ["C#", ".NET", "EF Core", "SQL Server", "Docker", "CI/CD"],
  },
  {
    title: "Portal Web com Angular",
    desc: "SPA com Angular, RxJS, Tailwind e comunicação com APIs REST.",
    stack: ["Angular", "TypeScript", "RxJS", "Tailwind"],
  },
  {
    title: "Integrações em Azure",
    desc: "Functions + Service Bus + Storage para processamento assíncrono e escalável.",
    stack: ["Azure", "Functions", "Service Bus", "Blob Storage"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projetos" aria-labelledby="projetos-title" className="mt-16">
      <div className="container mx-auto">
        <h2 id="projetos-title" className="text-2xl md:text-3xl font-bold mb-6">Projetos</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <Card key={p.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{p.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <Badge key={s} variant="secondary">{s}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
