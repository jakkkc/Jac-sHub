import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'

const links = [
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/methodology', label: 'Methodology' },
  { to: '/products', label: 'Products' },
  { to: '/writing', label: 'Writing' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Jac's Hub logo" className="h-8 w-8" />
          <span className="text-sm tracking-widest uppercase text-slate-400">
            Jac<span className="text-pink-400">'s</span> Hub
          </span>
        </Link>
        <ul className="flex gap-6 text-sm text-slate-300">
          {links.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className="hover:text-pink-400 transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
