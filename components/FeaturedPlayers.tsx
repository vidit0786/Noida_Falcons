'use client';

import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const players = [
  { name: 'Aarav Sharma', role: 'Captain • Top Order Batter', number: 18, initials: 'AS' },
  { name: 'Rohan Singh', role: 'Fast Bowler', number: 7, initials: 'RS' },
  { name: 'Aditya Verma', role: 'All-Rounder', number: 11, initials: 'AV' },
  { name: 'Karan Malik', role: 'Wicket Keeper', number: 45, initials: 'KM' },
  { name: 'Vivaan Gupta', role: 'Leg Spinner', number: 23, initials: 'VG' },
  { name: 'Aryan Chauhan', role: 'Finisher', number: 99, initials: 'AC' },
];

function PlayerVisual({ initials, number }: { initials: string; number: number }) {
  return (
    <div className="relative mx-auto h-56 w-full overflow-hidden rounded-[1.65rem] bg-gradient-to-br from-falcon-blue/70 via-black/50 to-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,.25),transparent_24%),radial-gradient(circle_at_70%_80%,rgba(10,77,155,.45),transparent_34%)]" />
      <div className="absolute inset-x-6 bottom-0 h-28 rounded-t-[90px] bg-gradient-to-b from-falcon-blue to-[#06254b] shadow-glow" />
      <div className="absolute bottom-24 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-gradient-to-br from-falcon-silver via-white to-[#9aa6b7] shadow-[0_18px_50px_rgba(0,0,0,.35)]" />
      <div className="absolute bottom-4 left-1/2 flex h-28 w-40 -translate-x-1/2 items-center justify-center rounded-t-[4.5rem] border-t border-white/15 bg-gradient-to-br from-falcon-blue via-[#083c7b] to-black">
        <span className="font-display text-5xl font-black text-white/20">{number}</span>
      </div>
      <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/45 px-3 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-white backdrop-blur-xl">
        {initials}
      </div>
      <div className="absolute right-5 top-5 h-10 w-10 rounded-full border border-white/15 bg-white/10 backdrop-blur-xl" />
    </div>
  );
}

export default function FeaturedPlayers() {
  return (
    <section id="squad" className="section-padding relative overflow-hidden bg-white/[0.018]">
      <div className="absolute right-[-7rem] top-12 h-96 w-96 rounded-full bg-falcon-blue/20 blur-3xl" aria-hidden="true" />
      <div className="container-page relative">
        <SectionHeader
          eyebrow="Featured Squad"
          title="Falcons To Watch"
          description="A balanced core of fearless batters, sharp keepers, clever spinners, and pace athletes ready to own the big moments."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {players.map((player, index) => (
            <motion.article
              key={player.name}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-4 shadow-glass backdrop-blur-xl"
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -9, scale: 1.015 }}
            >
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute inset-x-[-40%] top-0 h-24 rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
              </div>
              <PlayerVisual initials={player.initials} number={player.number} />
              <div className="p-3 pt-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-black uppercase tracking-tight text-white">{player.name}</h3>
                    <p className="mt-1 text-sm font-medium text-falcon-silver/85">{player.role}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/35 px-3 py-2 text-center">
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/46">No.</p>
                    <p className="text-xl font-black text-white">{player.number}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
