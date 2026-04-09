import React from 'react';
import { Section, Eyebrow, SectionTitle } from './ui';

export const Rules = () => (
  <Section id="rules">
    <div className="grid lg:grid-cols-2 gap-12 items-start">
      <div>
        <Eyebrow>Do This</Eyebrow>
        <SectionTitle>What makes a clip strong</SectionTitle>
        
        <div className="grid gap-3 mt-6">
          {[
            { title: 'Start with movement or a face', desc: 'The first frame should already have energy — a moving crop, a face, a number, a screenshot, or a shocking subtitle.' },
            { title: 'Use big names strategically', desc: 'Known creators are algorithm fuel. Use them to get the stop, then pivot to Kizzy.' },
            { title: 'Show the product clearly', desc: 'Even if the hook is culture-led, viewers must understand the app mechanic by the middle of the clip.' },
            { title: 'Keep the edit tight', desc: 'Dead air kills performance. Trim hesitation, filler, and low-energy reaction time.' },
            { title: 'Make subtitles work hard', desc: 'Subtitles should reinforce the hook, not just repeat speech lazily. Use them as persuasion.' },
            { title: 'Test volume', desc: 'One clean idea executed 8 different ways beats 8 random weak ideas.' }
          ].map((rule, i) => (
            <div key={i} className="grid grid-cols-[auto_1fr] gap-4 bg-zinc-950 border border-zinc-900 rounded-xl p-5">
              <div className="w-7 h-7 rounded-full bg-purple-500/10 text-purple-500 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                ✓
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-1">{rule.title}</h4>
                <p className="text-sm text-zinc-400">{rule.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <Eyebrow>Avoid This</Eyebrow>
        <SectionTitle>What makes a clip weak</SectionTitle>
        
        <div className="grid gap-3 mt-6">
          {[
            { title: 'Generic "crypto app" framing', desc: 'If you lead with blockchain talk, most viewers leave. Lead with social betting, creators, and internet predictions.' },
            { title: 'Slow intros', desc: 'No "what’s up guys," no logo animation, no slow setup. Get to the idea instantly.' },
            { title: 'Over-editing', desc: 'Too many transitions, too much polish, too much "agency" look. It should still feel native to the feed.' },
            { title: 'Weak CTAs', desc: '"Check this out" is weak. "Join the waitlist" or "link in bio to get access" is clear.' },
            { title: 'Posting duplicates', desc: 'Minorly changing a caption is not enough. Each output should feel like a fresh creative attempt.' },
            { title: 'Ignoring current trends', desc: 'This product gets stronger when tied to current creator/news moments. Static content gets stale fast.' }
          ].map((mistake, i) => (
            <div key={i} className="grid grid-cols-[auto_1fr] gap-4 bg-zinc-950 border border-zinc-900 rounded-xl p-5">
              <div className="w-7 h-7 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                ✕
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-1">{mistake.title}</h4>
                <p className="text-sm text-zinc-400">{mistake.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Section>
);
