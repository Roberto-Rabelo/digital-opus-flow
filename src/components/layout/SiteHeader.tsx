import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useI18n } from "@/i18n";

const SiteHeader = () => {
  const { t, lang, toggle } = useI18n();
  const navItems = [
    { href: "#sobre", label: t("nav.about") },
    { href: "#formacao", label: t("nav.academic") },
    { href: "#projetos", label: t("nav.projects") },
    { href: "#skills", label: t("nav.skills") },
    { href: "#experiencia", label: t("nav.experience") },
    { href: "#contato", label: t("nav.contact") },
  ];

  const nextLangLabel = lang === "pt" ? t("header.lang.to.en") : t("header.lang.to.pt");

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <a href="#sobre" className="font-extrabold tracking-tight text-lg flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg" alt="Foto de perfil do Seu Nome" />
            <AvatarFallback>SN</AvatarFallback>
          </Avatar>
          <span>Seu Nome</span>
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
            <a href="#projetos" aria-label={t("header.ctaProjects")}>{t("header.ctaProjects")}</a>
          </Button>
          <Button variant="outline" onClick={toggle} aria-label={nextLangLabel}>
            {lang === "pt" ? "EN" : "PT"}
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default SiteHeader;
