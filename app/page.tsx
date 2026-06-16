import Link from 'next/link';
import { caseStudyContent, portfolioContent } from './lib/portfolio';

export default function Home() {
  const projectIcons: Record<string, string> = {
    myu: '🛒',
    'myu-id': '🔐',
    events: '📅',
    'hung-hau-house': '🏡',
    'face-verification': '🤖',
  };

  const projectSkills: Record<string, { skills: string[]; tech: string[] }> = {
    myu: {
      skills: ['Commerce', 'Payments', 'Ops'],
      tech: ['Node.js', 'Koa', 'Sequelize', 'MySQL', 'Redis', 'S3'],
    },
    'myu-id': {
      skills: ['Auth', 'Security', 'Identity'],
      tech: ['Node.js', 'Koa', 'Sequelize', 'MySQL', 'Redis', 'JWT', 'Joi'],
    },
    events: {
      skills: ['Forms', 'Survey', 'Events Ops'],
      tech: ['Node.js', 'Express', 'Gatsby', 'React', 'Sequelize', 'S3', 'MSAL'],
    },
    'hung-hau-house': {
      skills: ['Architecture', 'Admin UX', 'Data Flow'],
      tech: ['Next.js', 'React', 'TypeScript', 'Sequelize', 'MSSQL', 'TanStack Query'],
    },
    'face-verification': {
      skills: ['Trust', 'Verification', 'Security'],
      tech: ['AI Vision', 'Identity APIs', 'Privacy'],
    },
  };

  const metricIcons = ['⚡', '📈', '🧭'];

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#0f172a_0%,_#020617_45%,_#01030a_100%)] px-6 py-12 text-slate-100">
      <section className="mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center gap-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center animate-[fadeUp_0.5s_ease-out]">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Portfolio</p>
            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white md:text-7xl">{portfolioContent.hero.headline}</h1>
            <p className="max-w-2xl text-lg text-slate-300">{portfolioContent.hero.subheadline}</p>
            <div className="flex flex-wrap gap-3">
              <Link href={portfolioContent.hero.ctas.primary.href} className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">{portfolioContent.hero.ctas.primary.label}</Link>
              <Link href={portfolioContent.hero.ctas.secondary.href} className="rounded-full border border-slate-700 bg-slate-900/80 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400/60 hover:bg-slate-800">{portfolioContent.hero.ctas.secondary.label}</Link>
            </div>
          </div>

          <article className="glass-card relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-black/30 backdrop-blur animate-[fadeUp_0.55s_ease-out]">
            <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-20 w-20 rounded-full bg-indigo-400/10 blur-3xl" />
            <div className="relative flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-sky-400 to-indigo-500 text-xl shadow-lg shadow-cyan-500/20">🚀</div>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">About</p>
                <h2 className="text-xl font-semibold text-white">Le Hoang Thien</h2>
              </div>
            </div>
            <p className="relative mt-5 text-slate-300">{portfolioContent.about.short_blurb}</p>
            <div className="relative mt-6 flex flex-wrap gap-2">
              {['Next.js', 'TypeScript', 'Tailwind', 'Analytics'].map((chip) => (
                <span key={chip} className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-cyan-100">{chip}</span>
              ))}
            </div>
            <ul className="relative mt-6 space-y-3 text-sm text-slate-200">
              {portfolioContent.about.engineering_journey.slice(0, 5).map((item) => (
                <li key={item} className="rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3 transition hover:border-cyan-400/30 hover:bg-slate-900">{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/75 p-6 shadow-2xl shadow-black/30 backdrop-blur animate-[fadeUp_0.55s_ease-out]">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">Metrics module</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">Key impact highlights</h2>
            </div>
            <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-cyan-100">Draft-ready</span>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {portfolioContent.metrics.slice(0, 3).map((metric, index) => (
              <article key={metric.id} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-cyan-500/10 animate-[float_4s_ease-in-out_infinite]" style={{ animationDelay: `${index * 0.25}s` }}>
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm text-cyan-200">{metric.label}</p>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-lg">{metricIcons[index]}</span>
                </div>
                <h3 className="mt-3 text-3xl font-semibold text-white">{metric.value.toLocaleString()}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.25em] text-slate-400">{metric.unit}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="grid gap-6 md:grid-cols-2 animate-[fadeUp_0.6s_ease-out]">
          {caseStudyContent.projects.slice(0, 4).map((project, index) => (
            <article key={project.id} className="rounded-3xl border border-slate-800 bg-slate-900/75 p-6 shadow-2xl shadow-black/30 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-cyan-500/10">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-200">Featured project {index + 1}</p>
                <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-cyan-100">{project.status}</span>
              </div>
              <div className="mt-4 flex items-center gap-4">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-950 text-2xl shadow-inner shadow-black/30">{projectIcons[project.id] ?? '✨'}</span>
                <div>
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-1 text-sm text-slate-300">{project.source.join(' • ')}</p>
                </div>
              </div>
              <div className="mt-4 space-y-3">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.35em] text-cyan-200">Skills</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {projectSkills[project.id]?.skills.map((skill) => (
                      <span key={`${project.id}-${skill}`} className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-cyan-100">{skill}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.35em] text-cyan-200">Tech</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {projectSkills[project.id]?.tech.map((tech) => (
                      <span key={`${project.id}-${tech}`} className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-slate-200">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
              <Link href={`/projects/${project.id}`} className="mt-5 inline-flex rounded-full border border-slate-700 bg-slate-950/80 px-4 py-2 text-sm text-slate-100 transition hover:border-cyan-400/60 hover:bg-slate-800">Open case study →</Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
