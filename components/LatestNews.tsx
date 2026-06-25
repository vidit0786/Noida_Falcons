'use client';

import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const news = [
  {
    title: 'Falcons Announce New Captain',
    description: 'Aarav Sharma takes charge with a fearless vision for the inaugural campaign and a focus on high-intensity cricket.',
    tag: 'Team Update',
    date: '25 Jun 2026',
    accent: 'from-falcon-blue via-[#0b62c6] to-black',
  },
  {
    title: 'Training Camp Highlights',
    description: 'The squad sharpened power-hitting, death bowling, and fielding standards under lights at the pre-season camp.',
    tag: 'Behind The Scenes',
    date: '22 Jun 2026',
    accent: 'from-[#123a63] via-falcon-blue to-[#b8c7dd]',
  },
  {
    title: 'Upcoming Season Preparations',
    description: 'Coaches finalize tactical plans as Noida gears up for a season defined by pace, discipline, and entertainment.',
    tag: 'Season Preview',
    date: '19 Jun 2026',
    accent: 'from-black via-falcon-blue to-[#6fa8dc]',
  },
];

function NewsVisual({ accent, tag }: { accent: string; tag: string }) {
  return (
    <div className={`relative h-56 overflow-hidden rounded-[1.6rem] bg-gradient-to-br ${accent}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_24%,rgba(255,255,255,.25),transparent_25%),radial-gradient(circle_at_78%_76%,rgba(255,255,255,.12),transparent_25%)]" />
      <div className="absolute left-[-8%] top-[22%] h-1 w-[116%] rotate-[-8deg] bg-white/20" />
      <div className="absolute left-[14%] top-[20%] h-28 w-28 rounded-full border border-white/20 bg-white/[0.05]" />
      <div className="absolute bottom-8 right-7 h-24 w-24 rounded-full border-[10px] border-white/20" />
      <div className="absolute bottom-7 left-7 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-white backdrop-blur-xl">
        {tag}
      </div>
    </div>
  );
}

export default function LatestNews() {
  return (
    <section id="news" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-falcon-blue/20 blur-3xl" aria-hidden="true" />
      <div className="container-page relative">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            align="left"
            eyebrow="Latest News"
            title="Inside The Falcon Nest"
            description="Updates, stories, and match build-up from Noida’s premier cricket franchise."
          />
          <motion.a
            href="#news"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="premium-button mb-10 w-fit border border-white/14 bg-white/[0.07] text-white backdrop-blur-xl md:mb-16"
          >
            View All News
          </motion.a>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {news.map((item, index) => (
            <motion.article
              key={item.title}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-4 shadow-glass backdrop-blur-xl"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.62, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
            >
              <NewsVisual accent={item.accent} tag={item.tag} />
              <div className="p-3 pt-5">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-falcon-silver">{item.date}</p>
                <h3 className="mt-3 text-2xl font-black uppercase tracking-tight text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-white/66">{item.description}</p>
                <a
                  href="#news"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.2em] text-white transition group-hover:text-falcon-silver"
                >
                  Read More
                  <span className="transition group-hover:translate-x-1" aria-hidden="true">→</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
