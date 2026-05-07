"use client";

import { Reveal } from "./Reveal";
import MagneticButton from "./MagneticButton";

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
          <div className="mt-16 grid grid-cols-12 gap-x-6 gap-y-10 md:mt-24 md:gap-x-10">
            <div className="col-span-12 md:col-span-6">
              <p className="max-w-md text-[16px] leading-relaxed text-foreground/80">
                The fastest path is email. Tell me what you&apos;re building,
                what hurts about it, and when you need it. I&apos;ll write
                back within a day with an honest answer.
              </p>
            </div>

            <div className="col-span-12 flex items-end md:col-span-6">
              <MagneticButton
                href="mailto:risiochristopher@gmail.com?subject=Project%20inquiry"
                className="group inline-flex items-center gap-5 rounded-full border border-foreground/15 bg-foreground px-8 py-5 text-background transition-colors hover:bg-accent md:px-10 md:py-6"
              >
                <span className="text-[15px] tracking-tight md:text-[17px]">
                  risiochristopher@gmail.com
                </span>
                <span
                  aria-hidden
                  className="grid h-9 w-9 place-items-center rounded-full bg-background/10 transition-transform group-hover:rotate-45"
                >
                  →
                </span>
              </MagneticButton>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-24 grid grid-cols-2 gap-6 border-t border-line pt-10 md:grid-cols-4">
            {[
              {
                k: "Email",
                v: "risiochristopher@gmail.com",
                href: "mailto:risiochristopher@gmail.com",
              },
              {
                k: "GitHub",
                v: "@Andopher",
                href: "https://github.com/Andopher",
              },
              {
                k: "LinkedIn",
                v: "/in/chrisrisio",
                href: "https://www.linkedin.com/in/chrisrisio",
              },
              {
                k: "Calendar",
                v: "Book 30 min",
                href: "https://calendly.com/risiochristopher/30min",
              },
            ].map((c) => (
              <a
                key={c.k}
                href={c.href}
                className="group block"
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted">
                  {c.k}
                </div>
                <div className="mt-2 inline-flex items-center gap-2 text-[14px] tracking-tight text-foreground">
                  <span className="link-underline">{c.v}</span>
                  <span
                    aria-hidden
                    className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                  >
                    ↗
                  </span>
                </div>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
