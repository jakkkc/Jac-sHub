import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
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
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src={logo} alt="Jac's Hub logo" className="h-8 w-8" />
          <span className="text-sm tracking-widest uppercase text-slate-400">
            Jac<span className="text-pink-400">'s</span> Hub
          </span>
        </Link>

        <ul className="hidden md:flex gap-6 text-sm text-slate-300">
          {links.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className="hover:text-pink-400 transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-300"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col gap-1 px-6 pb-4 text-sm text-slate-300 font-sans normal-case">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                onClick={() => setOpen(false)}
                className="block py-2 hover:text-pink-400 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
