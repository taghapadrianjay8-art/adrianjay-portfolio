'use client';

import { useState } from 'react';

const filters = ['All Work', 'GoHighLevel', 'Creative', 'Video', 'AI'];
const projects = [
  { category: 'GoHighLevel', label: 'FUNNEL BUILD · LEAD GENERATION', title: 'Financial Services Funnel Suite', description: 'A collection of campaign funnels structured around clear messaging, lead capture, and a guided visitor journey.', details: ['Funnel structure', 'Landing page design', 'Lead capture experience'], visual: 'visual-finance', badge: 'GHL' },
  { category: 'GoHighLevel', label: 'SURVEY FUNNEL · CUSTOM STYLING', title: 'Home Services Survey Funnel', description: 'A multi-step survey experience with clear question states, responsive answer cards, and a streamlined contact step.', details: ['Multi-step survey', 'Responsive UI', 'Custom CSS styling'], visual: 'visual-survey', badge: 'SURVEY' },
  { category: 'GoHighLevel', label: 'SURVEY · CONDITIONAL LOGIC', title: 'Cabinet Refinishing Lead Survey', description: 'A simplified lead qualification flow designed around project information and a clean handoff into contact details.', details: ['Question flow', 'Field mapping considerations', 'Conditional paths'], visual: 'visual-cabinet', badge: 'LEAD FLOW' },
  { category: 'GoHighLevel', label: 'LANDING PAGE · EVENT / COACHING', title: 'Coaching & Event Landing Pages', description: 'Landing page concepts and funnel experiences designed to present an offer, build interest, and guide visitors toward action.', details: ['Offer presentation', 'Page sections', 'CTA hierarchy'], visual: 'visual-coaching', badge: 'LANDING PAGE' },
  { category: 'Creative', label: 'GRAPHIC DESIGN · SOCIAL / ADS', title: 'Campaign Creative Collection', description: 'A collection of visual assets for social media and digital advertising, balancing brand consistency with attention-grabbing creative.', details: ['Static ad concepts', 'Social graphics', 'Campaign variations'], visual: 'visual-creative', badge: 'CREATIVE' },
  { category: 'Video', label: 'VIDEO EDITING · SHORT FORM', title: 'Product & Short-Form Ads', description: 'Short-form edits built around product storytelling, pacing, visual hooks, and platform-ready delivery.', details: ['Hook and pacing', 'Editing', 'Creative variations'], visual: 'visual-video', badge: 'VIDEO' },
  { category: 'AI', label: 'AI CREATIVE · VISUAL PRODUCTION', title: 'AI-Assisted Creative Experiments', description: 'Exploring AI-assisted product visuals, image concepts, and creative production workflows for advertising.', details: ['Image generation', 'Concept exploration', 'Creative direction'], visual: 'visual-ai', badge: 'AI' },
];

const expertise = [
  ['01', 'Funnel Architecture', 'Structuring pages and steps around the offer, audience, and intended conversion path.'],
  ['02', 'Landing Page Building', 'Building and styling landing pages with clear sections, messaging hierarchy, and calls to action.'],
  ['03', 'Survey Funnels', 'Creating multi-step survey experiences, question flows, and lead capture journeys.'],
  ['04', 'Custom CSS & UI', 'Custom styling to improve the visual experience and make native funnel elements feel cohesive.'],
  ['05', 'CRM & Lead Capture', 'Considering how forms, fields, and lead information connect to the next step in the process.'],
  ['06', 'Integrations & Tracking', 'Working with integrations and mapping requirements while keeping lead flow and tracking in mind.'],
];

export default function Home() {
  const [active, setActive] = useState('All Work');
  const visibleProjects = projects.filter((p) => active === 'All Work' || p.category === active);

  return (
    <main>
      <nav className="nav container">
        <a className="brand" href="#top">AJ<span>✳</span></a>
        <div className="navlinks"><a href="#expertise">Expertise</a><a href="#work">Projects</a><a href="#about">About</a></div>
        <a className="nav-cta" href="#contact">Let’s connect <span>↗</span></a>
      </nav>


      <section className="hero container" id="top">
        <div className="eyebrow"><span className="dot"/> GOHIGHLEVEL · FUNNELS · DIGITAL CREATIVE</div>
        <h1>I build digital<br/><em>experiences that work.</em></h1>
        <div className="hero-bottom">
          <p className="hero-intro">I’m <strong>Adrian Jay</strong> — a GoHighLevel-focused digital specialist building funnels, landing pages, survey experiences, and creative assets that help businesses turn attention into action.</p>
          <div className="hero-actions"><a className="button button-dark" href="#work">Explore projects <span>↘</span></a><a className="text-link" href="#expertise">What I do ↗</a></div>
        </div>
        <div className="hero-art" aria-label="GoHighLevel and funnel building graphic"><div className="art-label">FUNNEL<br/>× SYSTEM<br/>× CREATIVE</div><div className="orbit orbit-1"/><div className="orbit orbit-2"/><div className="art-star">↗</div><div className="art-caption">BUILD / OPTIMIZE / CONNECT</div><div className="art-pills"><span>LANDING PAGES</span><span>SURVEYS</span><span>LEAD FLOW</span></div></div>
        <div className="scroll-note">SCROLL TO EXPLORE <span>↓</span></div>
      </section>

      <section className="about section container" id="about">
        <div className="section-label">01 / ABOUT</div>
        <div className="about-content"><h2>More than pages.<br/><em>Connected experiences.</em></h2><div className="about-text"><p>My main focus is GoHighLevel—building funnel pages and survey experiences while paying attention to the visitor journey, design, form flow, and the practical details behind lead capture.</p><p>I also bring creative skills in graphic design, video editing, and AI-assisted content production, which help me approach digital projects from both the systems and creative sides.</p><a className="text-link" href="#contact">Let’s work together ↗</a></div></div>
      <div className="stat-strip"><div><strong>GHL</strong><span>Primary platform</span></div><div><strong>FUNNELS</strong><span>Core specialization</span></div><div><strong>CREATIVE</strong><span>Supporting skillset</span></div><div><strong>BUILD · DESIGN</strong><span>My approach</span></div></div>
      </section>

      <section className="expertise section container" id="expertise">
        <div className="section-label">02 / GOHIGHLEVEL EXPERTISE</div><div className="expertise-head"><h2>From the first click<br/>to the <em>next step.</em></h2><p>My work covers the funnel experience—from page structure and survey flow to styling, lead capture, and the details that support the user journey.</p></div>
        <div className="skill-grid">{expertise.map((s)=><article className="skill" key={s[0]}><div className="skill-num">{s[0]}</div><h3>{s[1]}</h3><p>{s[2]}</p><span className="skill-arrow">↗</span></article>)}</div>
      </section>

      <section className="work section container" id="work">
        <div className="section-label">03 / SELECTED WORK</div><div className="work-head"><h2>Built, designed,<br/><em>and created.</em></h2><p>Selected project showcases across GoHighLevel funnels, creative design, video editing, and AI-assisted production.</p></div>
        <div className="filters" role="tablist" aria-label="Project categories">{filters.map((f)=><button key={f} className={active===f?'filter active':'filter'} onClick={()=>setActive(f)}>{f}</button>)}</div>
        <div className="project-grid">{visibleProjects.map((p,i)=><article className="project" key={p.title}><div className={`project-visual ${p.visual}`}><span className="project-index">0{i+1}</span><span className="visual-word">{p.badge}</span><span className="visual-shape"/><div className="visual-lines"><i/><i/><i/></div></div><div className="project-info"><div className="project-tag">{p.label}</div><h3>{p.title}</h3><p>{p.description}</p><div className="project-details">{p.details.map(d=><span key={d}>{d}</span>)}</div><div className="project-link">CASE STUDY PREVIEW <span>↗</span></div></div></article>)}</div>
        <div className="work-note">Project cards currently use concept visuals and descriptions as placeholders. We’ll replace them with your actual screenshots, videos, links, and approved client details. Client work will only be shown publicly when you have permission.</div>
      </section>

      <section className="creative section container" id="creative"><div className="section-label">04 / CREATIVE CAPABILITIES</div><div className="expertise-head"><h2>Creative skills<br/>that <em>support the system.</em></h2><p>My creative background complements funnel building—helping me create or support the visuals that bring a page, campaign, or offer together.</p></div><div className="creative-grid"><div><span>GRAPHIC DESIGN</span><h3>Visuals that communicate.</h3><p>Social graphics, ad creatives, promotional design, and campaign visuals.</p></div><div><span>VIDEO EDITING</span><h3>Stories in motion.</h3><p>Short-form content, product ads, Reels, and video creative variations.</p></div><div><span>AI CREATIVE</span><h3>Explore new workflows.</h3><p>AI-assisted product imagery, visual concepts, and creative experiments.</p></div></div></section>
      <section className="tools section container"><div className="section-label">05 / TOOLS & WORKFLOW</div><h2>Tools in my <em>toolkit.</em></h2><div className="tools-list"><span>GoHighLevel</span><span>Canva</span><span>CapCut</span><span>Custom CSS</span><span>ChatGPT</span><span>Claude</span><span>Pippit</span><span>Descript</span><span>Higgsfield</span><span>Kling AI</span><span>Meta Business Suite</span><span>Google Workspace</span></div></section>
      <section className="contact section container" id="contact"><div className="section-label">06 / LET’S CONNECT</div><h2>Need a funnel builder<br/><em>and creative partner?</em></h2><p>Let’s build a clear, engaging digital experience for your next campaign or business project.</p><a className="button button-light" href="mailto:hello@adrianjaycreative.com">Get in touch <span>↗</span></a><div className="contact-footer"><span>ADRIAN JAY · GHL & CREATIVE SPECIALIST</span><span>© 2026</span></div></section>
    </main>
  );
}
