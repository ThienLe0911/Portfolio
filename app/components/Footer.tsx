export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/90 text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-sm md:flex-row md:items-center md:justify-between">
        <p>© 2026 Le Hoang Thien</p>
        <p className="text-slate-400">Portfolio built with Next.js, TypeScript, and TailwindCSS.</p>
      </div>
    </footer>
  );
}
