import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Lang = "pt" | "en";

type I18nContextValue = {
  lang: Lang;
  t: (key: string) => string;
  toggle: () => void;
  setLang: (lang: Lang) => void;
};

const dictionaries: Record<Lang, Record<string, string>> = {
  pt: {
    "nav.about": "Sobre",
    "nav.academic": "Formação",
    "nav.projects": "Projetos",
    "nav.skills": "Skills",
    "nav.experience": "Experiência",
    "nav.contact": "Contato",

    "header.ctaProjects": "Ver projetos",
    "header.lang.to.en": "Mudar para inglês",
    "header.lang.to.pt": "Mudar para português",

    "about.portfolio": "Portfólio",
    "about.title": "Desenvolvedor(a) Full Stack C#",
    "about.description":
      "Crio soluções escaláveis com .NET, ASP.NET Core, Entity Framework, Angular e Azure. Foco em qualidade, performance e boas práticas (Clean Architecture, CI/CD e testes automatizados).",
    "about.btn.projects": "Ver projetos",
    "about.btn.experience": "Experiência",
    "about.btn.download": "Baixar currículo",

    "contact.lead": "Fale comigo",
    "contact.title": "Contato",
    "contact.subtitle": "Preencha o formulário e receba um retorno por e-mail.",
    "contact.name": "Nome",
    "contact.email": "E-mail",
    "contact.email.desc": "Usarei este e-mail para responder sua mensagem.",
    "contact.message": "Mensagem",
    "contact.submit": "Enviar mensagem",
    "contact.clear": "Limpar",
    "contact.toast.sent.title": "Mensagem enviada",
    "contact.toast.sent.desc": "Obrigado pelo contato! Retornarei em breve.",
  },
  en: {
    "nav.about": "About",
    "nav.academic": "Education",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.contact": "Contact",

    "header.ctaProjects": "See projects",
    "header.lang.to.en": "Switch to English",
    "header.lang.to.pt": "Switch to Portuguese",

    "about.portfolio": "Portfolio",
    "about.title": "Full Stack C# Developer",
    "about.description":
      "I build scalable solutions with .NET, ASP.NET Core, Entity Framework, Angular and Azure. I focus on quality, performance and best practices (Clean Architecture, CI/CD and automated testing).",
    "about.btn.projects": "See projects",
    "about.btn.experience": "Experience",
    "about.btn.download": "Download CV",

    "contact.lead": "Get in touch",
    "contact.title": "Contact",
    "contact.subtitle": "Fill out the form and you'll receive a reply by email.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.email.desc": "I'll use this email to reply to your message.",
    "contact.message": "Message",
    "contact.submit": "Send message",
    "contact.clear": "Clear",
    "contact.toast.sent.title": "Message sent",
    "contact.toast.sent.desc": "Thank you for reaching out! I'll get back to you soon.",
  },
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export const I18nProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [lang, setLang] = useState<Lang>(() => (localStorage.getItem("lang") as Lang) || "pt");

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en-US";
  }, [lang]);

  const t = useMemo(() => {
    const dict = dictionaries[lang];
    return (key: string) => dict[key] ?? key;
  }, [lang]);

  const toggle = () => setLang((prev) => (prev === "pt" ? "en" : "pt"));

  const value = useMemo(() => ({ lang, t, toggle, setLang }), [lang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};
