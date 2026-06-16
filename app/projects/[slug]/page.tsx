import Link from 'next/link';
import { caseStudyContent } from '../../lib/portfolio';
import { projectStories } from '../../lib/caseStudies';

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = caseStudyContent.projects.find((item) => item.id === params.slug);
  const story = project
    ? (projectStories[params.slug as keyof typeof projectStories] as (typeof projectStories)[keyof typeof projectStories] & {
        links?: { live?: string; deeplink?: string; deeplinkAndroid?: string };
      })
    : null;

  if (!project) {
    return (
      <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#0f172a_0%,_#020617_45%,_#01030a_100%)] px-6 py-12 text-slate-100">
        <section className="mx-auto max-w-4xl rounded-3xl border border-slate-800 bg-slate-900/75 p-8 text-center shadow-2xl shadow-black/30 backdrop-blur">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Project</p>
          <h1 className="mt-4 text-3xl font-semibold text-white">Project not found</h1>
          <p className="mt-3 text-slate-300">The requested case study is not available yet in the current content bundle.</p>
          <Link href="/projects" className="mt-6 inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100 hover:bg-cyan-400/20">Back to projects</Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#0f172a_0%,_#020617_45%,_#01030a_100%)] px-6 py-12 text-slate-100">
      <section className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-black/30 backdrop-blur">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Case Study</p>
          <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">{project.title}</h1>
          <p className="mt-2 text-sm uppercase tracking-[0.25em] text-cyan-200">{story?.tagline}</p>
          <p className="mt-4 max-w-3xl text-slate-300">{story?.summary}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full border border-slate-700 bg-slate-800/80 px-3 py-1 text-sm text-slate-200">Status: {project.status}</span>
            <span className="rounded-full border border-slate-700 bg-slate-800/80 px-3 py-1 text-sm text-slate-200">Sources: {project.source.length}</span>
          </div>
          {story?.links ? (
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={story.links.live} target="_blank" rel="noreferrer" className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100 hover:bg-cyan-400/20">Open live project</a>
              <a href={story.links.deeplink} target="_blank" rel="noreferrer" className="rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm text-slate-100 hover:border-cyan-400/60 hover:bg-slate-800">Open app deeplink</a>
              {story.links.deeplinkAndroid ? (
                <a href={story.links.deeplinkAndroid} target="_blank" rel="noreferrer" className="rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm text-slate-100 hover:border-cyan-400/60 hover:bg-slate-800">Android deeplink</a>
              ) : null}
            </div>
          ) : null}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-slate-800 bg-slate-900/75 p-6 shadow-2xl shadow-black/30 backdrop-blur">
            <h2 className="text-xl font-semibold text-white">Highlights</h2>
            <ul className="mt-4 space-y-3 text-slate-200">
              <li>• Product and platform impact captured from the case-study draft.</li>
              <li>• Metrics are rendered directly from the Phase 3 dataset.</li>
              <li>• This page now shows the real narrative structure for the project.</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-slate-800 bg-slate-900/75 p-6 shadow-2xl shadow-black/30 backdrop-blur">
            <h2 className="text-xl font-semibold text-white">Metrics</h2>
            <div className="mt-4 space-y-3">
              {Object.entries(project.metrics).length === 0 ? (
                <p className="text-slate-300">No metrics were provided in the current draft.</p>
              ) : (
                Object.entries(project.metrics).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm text-slate-200">
                    <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    <strong className="text-cyan-100">{String(value)}</strong>
                  </div>
                ))
              )}
            </div>
          </article>
        </div>

        <article className="rounded-3xl border border-slate-800 bg-slate-900/75 p-6 shadow-2xl shadow-black/30 backdrop-blur">
          <h2 className="text-xl font-semibold text-white">Project narrative</h2>
          <div className="mt-4 space-y-4">
            {story?.sections.map(([title, text]) => (
              <section key={title} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-slate-300">{text}</p>
              </section>
            ))}
          </div>
        </article>

        <article className="rounded-3xl border border-slate-800 bg-slate-900/75 p-6 shadow-2xl shadow-black/30 backdrop-blur">
          <h2 className="text-xl font-semibold text-white">Source references</h2>
          <ul className="mt-4 space-y-2 text-slate-200">
            {project.source.map((entry) => (
              <li key={entry} className="rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm">{entry}</li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}
