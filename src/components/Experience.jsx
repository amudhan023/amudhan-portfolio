import { useState } from 'react'
import { experience } from '../data'

export default function Experience() {
  const [active, setActive] = useState(0)
  const current = experience[active]

  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-px bg-accent" />
          <span className="font-mono text-xs text-accent tracking-[0.2em] uppercase">04 / Experience</span>
        </div>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-light mb-4">
          Career{' '}
          <span className="text-gradient">Timeline</span>
        </h2>
        <p className="font-body text-muted text-base max-w-xl mb-16">
          18+ years across fintech, cybersecurity, retail tech, and enterprise software at industry-leading companies.
        </p>

        <div className="grid md:grid-cols-[260px_1fr] gap-8">
          {/* Company list */}
          <div className="space-y-1">
            {experience.map((exp, i) => (
              <button
                key={exp.company}
                onClick={() => setActive(i)}
                className={`w-full text-left px-4 py-4 border transition-all duration-200 ${
                  active === i
                    ? 'border-accent bg-accent/10 text-light'
                    : 'border-transparent text-muted hover:text-light hover:bg-panel'
                }`}
              >
                <div className="font-heading text-sm font-semibold tracking-wide">
                  {exp.company}
                </div>
                <div className="font-mono text-xs text-muted mt-0.5">{exp.period}</div>
                {active === i && (
                  <div className="w-4 h-px bg-accent mt-2" />
                )}
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div key={active} className="bg-panel border border-border p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-accent/10" />

            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <h3 className="font-heading text-2xl font-bold text-light mb-1">
                  {current.role}
                </h3>
                <div className="flex items-center gap-3">
                  <span className="font-heading text-sm text-accent font-semibold">{current.company}</span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span className="font-mono text-xs text-muted">{current.location}</span>
                </div>
              </div>
              <span className="font-mono text-xs px-3 py-1.5 border border-border text-muted">
                {current.period}
              </span>
            </div>

            {/* Highlights */}
            <ul className="space-y-3 mb-6">
              {current.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  <span className="font-body text-sm text-muted leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>

            {/* Tech */}
            <div className="pt-6 border-t border-border">
              <span className="font-mono text-xs text-muted/50 mr-3 uppercase tracking-widest">Stack:</span>
              {current.tech.map((t) => (
                <span key={t} className="inline-block font-mono text-xs text-accent/70 bg-accent/5 px-2 py-0.5 mr-2 mb-1">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
