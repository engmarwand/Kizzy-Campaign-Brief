import React from 'react';

export const Section = ({ id, children, className = '' }: { id: string, children: React.ReactNode, className?: string }) => (
  <section id={id} className={`py-16 md:py-24 border-t border-zinc-900 ${className}`}>
    <div className="max-w-6xl mx-auto px-6">
      {children}
    </div>
  </section>
);

export const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-purple-500 mb-3">
    <div className="w-6 h-px bg-purple-500"></div>
    {children}
  </div>
);

export const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{children}</h2>
);

export const SectionCopy = ({ children }: { children: React.ReactNode }) => (
  <p className="text-zinc-400 max-w-2xl text-lg mb-10">{children}</p>
);

export const Card = ({ label, title, children, className = '' }: { label?: string, title: string, children: React.ReactNode, className?: string }) => (
  <div className={`bg-zinc-950 border border-zinc-900 rounded-2xl p-6 hover:-translate-y-1 hover:border-purple-500/30 transition-all duration-300 shadow-lg shadow-black/50 ${className}`}>
    {label && <div className="font-mono text-xs text-purple-500 mb-2 uppercase tracking-wider">{label}</div>}
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <div className="text-sm text-zinc-400">{children}</div>
  </div>
);
