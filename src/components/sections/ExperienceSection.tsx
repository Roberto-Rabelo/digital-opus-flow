import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ExperienceSection = () => {
  return (
    <section id="experiencia" aria-labelledby="experiencia-title" className="mt-16 mb-24">
      <div className="container mx-auto">
        <h2 id="experiencia-title" className="text-2xl md:text-3xl font-bold mb-6">Experiência Profissional</h2>
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Desenvolvedor(a) Full Stack • Empresa X</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              2023 – Atual. Desenvolvimento de APIs .NET, front-end em Angular, automações CI/CD e monitoramento em Azure.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Desenvolvedor(a) Back-end • Empresa Y</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              2021 – 2023. ASP.NET Core, EF Core, otimizações de consultas SQL, testes (xUnit) e integração contínua.
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
