import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useI18n } from "@/i18n";

const schema = z.object({
  nome: z.string().min(2, "Informe seu nome"),
  email: z.string().email("E-mail inválido"),
  mensagem: z.string().min(10, "Mensagem muito curta"),
});

type FormValues = z.infer<typeof schema>;

const ContactSection = () => {
  const { t } = useI18n();
  const { toast } = useToast();
  const form = useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: { nome: "", email: "", mensagem: "" } });

  const onSubmit = async (values: FormValues) => {
    // TODO: Conectar Supabase e enviar e-mail para "roberto.junior.gonzaga@gmail.com"
    // Exemplo esperado: Edge Function/Route que dispara o e-mail (Resend/SMTP)
    console.log("Contato:", values);
    toast({ title: t("contact.toast.sent.title"), description: t("contact.toast.sent.desc") });
    form.reset();
  };

  return (
    <section id="contato" aria-labelledby="contato-title" className="relative">
      <div className="relative isolate overflow-hidden rounded-xl border bg-card shadow-sm p-8 md:p-12">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">{t("contact.lead")}</p>
        <h2 id="contato-title" className="text-2xl md:text-4xl font-bold leading-tight">{t("contact.title")}</h2>
        <p className="mt-2 text-muted-foreground max-w-2xl">{t("contact.subtitle")}</p>

        <div className="mt-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="nome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("contact.name")}</FormLabel>
                    <FormControl>
                      <Input placeholder="Seu nome" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("contact.email")}</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="voce@exemplo.com" {...field} />
                    </FormControl>
                    <FormDescription>{t("contact.email.desc")}</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="mensagem"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel>{t("contact.message")}</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Descreva sua necessidade ou deixe uma mensagem" className="min-h-32" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="md:col-span-2 flex gap-3">
                <Button type="submit" variant="hero">{t("contact.submit")}</Button>
                <Button type="reset" variant="outline" onClick={() => form.reset()}>{t("contact.clear")}</Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
