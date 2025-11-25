import { motion } from 'framer-motion';
import { LuArrowUpRight } from 'react-icons/lu';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { Badge } from '../components/Badge.jsx';
import { projects } from '../data/content.js';

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects aligned with the resume"
          description="End-to-end builds across web, ML, and DevOps with measurable outcomes."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.1 }}
              className="group flex h-full flex-col gap-6 rounded-3xl border border-slate-200 bg-gradient-to-br from-white/85 via-white/70 to-white/90 p-8 shadow-soft transition hover:-translate-y-1 hover:border-primary-400/70 hover:shadow-floating dark:border-slate-800 dark:from-slate-950/80 dark:via-slate-950/60 dark:to-slate-950/80"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                  <motion.a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ x: 4 }}
                    className="inline-flex items-center gap-2 rounded-full bg-primary-500/10 px-4 py-2 text-sm font-medium text-primary-600 transition group-hover:bg-primary-500/15 group-hover:text-primary-500 dark:bg-primary-500/15 dark:text-primary-200"
                  >
                    GitHub
                    <LuArrowUpRight size={18} />
                  </motion.a>
                </div>
                <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>
                {project.outcomes?.length ? (
                  <ul className="mt-4 space-y-2">
                    {project.outcomes.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300"
                      >
                        <span className="mt-1 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-primary-500" aria-hidden />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
