import React from 'react';
import { Section, Eyebrow, SectionTitle, SectionCopy, Card } from './ui';

export const Hooks = () => (
  <Section id="hooks">
    <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-start">
      <div>
        <Eyebrow>Hook Library</Eyebrow>
        <SectionTitle>Use hooks that feel native to the feed</SectionTitle>
        <SectionCopy>The first 1–3 seconds decide everything. If the opening line is weak, the clip dies. Start with a creator name, a crazy stat, a bet, a challenge, or a win.</SectionCopy>
        
        <div className="grid gap-3">
          {[
            { type: 'Creator Recognition', line: '“MrBeast is about to do numbers again and people are literally betting on it…”' },
            { type: 'Concept Shock', line: '“Wait… you can actually bet on how many followers someone gets?”' },
            { type: 'Win Reveal', line: '“I just made money off a creator’s post and this is how…”' },
            { type: 'Question', line: '“Would you take this line on [creator/event] or no?”' },
            { type: 'Exclusivity', line: '“This app isn’t open everywhere yet but this idea is insane…”' },
            { type: 'Drama / Reaction', line: '“If this creator’s next video flops, somebody is losing money…”' }
          ].map((hook, i) => (
            <div key={i} className="bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 rounded-xl p-5 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500"></div>
              <div className="font-mono text-xs uppercase tracking-wider text-purple-500 mb-2">{hook.type}</div>
              <div className="text-lg italic text-zinc-200">{hook.line}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <Eyebrow>Video Formula</Eyebrow>
        <SectionTitle>The best-performing clip structure</SectionTitle>
        
        <div className="grid gap-3 mt-8">
          {[
            { time: '0–3s', title: 'Hook', desc: 'Creator name, bold claim, win reveal, or question. No slow intros. No "hey guys."' },
            { time: '3–8s', title: 'Intrigue', desc: 'Show why this is weird, controversial, surprising, or fun. Build curiosity fast.' },
            { time: '8–20s', title: 'Product in motion', desc: 'Show the app and the actual bet. Viewers need to see the mechanic, not just hear about it.' },
            { time: '20–30s', title: 'Reaction / payoff', desc: 'Show result, emotion, confidence, or "I’m taking this side." Give the clip a point.' },
            { time: '30–40s', title: 'CTA', desc: 'Push to the link / waitlist. Make the next step obvious and frictionless.' }
          ].map((step, i) => (
            <div key={i} className="grid grid-cols-[70px_1fr] gap-4 bg-zinc-950 border border-zinc-900 rounded-xl p-5">
              <div className="text-center py-1.5 px-2 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-400 font-mono text-xs self-start">
                {step.time}
              </div>
              <div>
                <h4 className="font-semibold mb-1">{step.title}</h4>
                <p className="text-sm text-zinc-400">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Section>
);

export const Formats = () => (
  <Section id="formats">
    <Eyebrow>Clip Types</Eyebrow>
    <SectionTitle>What to make</SectionTitle>
    <SectionCopy>Do not freestyle blindly. These are the main formats we want produced and redistributed.</SectionCopy>
    
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card label="Format A" title="Stitch / react clips">Start with a famous creator clip, then cut to a UGC face reacting and placing a bet around that event or stat.</Card>
      <Card label="Format B" title="“Would you take this?” clips">Show a line, ask the audience which side they would take, then show the Kizzy interface as the answer.</Card>
      <Card label="Format C" title="Demo-first clips">Open right on the app and show how easy it is. Keep these fast, screen-led, and not over-explained.</Card>
      <Card label="Format D" title="Win / loss reactions">Emotion sells. Use excitement, regret, bragging, “I knew it,” and “I should have taken this side.”</Card>
      <Card label="Format E" title="Trend hijacks">Attach Kizzy to whatever creator/news/social topic is blowing up now. Trend relevance makes the content discoverable.</Card>
      <Card label="Format F" title="Explainer captions + simple visuals">Especially on TikTok, long keyword-rich captions help the content get indexed and understood.</Card>
    </div>
  </Section>
);
