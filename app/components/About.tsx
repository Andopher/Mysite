"use client";

import { Reveal } from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="relative px-6 py-32 md:px-10 md:py-48"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-x-6 gap-y-10 md:gap-x-10">
        <div className="col-span-12 md:col-span-3">
          <Reveal>
            <div className="eyebrow section-label">About</div>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-4 md:mt-14 md:grid-cols-1 md:gap-6">
            <Reveal delay={0.08}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-foreground/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/personal.jfif"
                  alt="Chris Risio"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-foreground/10 md:ml-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/personal2.jfif"
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>

        <div className="col-span-12 md:col-span-9">
          <Reveal>
            <p className="display text-[clamp(1.9rem,3.6vw,3.4rem)] font-normal leading-[1.06] tracking-tight text-foreground">
              I&apos;m Chris, a recent CS grad who&apos;s been shipping
              software professionally since I was nineteen. I care about{" "}
              <span className="serif-italic">taste</span>, the kind that
              quietly compounds: well-named functions, fewer abstractions,
              interfaces a person can keep in their head, products that feel
              made <span className="serif-italic">by someone</span> instead of
              assembled.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-10 max-w-2xl text-[16px] leading-relaxed text-foreground/75">
              For the last three years I&apos;ve been the engineer founders
              call when the prototype isn&apos;t enough anymore. When it has
              to handle real users, real money, real edge cases. I work fast,
              ask the boring questions, and write code I&apos;d be willing to
              own at three in the morning.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-foreground/75">
              I&apos;m taking on a small number of contracts and at most one
              founding-engineer role this year. If you&apos;re building
              something that has to be good, not just functional. Let&apos;s
              talk.
            </p>
          </Reveal>

          <Reveal delay={0.26}>
            <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-10 md:grid-cols-4">
              {[
                { k: "Available", v: "Founding · Contract" },
                { k: "Experience", v: "3+ yrs shipping" },
                { k: "Education", v: "BS, Computer Science" },
                { k: "Time zone", v: "ET · Remote-first" },
              ].map((item) => (
                <div key={item.k}>
                  <dt className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted">
                    {item.k}
                  </dt>
                  <dd className="mt-2 text-[14px] tracking-tight text-foreground">
                    {item.v}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
