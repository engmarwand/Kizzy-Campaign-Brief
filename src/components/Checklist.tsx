import React, { useState } from 'react';
import { Section, Eyebrow, SectionTitle, SectionCopy } from './ui';

export const Checklist = () => {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const toggleCheck = (index: number) => {
    if (checkedItems.includes(index)) {
      setCheckedItems(checkedItems.filter(i => i !== index));
    } else {
      setCheckedItems([...checkedItems, index]);
    }
  };

  return (
    <Section id="checklist">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <Eyebrow>Clipper Checklist</Eyebrow>
          <SectionTitle>Before you publish anything</SectionTitle>
          <SectionCopy>Use this every time. If one of these is missing, the clip usually gets weaker.</SectionCopy>
          
          <ul className="grid gap-3 mt-6">
            {[
              'Does the first second stop the scroll?',
              'Is there a clear creator / trend / bet angle?',
              'Is the product shown clearly by the middle of the clip?',
              'Did you remove dead air and weak moments?',
              'Does the caption fit the platform?',
              'Is the CTA obvious and linked to the campaign page?',
              'Is this actually a new version, not just a duplicate?'
            ].map((item, i) => {
              const isChecked = checkedItems.includes(i);
              return (
                <li 
                  key={i} 
                  onClick={() => toggleCheck(i)}
                  className={`flex gap-4 p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                    isChecked 
                      ? 'bg-zinc-900 border-purple-500/50' 
                      : 'bg-zinc-950 border-zinc-900 hover:border-purple-500/30 hover:-translate-y-0.5'
                  }`}
                >
                  <div className={`w-5 h-5 mt-0.5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${
                    isChecked ? 'bg-purple-500 border-purple-500' : 'border-zinc-600'
                  }`}>
                    {isChecked && (
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                  <span className={isChecked ? 'line-through text-zinc-500' : 'text-zinc-200'}>
                    {item}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        
        <div>
          <Eyebrow>Deliverables</Eyebrow>
          <SectionTitle>What the team is building around you</SectionTitle>
          
          <div className="grid gap-3 mt-8">
            {[
              { title: 'Whop campaign launch', desc: 'The campaign is structured to run through the Whop ecosystem with clipping + UGC support.' },
              { title: 'AI UGC + human UGC', desc: 'You’ll have both synthetic variation capacity and hand-picked human footage to work from.' },
              { title: 'No source content dependency from client', desc: 'The plan is to create the campaign engine even without strong existing Kizzy source content.' },
              { title: 'Briefs, docs, thumbnail system', desc: 'This site is part of the operating system that should make execution cleaner and stronger.' }
            ].map((note, i) => (
              <div key={i} className="grid grid-cols-[auto_1fr] gap-4 bg-zinc-950 border border-zinc-900 rounded-xl p-5">
                <div className="w-7 h-7 rounded-full bg-yellow-500/10 text-yellow-500 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                  !
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">{note.title}</h4>
                  <p className="text-sm text-zinc-400">{note.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
