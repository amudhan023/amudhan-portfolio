import { projects } from '../data'

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-surface">
      {/* Top border line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-px bg-accent" />
          <span className="font-mono text-xs text-accent tracking-[0.2em] uppercase">03 / Projects</span>
        </div>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-light mb-4">
          Featured{' '}
          <span className="text-gradient">Impact Work</span>
        </h2>
        <p className="font-body text-muted text-base max-w-xl mb-16">
          High-impact projects from Apple, Amex, Securonix, and Microsoft — built for scale, reliability, and measurable outcomes.
        </p>

        {/* Projects */}
        <div className="space-y-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="group grid md:grid-cols-[1fr_2fr] gap-0 border border-border hover:border-accent/30 transition-all duration-300 overflow-hidden"
            >
              {/* Left panel */}
              <div className={`bg-panel p-8 flex flex-col justify-between border-r border-border group-hover:bg-accent/5 transition-colors duration-300`}>
                <div>
                  <div className="font-mono text-xs text-muted tracking-widest mb-2 uppercase">{project.company}</div>
                  <div className="font-mono text-xs text-muted/50">{project.year}</div>
                </div>
                <div>
                  <div className="font-mono text-xs text-muted uppercase tracking-widest mb-1">Impact</div>
                  <div className={`font-heading text-sm font-bold ${project.color === 'accent' ? 'text-accent' : 'text-gold'}`}>
                    {project.impact}
                  </div>
                </div>
              </div>

              {/* Right panel */}
              <div className="bg-ink p-8">
                <h3 className="font-heading text-lg font-semibold text-light mb-3 group-hover:text-accent transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="font-body text-sm text-muted leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-2 py-0.5 border border-border text-muted/70 hover:border-accent/40 hover:text-accent/70 transition-colors duration-150"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
