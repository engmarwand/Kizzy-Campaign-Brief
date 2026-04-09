import React from 'react';
import { Section, Eyebrow, SectionTitle, SectionCopy, Card } from './ui';

export const Seo = () => (
  <Section id="seo-captions">
    <Eyebrow>Caption SEO System</Eyebrow>
    <SectionTitle>How clippers should use AI to write better captions that get discovered</SectionTitle>
    <SectionCopy>Captions are not filler. They help TikTok, Instagram, YouTube, search engines, and large language models understand what the video is about. A strong caption increases discoverability, reinforces the hook, and gives the algorithm more context to categorize the post correctly.</SectionCopy>
    
    <div className="grid lg:grid-cols-2 gap-6 mt-8">
      <div className="bg-zinc-950 border border-zinc-900 rounded-2xl p-8">
        <h3 className="text-lg font-bold mb-4">What the caption needs to do</h3>
        <p className="text-sm text-zinc-400 mb-6">Every caption should include the core topic, the creator / trend angle, the action happening in the video, and a call to action. Do not write lazy captions like "crazy app" or "thoughts?" because they waste searchable real estate.</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {['social betting app', 'bet on creators', 'creator predictions', 'internet prediction market', 'Kizzy app', 'social media betting', 'creator economy', 'waitlist'].map((keyword, i) => (
            <span key={i} className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs">
              {keyword}
            </span>
          ))}
        </div>
        
        <div className="bg-zinc-900/50 border-l-4 border-purple-500 p-5 rounded-r-xl text-sm text-zinc-400">
          <strong className="text-zinc-200 block mb-2">TikTok-style SEO caption example:</strong>
          This app lets you bet on creators, followers, views, and social media outcomes. I tested Kizzy by checking a creator prediction inside the app and seeing how the market works. If you like prediction markets, creator economy tools, or social betting apps, this is worth watching. Join the waitlist through the link if you want early access.
        </div>
      </div>
      
      <div className="bg-zinc-950 border border-zinc-900 rounded-2xl p-8">
        <h3 className="text-lg font-bold mb-4">Use AI to create platform-specific captions</h3>
        <p className="text-sm text-zinc-400 mb-6">After the clip is finished, upload the final video or describe it to AI and ask for platform-specific captions. TikTok should be more searchable and descriptive. Instagram should be shorter and sharper. YouTube Shorts should be clear and keyword-aware.</p>
        
        <div className="bg-black/50 border border-zinc-800 rounded-xl p-5 font-mono text-xs text-zinc-300 whitespace-pre-wrap leading-relaxed">
{`Prompt for AI:

You are writing high-performing short-form video captions for a clipper campaign.

Write 3 versions of a caption for this video:
1. TikTok SEO caption with searchable phrases
2. Instagram Reel caption that is shorter and punchier
3. YouTube Shorts caption/title pair that is clear and keyword-rich

Video summary: [paste what happens in the clip]
Main hook: [paste the hook]
Main keyword: social betting app
Secondary keywords: bet on creators, creator predictions, social media betting, Kizzy app, prediction market
CTA: join the waitlist / link in bio

Rules:
- Keep the caption natural, not robotic
- Include the main keyword early
- Mention what the viewer is seeing in the video
- Include 3 to 5 keyword variations naturally
- End with a clear CTA
- Do not sound like a boring ad`}
        </div>
      </div>
    </div>
    
    <div className="h-px bg-zinc-900 my-12"></div>
    
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card label="TikTok" title="Search-heavy caption">Use fuller sentences, natural keywords, and enough context for both people and algorithms to understand the clip.</Card>
      <Card label="Instagram" title="Cleaner and shorter">Still include keywords, but prioritize punch and readability over length.</Card>
      <Card label="YouTube Shorts" title="Title + description combo">Use a clear title with the keyword and a short description that explains the bet or creator angle.</Card>
      <Card label="Rule" title="Never reuse one caption everywhere">Each platform reads and distributes content differently. Make AI generate custom versions for each one.</Card>
    </div>
  </Section>
);
