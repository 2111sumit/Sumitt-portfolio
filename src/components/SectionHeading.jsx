import { motion } from 'framer-motion';

export function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="flex max-w-2xl flex-col gap-3 text-left"
    >
      {eyebrow ? (
        <div className="flex items-center gap-3">
          <span className="h-[1px] w-12 bg-gradient-to-r from-primary-500 via-accent to-transparent dark:from-primary-300 dark:via-accent" aria-hidden />
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-600 dark:text-primary-300">
            {eyebrow}
          </span>
        </div>
      ) : null}
      <h2 className="font-display text-3xl font-semibold text-slate-900 dark:text-slate-100 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
