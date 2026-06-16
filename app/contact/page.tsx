import { portfolioContent } from '../lib/portfolio';
import { MailIcon, GithubIcon, LinkedInIcon } from '../components/icons';

export default function ContactPage() {
  const links = [
    { label: 'Email', href: `mailto:${portfolioContent.contact.email}`, icon: <MailIcon /> },
    { label: 'GitHub', href: portfolioContent.contact.github, icon: <GithubIcon /> },
    { label: 'LinkedIn', href: portfolioContent.contact.linkedin, icon: <LinkedInIcon /> },
  ];

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#0f172a_0%,_#020617_45%,_#01030a_100%)] px-6 py-12 text-slate-100">
      <section className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Contact</p>
          <h1 className="text-4xl font-semibold text-white md:text-5xl">Let’s build reliable products together</h1>
          <p className="max-w-2xl text-slate-300">You can reach me via email, GitHub, or LinkedIn. Resume is available for download.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-slate-800 bg-slate-900/75 p-6 shadow-2xl shadow-black/30 backdrop-blur transition-transform duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
            <h2 className="text-xl font-semibold text-white">Reach me</h2>
            <div className="mt-6 flex gap-3">
              {links.map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 transition hover:translate-x-1 hover:shadow-lg">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-cyan-300 transition group-hover:scale-110">{l.icon}</span>
                  <span className="flex flex-col text-left">
                    <span className="text-sm font-semibold text-white">{l.label}</span>
                    <span className="text-xs text-slate-400">{l.href.replace(/(^https?:\/\/)|(^mailto:)/, '')}</span>
                  </span>
                </a>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-slate-800 bg-slate-900/75 p-6 shadow-2xl shadow-black/30 backdrop-blur transition-transform duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
            <h2 className="text-xl font-semibold text-white">Resume</h2>
            <p className="mt-3 text-slate-300">PDF resume and profile assets are ready in the Docs/assets/profile folder for the final portfolio handoff.</p>
            <a href={portfolioContent.contact.resume} className="mt-6 inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100 hover:bg-cyan-400/20">Download PDF</a>
          </article>
        </div>
      </section>
    </main>
  );
}
