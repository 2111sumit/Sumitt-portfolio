import { ThemeToggle } from './components/ThemeToggle.jsx';
import { Hero } from './sections/Hero.jsx';
import { Skills } from './sections/Skills.jsx';
import { WorkExperience } from './sections/WorkExperience.jsx';
import { Projects } from './sections/Projects.jsx';
import { Education } from './sections/Education.jsx';
import { Certifications } from './sections/Certifications.jsx';
import { Contact } from './sections/Contact.jsx';
import { FooterSection } from './sections/FooterSection.jsx';

const navigation = [
  { label: 'About', href: '#hero' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-50">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(14,165,233,0.12),transparent_20%),radial-gradient(circle_at_80%_10%,rgba(249,115,22,0.12),transparent_18%),radial-gradient(circle_at_20%_80%,rgba(16,185,129,0.14),transparent_22%)]" aria-hidden />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_30%),linear-gradient(300deg,rgba(255,255,255,0.05)_10%,rgba(255,255,255,0)_40%)] dark:bg-[linear-gradient(120deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0)_30%),linear-gradient(300deg,rgba(255,255,255,0.03)_10%,rgba(255,255,255,0)_40%)]" aria-hidden />
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-primary-400/30 blur-3xl dark:bg-primary-500/20" aria-hidden />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-accent/20 blur-[120px]" aria-hidden />
      </div>

      <header className="sticky top-0 z-30 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl dark:border-slate-800/60 dark:bg-slate-950/70">
        <div className="container flex items-center justify-between gap-6 py-4">
          <a
            href="#hero"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-slate-700 transition hover:text-primary-600 dark:text-slate-200 dark:hover:text-primary-200"
          >
            Sumit Tiwari
          </a>
          <nav className="hidden items-center gap-1 text-sm font-medium text-slate-500 md:flex dark:text-slate-400">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 transition hover:bg-primary-500/10 hover:text-primary-600 dark:hover:bg-primary-500/20 dark:hover:text-primary-300"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle />
          </div>
        </div>
        <div className="container pb-4 md:hidden">
          <div className="flex snap-x gap-2 overflow-x-auto text-sm font-medium text-slate-500 dark:text-slate-400">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="snap-start whitespace-nowrap rounded-full border border-slate-200/60 px-3 py-2 transition hover:border-primary-400 hover:text-primary-500 dark:border-slate-800/60 dark:hover:border-primary-500/70 dark:hover:text-primary-400"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Skills />
        <WorkExperience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <FooterSection />
    </div>
  );
}

export default App;



