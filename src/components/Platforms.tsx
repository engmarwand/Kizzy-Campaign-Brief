import React from 'react';
import { Section, Eyebrow, SectionTitle } from './ui';

export const Platforms = () => (
  <Section id="platforms">
    <Eyebrow>Platform Notes</Eyebrow>
    <SectionTitle>How to think by platform</SectionTitle>
    
    <div className="grid gap-4 mt-8">
      {[
        { id: 'TT', name: 'TikTok', desc: 'Best platform for discovery and creator-centric hooks. Longer captions are okay here if they help search and indexing. Post fast, test often, and prioritize hooks over polish.' },
        { id: 'IG', name: 'Instagram Reels', desc: 'Use stronger visual pacing and cleaner packaging. Emotional reactions and creator recognizability do well. Keep captions tighter than TikTok.' },
        { id: 'YT', name: 'YouTube Shorts', desc: 'Make the title and the first second incredibly clear. Shorts can live longer, so think more searchable and less trend-fragile.' }
      ].map((platform, i) => (
        <div key={i} className="grid grid-cols-[auto_1fr] gap-5 bg-zinc-950 border border-zinc-900 rounded-2xl p-6">
          <div className="w-12 h-12 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center font-mono text-sm font-bold shrink-0">
            {platform.id}
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">{platform.name}</h4>
            <p className="text-zinc-400 leading-relaxed">{platform.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </Section>
);
