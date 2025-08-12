import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AcademicSection = () => {
  return (
    <section id="formacao" aria-labelledby="formacao-title" className="mt-16">
      <div className="container mx-auto">
        <h2 id="formacao-title" className="text-2xl md:text-3xl font-bold mb-6">Formação Acadêmica</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Bacharelado em Ciência da Computação</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Universidade Exemplo (2016 – 2020). Foco em estruturas de dados, padrões de projeto e engenharia de software.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Pós-graduação em Arquitetura de Software</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Instituto Exemplo (2021 – 2022). Clean Architecture, DDD, microserviços e cloud (Azure).
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AcademicSection;
