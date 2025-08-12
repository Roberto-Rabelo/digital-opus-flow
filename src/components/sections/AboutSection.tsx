import { Button } from "@/components/ui/button";

const AboutSection = () => {
  // Signature interaction: spotlight following cursor
  const onMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--x", `${x}px`);
    target.style.setProperty("--y", `${y}px`);
  };

  return (
    <section id="sobre" aria-labelledby="sobre-title" className="relative">
      <div
        onMouseMove={onMouseMove}
        className="relative isolate overflow-hidden rounded-xl border bg-card shadow-sm p-8 md:p-12"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 md:opacity-100"
          style={{
            background:
              "radial-gradient(600px 300px at var(--x, 50%) var(--y, 50%), hsl(var(--primary)/0.08), transparent 60%)",
          }}
        />
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
          Portfólio
        </p>
        <h1 id="sobre-title" className="text-3xl md:text-5xl font-extrabold leading-tight">
          Desenvolvedor(a) Full Stack C#
        </h1>
        <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl">
          Crio soluções escaláveis com .NET, ASP.NET Core, Entity Framework, Angular e Azure. Foco em qualidade,
          performance e boas práticas (Clean Architecture, CI/CD e testes automatizados).
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Button variant="hero" size="lg" asChild>
            <a href="#projetos">Ver projetos</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#experiencia">Experiência</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
