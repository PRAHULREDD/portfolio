export default function Footer() {
  return (
    <footer className="bg-slate-950 py-12 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-8">
        <div className="text-primary font-bold text-lg font-headline">
          P. Rahul Reddy
        </div>
        <div className="text-sm text-slate-500 text-center md:text-left font-body">
          P. Rahul Reddy · Edge AI & Computer Vision Engineer · Built with React + Vite · 2025
        </div>
        <div className="flex gap-8">
          <a className="text-slate-500 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest" href="https://linkedin.com/in/rahulreddypulicharla" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="text-slate-500 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest" href="https://github.com/PRAHULREDD" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
