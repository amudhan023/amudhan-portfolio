import { profile } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-surface">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-px bg-accent" />
          <span className="font-mono text-xs text-accent tracking-[0.2em] uppercase">05 / Contact</span>
        </div>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-light mb-4">
          Let's{' '}
          <span className="text-gradient">Connect</span>
        </h2>
        <p className="font-body text-muted text-base max-w-xl mb-16">
          Open to senior engineering, staff, and lead roles in distributed systems, data platforms, and cloud-native architectures. Based in Dallas — open to remote.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: contact info */}
          <div className="space-y-4">
            {[
              {
                label: 'Email',
                value: profile.email,
                href: `mailto:${profile.email}`,
                icon: '✉',
              },
              {
                label: 'LinkedIn',
                value: 'linkedin.com/in/amudhans',
                href: profile.linkedin,
                icon: '◈',
              },
              {
                label: 'Phone',
                value: profile.phone,
                href: `tel:${profile.phone}`,
                icon: '◎',
              },
              {
                label: 'Location',
                value: 'Dallas, Texas · Open to Remote',
                href: null,
                icon: '◉',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 p-4 border border-border bg-panel hover:border-accent/30 transition-colors duration-200 group"
              >
                <span className="font-mono text-accent text-lg w-8">{item.icon}</span>
                <div className="flex-1">
                  <div className="font-mono text-xs text-muted uppercase tracking-widest mb-0.5">{item.label}</div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="font-body text-sm text-light group-hover:text-accent transition-colors duration-150"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="font-body text-sm text-light">{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right: message form via Formspree */}
          <form
            action="https://formspree.io/f/mbdbdaqy"
            method="POST"
            className="space-y-4"
          >
            <div className="text-xs font-mono text-muted mb-4 border-b border-border pb-3">
              {/* Replace YOUR_FORM_ID at formspree.io — free tier, no backend needed */}
              {'// Send a message directly'}
            </div>
            <div>
              <label className="block font-mono text-xs text-muted uppercase tracking-widest mb-2">Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="w-full bg-ink border border-border px-4 py-3 font-body text-sm text-light placeholder-muted/40 focus:border-accent focus:outline-none transition-colors duration-200"
              />
            </div>
            <div>
              <label className="block font-mono text-xs text-muted uppercase tracking-widest mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                className="w-full bg-ink border border-border px-4 py-3 font-body text-sm text-light placeholder-muted/40 focus:border-accent focus:outline-none transition-colors duration-200"
              />
            </div>
            <div>
              <label className="block font-mono text-xs text-muted uppercase tracking-widest mb-2">Message</label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Tell me about the role or project..."
                className="w-full bg-ink border border-border px-4 py-3 font-body text-sm text-light placeholder-muted/40 focus:border-accent focus:outline-none transition-colors duration-200 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full font-heading text-sm px-6 py-3 bg-accent text-ink font-semibold tracking-wide uppercase hover:bg-accent/90 transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,229,255,0.3)]"
            >
              Send Message
            </button>
            <p className="font-mono text-xs text-muted/50 text-center">
              Powered by Formspree · Free · No backend needed
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
