import { Link } from 'react-router-dom'
import { disclaimer } from '../data/site'

export function Header() {
  const links = ['Home', 'Features', 'Sleep', 'Fitness', 'App', 'Sizing', 'FAQ', 'Support']
  return <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl"><div className="container-padded flex h-16 items-center justify-between"><Link to="/" className="font-semibold tracking-[0.2em] text-white">OULENCU</Link><nav className="hidden gap-6 text-sm text-slate-300 md:flex">{links.map((l) => <a key={l} href={l === 'Support' ? '/support' : `/#${l.toLowerCase()}`} className="transition hover:text-white">{l}</a>)}</nav><a href="https://www.amazon.com/" className="btn-primary !px-4 !py-2 text-sm">Shop Now</a></div></header>
}

export function Footer() {
  return <footer className="border-t border-white/10 bg-slate-950"><div className="container-padded grid gap-8 py-12 text-slate-300 md:grid-cols-3"><div><p className="font-semibold tracking-[0.2em] text-white">OULENCU</p><p className="mt-3 text-sm">Premium wellness tracking with no subscription.</p></div><div><p className="font-medium text-white">Quick Links</p><ul className="mt-3 space-y-2 text-sm"><li><Link to="/privacy">Privacy Policy</Link></li><li><Link to="/terms">Terms of Use</Link></li><li><Link to="/support">Support</Link></li><li><Link to="/sizing">Sizing Guide</Link></li></ul></div><div><p className="font-medium text-white">Contact</p><p className="mt-3 text-sm">support@example.com</p><p className="mt-3 text-xs text-slate-400">{disclaimer}</p></div></div><div className="border-t border-white/10 py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} OULENCU. All rights reserved.</div></footer>
}
