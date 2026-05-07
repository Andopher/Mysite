"use client";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-end justify-between gap-6">
        <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted">
          © {year} Chris Risio · Made by hand in Boston
        </div>
        <div className="flex items-center gap-6 text-[12px] text-muted">
          <a href="#top" className="link-underline">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
