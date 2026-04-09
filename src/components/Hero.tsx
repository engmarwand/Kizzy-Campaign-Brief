import React from 'react';
import { AlertCircle } from 'lucide-react';
import { Eyebrow } from './ui';

export const Hero = () => (
  <header className="relative overflow-hidden pt-32 pb-24 border-b border-zinc-900">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black pointer-events-none"></div>
    <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-end">
      <div>
        <Eyebrow>For Clippers Only</Eyebrow>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight max-w-2xl">
          Make content people <span className="text-purple-500">stop for</span>
        </h1>
        <p className="text-xl text-zinc-300 mb-8 max-w-2xl leading-relaxed">
          Your job is simple: turn Kizzy into impossible-to-ignore short-form content. This brief shows exactly what to make, what to post, what to avoid, and how to help this campaign win.
        </p>
        <div className="flex flex-wrap gap-3 mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.7)]"></span>
            Live social betting app
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono">
            UGC + clipping distribution
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono">
            TikTok · Reels · Shorts
          </span>
        </div>
        <div className="flex flex-wrap gap-4">
          <a href="#workflow" className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold transition-all hover:-translate-y-0.5">
            See exactly what to do
          </a>
          <button onClick={() => window.print()} className="px-6 py-3 rounded-xl bg-zinc-900 hover:border-purple-500/50 border border-zinc-800 text-white font-bold transition-all hover:-translate-y-0.5">
            Print / Save brief
          </button>
        </div>
      </div>
      
      <div className="grid gap-6">
        <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
          <div className="font-mono text-xs tracking-widest uppercase text-purple-500 mb-4">Primary Mission</div>
          <h3 className="text-xl font-bold mb-3">Get attention first. Then drive people to <code className="text-purple-400 font-mono bg-purple-500/10 px-2 py-1 rounded">win.kizzy.io</code>.</h3>
          <p className="text-sm text-zinc-400 mb-6">Right now the app has geo and KYC friction. So your content should not try to over-sell direct deposits yet. The win is views, clicks, signups, and strong creative proof.</p>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-black/50 border border-zinc-800/50 rounded-xl p-4">
              <div className="font-mono text-2xl text-purple-500 mb-1">500K+</div>
              <div className="text-xs text-zinc-500">Target campaign views</div>
            </div>
            <div className="bg-black/50 border border-zinc-800/50 rounded-xl p-4">
              <div className="font-mono text-2xl text-purple-500 mb-1">500-2K</div>
              <div className="text-xs text-zinc-500">Waitlist signups</div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-b from-red-950/30 to-black border border-red-900/30 rounded-3xl p-6">
          <div className="font-mono text-xs tracking-widest uppercase text-red-400 mb-2 flex items-center gap-2">
            <AlertCircle className="w-4 h-4" /> Important
          </div>
          <p className="text-sm text-red-200/70">
            Do <strong className="text-red-200">not</strong> make this feel like a boring crypto ad. Kizzy wins when it feels like culture, gossip, betting, creator drama, and internet entertainment.
          </p>
        </div>
      </div>
    </div>
  </header>
);
