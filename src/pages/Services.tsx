import { Link } from 'react-router-dom'

const tiers = [
  {
    name: 'Starter',
    price: 'KES 15,000',
    period: '/month',
    features: ['8 posts', '1 platform'],
    highlight: false,
  },
  {
    name: 'Growth',
    price: 'KES 30,000',
    period: '/month',
    features: [
      '12 posts',
      '2 platforms',
      'Community management',
      'Monthly reporting',
    ],
    highlight: true,
  },
  {
    name: 'Premium',
    price: 'KES 60,000+',
    period: '/month',
    features: [
      '20 posts',
      '3 platforms',
      'Paid ads',
      'Strategy calls',
    ],
    highlight: false,
  },
]

const extras = [
  { name: 'Design projects', price: 'From KES 10,000' },
  { name: 'Social media audit', price: 'KES 8,000' },
  { name: 'Custom software builds', price: 'Quote on request' },
]

export default function Services() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <p className="uppercase tracking-widest text-xs text-pink-400 mb-5">
        Services
      </p>
      <h1 className="uppercase text-5xl md:text-7xl leading-none mb-6">
        <span className="block text-slate-100">Pricing built for</span>
        <span className="block">
          <span className="text-blue-400">real Kenyan</span>{' '}
          <span className="text-pink-400">budgets</span>
        </span>
      </h1>
      <p className="text-slate-400 font-sans normal-case max-w-xl mb-14 leading-relaxed">
        No hidden packages, no confusing quotes. Pick a tier that fits where
        your business is right now, or reach out for something custom.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`rounded-2xl p-8 border backdrop-blur-sm flex flex-col ${
              tier.highlight
                ? 'border-pink-400/50 bg-gradient-to-b from-pink-500/10 to-blue-500/10'
                : 'border-white/10 bg-white/5'
            }`}
          >
            <h3 className="uppercase text-2xl tracking-wide mb-2 font-light">
              {tier.name}
            </h3>
            <p className="mb-6">
              <span className="text-3xl text-slate-100">{tier.price}</span>
              <span className="text-slate-500 font-sans normal-case text-sm">
                {tier.period}
              </span>
            </p>
            <ul className="space-y-3 font-sans normal-case text-sm text-slate-300 mb-8 flex-1">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <span className="text-pink-400">&#10003;</span>
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className={`text-center px-5 py-3 rounded-full font-sans normal-case font-medium transition-opacity hover:opacity-90 ${
                tier.highlight
                  ? 'bg-gradient-to-r from-pink-500 to-blue-500 text-white'
                  : 'border border-white/20 text-slate-200'
              }`}
            >
              Get started
            </Link>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 pt-10">
        <h4 className="uppercase text-xs tracking-widest text-slate-400 mb-6">
          Also available
        </h4>
        <div className="grid md:grid-cols-3 gap-6 font-sans normal-case">
          {extras.map((extra) => (
            <div
              key={extra.name}
              className="flex items-center justify-between border border-white/10 rounded-xl px-5 py-4 text-sm text-slate-300"
            >
              <span>{extra.name}</span>
              <span className="text-pink-400">{extra.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
