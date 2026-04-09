import React from 'react';
import { Section, Eyebrow, SectionTitle, SectionCopy, Card } from './ui';

export const Mission = () => (
  <Section id="mission">
    <Eyebrow>Mission Clarity</Eyebrow>
    <SectionTitle>What clippers need to understand first</SectionTitle>
    <SectionCopy>If you understand these 4 truths, your output gets instantly better. This is the difference between posting random edits and building a campaign that actually compounds.</SectionCopy>
    
    <div className="grid md:grid-cols-2 gap-4">
      {[
        { num: '01', title: 'Kizzy is not "just crypto"', desc: 'It is social media betting. The strongest angle is not blockchain tech — it is betting on creators, views, followers, moments, and internet culture.' },
        { num: '02', title: 'Your first job is to stop the scroll', desc: 'Big creator names, drama, bets, and crazy outcomes are what earn attention. Product explanation comes after the hook.' },
        { num: '03', title: 'We are testing winners, not just posting content', desc: 'Every clip is a creative test. We want to find the formats, hooks, captions, and creator pairings that can scale hard later.' },
        { num: '04', title: 'The link matters', desc: 'All roads lead to the waitlist / attribution page. The current campaign is about clicks, signups, and proof of demand before full friction is removed.' }
      ].map((item, i) => (
        <div key={i} className="flex gap-4 bg-zinc-950 border border-zinc-900 rounded-2xl p-6">
          <div className="w-10 h-10 rounded-full bg-purple-500/10 text-purple-500 flex items-center justify-center font-mono text-sm font-bold shrink-0">
            {item.num}
          </div>
          <div>
            <h4 className="font-semibold mb-2">{item.title}</h4>
            <p className="text-sm text-zinc-400">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export const WhyCare = () => (
  <Section id="why-care">
    <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-start">
      <div>
        <Eyebrow>Why this can hit</Eyebrow>
        <SectionTitle>This is the kind of offer clippers like</SectionTitle>
        <SectionCopy>The product is already naturally viral. People understand creators. People understand betting. People understand trying to predict what happens next online. That makes the content inherently clickable if the packaging is strong.</SectionCopy>
        
        <div className="bg-purple-500/5 border border-purple-500/20 rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-3 text-purple-100">The winning mental model</h3>
          <p className="text-purple-200/70 leading-relaxed">
            Think <strong>MrBeast clip + reaction + bet + outcome + CTA</strong>. Or drama clip + "would you take this line?" + on-screen demo + waitlist push. The content should feel like internet-native entertainment first, not polished brand content.
          </p>
        </div>
      </div>
      
      <div className="grid sm:grid-cols-2 gap-4">
        <Card label="Angle 1" title="Big creator gravity">Use creators people already recognize so the scroll stops before the pitch even starts.</Card>
        <Card label="Angle 2" title="Prediction-market energy">Frame it like "would you bet this hits?" not "here is a fintech product."</Card>
        <Card label="Angle 3" title="Winning / losing emotion">Money, ego, bragging rights, and FOMO are stronger than technical explanations.</Card>
        <Card label="Angle 4" title="Culture over incentives">We are not chasing empty incentive traffic. We want real people who like the concept.</Card>
      </div>
    </div>
  </Section>
);
