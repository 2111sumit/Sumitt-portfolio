import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { Badge } from '../components/Badge.jsx';
import { skills } from '../data/content.js';

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Capabilities"
          title="Skills built from hands-on delivery"
          description="Stack mirrors the resume: full-stack development, ML, and DevOps practices to ship reliable products end-to-end."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="surface-card p-6"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-slate-100">
                  {group.category}
                </h3>
                <span className="rounded-full bg-primary-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-700 dark:bg-primary-500/20 dark:text-primary-200">
                  {group.items.length}+
                </span>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
