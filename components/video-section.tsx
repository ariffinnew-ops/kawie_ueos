import { YOUTUBE_EMBED_ID } from '@/lib/showcase-data'

const STATS = ['4 Core Modules', 'Live in Production', 'O&G Ready']

export default function VideoSection() {
  return (
    <section id="video" className="section-dark section-pad scroll-mt-20">
      <div className="container-kawie">
        <div className="reveal section-header">
          <span className="eyebrow eyebrow-on-dark">Platform Overview</span>
          <h2 className="font-heading text-white">One platform. See it in action.</h2>
        </div>

        <div className="reveal youtube-wrap mx-auto max-w-[800px] w-full mb-8">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden youtube-glow">
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_EMBED_ID}`}
              title="UEOS platform overview"
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
        </div>

        <div className="reveal flex flex-wrap justify-center gap-3">
          {STATS.map((stat) => (
            <span
              key={stat}
              className="text-sm text-white/90 px-4 py-2 rounded-full border border-white/20 bg-white/5"
            >
              {stat}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
