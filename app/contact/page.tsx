import { portfolioContent } from '../lib/portfolio';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#0f172a_0%,_#020617_45%,_#01030a_100%)] px-6 py-12 text-slate-100">
      <section className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Contact</p>
          <h1 className="text-4xl font-semibold text-white md:text-5xl">Let’s build reliable products together</h1>
          <p className="max-w-2xl text-slate-300">The contact section is linked to the Phase 2 content bundle for email, LinkedIn, GitHub, and resume references.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-slate-800 bg-slate-900/75 p-6 shadow-2xl shadow-black/30 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-400/30">
            <h2 className="text-xl font-semibold text-white">Reach me</h2>
            <ul className="mt-4 space-y-3 text-slate-200">
              <li>Email: <a className="text-cyan-200 underline" href={`mailto:${portfolioContent.contact.email}`}>{portfolioContent.contact.email}</a></li>
              <li>LinkedIn: <a className="text-cyan-200 underline" href={portfolioContent.contact.linkedin} target="_blank" rel="noreferrer">Open profile</a></li>
              <li>GitHub: <a className="text-cyan-200 underline" href={portfolioContent.contact.github} target="_blank" rel="noreferrer">Open repos</a></li>
            </ul>
          </article>

          <article className="rounded-3xl border border-slate-800 bg-slate-900/75 p-6 shadow-2xl shadow-black/30 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-400/30">
            <h2 className="text-xl font-semibold text-white">Resume</h2>
            <p className="mt-3 text-slate-300">PDF resume and profile assets are ready in the Docs/assets/profile folder for the final portfolio handoff.</p>
            <a href={portfolioContent.contact.resume} className="mt-6 inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100 hover:bg-cyan-400/20">Download PDF</a>
          </article>
        </div>
      </section>
    </main>
  );
}
