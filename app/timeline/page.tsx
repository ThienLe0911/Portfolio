import { portfolioContent } from '../lib/portfolio';

export default function TimelinePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#0f172a_0%,_#020617_45%,_#01030a_100%)] px-6 py-12 text-slate-100">
      <section className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Timeline</p>
          <h1 className="text-4xl font-semibold text-white md:text-5xl">Milestones from the project docs</h1>
          <p className="max-w-2xl text-slate-300">This timeline is rendered directly from the Phase 2 content bundle to keep the portfolio easy to update.</p>
        </div>

        <div className="space-y-6">
          {portfolioContent.timeline.map((item, index) => (
            <article key={item.id} className="rounded-3xl border border-slate-800 bg-slate-900/75 p-6 shadow-2xl shadow-black/30 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-400/30">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex gap-4">
                  <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-sm font-semibold text-cyan-100 md:flex">{String(index + 1).padStart(2, '0')}</div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">{item.period ?? item.date ?? 'Milestone'}</p>
                    <h2 className="mt-2 text-2xl font-semibold text-white">{item.title}</h2>
                    <p className="mt-3 max-w-3xl text-slate-300">{item.description}</p>
                  </div>
                </div>
                <span className="rounded-full border border-slate-700 bg-slate-800/80 px-3 py-1 text-sm text-slate-200">{item.slug}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
