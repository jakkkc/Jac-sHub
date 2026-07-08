const sampleTopics = [
  'The 3-post weekly framework',
  'TikTok growth with zero budget in Kenya',
  'The H.V.P.A caption formula',
  '0 to 1,000 followers organically, a 90-day roadmap',
  'How to write a content calendar that survives a busy month',
  'AI yako ni mjakazi, how to use AI tools for better content faster',
]

export default function Writing() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <p className="uppercase tracking-widest text-xs text-pink-400 mb-5">Writing</p>
      <h1 className="uppercase text-5xl md:text-7xl leading-none mb-6">
        <span className="block text-slate-100">I write daily,</span>
        <span className="block">
          <span className="text-blue-400">never</span>{' '}
          <span className="text-pink-400">skip</span>
        </span>
      </h1>
      <p className="text-slate-400 font-sans normal-case max-w-xl mb-10 leading-relaxed">
        I publish real strategy on Substack every single day, no filler,
        no skipped days. Every post comes with a custom cover, a full
        article, and a WhatsApp caption you could send a client the same
        day. This page is not a content archive, it is proof of how I
        think.
      </p>

      
        <a
        href="https://substack.com/@nexink?r=8cf1uv&utm_campaign=profile&utm_medium=profile-page"
        target="_blank"
        rel="noreferrer"
        className="inline-block bg-gradient-to-r from-pink-500 to-blue-500 text-white px-6 py-3 rounded-full font-sans normal-case font-medium hover:opacity-90 transition-opacity mb-16"
      >
        Read the Substack
      </a>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 text-center">
          <p className="text-3xl uppercase text-blue-400 mb-2">Daily</p>
          <p className="text-slate-400 font-sans normal-case text-sm">Published without skipping a day</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 text-center">
          <p className="text-4xl text-pink-400 mb-2">13</p>
          <p className="text-slate-400 font-sans normal-case text-sm">Named frameworks built and counting</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 text-center">
          <p className="text-4xl text-blue-400 mb-2">600+</p>
          <p className="text-slate-400 font-sans normal-case text-sm">Words per article, every time</p>
        </div>
      </div>

      <h2 className="uppercase text-2xl text-slate-100 mb-6 tracking-wide font-light">A few posts worth starting with</h2>
      <ul className="space-y-3 font-sans normal-case text-slate-300 text-sm max-w-xl">
        {sampleTopics.map((topic) => (
          <li key={topic} className="flex items-start gap-2 border-b border-white/5 pb-3">
            <span className="text-pink-400 mt-1">&#8226;</span>
            <span>{topic}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
