import Image from 'next/image';
import Link from 'next/link';
import { caseStudyContent, portfolioContent } from './lib/portfolio';
import avatar from '../Docs/assets/profile/avatar.png';
import ScrollReveal from './components/ScrollReveal';

const projectIcons: Record<string, string> = {
  myu: '🛒',
  'myu-id': '🔐',
  events: '📅',
  'hung-hau-house': '🏡',
  'face-verification': '🤖',
};

const projectAccents: Record<string, string> = {
  myu: 'from-emerald-500/20 to-cyan-500/10',
  'myu-id': 'from-violet-500/20 to-indigo-500/10',
  events: 'from-amber-500/20 to-orange-500/10',
  'hung-hau-house': 'from-rose-500/20 to-pink-500/10',
  'face-verification': 'from-sky-500/20 to-blue-500/10',
};

const projectSkills: Record<string, { skills: string[]; tech: string[] }> = {
  myu: {
    skills: ['Commerce', 'Payments', 'Ops'],
    tech: ['Node.js', 'Koa', 'MySQL', 'Redis'],
  },
  'myu-id': {
    skills: ['Auth', 'Security', 'Identity'],
    tech: ['Node.js', 'JWT', 'Redis', 'Joi'],
  },
  events: {
    skills: ['Forms', 'Survey', 'Events Ops'],
    tech: ['Gatsby', 'React', 'Sequelize', 'MSAL'],
  },
  'hung-hau-house': {
    skills: ['Architecture', 'Admin UX', 'Data Flow'],
    tech: ['Next.js', 'TypeScript', 'TanStack Query'],
  },
  'face-verification': {
    skills: ['Trust', 'Verification', 'Security'],
    tech: ['AI Vision', 'Privacy'],
  },
};

const tickerItems = [
  'Node.js', 'TypeScript', 'React', 'Next.js', 'Koa', 'MySQL', 'Redis',
  'TanStack Query', 'Tailwind CSS', 'Sequelize', 'JWT', 'REST APIs',
  'Git', 'S3', 'Gatsby', 'MSAL', 'RBAC', 'SSO',
];

export default function Home() {
  const projects = caseStudyContent.projects.slice(0, 4);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,#0f2744_0%,#020617_60%)] text-slate-100">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative flex min-h-[92vh] flex-col justify-center px-6 pb-12 pt-24">
        {/* decorative orbs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/4 top-1/4 h-[420px] w-[420px] rounded-full bg-cyan-500/8 blur-[100px]" />
          <div className="absolute right-1/4 top-1/2 h-[320px] w-[320px] rounded-full bg-indigo-500/8 blur-[80px]" />
        </div>

        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          {/* left */}
          <div className="space-y-8 animate-[fadeUp_0.6s_ease-out_both]">
            <p className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/8 px-4 py-1.5 text-xs uppercase tracking-[0.35em] text-cyan-300">
              <span className="h-1.5 w-1.5 animate-[float_2s_ease-in-out_infinite] rounded-full bg-cyan-400" />
              Available for work
            </p>
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-[4.5rem]">
              {portfolioContent.hero.headline}
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-slate-400">
              {portfolioContent.hero.subheadline}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href={portfolioContent.hero.ctas.primary.href}
                className="group relative overflow-hidden rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_28px_rgba(34,211,238,0.4)]"
              >
                {portfolioContent.hero.ctas.primary.label}
                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-300 group-hover:translate-x-full skew-x-12" />
              </Link>
              <Link
                href={portfolioContent.hero.ctas.secondary.href}
                className="rounded-full border border-slate-700 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400/60 hover:bg-slate-800"
              >
                {portfolioContent.hero.ctas.secondary.label}
              </Link>
            </div>
          </div>

          {/* right — about card */}
          <div className="animate-[fadeUp_0.7s_ease-out_0.15s_both]">
            <article className="glass-card relative overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-900/80 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
              <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-indigo-400/10 blur-3xl" />

              <div className="relative flex items-center gap-4">
                <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-cyan-400/30 shadow-lg shadow-cyan-500/20">
                  <Image src={avatar} alt="Le Hoang Thien" fill className="object-cover" sizes="80px" priority />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">About me</p>
                  <h2 className="text-xl font-bold text-white">Le Hoang Thien</h2>
                  <p className="text-xs text-slate-400">Backend · Product-minded engineer</p>
                </div>
              </div>

              <p className="relative mt-5 text-sm leading-relaxed text-slate-300">
                {portfolioContent.about.short_blurb}
              </p>

              <div className="relative mt-5 flex flex-wrap gap-2">
                {['Next.js', 'TypeScript', 'Node.js', 'MySQL', 'Redis'].map((chip) => (
                  <span key={chip} className="rounded-full border border-cyan-400/20 bg-cyan-400/8 px-2.5 py-1 text-[11px] uppercase tracking-wide text-cyan-200">
                    {chip}
                  </span>
                ))}
              </div>

              <ul className="relative mt-5 space-y-2 text-sm">
                {portfolioContent.about.engineering_journey.slice(0, 4).map((item) => (
                  <li key={item} className="flex items-start gap-2 rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-2.5 transition hover:border-cyan-400/20">
                    <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>

        {/* scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-[float_2.5s_ease-in-out_infinite] opacity-40">
          <div className="flex flex-col items-center gap-1 text-xs uppercase tracking-[0.35em] text-slate-500">
            <span>scroll</span>
            <div className="h-6 w-px bg-slate-600" />
          </div>
        </div>
      </section>

      {/* ── SKILL TICKER ─────────────────────────────────────── */}
      <section className="overflow-hidden border-y border-slate-800/60 bg-slate-950/50 py-4">
        <div className="ticker-track select-none">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="mx-4 inline-flex items-center gap-2 text-sm font-medium text-slate-400 whitespace-nowrap">
              <span className="h-1 w-1 rounded-full bg-cyan-500/60" />
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ── FEATURED PROJECTS ────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <ScrollReveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Selected work</p>
              <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">Featured projects</h2>
            </div>
            <Link href="/projects" className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-400/60 hover:text-white">
              View all →
            </Link>
          </div>
        </ScrollReveal>

        {/* Bento grid */}
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {/* first project — full width featured */}
          {projects.slice(0, 1).map((project) => (
            <ScrollReveal key={project.id} delay={100} className="md:col-span-2">
              <article className={`group relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br ${projectAccents[project.id] ?? 'from-slate-800/40 to-slate-900/40'} bg-slate-900/80 p-8 shadow-2xl shadow-black/30 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30`}>
                <div className="absolute right-6 top-6 text-5xl opacity-20 transition duration-300 group-hover:opacity-40 group-hover:scale-110">
                  {projectIcons[project.id] ?? '✨'}
                </div>
                <div className="relative flex flex-wrap items-start gap-6 md:flex-nowrap">
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Featured · {project.status}</p>
                    <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl">{project.title}</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {projectSkills[project.id]?.skills.map((s) => (
                        <span key={s} className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-wide text-cyan-100">{s}</span>
                      ))}
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {projectSkills[project.id]?.tech.map((t) => (
                        <span key={t} className="rounded-full border border-slate-700 bg-slate-950/60 px-3 py-1 text-xs text-slate-300">{t}</span>
                      ))}
                    </div>
                  </div>
                  <Link href={`/projects/${project.id}`} className="shrink-0 self-end rounded-full border border-slate-600 bg-slate-950/80 px-5 py-2.5 text-sm font-medium text-white transition hover:border-cyan-400/60 hover:bg-slate-800">
                    Case study →
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}

          {/* remaining projects 2-col */}
          {projects.slice(1).map((project, i) => (
            <ScrollReveal key={project.id} delay={150 + i * 100} direction={i % 2 === 0 ? 'left' : 'right'}>
              <article className={`group relative h-full overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br ${projectAccents[project.id] ?? 'from-slate-800/40 to-slate-900/40'} bg-slate-900/80 p-7 shadow-xl shadow-black/30 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30`}>
                <div className="absolute right-5 top-5 text-3xl opacity-20 transition duration-300 group-hover:opacity-40 group-hover:scale-110">
                  {projectIcons[project.id] ?? '✨'}
                </div>
                <p className="text-[11px] uppercase tracking-[0.35em] text-cyan-300">Project {i + 2} · {project.status}</p>
                <h3 className="mt-2 text-xl font-bold text-white">{project.title}</h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {projectSkills[project.id]?.skills.map((s) => (
                    <span key={s} className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-1 text-[11px] uppercase tracking-wide text-cyan-100">{s}</span>
                  ))}
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {projectSkills[project.id]?.tech.map((t) => (
                    <span key={t} className="rounded-full border border-slate-700 bg-slate-950/60 px-2.5 py-1 text-[11px] text-slate-300">{t}</span>
                  ))}
                </div>
                <Link href={`/projects/${project.id}`} className="mt-5 inline-flex items-center gap-1 text-sm text-cyan-300 transition hover:text-white">
                  Open case study <span className="transition group-hover:translate-x-1">→</span>
                </Link>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── METRICS STRIP ───────────────────────────────────── */}
      <section className="border-y border-slate-800/60 bg-slate-950/60 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <p className="mb-8 text-center text-xs uppercase tracking-[0.35em] text-cyan-300">Impact by numbers</p>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-3">
            {portfolioContent.metrics.slice(0, 3).map((m, i) => (
              <ScrollReveal key={m.id} delay={i * 100} direction="up">
                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 animate-[float_4s_ease-in-out_infinite]" style={{ animationDelay: `${i * 0.3}s` }}>
                  <p className="text-4xl font-bold text-white tabular-nums">{m.value.toLocaleString()}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.25em] text-slate-400">{m.unit}</p>
                  <p className="mt-2 text-sm text-cyan-200">{m.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="px-6 py-28">
        <ScrollReveal direction="none">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Let's connect</p>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              Building reliable products <br className="hidden md:block" /> with product-minded engineering
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-slate-400">
              If you have a project, a team, or a challenge in mind — reach out. I respond quickly.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="group relative overflow-hidden rounded-full bg-cyan-400 px-8 py-3.5 text-sm font-bold text-slate-950 transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_32px_rgba(34,211,238,0.4)]"
              >
                Get in touch
                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-300 group-hover:translate-x-full skew-x-12" />
              </Link>
              <Link href="/projects" className="rounded-full border border-slate-700 px-8 py-3.5 text-sm font-semibold text-slate-100 transition hover:border-cyan-400/60 hover:bg-slate-900">
                See my work
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

    </main>
  );
}
