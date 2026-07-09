import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'

type Product = {
  name: string
  status: string
  description: string
  stack: string
  accent: string
  cta?: { label: string; to: string }
}

const products: Product[] = [
  {
    name: 'Ekwena Feedback System',
    status: 'Live in production',
    description:
      'A full stack guest feedback platform built for a two branch hotel and restaurant group. See the full case study for the complete build.',
    stack: 'Next.js, Supabase, Tailwind CSS',
    accent: 'from-pink-400 to-blue-400',
    cta: { label: 'Read the case study', to: '/case-studies' },
  },
  {
    name: 'NexBookings',
    status: 'Active build',
    description:
      'A booking management system built for local hotels, Airbnbs, and guest houses in Kenya. Owners manage properties, rooms, and bookings, track payments, and soon handle guest bookings through WhatsApp.',
    stack: 'React, TypeScript, Vite, Supabase',
    accent: 'from-blue-400 to-pink-400',
  },
  {
    name: 'Shift Management App',
    status: 'Live demo',
    description:
      'Browser based shift scheduling for hospitality teams. Aware of Kenyan public holidays, tracks annual leave accrual, and handles split shifts across weekly and monthly views.',
    stack: 'React, TypeScript',
    accent: 'from-pink-400 to-blue-400',
  },
  {
    name: 'Manguo POS',
    status: 'Live demo',
    description:
      'A full featured point of sale system built for Kenyan retail clothing shops. Handles product variants, sales history, credit accounts, supply management, and staff PIN access.',
    stack: 'Firebase, React',
    accent: 'from-blue-400 to-pink-400',
  },
  {
    name: 'Biashara Yako POS',
    status: 'Active build',
    description:
      'A multi tenant point of sale platform for East African businesses, built as a full software as a service product from the ground up.',
    stack: 'Firebase, PWA',
    accent: 'from-pink-400 to-blue-400',
  },
  {
    name: "Jac's Hub",
    status: 'You are looking at it',
    description:
      'This site itself. Built as proof of work, not just a place to describe it.',
    stack: 'React, TypeScript, Vite, Tailwind CSS',
    accent: 'from-blue-400 to-pink-400',
  },
]

export default function Products() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <p className="uppercase tracking-widest text-xs text-pink-400 mb-5">Products</p>
      <h1 className="uppercase text-4xl md:text-7xl leading-none mb-6">
        <span className="block text-slate-100">Software built</span>
        <span className="block">
          <span className="text-blue-400">for real</span>{' '}
          <span className="text-pink-400">businesses</span>
        </span>
      </h1>
      <p className="text-slate-400 font-sans normal-case max-w-xl mb-14 leading-relaxed">
        Not side projects. These are systems built and used by real
        businesses across Kenya, solving real operational problems.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {products.map((product, index) => (
          <Reveal key={product.name} delay={index * 80}>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 flex flex-col h-full hover:bg-white/10 hover:border-pink-400/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/10 transition-all duration-300">
              <div className={`w-10 h-1 rounded-full bg-gradient-to-r ${product.accent} mb-6`} />
              <p className="uppercase text-xs tracking-widest text-slate-500 mb-2 font-sans normal-case">
                {product.status}
              </p>
              <h3 className="uppercase text-2xl tracking-wide mb-4 font-light text-slate-100">
                {product.name}
              </h3>
              <p className="text-slate-400 font-sans normal-case text-sm leading-relaxed mb-4 flex-1">
                {product.description}
              </p>
              <p className="text-slate-600 font-sans normal-case text-xs mb-4">
                {product.stack}
              </p>
              {product.cta && (
                <Link to={product.cta.to} className="text-pink-400 font-sans normal-case text-sm hover:text-pink-300 transition-colors">
                  {product.cta.label} &rarr;
                </Link>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
