import { motion } from 'framer-motion';

export function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-10 border-t border-slate-800 bg-slate-950 py-10 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(249,115,22,0.1),transparent_35%)]" aria-hidden />
      <div className="container relative mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.35em] text-white/80"
        >
          &copy; {year} Sumit Tiwari. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}
