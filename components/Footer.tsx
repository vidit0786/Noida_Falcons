import TeamLogo from './TeamLogo';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Squad', href: '#squad' },
  { label: 'Matches', href: '#matches' },
  { label: 'News', href: '#news' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { label: 'Instagram', mark: 'IG' },
  { label: 'YouTube', mark: 'YT' },
  { label: 'Facebook', mark: 'FB' },
  { label: 'X', mark: 'X' },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-white/10 bg-black/55 py-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(10,77,155,.25),transparent_28%)]" aria-hidden="true" />
      <div className="container-page relative">
        <div className="grid gap-10 md:grid-cols-[1.25fr_.75fr_.75fr]">
          <div>
            <TeamLogo />
            <p className="mt-5 max-w-md leading-7 text-white/62">
              Noida Falcons — Rise Above The Rest. A premium cricket franchise representing pace, pride, and the future of sport in Noida.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#contact"
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-xs font-black text-white transition hover:-translate-y-1 hover:border-falcon-blue/60 hover:bg-falcon-blue hover:shadow-glow"
                >
                  {social.mark}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.28em] text-falcon-silver">Quick Links</h3>
            <div className="mt-5 grid gap-3">
              {quickLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-white/65 transition hover:text-white">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.28em] text-falcon-silver">Contact</h3>
            <div className="mt-5 space-y-3 text-white/65">
              <p>Noida International Cricket Stadium</p>
              <p>Noida, Uttar Pradesh, India</p>
              <a href="mailto:hello@noidafalcons.com" className="block transition hover:text-white">hello@noidafalcons.com</a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/46 md:flex-row md:items-center">
          <p>© 2026 Noida Falcons. All rights reserved.</p>
          <p className="font-bold uppercase tracking-[0.22em] text-falcon-silver/70">Rise Above The Rest</p>
        </div>
      </div>
    </footer>
  );
}
