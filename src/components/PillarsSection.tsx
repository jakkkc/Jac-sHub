const pillars = [
  {
    title: 'Strategist',
    description:
      'Social media strategy built specifically for the Kenyan market. Real budgets, real platforms, no recycled advice from somewhere else.',
    accent: 'from-pink-400 to-pink-600',
  },
  {
    title: 'Engineer',
    description:
      'I build the actual software your business needs. Booking systems, POS platforms, feedback tools, not just a content calendar.',
    accent: 'from-blue-400 to-blue-600',
  },
  {
    title: 'AI Expert',
    description:
      'AI is part of how I work and what I deliver. Faster development, smarter content, and practical AI guidance for your business too.',
    accent: 'from-pink-400 to-blue-500',
  },
]

export default function PillarsSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-3 gap-6">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 hover:bg-white/10 transition-colors"
          >
            <div
              className={`w-10 h-1 rounded-full bg-gradient-to-r ${pillar.accent} mb-6`}
            />
            <h3 className="uppercase text-2xl mb-3 tracking-wide font-light">
              {pillar.title}
            </h3>
            <p className="text-slate-400 font-sans normal-case text-sm leading-relaxed">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
