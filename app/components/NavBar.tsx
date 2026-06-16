import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/timeline', label: 'Timeline' },
  { href: '/contact', label: 'Contact' },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200">
          THIENLH
        </Link>
        <div className="flex items-center gap-4 text-sm text-slate-200">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-full px-3 py-2 transition hover:bg-slate-800 hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
