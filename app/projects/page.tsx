import Link from 'next/link';
import { projectStories } from '../lib/caseStudies';
import { caseStudyContent, portfolioContent } from '../lib/portfolio';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#0f172a_0%,_#020617_45%,_#01030a_100%)] px-6 py-12 text-slate-100">
      <section className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Projects</p>
          <h1 className="text-4xl font-semibold text-white md:text-5xl">Featured case studies</h1>
          <p className="max-w-2xl text-slate-300">The portfolio uses the existing Phase 3 drafts as the source of truth for featured work.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {caseStudyContent.projects.map((project) => (
            <article key={project.id} className="rounded-3xl border border-slate-800 bg-slate-900/75 p-6 shadow-2xl shadow-black/30 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-400/30">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">{project.status}</p>
                <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.35em] text-cyan-100">Case Study</span>
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-white">{project.title}</h2>
              <p className="mt-2 text-sm text-slate-300">{project.source.join(' • ')}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-300">
                {Object.entries(project.metrics).slice(0, 4).map(([key, value]) => (
                  <li key={key} className="flex items-center justify-between border-b border-slate-800 pb-2 last:border-b-0 last:pb-0">
                    <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    <strong className="text-cyan-100">{String(value)}</strong>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href={`/projects/${project.id}`} className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100 hover:bg-cyan-400/20">
                  Open case study
                </Link>
                {(() => {
                  const story = projectStories[project.id as keyof typeof projectStories] as
                    | (typeof projectStories)[keyof typeof projectStories] & { links?: { live?: string } }
                    | undefined;
                  return story?.links ? (
                    <a href={story.links.live} target="_blank" rel="noreferrer" className="inline-flex rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm text-slate-100 hover:border-cyan-400/60 hover:bg-slate-800">Open live</a>
                  ) : null;
                })()}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
