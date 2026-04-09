import React from 'react';
import { Section, Eyebrow, SectionTitle, SectionCopy } from './ui';

export const CreatorDemo = () => (
  <Section id="creator-demo-system">
    <Eyebrow>Critical Update</Eyebrow>
    <SectionTitle>There is no source-content folder — creators must build the source library</SectionTitle>
    <SectionCopy>This campaign now starts with creators recording themselves using Kizzy. Clippers need to understand the content pipeline clearly, because the raw demo footage becomes the source material for everything else.</SectionCopy>
    
    <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-8 shadow-2xl mb-12">
      <Eyebrow>Content Engine</Eyebrow>
      <div className="grid md:grid-cols-4 gap-4 mt-6">
        {[
          { step: '1. Creator records hook', desc: 'Selfie opener, reaction line, "I found this app…" style first frame' },
          { step: '2. Creator records screen', desc: 'Browse markets, tap through app, show prediction flow clearly' },
          { step: '3. Clipper builds variants', desc: 'New first frame, text, pacing, subtitles, CTA, and caption per version' },
          { step: '4. Team distributes', desc: 'Post across TikTok, Reels, Shorts and optimize around winners' }
        ].map((item, i) => (
          <div key={i} className="bg-black/40 border border-zinc-800/50 rounded-xl p-5 flex flex-col gap-2">
            <strong className="text-sm text-zinc-100">{item.step}</strong>
            <span className="text-xs text-zinc-400 leading-relaxed">{item.desc}</span>
          </div>
        ))}
      </div>
    </div>
    
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
      {[
        { num: '01', title: 'Face-cam hook', desc: 'Open with surprise, curiosity, money, or a creator-related prediction.' },
        { num: '02', title: 'Open the app', desc: 'Show the app loading or landing so viewers instantly see it is real.' },
        { num: '03', title: 'Browse markets', desc: 'Scroll through options slowly enough that editors can crop and zoom.' },
        { num: '04', title: 'Choose a bet', desc: 'Pick one interesting prediction and explain why it feels winnable.' },
        { num: '05', title: 'Tap-through demo', desc: 'Record the actual clicks, taps, and flow so it can be cut into the clip.' },
        { num: '06', title: 'Reaction take', desc: 'Say what side you would take, why it is crazy, or why others will disagree.' },
        { num: '07', title: 'CTA take', desc: 'End with "join the waitlist," "link in bio," or "get access" clearly.' },
        { num: '08', title: 'Extra B-roll', desc: 'Get taps, profile closeups, menu shots, and clean silent phone footage.' }
      ].map((shot, i) => (
        <div key={i} className="relative bg-zinc-950 border border-zinc-900 rounded-2xl p-6 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-purple-400"></div>
          <div className="font-mono text-xs text-purple-500 mb-3">SHOT {shot.num}</div>
          <h3 className="text-sm font-bold mb-2">{shot.title}</h3>
          <p className="text-sm text-zinc-400">{shot.desc}</p>
        </div>
      ))}
    </div>
  </Section>
);

export const Workflow = () => (
  <Section id="workflow">
    <Eyebrow>Exact Workflow</Eyebrow>
    <SectionTitle>What clippers should do step by step</SectionTitle>
    
    <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-8 md:p-12 relative overflow-hidden mt-8">
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="grid gap-10 relative z-10">
        {[
          { num: '01', title: 'Open the campaign folders', desc: 'You will not receive a full source-content archive. The content engine starts with creators recording fresh demo footage themselves: face-cam UGC, screen recordings, raw reactions, and simple app walkthroughs. Your job is to turn that raw creator footage into multiple strong outputs.', chips: ['creator face-cam', 'screen recording', 'raw reaction takes'] },
          { num: '02', title: 'Pick one attention anchor', desc: 'Every clip needs a central attention magnet — a creator bet, a crazy follower prediction, a shocking social stat, a trend tie-in, or a winning outcome. If your edit does not have an obvious magnet, rebuild it.', chips: ['crazy follower line', 'trend tie-in', 'prediction question', 'winning moment'] },
          { num: '03', title: 'Build a new version, not a duplicate', desc: 'Change the hook, the pacing, the on-screen text, the first frame, the crop, the caption, or the angle. We want multiple distinct creative attempts from the same raw assets.', chips: ['new hook', 'new order', 'new subtitle style', 'new CTA'] },
          { num: '04', title: 'Write platform-native captions', desc: 'TikTok gets longer, keyword-rich captions. Instagram gets tighter, more emotional captions. YouTube Shorts gets a title/description that explains the bet and the creator angle clearly.', chips: ['TikTok = searchable', 'IG = punchy', 'YT = SEO-ish'] },
          { num: '05', title: 'Always route to the link', desc: 'Every output should push to the campaign landing page. Do not leave the next step vague. The viewer should know exactly where to go.', chips: ['bio link', 'comment CTA', 'waitlist push'] }
        ].map((step, i) => (
          <div key={i} className="grid grid-cols-[56px_1fr] gap-6 relative group">
            {i !== 4 && <div className="absolute left-[27px] top-[64px] bottom-[-24px] w-0.5 bg-zinc-800 group-hover:bg-purple-500/30 transition-colors"></div>}
            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-500 flex items-center justify-center font-mono text-lg font-bold relative z-10">
              {step.num}
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-zinc-400 mb-4 leading-relaxed">{step.desc}</p>
              <div className="flex flex-wrap gap-2">
                {step.chips.map((chip, j) => (
                  <span key={j} className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Section>
);
