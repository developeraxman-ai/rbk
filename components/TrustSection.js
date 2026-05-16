import ScrollReveal from "@/components/ScrollReveal";
import { Badge } from "@/components/ui/badge";

const proof = [
  { value: "360", label: "Function planning, decor, guest flow, and media coverage" },
  { value: "1", label: "Dedicated gallery page for every important function" },
  { value: "24/7", label: "WhatsApp-first coordination for quick event discussions" },
];

export default function TrustSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-24">
      <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
        <ScrollReveal direction="left" className="space-y-4">
          <Badge variant="outline">Trust</Badge>
          <h2 className="text-balance font-heading text-4xl leading-tight text-foreground sm:text-6xl">
            A practical planning team for functions with high expectations.
          </h2>
        </ScrollReveal>
        <div className="grid gap-4 sm:grid-cols-3">
          {proof.map((item, index) => (
            <ScrollReveal key={item.value} delay={index * 0.07} className="h-full">
              <div className="surface-lift h-full rounded-lg border border-border bg-card p-5 shadow-[0_18px_54px_rgba(45,35,25,0.08)]">
                <p className="font-heading text-5xl leading-none text-primary">{item.value}</p>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
