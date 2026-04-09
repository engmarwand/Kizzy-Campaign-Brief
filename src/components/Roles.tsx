import React from 'react';
import { Section, Eyebrow, SectionTitle, SectionCopy } from './ui';

export const Roles = () => (
  <Section id="roles">
    <Eyebrow>The Ecosystem</Eyebrow>
    <SectionTitle>UGC Creators & Clippers: How we win together</SectionTitle>
    <SectionCopy>This campaign relies on a two-part engine. Creators supply the raw authenticity, and clippers supply the algorithmic packaging and volume. Here is how the responsibilities break down.</SectionCopy>

    <div className="grid md:grid-cols-2 gap-6 mt-8">
      <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
        <div className="font-mono text-xs tracking-widest uppercase text-blue-400 mb-4">Phase 1</div>
        <h3 className="text-2xl font-bold mb-4">UGC Creators</h3>
        <p className="text-zinc-400 mb-6">You are the face, the voice, and the raw material. Your job is to make the app feel real, exciting, and native to the feed.</p>
        <ul className="grid gap-3">
          {[
            'Record authentic face-cam hooks',
            'Capture clean screen recordings of the app',
            'Provide genuine reactions to bets/markets',
            'Deliver multiple CTA variations'
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-sm text-zinc-300">
              <span className="text-blue-500 font-bold">→</span> {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-purple-500"></div>
        <div className="font-mono text-xs tracking-widest uppercase text-purple-400 mb-4">Phase 2</div>
        <h3 className="text-2xl font-bold mb-4">Clippers & Editors</h3>
        <p className="text-zinc-400 mb-6">You are the multiplier. Your job is to take the raw UGC, find the most viral angles, and package it for the algorithm.</p>
        <ul className="grid gap-3">
          {[
            'Remix raw footage into multiple variants',
            'Add high-retention pacing and cuts',
            'Write SEO-optimized captions per platform',
            'Distribute across TikTok, Reels, and Shorts'
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-sm text-zinc-300">
              <span className="text-purple-500 font-bold">→</span> {item}
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="mt-8 bg-zinc-950 border border-zinc-900 rounded-2xl p-6 text-center">
      <p className="text-zinc-300">
        <strong className="text-white">The Synergy:</strong> Creators don't need to worry about editing 50 versions. Clippers don't need to worry about filming themselves. You both focus on what you do best.
      </p>
    </div>
  </Section>
);
