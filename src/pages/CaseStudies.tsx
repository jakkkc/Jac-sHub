type CaseStudy = {
  name: string
  tag: string
  summary: string
  points: string[]
  accent: string
}

const caseStudies: CaseStudy[] = [
  {
    name: 'Ekwena Feedback System',
    tag: 'Flagship software build',
    summary:
      'A full stack, role based guest feedback platform built for a two branch hotel and restaurant group, from database schema to a live installable web app.',
    points: [
      'Five step mobile guest feedback wizard with duplicate submission prevention',
      'PIN based staff logins covering a fifteen person rotating roster',
      'Manager dashboard with NPS scoring, staff leaderboards, and automatic low score flagging',
      'Live across two branches and four outlets, replacing paid survey software entirely',
    ],
    accent: 'from-pink-400 to-blue-400',
  },
  {
    name: 'Hunters Paradise Cottages',
    tag: 'Social media management',
    summary:
      'Full social media management across Facebook, Instagram, and TikTok for a hospitality brand in Western Kenya.',
    points: [
      'Content strategy rebuilt around local storytelling and engagement triggers',
      'Engagement grew consistently across all three platforms',
    ],
    accent: 'from-blue-400 to-pink-400',
  },
  {
    name: 'Coffee Garden Suites',
    tag: 'Direct sales activation',
    summary:
      'Boutique accommodation brand turned Instagram into a direct sales channel using the H.V.P.A caption formula.',
    points: [
      'DMs and direct enquiries increased noticeably within thirty days',
      'Instagram repositioned as a booking channel, not just a content feed',
    ],
    accent: 'from-pink-400 to-blue-400',
  },
  {
    name: 'Hunters Paradise Tuuti',
    tag: 'Zero to launch',
    summary:
      'A newer property with zero online presence, built into an active, growing audience from scratch.',
    points: [
      'Full presence built across Facebook, Instagram, and TikTok from nothing',
      'Consistent growth achieved across all three platforms',
    ],
    accent: 'from-blue-400 to-pink-400',
  },
]

export default function CaseStudies() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <p className="uppercase tracking-widest text-xs text-pink-400 mb-5">
        Case Studies
      </p>
      <h1 className="uppercase text-4xl md:text-7xl leading-none mb-6">
        <span className="block text-slate-100">Real work,</span>
        <span className="block">
          <span className="text-blue-400">real</span>{' '}
          <span className="text-pink-400">results</span>
        </span>
      </h1>
      <p className="text-slate-400 font-sans normal-case max-w-xl mb-14 leading-relaxed">
        Strategy and software built for real businesses across Kenya, not
        mockups or made up numbers.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {caseStudies.map((study) => (
          <div
            key={study.name}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 flex flex-col"
          >
            <div
              className={`w-10 h-1 rounded-full bg-gradient-to-r ${study.accent} mb-6`}
            />
            <p className="uppercase text-xs tracking-widest text-slate-500 mb-2 font-sans normal-case">
              {study.tag}
            </p>
            <h3 className="uppercase text-2xl tracking-wide mb-4 font-light">
              {study.name}
            </h3>
            <p className="text-slate-400 font-sans normal-case text-sm leading-relaxed mb-6">
              {study.summary}
            </p>
            <ul className="space-y-2 font-sans normal-case text-sm text-slate-300">
              {study.points.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="text-pink-400 mt-1">&#10003;</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
