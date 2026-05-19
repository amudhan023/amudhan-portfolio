import { skills } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-px bg-accent" />
          <span className="font-mono text-xs text-accent tracking-[0.2em] uppercase">02 / Skills</span>
        </div>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-light mb-4">
          Tech Stack &{' '}
          <span className="text-gradient">Expertise</span>
        </h2>
        <p className="font-body text-muted text-base max-w-xl mb-16">
          18+ years across the full distributed systems stack — from streaming pipelines to cloud infrastructure.
        </p>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((group, i) => (
            <div
              key={group.category}
              className="bg-panel border border-border p-6 hover:border-accent/30 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-accent/20 group-hover:border-accent/60 transition-colors duration-300" />

              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="font-heading text-sm font-semibold text-light tracking-wide uppercase">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs px-2.5 py-1 bg-ink border border-border text-muted group-hover:border-border/80 transition-colors duration-150"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Also experienced in */}
        <div className="mt-8 p-6 border border-border bg-panel">
          <span className="font-mono text-xs text-muted tracking-widest uppercase mr-4">Also experienced in:</span>
          {['Helm Charts', 'ZooKeeper', 'Elasticsearch', 'Hibernate', 'Apache Camel', 'Spring MVC', 'Oracle DB', 'Maven', 'Docker', 'Linux'].map((t) => (
            <span key={t} className="inline-block font-mono text-xs text-muted/60 mr-3 mb-1 hover:text-muted transition-colors">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
