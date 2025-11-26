import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LuArrowUpRight } from 'react-icons/lu';
import { hero } from '../data/content.js';

const HIGHLIGHT_INTERVAL = 6200;

const highlightVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
};

export function Hero() {
  const highlightItems = hero.highlights ?? [];
  const [highlightIndex, setHighlightIndex] = useState(0);

  useEffect(() => {
    if (highlightItems.length <= 1 || typeof window === 'undefined') {
      return undefined;
    }
    const id = window.setInterval(() => {
      setHighlightIndex((prev) => (prev + 1) % highlightItems.length);
    }, HIGHLIGHT_INTERVAL);
    return () => window.clearInterval(id);
  }, [highlightItems.length]);

  const currentHighlight = highlightItems[highlightIndex] ?? hero.title;

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-hero-gradient" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/80 via-transparent to-transparent dark:from-slate-950/90" aria-hidden />
      <div className="container relative grid min-h-[60vh] gap-12 py-20 sm:py-24 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-200/60 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary-700 shadow-soft dark:border-primary-500/40 dark:bg-slate-900/70 dark:text-primary-200">
              Available | {hero.availability}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white dark:bg-white/10">
              {hero.location}
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">{hero.name}</p>
            <h1 className="font-display text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              {hero.title}
            </h1>
            {hero.subtitle ? (
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-700 dark:text-primary-200">
                {hero.subtitle}
              </p>
            ) : null}
            <div className="relative h-12 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentHighlight}
                  variants={highlightVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  className="inline-flex min-h-[3rem] items-center rounded-full bg-primary-500/10 px-5 text-base font-semibold text-primary-700 backdrop-blur dark:bg-primary-500/20 dark:text-primary-200"
                >
                  {currentHighlight}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
          <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
            {hero.description}
          </p>
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
            {hero.contact?.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200/60 bg-white/80 px-4 py-2 font-medium text-slate-700 shadow-sm transition hover:border-primary-400 hover:text-primary-600 dark:border-slate-800/60 dark:bg-slate-900/60 dark:text-slate-200"
                >
                  {Icon ? <Icon size={16} aria-hidden /> : null}
                  {item.label}
                  <LuArrowUpRight size={14} aria-hidden />
                </a>
              );
            })}
          </div>
          <div className="flex flex-wrap gap-2">
            {hero.socials?.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-[1px] hover:bg-primary-700 dark:bg-white/10 dark:text-white"
                >
                  {Icon ? <Icon size={14} aria-hidden /> : null}
                  {social.label}
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.65, ease: 'easeOut' }}
          className="relative"
        >
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-primary-500/20 blur-3xl" aria-hidden />
          <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-accent/20 blur-3xl" aria-hidden />
          <div className="glass-panel relative flex flex-col gap-5 overflow-hidden rounded-3xl p-8">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent dark:via-white/10" aria-hidden />
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-600 dark:text-primary-300">
                Resume spotlight
              </span>
              <p className="text-2xl font-semibold text-slate-900 dark:text-white">
                Payment systems, AI features, and DevOps baked-in.
              </p>
            </div>
            <div className="grid gap-3">
              {hero.stats?.map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className="flex items-start justify-between rounded-2xl bg-white/80 px-4 py-3 text-left shadow-sm dark:bg-slate-950/40"
                >
                  <div className="space-y-1">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-primary-700 dark:text-primary-200">
                      {stat.label}
                    </p>
                    <p className="font-display text-lg text-slate-900 dark:text-white">{stat.value}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{stat.detail}</p>
                  </div>
                  <motion.span
                    animate={{ y: [0, -2, 0] }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                    className="text-primary-500 dark:text-primary-300"
                    aria-hidden
                  >
                    <LuArrowUpRight size={18} />
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
