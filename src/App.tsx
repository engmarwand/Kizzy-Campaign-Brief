import React from 'react';
import { Hero } from './components/Hero';
import { Mission, WhyCare } from './components/Mission';
import { Hooks, Formats } from './components/Hooks';
import { CreatorDemo, Workflow } from './components/Workflow';
import { Rules } from './components/Rules';
import { Seo } from './components/Seo';
import { Platforms } from './components/Platforms';
import { Roles } from './components/Roles';
import { Checklist } from './components/Checklist';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-900">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-3 font-bold text-sm">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/10 border border-purple-500/20 flex items-center justify-center text-purple-500">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="6,4 19,12 6,20" fill="currentColor" stroke="none"></polygon>
          </svg>
        </div>
        <span>Clipur × Kizzy — Clipper Mission Brief</span>
      </div>
      
      <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
        <li><a href="#mission" className="hover:text-white transition-colors">Mission</a></li>
        <li><a href="#hooks" className="hover:text-white transition-colors">Hooks</a></li>
        <li><a href="#workflow" className="hover:text-white transition-colors">Workflow</a></li>
        <li><a href="#rules" className="hover:text-white transition-colors">Rules</a></li>
        <li><a href="#roles" className="hover:text-white transition-colors">Roles</a></li>
        <li><a href="#checklist" className="hover:text-white transition-colors">Checklist</a></li>
      </ul>
      
      <a href="#checklist" className="px-5 py-2.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white text-sm font-bold transition-all hover:-translate-y-0.5">
        Start the mission
      </a>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="border-t border-zinc-900 py-16 text-center">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex items-center justify-center gap-2 mb-4 text-zinc-400 font-mono text-sm">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-500">
          <polygon points="6,4 19,12 6,20" fill="currentColor" stroke="none"></polygon>
        </svg>
        Clipur × Kizzy Clipper Mission Brief
      </div>
      <div className="text-xs text-zinc-600">
        Built to make clippers move faster, care more, and produce better creative.
      </div>
    </div>
  </footer>
);

const Quickbar = () => (
  <div className="fixed right-4 bottom-4 z-50 flex flex-wrap gap-2 justify-end max-w-[min(92vw,520px)]">
    <a href="#hooks" className="px-4 py-2.5 rounded-full bg-zinc-900/90 backdrop-blur border border-zinc-800 text-sm font-bold hover:-translate-y-0.5 hover:border-purple-500/30 transition-all shadow-lg">
      Best hooks
    </a>
    <a href="#workflow" className="px-4 py-2.5 rounded-full bg-zinc-900/90 backdrop-blur border border-zinc-800 text-sm font-bold hover:-translate-y-0.5 hover:border-purple-500/30 transition-all shadow-lg">
      Exact workflow
    </a>
    <a href="#checklist" className="px-4 py-2.5 rounded-full bg-purple-600 text-white text-sm font-bold hover:-translate-y-0.5 hover:bg-purple-500 transition-all shadow-lg">
      Publish checklist
    </a>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-purple-500/30">
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <WhyCare />
        <Hooks />
        <Formats />
        <CreatorDemo />
        <Workflow />
        <Rules />
        <Seo />
        <Platforms />
        <Roles />
        <Checklist />
      </main>
      <Footer />
      <Quickbar />
    </div>
  );
}
