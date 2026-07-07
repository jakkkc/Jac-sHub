import { Link } from 'react-router-dom'
import aboutPhoto from '../assets/images/profile-4.png'
import FramedImage from '../components/FramedImage'

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <p className="uppercase tracking-widest text-xs text-pink-400 mb-5">
        About
      </p>
      <h1 className="uppercase text-5xl md:text-7xl leading-none mb-10">
        <span className="block text-slate-100">The story behind</span>
        <span className="block">
          <span className="text-blue-400">Nex</span>
          <span className="text-pink-400">Ink</span>
        </span>
      </h1>

      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="flex-1 space-y-6 font-sans normal-case text-slate-300 leading-relaxed">
          <p>
            I am Jackson Mwaniki, and NexInk started because I kept seeing the
            same problem everywhere I looked. Businesses across Kenya were
            paying for social media help that had nothing to do with how
            people here actually buy, browse, or trust a brand. Strategies
            built for another market, dropped into ours, and expected to
            work.
          </p>
          <p>
            So I built NexInk around one idea. Every strategy, every
            framework, every piece of content should be built for the Kenyan
            market from the start. Real budgets, real platforms, the M-Pesa
            economy, the way people actually talk to businesses on WhatsApp.
            Not recycled advice from somewhere else.
          </p>
          <p>
            Somewhere along the way I realized strategy alone was not enough.
            A hotel does not just need better Instagram captions, it needs a
            booking system. A restaurant group does not just need content, it
            needs a way to actually collect and act on guest feedback. So I
            started building the software too. Booking platforms, point of
            sale systems, feedback tools, the actual infrastructure that runs
            behind the scenes.
          </p>
          <p>
            AI has become part of how I do both. I use it to move faster on
            development, to sharpen content and strategy work, and I teach
            the businesses I work with how to use it well too. Not as a
            gimmick, as a real part of how work gets done now.
          </p>
          <p>
            That is NexInk today. Strategy, software, and AI, all built for
            businesses across Kenya who want more than vanity metrics. I have
            a BSc in Applied Computer Technology from USIU-Africa, I am
            currently pursuing an MSc in Digital Marketing, and I am Google
            Analytics certified. But most of what I know came from actually
            building things for real clients and seeing what worked.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-pink-500 to-blue-500 text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity mt-4"
          >
            Work with me
          </Link>
        </div>

        <div className="flex-1 flex justify-center">
          <FramedImage
            src={aboutPhoto}
            alt="Jackson Mwaniki"
            className="w-64 md:w-80"
          />
        </div>
      </div>
    </section>
  )
}
