import { Link } from 'react-router-dom'

const steps = [
  {
    number: '01',
    title: 'Audit',
    description:
      'I start by looking at what you actually have. Your social media accounts if that is the problem, or your current systems and software if that is the problem. No assumptions, I look at the real numbers and the real gaps before saying anything.',
  },
  {
    number: '02',
    title: 'Strategy',
    description:
      'Every business is different, so the plan should be too. I build a strategy around your actual budget, your actual customers, and what will genuinely move your business forward. Not a template pulled from somewhere else.',
  },
  {
    number: '03',
    title: 'Execution',
    description:
      'This is where the work gets made. Graphics, video editing, content, captions, whatever your brand needs to look and sound right on the platforms your customers actually use.',
  },
  {
    number: '04',
    title: 'Software, if you need it',
    description:
      'Sometimes the real problem is not content, it is that your business does not have the right tools. If you need a booking system, a POS, or a way to actually collect customer feedback, I build that too, made to fit how your business already runs.',
  },
  {
    number: '05',
    title: 'Training',
    description:
      'Not every business can afford ongoing management, and that is fine. I teach marketers and business owners how to do this themselves through my Substack, where I break down real strategy in plain language every day.',
  },
]

export default function Methodology() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <p className="uppercase tracking-widest text-xs text-pink-400 mb-5">
        Methodology
      </p>
      <h1 className="uppercase text-4xl md:text-7xl leading-none mb-6">
        <span className="block text-slate-100">How I actually</span>
        <span className="block">
          <span className="text-blue-400">solve your</span>{' '}
          <span className="text-pink-400">problem</span>
        </span>
      </h1>
      <p className="text-slate-400 font-sans normal-case max-w-xl mb-14 leading-relaxed">
        I do not sell a fixed package and hope it fits. I figure out what
        your business actually needs first, then bring in whatever solves
        it, strategy, design, video, or software.
      </p>

      <div className="space-y-6 mb-16">
        {steps.map((step) => (
          <div
            key={step.number}
            className="flex flex-col md:flex-row gap-4 md:gap-8 border-b border-white/10 pb-6"
          >
            <div className="md:w-24 shrink-0">
              <span className="text-3xl uppercase text-slate-600">
                {step.number}
              </span>
            </div>
            <div>
              <h3 className="uppercase text-2xl tracking-wide mb-2 font-light text-slate-100">
                {step.title}
              </h3>
              <p className="text-slate-400 font-sans normal-case text-sm leading-relaxed max-w-2xl">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-pink-400/30 bg-gradient-to-br from-pink-500/10 to-blue-500/10 p-8 mb-16">
        <h3 className="uppercase text-xl tracking-wide mb-3 font-light text-slate-100">
          I teach this too
        </h3>
        <p className="text-slate-300 font-sans normal-case text-sm leading-relaxed max-w-2xl mb-4">
          Every day on Substack, I break down exactly how Kenyan businesses
          can grow on social media, in plain language, with real examples
          and no made up numbers. If you are a marketer or a business owner
          who wants to learn this instead of outsourcing it, that is where
          I teach it.
        </p>
        
          <a
          href="https://substack.com/@nexink?r=8cf1uv&utm_campaign=profile&utm_medium=profile-page"
          target="_blank"
          rel="noreferrer"
          className="inline-block text-pink-400 text-sm font-sans normal-case hover:text-pink-300 transition-colors"
        >
          Read the Substack &rarr;
        </a>
      </div>

      <div className="text-center">
        <p className="text-slate-400 font-sans normal-case mb-6">
          Not sure what your business actually needs yet? That is what the
          audit is for.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-gradient-to-r from-pink-500 to-blue-500 text-white px-6 py-3 rounded-full font-sans normal-case font-medium hover:opacity-90 transition-opacity"
        >
          Start with an audit
        </Link>
      </div>
    </section>
  )
}
