import { motion } from 'framer-motion';
import { LuBriefcase } from 'react-icons/lu';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { workExperience } from '../data/content.js';

export function WorkExperience() {
  return (
    <section id="experience" className="py-20 sm:py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Work Experience"
          title="Full Stack Developer Internship @ Ethnus"
          description="Hands-on delivery of the payment management platform from React.js frontends to Kubernetes deployments and CI/CD."
        />
        <div className="mt-12 space-y-6">
          {workExperience.map((item, index) => (
            <motion.article
              key={item.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
              className="surface-card p-7"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="space-y-2">
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary-600 dark:text-primary-300">
                    <LuBriefcase size={16} aria-hidden />
                    {item.period}
                  </p>
                  <h3 className="font-display text-2xl font-semibold text-slate-900 dark:text-slate-100">
                    {item.role}
                  </h3>
                  <p className="text-base font-medium text-primary-700 dark:text-primary-200">
                    {item.company} | {item.location}
                  </p>
                </div>
                <span className="rounded-full bg-primary-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-700 dark:bg-primary-500/20 dark:text-primary-200">
                  Internship
                </span>
              </div>
              <ul className="mt-5 space-y-3">
                {item.highlights.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    <span className="mt-1 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-primary-500" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
