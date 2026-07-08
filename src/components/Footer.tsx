import { Link } from 'react-router-dom'
import { Mail, Phone, Rss } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import logo from '../assets/images/logo.png'

const quickLinks = [
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/methodology', label: 'Methodology' },
  { to: '/products', label: 'Products' },
  { to: '/writing', label: 'Writing' },
]

const contactLinks = [
  {
    href: 'mailto:jacmwaniki@gmail.com',
    label: 'jacmwaniki@gmail.com',
    icon: Mail,
    external: false,
  },
  {
    href: 'tel:+254742881370',
    label: '+254 742 881 370',
    icon: Phone,
    external: false,
  },
  {
    href: 'https://substack.com/@nexink?r=8cf1uv&utm_campaign=profile&utm_medium=profile-page',
    label: 'Substack',
    icon: Rss,
    external: true,
  },
  {
    href: 'https://linkedin.com/in/jackson-mwaniki',
    label: 'LinkedIn',
    icon: LinkedinIcon,
    external: true,
  },
  {
    href: 'https://github.com/jakkkc',
    label: 'GitHub',
    icon: GithubIcon,
    external: true,
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3 md:gap-10 font-sans normal-case text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="Jac's Hub logo" className="h-7 w-7" />
            <span className="uppercase tracking-widest text-xs text-slate-400">
              Jac<span className="text-pink-400">'s</span> Hub
            </span>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
            NexInk Ltd. Social media strategy and software built for
            businesses across Kenya.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h4 className="uppercase text-xs tracking-widest text-slate-400 mb-4">
            Quick links
          </h4>
          <ul className="space-y-2 text-sm text-slate-400">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-pink-400 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h4 className="uppercase text-xs tracking-widest text-slate-400 mb-4">
            Get in touch
          </h4>
          <ul className="space-y-3 text-sm text-slate-400">
            {contactLinks.map((link) => {
              const Icon = link.icon
              return (
                <li key={link.href}>
                  
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noreferrer' : undefined}
                    className="flex items-center gap-2 hover:text-pink-400 transition-colors break-all justify-center md:justify-start"
                  >
                    <Icon size={16} className="shrink-0" />
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 py-6 text-center text-xs text-slate-600 font-sans normal-case">
        &copy; {new Date().getFullYear()} NexInk Ltd. All rights reserved.
      </div>
    </footer>
  )
}
