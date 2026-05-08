"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { Reveal } from "./Reveal";

type Project = {
  index: string;
  name: string;
  role: string;
  blurb: string;
  stack: string[];
  year: string;
  href?: string;
  hue: string;
  logo?: string;
  logoMode?: "contain" | "cover";
};

const projects: Project[] = [
  {
    index: "01",
    name: "FSEN",
    role: "Co-Founder",
    blurb:
      "Co-founder building the autonomous dispatch layer for contractors. FSEN sits between the emergency and the on-call tech, routing the right person in seconds so customers stop losing minutes when minutes matter.",
    stack: ["Autonomous Dispatch", "Contractors", "Emergency Response", "Real-Time"],
    year: "2025 / now",
    href: "https://fsen.tech",
    hue: "linear-gradient(135deg,#e8eaed 0%,#7d8590 55%,#2d3338 100%)",
    logo: "/fsen-logo.png",
    logoMode: "contain",
  },
  {
    index: "02",
    name: "Cro Metrics",
    role: "Software Engineer · Contract",
    blurb:
      "Contract engineering on the growth and experimentation tooling that powers a CRO agency's client work. Building the systems behind A/B tests and the analytics on top of them.",
    stack: ["Growth", "Experimentation", "A/B Testing", "Analytics"],
    year: "2026 / now",
    href: "https://crometrics.com",
    hue: "linear-gradient(135deg,#fde68a 0%,#fb923c 55%,#b91c1c 100%)",
    logo: "/crometrics-og.webp",
    logoMode: "cover",
  },
  {
    index: "03",
    name: "Nonlinear",
    role: "Software Engineer Intern",
    blurb:
      "Built a full-stack node-based workflow platform with embedded AI agents. Shipped to production at 10+ construction firms, driving measurable time and cost savings on real jobs in a market that doesn't tolerate flaky software.",
    stack: ["Full-Stack", "AI Agents", "Node-based UI", "Production"],
    year: "2025",
    href: "https://nonlinear.build",
    hue: "linear-gradient(135deg,#a7f3d0 0%,#10b981 55%,#064e3b 100%)",
    logo: "/nonlinear.avif",
    logoMode: "contain",
  },
  {
    index: "04",
    name: "Cody Reading",
    role: "Lead Developer",
    blurb:
      "Led a five-engineer team to build and ship a personalized reading platform for dyslexic learners, powered by a custom linguistic classification algorithm. The platform was acquired.",
    stack: ["React", "TypeScript", "Node", "Custom NLP", "Postgres"],
    year: "2024 / 25",
    href: "https://codyreading.com",
    hue: "linear-gradient(135deg,#faf7f2 0%,#e7e2d8 55%,#a8a29e 100%)",
    logo: "/cody-logo-horizontal.png",
    logoMode: "contain",
  },
];

type Experience = {
  company: string;
  role: string;
  period: string;
  note?: string;
  href?: string;
};

const experience: Experience[] = [
  {
    company: "Rush Ticketing",
    role: "Founding Engineer · Contract",
    period: "2025 / 26",
    note: "Led the founding engineering team end-to-end on the Google API stack. Shipped a ticketing platform to thousands of users.",
    href: "https://rush-events.com",
  },
  {
    company: "Levo",
    role: "Software Engineer Intern",
    period: "2025",
    note: "Production Go services, Dockerized infra, OCR pipelines, and API validation across a legacy codebase. On-call for customer-facing incidents.",
    href: "https://hellolevo.com",
  },
  {
    company: "Tatari Systems",
    role: "Full-Stack Engineer · Contract",
    period: "2025",
    note: "Built the entire product end-to-end for a VC-backed data center powering dozens of startups, in React + Python + FastAPI.",
    href: "https://tatari.systems",
  },
  {
    company: "NeuroLyze",
    role: "ML / Software Engineer Intern",
    period: "2024",
    note: "Led an intern team on real-time data pipelines, Bluetooth comms, and ThingsBoard integration for a wearable device. Shipped through beta.",
    href: "https://neurolyze.net",
  },
  {
    company: "DataAnnotation",
    role: "AI Model Performance Analyst · Contract",
    period: "2024",
    note: "RLHF and code QA. Reviewed 3,000+ lines and authored 2,000+ to train frontier coding models.",
    href: "https://dataannotation.tech",
  },
];

function ProjectCard({ p }: { p: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-1, 1], [3, -3]), {
    stiffness: 150,
    damping: 18,
  });
  const ry = useSpring(useTransform(mx, [-1, 1], [-3, 3]), {
    stiffness: 150,
    damping: 18,
  });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    mx.set(px * 2 - 1);
    my.set(py * 2 - 1);
  };
  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <Reveal>
      <article
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="group grid grid-cols-12 gap-x-6 gap-y-6 border-t border-line py-10 md:gap-x-10 md:py-14"
      >
        <div className="col-span-12 flex items-baseline gap-3 md:col-span-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            {p.index}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            / {p.year}
          </span>
        </div>

        <div className="col-span-12 md:col-span-5">
          {p.href ? (
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer noopener"
              data-cursor="hover"
              className="group/title inline-flex items-baseline gap-3"
            >
              <h3 className="display text-[clamp(2.4rem,5.5vw,4.5rem)] font-medium tracking-tighter transition-colors group-hover/title:text-foreground/70">
                {p.name}
              </h3>
              <span
                aria-hidden
                className="display text-[clamp(1.4rem,3vw,2.2rem)] text-muted transition-transform group-hover/title:-translate-y-1 group-hover/title:translate-x-1 group-hover/title:text-foreground"
              >
                ↗
              </span>
            </a>
          ) : (
            <h3 className="display text-[clamp(2.4rem,5.5vw,4.5rem)] font-medium tracking-tighter">
              {p.name}
            </h3>
          )}
          <div className="mt-2 text-[13px] text-muted">
            <span className="serif-italic text-foreground/80">{p.role}</span>
          </div>
        </div>

        <motion.div
          style={{ rotateX: rx, rotateY: ry, transformPerspective: 800 }}
          className="col-span-12 md:col-span-5"
        >
          <div
            data-cursor="hover"
            className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl ring-1 ring-foreground/10"
          >
            <div className="absolute inset-0" style={{ background: p.hue }} />
            <div
              className="absolute inset-0 mix-blend-overlay opacity-60"
              style={{
                backgroundImage:
                  "radial-gradient(120% 80% at 30% 10%, rgba(255,255,255,0.3), rgba(255,255,255,0) 60%)",
              }}
            />
            {p.logo && p.logoMode === "cover" && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={p.logo}
                alt={p.name}
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}
            {p.logo && p.logoMode !== "cover" && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={p.logo}
                alt={`${p.name} logo`}
                className="absolute left-1/2 top-1/2 max-h-[55%] max-w-[70%] -translate-x-1/2 -translate-y-1/2 object-contain"
              />
            )}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white">
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/85">
                {p.stack.slice(0, 3).join(" · ")}
              </div>
              {p.href && (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  data-cursor="hover"
                  className="group/visit inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-black shadow-lg ring-1 ring-black/10 transition-transform hover:-translate-y-0.5 hover:bg-white"
                >
                  Visit
                  <span
                    aria-hidden
                    className="transition-transform group-hover/visit:translate-x-0.5 group-hover/visit:-translate-y-0.5"
                  >
                    ↗
                  </span>
                </a>
              )}
            </div>
          </div>

          <p className="mt-6 max-w-prose text-[14.5px] leading-relaxed text-foreground/75">
            {p.blurb}
          </p>

          {p.href && (
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer noopener"
              data-cursor="hover"
              className="group/url mt-5 inline-flex items-center gap-1.5 text-[14px] tracking-tight text-foreground"
            >
              <span className="link-underline font-mono text-[13px]">
                {p.href.replace(/^https?:\/\//, "").replace(/\/$/, "")}
              </span>
              <span
                aria-hidden
                className="text-[12px] text-muted transition-transform group-hover/url:-translate-y-0.5 group-hover/url:translate-x-0.5"
              >
                ↗
              </span>
            </a>
          )}

          <div className="mt-5 flex flex-wrap gap-1.5">
            {p.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-foreground/15 bg-surface/70 px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.14em] text-foreground/70"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </article>
    </Reveal>
  );
}

export default function Work() {
  return (
    <section id="work" className="relative px-6 pb-12 pt-32 md:px-10 md:pt-44">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="flex items-end justify-between gap-6 pb-12 md:pb-20">
            <div>
              <div className="eyebrow section-label">Selected Work</div>
              <h2 className="display mt-6 max-w-3xl text-[clamp(2.4rem,6vw,5rem)] font-medium tracking-tighter">
                A few of the things I&apos;ve{" "}
                <span className="serif-italic">shipped</span>.
              </h2>
            </div>
            <p className="hidden max-w-xs text-right text-[13px] leading-relaxed text-muted md:block">
              Leading, building, contracting. A few of the projects I&apos;m
              most proud of.
            </p>
          </div>
        </Reveal>

        <div className="border-b border-line">
          {projects.map((p) => (
            <ProjectCard key={p.index} p={p} />
          ))}
        </div>

        <div className="mt-28 md:mt-40">
          <Reveal>
            <div className="flex items-end justify-between gap-6 pb-10">
              <div>
                <div className="eyebrow section-label">Also</div>
                <h3 className="display mt-6 max-w-3xl text-[clamp(1.8rem,3.6vw,2.8rem)] font-medium leading-[1.04] tracking-tight">
                  Other places I&apos;ve{" "}
                  <span className="serif-italic">helped build</span>.
                </h3>
              </div>
            </div>
          </Reveal>

          <ul className="border-t border-line">
            {experience.map((e, i) => (
              <Reveal key={e.company} delay={i * 0.04}>
                <li className="grid grid-cols-12 items-baseline gap-x-6 gap-y-2 border-b border-line py-6 md:gap-x-10 md:py-7">
                  <div className="col-span-12 md:col-span-2">
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                      {e.period}
                    </span>
                  </div>
                  <div className="col-span-12 md:col-span-3">
                    {e.href ? (
                      <a
                        href={e.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="group/link inline-flex items-baseline gap-1.5 text-[18px] tracking-tight text-foreground"
                      >
                        <span className="link-underline">{e.company}</span>
                        <span
                          aria-hidden
                          className="text-[12px] text-muted transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                        >
                          ↗
                        </span>
                      </a>
                    ) : (
                      <div className="text-[18px] tracking-tight text-foreground">
                        {e.company}
                      </div>
                    )}
                  </div>
                  <div className="col-span-12 md:col-span-3">
                    <div className="text-[14px] text-muted">
                      <span className="serif-italic text-foreground/80">
                        {e.role}
                      </span>
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    {e.note && (
                      <p className="text-[14px] leading-relaxed text-foreground/75">
                        {e.note}
                      </p>
                    )}
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal>
          <div className="flex justify-end pt-10">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 text-[13px] text-foreground"
            >
              <span className="link-underline">Want to see more? Ask.</span>
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
