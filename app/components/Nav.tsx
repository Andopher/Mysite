"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "America/New_York",
      }).format(new Date());
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 1000 * 30);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="fixed left-0 right-0 top-0 z-40"
    >
      <AnimatePresence>
        {scrolled && (
          <motion.div
            key="bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 backdrop-blur-md"
            style={{
              background:
                "linear-gradient(to bottom, color-mix(in oklab, var(--background) 80%, transparent) 0%, color-mix(in oklab, var(--background) 0%, transparent) 100%)",
              borderBottom: "1px solid var(--line)",
            }}
          />
        )}
      </AnimatePresence>

      <div className="relative mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10 md:py-6">
        <a href="#top" className="group flex items-center gap-3" aria-label="Home">
          <span className="grid h-7 w-7 place-items-center rounded-full border border-foreground/15 text-[11px] font-medium tracking-tight transition-colors group-hover:bg-foreground group-hover:text-background">
            CR
          </span>
          <span className="hidden text-[13px] tracking-tight text-foreground sm:inline">
            Chris Risio
          </span>
        </a>

        <nav className="flex items-center gap-1 sm:gap-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline px-3 py-1.5 text-[13px] tracking-tight text-foreground/80 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 text-[11px] uppercase tracking-[0.16em] text-muted md:flex">
          <span className="flex items-center gap-2">
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            Available
          </span>
          <span className="font-mono tabular-nums">
            {time || "00:00"} ET
          </span>
        </div>
      </div>
    </motion.header>
  );
}
