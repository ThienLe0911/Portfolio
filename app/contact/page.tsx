import Image from 'next/image';
import { portfolioContent } from '../lib/portfolio';
import { MailIcon, GithubIcon, LinkedInIcon } from '../components/icons';
import avatar from '../../Docs/assets/profile/avatar.png';

export default function ContactPage() {
  const links = [
    { label: 'Email', href: `mailto:${portfolioContent.contact.email}`, icon: <MailIcon /> },
    { label: 'GitHub', href: portfolioContent.contact.github, icon: <GithubIcon /> },
    { label: 'LinkedIn', href: portfolioContent.contact.linkedin, icon: <LinkedInIcon /> },
  ];

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#0f172a_0%,_#020617_45%,_#01030a_100%)] px-6 py-12 text-slate-100">
      <section className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="reveal-on-scroll space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Contact</p>
          <h1 className="text-4xl font-semibold text-white md:text-5xl">Let’s build reliable products together</h1>
          <p className="max-w-3xl text-slate-300">I enjoy turning product ideas into dependable systems, and I’m always open to collaboration on product, platform, and growth-focused work.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="reveal-on-scroll rounded-3xl border border-slate-800 bg-slate-900/75 p-6 shadow-2xl shadow-black/30 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
            <div className="flex flex-wrap items-center gap-4">
              <div className="relative h-20 w-20 overflow-hidden rounded-3xl border border-cyan-400/30 bg-slate-950/90 shadow-lg shadow-cyan-500/10">
                <Image src={avatar} alt="Le Hoang Thien" fill className="object-cover" sizes="80px" priority />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-200">Profile</p>
                <h2 className="text-2xl font-semibold text-white">Le Hoang Thien</h2>
                <p className="text-sm text-slate-300">Frontend · Product-minded engineer · Portfolio handoff</p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-1">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex w-full items-center gap-3 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-slate-900 hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-800 text-cyan-300 transition duration-300 group-hover:scale-110">{l.icon}</span>
                  <span className="min-w-0 flex-1 text-left">
                    <span className="block text-sm font-semibold text-white">{l.label}</span>
                    <span className="block truncate text-xs text-slate-400">{l.href.replace(/(^https?:\/\/)|(^mailto:)/, '')}</span>
                  </span>
                </a>
              ))}
            </div>
          </article>

          <article className="reveal-on-scroll rounded-3xl border border-slate-800 bg-slate-900/75 p-6 shadow-2xl shadow-black/30 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
            <h2 className="text-xl font-semibold text-white">Why this portfolio works</h2>
            <p className="mt-3 text-slate-300">The page is structured for quick scanning, with a stronger visual hierarchy, easy contact access, and a polished feel for interviews and client reviews.</p>

            <div className="mt-6 space-y-3 text-sm text-slate-200">
              {['Fast, responsive layout and touch-friendly CTA cards.', 'Accessible contact channels with strong hover and focus states.', 'Resume and profile assets ready for handoff or sharing.'].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3">{item}</div>
              ))}
            </div>

            <a href={portfolioContent.contact.resume} className="mt-6 inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100 transition hover:-translate-y-0.5 hover:bg-cyan-400/20">Download PDF</a>
          </article>
        </div>
      </section>
    </main>
  );
}
