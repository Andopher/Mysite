"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { RevealText } from "./Reveal";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-[100svh] overflow-hidden pt-24 md:pt-28"
    >
      <motion.div
        style={{ y, opacity }}
        className="relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-between px-6 pb-10 pt-10 md:px-10 md:pb-14 md:pt-16"
      >
        <div className="flex items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.6 }}
            className="eyebrow"
          >
            <span className="section-label">Portfolio · 2026</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.8 }}
            className="hidden max-w-[260px] text-right text-[13px] leading-snug text-muted md:block"
          >
            Independent software engineer building product-grade systems for
            early-stage teams.
          </motion.div>
        </div>

        <div className="mt-auto">
          <h1 className="display text-[clamp(3.6rem,11.5vw,11.5rem)] font-medium tracking-tighter">
            <span className="block">
              <RevealText text="Chris Risio." delay={0.05} immediate />
            </span>
            <span className="block">
              <span className="serif-italic font-normal text-foreground/85">
                <RevealText text="Software" delay={0.28} immediate />
              </span>{" "}
              <RevealText text="engineer" delay={0.44} immediate />
            </span>
            <span className="block">
              <RevealText text="for hire." delay={0.62} immediate />
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 grid gap-8 md:mt-14 md:grid-cols-12"
          >
            <p className="md:col-span-5 md:col-start-1 max-w-md text-[15px] leading-relaxed text-foreground/80">
              I help founders ship the first hard version of their product.
              The one that actually has to work. Founding-engineer engagements
              and short, focused contracts.
            </p>
            <div className="flex items-end justify-between gap-6 md:col-span-5 md:col-start-8">
              <div className="text-[12px] uppercase tracking-[0.18em] text-muted">
                <div>Based in</div>
                <div className="mt-1 text-foreground">Boston · Remote</div>
              </div>
              <a
                href="#work"
                className="group inline-flex items-center gap-3 text-[13px] tracking-tight text-foreground"
              >
                <span className="link-underline">Selected work</span>
                <span
                  aria-hidden
                  className="grid h-7 w-7 place-items-center rounded-full border border-foreground/20 transition-transform group-hover:translate-y-1"
                >
                  ↓
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 1.4 }}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-line"
      />
    </section>
  );
}
