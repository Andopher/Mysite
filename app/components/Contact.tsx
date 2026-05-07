"use client";

import { Reveal } from "./Reveal";
import MagneticButton from "./MagneticButton";

const channels = [
  {
    k: "Email",
    v: "risiochristopher@gmail.com",
    href: "mailto:risiochristopher@gmail.com?subject=Project%20inquiry",
  },
  {
    k: "Calendar",
    v: "Book 30 min",
    href: "https://calendly.com/risiochristopher/30min",
  },
  {
    k: "LinkedIn",
    v: "/in/chrisrisio",
    href: "https://www.linkedin.com/in/chrisrisio",
  },
  {
    k: "GitHub",
    v: "@Andopher",
    href: "https://github.com/Andopher",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-line px-6 py-32 md:px-10 md:py-56"
    >
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="eyebrow section-label">Contact</div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="display mt-10 max-w-[14ch] text-[clamp(3rem,10vw,10rem)] font-medium leading-[0.95] tracking-tighter">
            Let&apos;s build{" "}
            <span className="serif-italic">something</span> good.
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-16 max-w-md text-[16px] leading-relaxed text-foreground/80 md:mt-24">
            Pick whichever&apos;s easiest. Tell me what you&apos;re building,
            what hurts about it, and when you need it. I&apos;ll write back
            within a day with an honest answer.
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-12 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-2 lg:grid-cols-4">
            {channels.map((c) => {
              const isExternal = c.href.startsWith("http");
              return (
                <MagneticButton
                  key={c.k}
                  href={c.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer noopener" : undefined}
                  className="group flex items-center justify-between gap-5 rounded-2xl border border-foreground/15 bg-surface/60 px-6 py-6 text-foreground transition-colors hover:bg-foreground hover:text-background"
                >
                  <div className="min-w-0">
                    <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted transition-colors group-hover:text-background/60">
                      {c.k}
                    </div>
                    <div className="mt-2 truncate text-[15px] tracking-tight">
                      {c.v}
                    </div>
                  </div>
                  <span
                    aria-hidden
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-foreground/5 text-foreground/70 transition-all group-hover:rotate-45 group-hover:bg-background/10 group-hover:text-background/80"
                  >
                    →
                  </span>
                </MagneticButton>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
