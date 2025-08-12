import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const schema = z.object({
  nome: z.string().min(2, "Informe seu nome"),
  email: z.string().email("E-mail inválido"),
  mensagem: z.string().min(10, "Mensagem muito curta"),
});

type FormValues = z.infer<typeof schema>;

const ContactSection = () => {
  const { toast } = useToast();
  const form = useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: { nome: "", email: "", mensagem: "" } });

  const onSubmit = async (values: FormValues) => {
    // TODO: Conectar Supabase e enviar e-mail para "roberto.junior.gonzaga@gmail.com"
    // Exemplo esperado: chamar uma Edge Function/Route que dispara o e-mail (Resend/SMTP)
    console.log("Contato:", values);
    toast({ title: "Mensagem enviada", description: "Obrigado pelo contato! Retornarei em breve." });
    form.reset();
  };

  return (
    <section id="contato" aria-labelledby="contato-title" className="relative">
      <div className="relative isolate overflow-hidden rounded-xl border bg-card shadow-sm p-8 md:p-12">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Fale comigo</p>
        <h2 id="contato-title" className="text-2xl md:text-4xl font-bold leading-tight">Contato</h2>
        <p className="mt-2 text-muted-foreground max-w-2xl">Preencha o formulário e receba um retorno por e-mail.</p>

        <div className="mt-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="nome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
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
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="voce@exemplo.com" {...field} />
                    </FormControl>
                    <FormDescription>Usarei este e-mail para responder sua mensagem.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="mensagem"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel>Mensagem</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Descreva sua necessidade ou deixe uma mensagem" className="min-h-32" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="md:col-span-2 flex gap-3">
                <Button type="submit" variant="hero">Enviar mensagem</Button>
                <Button type="reset" variant="outline" onClick={() => form.reset()}>Limpar</Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
