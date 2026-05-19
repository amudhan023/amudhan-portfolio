import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-ink py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="font-display text-xl tracking-widest text-accent">AS</span>
          <span className="font-body text-xs text-muted">Amudhan Shanmugam</span>
        </div>
        <div className="font-mono text-xs text-muted/40 text-center">
          Senior Software Engineer · Dallas, TX · {new Date().getFullYear()}
        </div>
        <div className="flex items-center gap-6">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-muted hover:text-accent transition-colors">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="font-mono text-xs text-muted hover:text-accent transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
