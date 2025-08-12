import { Button } from "@/components/ui/button";

const navItems = [
  { href: "#sobre", label: "Sobre" },
  { href: "#formacao", label: "Formação" },
  { href: "#projetos", label: "Projetos" },
  { href: "#skills", label: "Skills" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#contato", label: "Contato" },
];

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <a href="#sobre" className="font-extrabold tracking-tight text-lg">
          Seu Nome
        </a>
        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm hover:text-primary transition-colors"
                aria-label={`Ir para ${item.label}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <Button asChild variant="hero">
            <a href="#projetos" aria-label="Ver projetos">Ver projetos</a>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default SiteHeader;
