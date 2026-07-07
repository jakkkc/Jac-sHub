const stats = [
  { value: '3.5x', label: 'Average ROI' },
  { value: '240%', label: 'Lead growth in 90 days' },
  { value: '39', label: 'Days straight on Substack' },
  { value: '3', label: 'Live client brands' },
]

const clients = [
  'Hunters Paradise Cottages',
  'Coffee Garden Suites',
  'Hunters Paradise Tuuti',
]

export default function ProofStrip() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 border-t border-white/10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center md:text-left">
            <p className="text-4xl md:text-5xl uppercase bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent mb-2">
              {stat.value}
            </p>
            <p className="text-slate-400 font-sans normal-case text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-baseline gap-4 md:gap-8 font-sans normal-case">
        <p className="text-xs uppercase tracking-widest text-slate-500">
          Trusted by
        </p>
        <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-2 text-slate-400 text-sm">
          {clients.map((client) => (
            <span key={client}>{client}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
