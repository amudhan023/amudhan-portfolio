import { useEffect, useState } from 'react'
import { profile } from '../data'

const roles = [
  'Distributed Systems Architect',
  'Streaming Data Engineer',
  'Cloud Platform Engineer',
  'Senior Software Engineer',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIndex]
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 2000)
        return () => clearTimeout(t)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30)
        return () => clearTimeout(t)
      } else {
        setRoleIndex((i) => (i + 1) % roles.length)
        setTyping(true)
      }
    }
  }, [displayed, typing, roleIndex])

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center grid-bg overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      {/* Vertical line decoration */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            {/* Label */}
            <div className="flex items-center gap-3 mb-6 animate-fade-up opacity-0-init" style={{ animationFillMode: 'forwards' }}>
              <div className="w-8 h-px bg-accent" />
              <span className="font-mono text-xs text-accent tracking-[0.2em] uppercase">
                Available for opportunities
              </span>
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-slow" />
            </div>

            {/* Name */}
            <h1 className="font-display text-7xl md:text-8xl lg:text-9xl tracking-wider text-light leading-none mb-4 animate-fade-up opacity-0-init animate-delay-100" style={{ animationFillMode: 'forwards' }}>
              AMUDHAN
            </h1>
            <h1 className="font-display text-gradient leading-none mb-8 animate-fade-up opacity-0-init animate-delay-200" style={{ animationFillMode: 'forwards', fontSize: 'clamp(3.5rem, 10vw, 7rem)', letterSpacing: '0.05em', display: 'block', overflow: 'visible', paddingRight: '0.1em' }}>
              SHANMUGAM
            </h1>

            {/* Typewriter role */}
            <div className="font-mono text-lg text-muted mb-8 h-7 animate-fade-up opacity-0-init animate-delay-300" style={{ animationFillMode: 'forwards' }}>
              <span className="text-gold">{'>'} </span>
              <span className="text-light">{displayed}</span>
              <span className="animate-blink text-accent">|</span>
            </div>

            {/* Summary */}
            <p className="font-body text-muted text-base leading-relaxed max-w-lg mb-10 animate-fade-up opacity-0-init animate-delay-400" style={{ animationFillMode: 'forwards' }}>
              {profile.tagline}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-up opacity-0-init animate-delay-500" style={{ animationFillMode: 'forwards' }}>
              <a
                href="#contact"
                className="font-heading text-sm px-6 py-3 bg-accent text-ink font-semibold tracking-wide uppercase hover:bg-accent/90 transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,229,255,0.3)]"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="font-heading text-sm px-6 py-3 border border-border text-muted hover:border-accent hover:text-accent transition-all duration-200 tracking-wide uppercase"
              >
                View Projects
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading text-sm px-6 py-3 border border-border text-muted hover:border-gold hover:text-gold transition-all duration-200 tracking-wide uppercase"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right — stat cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4 animate-fade-in opacity-0-init animate-delay-600" style={{ animationFillMode: 'forwards' }}>
            {[
              { number: '18+', label: 'Years Experience', accent: 'accent' },
              { number: '5', label: 'Major Tech Companies', accent: 'gold' },
              { number: '1B+', label: 'Events / Day Processed', accent: 'accent' },
              { number: '80%', label: 'Engineering Effort Saved', accent: 'gold' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-panel border border-border p-6 hover:border-accent/40 transition-colors duration-300 group"
              >
                <div className={`font-display text-5xl tracking-wider mb-2 ${stat.accent === 'accent' ? 'text-gradient' : 'text-gradient-gold'} group-hover:scale-105 transition-transform duration-200 inline-block`}>
                  {stat.number}
                </div>
                <div className="font-body text-xs text-muted uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}

            {/* Tech badge cloud */}
            <div className="col-span-2 bg-panel border border-border p-6">
              <div className="font-mono text-xs text-muted mb-4">// Core stack</div>
              <div className="flex flex-wrap gap-2">
                {['Kafka', 'Spark', 'Flink', 'Databricks', 'Snowflake', 'Airflow', 'Scala', 'Python', 'AWS', 'GCP', 'K8s', 'Delta Lake'].map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-2 py-1 bg-border/50 text-accent/80 hover:bg-accent/10 hover:text-accent transition-colors duration-150"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in opacity-0-init animate-delay-800" style={{ animationFillMode: 'forwards' }}>
          <span className="font-mono text-xs text-muted tracking-widest">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-muted to-transparent" />
        </div>
      </div>
    </section>
  )
}
