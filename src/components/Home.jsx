import { motion as Motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import GrowthHero from './GrowthHero'
import TeamShowcase from './TeamShowcase'


const services = [
  ['Content Marketing', 'content-marketing', 'content', 'Build authority with content that informs, engages, and converts.'],
  ['Social Media Marketing', 'social-marketing', 'social', 'Create a stronger presence and connect with the right audience.'],
  ['Facebook Advertising', 'app-development', 'facebook', 'Reach high-intent customers with targeted paid campaigns.'],
  ['Google Ads', 'web-development', 'target', 'Capture demand and turn searches into meaningful leads.'],
  ['SEO Optimization', 'seo-optimization', 'search', 'Improve discoverability and build sustainable organic growth.'],
  ['PPC Advertising', 'ppc-advertising', 'click', 'Scale campaigns with focused targeting and performance insights.'],
]

const serviceIconStyles = [
  'border-amber-300/30 bg-amber-300/10 text-amber-300 group-hover:bg-amber-300/20 group-hover:shadow-[0_0_30px_rgba(252,211,77,0.2)]',
  'border-fuchsia-300/30 bg-fuchsia-300/10 text-fuchsia-300 group-hover:bg-fuchsia-300/20 group-hover:shadow-[0_0_30px_rgba(232,121,249,0.2)]',
  'border-blue-300/30 bg-blue-300/10 text-blue-300 group-hover:bg-blue-300/20 group-hover:shadow-[0_0_30px_rgba(147,197,253,0.2)]',
  'border-orange-300/30 bg-orange-300/10 text-orange-300 group-hover:bg-orange-300/20 group-hover:shadow-[0_0_30px_rgba(253,186,116,0.2)]',
  'border-cyan-300/30 bg-cyan-300/10 text-cyan-300 group-hover:bg-cyan-300/20 group-hover:shadow-[0_0_30px_rgba(103,232,249,0.2)]',
  'border-violet-300/30 bg-violet-300/10 text-violet-300 group-hover:bg-violet-300/20 group-hover:shadow-[0_0_30px_rgba(196,181,253,0.2)]',
]

const team = [
  ['AdyGuru', 'CEO & Founder', 3],
  ['Aayush Gautam', 'SEO Expert', 4],
  ['Ahaana Gupta', 'Social Media Manager', 5],
  ['Diya Nair', 'Brand Strategist Specialist', 6],
  ['Vanya Desai', 'Influencer Marketing Specialist', 1],
  ['Suresh Bhatia', 'Meta Ads Expert', 2],
]

const reviews = [
  ['Radhe Goind', 'Facebook Ads training', 'Adyguru is one of the Best Digital marketing Guru who Trained me about Facebook ads, Alos Behavior is too Good And Professional Communication.'],
  ['Shashank Vashista', 'CEO of Fine Architecture', 'I appreciated their very quick communication and flexibility to working within our pre-defined strategy.'],
  ['Harish Pandey', 'Founder and CEO of Sonica Hardware', 'There is a dedicated team there, and they respond promptly to queries and respect your time. They provide you with good advice and are very practical.'],
]

const container = 'mx-auto w-full max-w-7xl px-5 sm:px-8'
const heading = 'section-heading'
const button = 'inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-neutral-300 bg-[#141411] px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-neutral-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-500'

function Icon({ name, className = 'h-6 w-6' }) {
  const paths = {
    content: 'M5 3h10l4 4v14H5z M14 3v5h5 M8 12h8 M8 16h6',
    social: 'M16 7a3 3 0 1 0 0-.1 M5 15a3 3 0 1 0 0-.1 M17 21a3 3 0 1 0 0-.1 M8 13l5-5 M8 16l6 3',
    facebook: 'M14 22V12h3l1-4h-4V6c0-1 1-2 2-2h2V1h-3c-4 0-5 2-5 5v2H7v4h3v10',
    target: 'M12 3a9 9 0 1 0 9 9 M12 7a5 5 0 1 0 5 5 M12 12l9-9 M16 3h5v5',
    search: 'M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14 M15 15l6 6',
    click: 'M5 3l5 17 3-6 6-3z M14 16l5 5 M2 8H0 M9 2V0 M15 5l2-2',
    arrow: 'M4 12h16 M14 6l6 6-6 6',
    check: 'M5 12l4 4L19 6',
    x: 'M4 3l16 18h-4L0 3h4 M20 3L4 21',
    linkedin: 'M5 9v12 M5 3v1 M10 21V9h4v2c3-4 7-2 7 2v8 M14 21v-7',
    trophy: 'M8 4h8v4a4 4 0 0 1-8 0V4 M12 12v5 M8 20h8 M6 20h12 M5 5H3v2a4 4 0 0 0 4 4 M19 5h2v2a4 4 0 0 1-4 4',
    users: 'M16 20v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1 M9.5 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8 M17 8a3 3 0 1 0 0 6 M17 15h1a3 3 0 0 1 3 3',
    chart: 'M4 19V5 M4 19h17 M8 16v-4 M12 16V8 M16 16V5 M20 16v-7',
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d={paths[name] || paths.arrow} />
    </svg>
  )
}

function SocialIcon({ name, className = 'h-5 w-5' }) {
  const paths = {
    facebook: 'M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 11.004 10.125 11.925v-8.437H7.078v-3.488h3.047V9.413c0-3.022 1.792-4.695 4.533-4.695 1.312 0 2.686.236 2.686.236v2.973h-1.514c-1.49 0-1.956.93-1.956 1.885v2.261h3.328l-.532 3.488h-2.796v8.437C19.612 23.077 24 18.092 24 12.073Z',
    x: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.967 6.817H1.68l7.73-8.835L1.254 2.25h6.826l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z',
    linkedin: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.137 1.445-2.137 2.939v5.667H9.35V8.998h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.604 0 4.267 2.372 4.267 5.455v6.288ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM3.555 20.452h3.56V8.998h-3.56v11.454ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 0 24 0 24 1.729V22.271C24 .774 23.2 0 22.225 0Z',
  }

  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  )
}

function Reveal({ children, className = '', delay = 0 }) {
  const reducedMotion = useReducedMotion()
  return (
    <Motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: reducedMotion ? 0 : 0.55, delay }}
      className={className}
    >
      {children}
    </Motion.div>
  )
}

function Home() {
  const reducedMotion = useReducedMotion()


  return (
    <main id="home" className="home-dark overflow-x-clip bg-[#060605] text-white">
      {/* 01 — Campaign hero */}
      <GrowthHero />

      {/* 02 — Why choose us */}
      <section aria-labelledby="why-title" className="relative overflow-hidden bg-[#060605] py-14 lg:py-20">
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-amber-300/5 blur-3xl" />
        <div className={container + ' relative'}>
          <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <h2 id="why-title" className={heading}>AdyGuru Advertising Agency That Generates <span className="bg-gradient-to-b from-[#e9c76f] to-[#d5ac52] bg-clip-text text-transparent">More Leads</span> For You</h2>
            <p className="mt-6 text-lg leading-8 text-neutral-300">We're a Highly Trusted Facebook Ad Agency That Helps Grow Businesses And Increase Profits Across The Globe!</p>
            <Link to="/about-us" className="group mt-8 inline-flex items-center gap-3 rounded-full border border-[#d4af57] bg-[#0A0A0A] px-7 py-4 font-semibold text-white shadow-[0_8px_24px_rgba(142,102,32,.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-800 hover:shadow-xl">Get to know AdyGuru <Icon name="arrow" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" /></Link>
            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-neutral-400">
              {['More Leads', 'Higher Profits', 'Global Reach'].map((item) => (
                <span key={item} className="inline-flex items-center gap-2"><span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#dbb454] bg-gradient-to-br from-[#fff8e3] to-[#f5d790] text-[#84520c]"><Icon name="check" className="h-3.5 w-3.5" /></span>{item}</span>
              ))}
            </div>
          </Reveal>
          <Reveal className="relative px-3 pb-7 pt-6 sm:px-6 lg:px-0" delay={0.12}>
            <Motion.div
              animate={reducedMotion ? undefined : { y: [0, -8, 0], rotate: [0, 0.4, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative mx-auto max-w-xl rounded-[2rem] border border-[#d4af57]/20 bg-[#141411] p-5 shadow-[0_25px_80px_rgba(15,23,42,0.14)] sm:p-7"
            >
              <div className="flex items-start justify-between gap-4"><div><p className="text-sm font-semibold text-neutral-400">Campaign overview</p><p className="mt-2 text-5xl font-black tracking-tight text-white sm:text-6xl">12,487</p><p className="mt-1 text-sm text-neutral-400">Total leads <span className="ml-2 rounded-full bg-[#f9e5b5] px-2 py-1 font-bold text-[#75500e]">+68%</span></p></div></div>
              <svg viewBox="0 0 550 240" className="mt-6 w-full overflow-visible" role="img" aria-label="Illustrative campaign growth chart with rising leads over 30 days">
                <defs>
                  <linearGradient id="why-bars" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#d5ad59" /><stop offset="1" stopColor="#6f5224" /></linearGradient>
                  <linearGradient id="why-gold"><stop stopColor="#b07a1b" /><stop offset=".5" stopColor="#f9dc82" /><stop offset="1" stopColor="#c48a1e" /></linearGradient>
                  <clipPath id="why-chart-reveal"><Motion.rect x="0" y="0" height="240" initial={reducedMotion ? false : { width: 0 }} whileInView={{ width: 550 }} viewport={{ once: true }} transition={{ duration: 1.8, delay: .2 }} /></clipPath>
                </defs>
                {[['15K',45],['10K',100],['5K',155],['0',210]].map(([label,y]) => <text key={label} x="0" y={y} fill="#a3a3a3" fontSize="12">{label}</text>)}
                {[36,76,76,101,126,137,160,184,218].map((height,index) => <g key={index}>
                  <path d={`M${48+index*55} 16V218`} stroke="#ffffff18" strokeDasharray="3 6" />
                  <Motion.rect x={48+index*55} width="43" rx="7" fill="url(#why-bars)" initial={reducedMotion ? false : { y: 230, height: 0 }} whileInView={{ y: 230-height*.8, height: height*.8 }} viewport={{ once: true }} transition={{ duration: .8, delay: index*.07 }} />
                </g>)}
                <g clipPath="url(#why-chart-reveal)">
                  <path d="M48 190 C95 183 107 162 130 166 S192 163 228 150 S287 126 310 127 S375 111 402 102 S462 83 476 75 S509 51 522 33" fill="none" stroke="url(#why-gold)" strokeWidth="2.8" />
                  <circle cx="522" cy="33" r="23" fill="#d4ac4920" />
                  {[[130,166],[310,127],[402,102],[476,75],[522,33]].map(([x,y]) => <circle key={x} cx={x} cy={y} r="6" fill="url(#why-gold)" stroke="#bd8a31" strokeWidth="1.5" />)}
                </g>
              </svg>
              <div className="mt-5 flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-neutral-400"><span>Last 30 days</span><span className="text-[#e0bd68]">Growth accelerating</span></div>
              <Motion.div animate={reducedMotion ? undefined : { x: [0, 10, 0], y: [0, -5, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }} className="absolute -bottom-7 left-0 rounded-2xl border border-[#d4af57]/20 bg-[#141411] p-4 shadow-xl sm:-left-6"><p className="text-xs font-semibold text-neutral-400">Facebook Ads</p><p className="mt-1 text-lg font-black text-white">Higher ROI</p><p className="mt-1 text-xs font-bold text-[#e0bd68]">+72% this month</p></Motion.div>
              <Motion.div animate={reducedMotion ? undefined : { x: [0, -8, 0], y: [0, 5, 0] }} transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }} className="absolute -right-2 top-7 flex items-center gap-3 rounded-2xl border border-[#f2dba0] bg-gradient-to-br from-[#fff0ba] to-[#d0a047] p-3 text-black shadow-xl sm:-right-6 sm:p-4"><Icon name="chart" className="h-8 w-8 text-[#84520c]" /><div><p className="text-xs">More leads</p><p className="mt-1 text-lg font-black">More growth</p></div></Motion.div>
            </Motion.div>
          </Reveal>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ['Built to be found', 'If Google can’t crawl your site, it’s not going to rank—but that doesn’t mean avoiding JavaScript.', 'search'],
              ['Made for online sales', 'For businesses which sell products online and improve their product listings in the search results.', 'target'],
              ['Ready for what’s next', 'If you’re investing in a new website it’s important to ensure it’s built to succeed in the search results too.', 'arrow'],
            ].map(([title, text, icon], index) => (
              <Reveal key={title} delay={index * 0.08} className="group rounded-2xl border border-[#d4af57]/20 bg-[#141411] p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-7">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#fff8e6] to-[#f6d99b] text-[#84520c] transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"><Icon name={icon} className="h-7 w-7" /></span>
                <h3 className="mt-4 text-xl font-bold text-white">{title}</h3><p className="mt-3 leading-7 text-neutral-300">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — Award */}
      <section aria-labelledby="award-title" className="relative overflow-hidden border-y border-[#d4af5726] bg-black py-14 text-white lg:py-20">
        <div aria-hidden="true" className="pointer-events-none absolute left-1/4 top-0 h-[32rem] w-[32rem] rounded-full bg-amber-300/10 blur-3xl" />
        <div className={container + ' relative grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20'}>
          <Reveal className="relative mx-auto w-full max-w-md px-3 pb-5 sm:px-0">
            <Motion.div animate={reducedMotion ? undefined : { y: [0, -7, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="relative rounded-[2rem] border border-[#cba65b]/40 bg-gradient-to-br from-[#2a2417] via-[#111] to-black p-3 shadow-[0_20px_80px_rgba(197,154,63,0.14)] sm:p-4">
              <div className="pointer-events-none absolute -inset-2 rounded-[2.4rem] border border-[#d9b96b]/15" />
              <img src="/award.webp" alt="AdyGuru's Top 15 Marketing Agency award presented by Hindustan Insider" width="768" height="768" loading="lazy" className="relative w-full rounded-2xl border border-amber-200/30 shadow-2xl" />
              <div className="absolute left-0 top-8 flex items-center gap-3 rounded-2xl border border-amber-300/60 bg-[#171717] px-4 py-3 shadow-xl sm:-left-6"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-300/15 text-amber-300"><Icon name="trophy" className="h-6 w-6" /></span><span className="text-xs font-bold uppercase tracking-[0.18em] text-amber-100">Proud<br />achievement</span></div>
              <div className="absolute -bottom-4 right-0 rounded-xl border border-amber-300/40 bg-[#0A0A0A] px-4 py-3 text-amber-200 shadow-xl sm:-right-4"><p className="text-xs uppercase tracking-[0.18em] text-amber-300/70">Milestone</p><p className="mt-1 font-bold">Top 15 Agency</p></div>
            </Motion.div>
          </Reveal>
          <Reveal>
            <h2 id="award-title" className={heading + ' max-w-3xl text-white'}>AdyGuru Honored as a <span className="bg-gradient-to-b from-[#fff0bb] via-[#e7c675] to-[#d5ac52] bg-clip-text text-transparent">Top 15 Marketing Agency!</span></h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-400 sm:text-lg sm:leading-8">A proud moment for AdyGuru. We have been recognized among the Top 15 Marketing Agencies by Hindustan Insider—a testament to our expertise, innovation, and commitment to delivering high-performance marketing solutions.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                ['trophy', 'Top 15', 'Agency'],
                ['users', 'Recognized', 'Expertise'],
                ['chart', 'Results-driven', 'Growth'],
              ].map(([icon, title, text], index) => (
                <Motion.div key={title} initial={reducedMotion ? false : { opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.1 }} className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[.025] p-4 transition-colors hover:border-[#cba65b]/50 hover:bg-[#cba65b]/[.06] sm:flex-col sm:items-start">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#e7c675]/30 bg-gradient-to-br from-[#e7c675]/15 to-transparent text-[#e7c675]"><Icon name={icon} className="h-7 w-7" /></span><span className="text-sm font-bold leading-6 text-white">{title}<br /><span className="text-neutral-400">{text}</span></span>
                </Motion.div>
              ))}
            </div>
            <Link to="/about-us" className="group mt-8 inline-flex items-center gap-4 rounded-full border border-[#e7c675] bg-gradient-to-r from-[#f6dda0] to-[#cfa44e] py-2 pl-6 pr-2 font-bold text-black shadow-[0_8px_30px_#cfa44e20] transition-shadow hover:shadow-[0_8px_35px_#cfa44e40] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e7c675]">View our journey <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 transition-transform duration-300 group-hover:translate-x-1"><Icon name="arrow" className="h-5 w-5" /></span></Link>
            <p className="mt-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-neutral-400">Bigger milestones ahead</p>
          </Reveal>
        </div>
      </section>

      {/* 04 — Video results */}
      <section id="home-results" aria-labelledby="results-title" className="relative overflow-hidden bg-[#060605] py-14 text-white lg:py-20">
        <div className={container}>
          <Reveal className="max-w-3xl">
            <h2 id="results-title" className={heading}>Generate <span className="bg-gradient-to-b from-[#f0d486] via-[#e0bd68] to-[#d5ac52] bg-clip-text text-transparent">1000&apos;s</span> Leads Using Paid Marketing</h2>
            <p className="mt-5 text-lg leading-8 text-neutral-300">Witness our client’s success: hundreds of leads and millions in revenue generated!</p>
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            {[
              ['video1.mp4', 'Turn $5 Into $1,000 With AdyGuru'],
              ['video2.mp4', 'Witness our client’s success'],
            ].map(([file, title], index) => (
              <Reveal key={file} delay={index * 0.08} className={'group overflow-hidden rounded-2xl border-2 border-[#d9b452] bg-[#141411] shadow-[0_18px_45px_rgba(172,124,36,.16)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(172,124,36,.23)] ' + (index === 1 ? 'lg:mt-14' : '')}>
                <video controls playsInline preload="metadata" aria-label={title} className="aspect-video w-full bg-black object-contain">
                  <source src={'/' + file} type="video/mp4" />
                  Your browser does not support embedded video. <a href={'/' + file}>Watch the video</a>.
                </video>
                <div className="flex items-center gap-4 border-t border-[#d4af57]/20 p-5"><span className="rounded-lg bg-[#f7e4a8] px-3 py-2 font-mono font-bold text-[#704b0d]">0{index + 1}</span><div className="flex-1"><h3 className="text-xl font-bold text-white">{title}</h3><p className="mt-1 text-sm text-neutral-400">{index === 0 ? 'A featured client success story.' : 'Generating consistent monthly growth.'}</p></div><Icon name="arrow" className="h-6 w-6 text-[#e0bd68] transition-transform group-hover:translate-x-1" /></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — Services */}
      <section id="home-services" aria-labelledby="services-title" className="bg-[#0A0A0A] py-14 text-white lg:py-20">
        <div className={container}>
          <Reveal className="grid items-end gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="max-w-2xl">
              <h2 id="services-title" className={heading}>Increase Your Sales By <span className="bg-gradient-to-b from-[#fff0bb] via-[#e4c16c] to-[#d5ac52] bg-clip-text text-transparent">200%</span> With Us</h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-neutral-300">Our services are designed to generate qualified leads, improve visibility, and support measurable business growth.</p>
            </div>
            <div className="services-summary-panel relative hidden overflow-hidden rounded-3xl border border-[#d4af57]/30 bg-[#11110e] p-6 lg:block">
              <div className="services-summary-panel__orb" aria-hidden="true" />
              <p className="relative text-xs font-bold uppercase tracking-[0.22em] text-[#e0bd68]">Performance by design</p>
              <div className="relative mt-6 grid grid-cols-2 gap-3">
                <div className="services-summary-panel__metric"><span>Sales growth</span><strong>+200%</strong><small>with focused campaigns</small></div>
                <div className="services-summary-panel__metric"><span>More leads</span><strong>↑ 68%</strong><small>higher quality demand</small></div>
                <div className="services-summary-panel__metric services-summary-panel__metric--wide"><span>Higher revenue</span><strong>Built to compound</strong><small>SEO, ads and strategy working together</small></div>
              </div>
              <Link to="/services" className="group relative mt-5 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#f7dda0] to-[#c7973d] px-5 py-3 text-sm font-bold text-[#17120a] shadow-[0_0_25px_rgba(221,175,79,.2)] transition-transform duration-300 hover:-translate-y-1">View all services <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
            </div>
            <Link to="/services" className="inline-flex w-fit items-center gap-3 rounded-full bg-gradient-to-r from-[#f7dda0] to-[#c7973d] px-5 py-3 text-sm font-bold text-[#17120a] transition-transform duration-300 hover:-translate-y-1 lg:hidden">View all services <Icon name="arrow" className="h-4 w-4" /></Link>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(([name, slug, icon, description], index) => (
              <Reveal key={name} delay={(index % 3) * 0.08}>
                <a href={'https://adyguru.com/meto_service/' + slug + '/'} className="group relative block h-full overflow-hidden rounded-2xl border border-white/10 bg-[#141414] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#e2bd63] hover:bg-[#1d1a13] hover:shadow-[0_20px_60px_rgba(212,166,66,.15)] focus-visible:outline-2 focus-visible:outline-[#e2bd63]">
                  <span className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#d8ad4d]/10 blur-2xl transition-all duration-500 group-hover:bg-[#d8ad4d]/25" />
                  <div className="relative flex items-start justify-between"><Motion.span whileHover={reducedMotion ? undefined : { rotate: 8, scale: 1.08 }} className="rounded-2xl border border-[#dcb65e]/40 bg-[#dcb65e]/10 p-4 text-[#edcf7f] transition-all duration-300 group-hover:bg-[#dcb65e]/20 group-hover:shadow-[0_0_28px_rgba(220,182,94,.18)]"><Icon name={icon} /></Motion.span><span className="font-mono text-sm text-neutral-400">0{index + 1}</span></div>
                  <h3 className="relative mt-7 text-xl font-bold">{name}</h3>
                  <p className="relative mt-3 leading-7 text-neutral-300">{description}</p>
                  <span className="relative mt-7 inline-flex items-center gap-3 text-sm font-semibold text-[#f0cf7c]">Explore service <Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" /></span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — Numbers */}
      <section aria-labelledby="numbers-title" className="relative overflow-hidden bg-[#060605] py-14 lg:py-20">
        <div className={container}>
          <Reveal className="grid gap-6 lg:grid-cols-2 lg:items-end">
            <div><h2 id="numbers-title" className={heading}>Expect <span className="bg-gradient-to-b from-[#f0d486] via-[#e0bd68] to-[#d5ac52] bg-clip-text text-transparent">Great Things</span> from Your SEO Agency</h2></div>
            <p className="max-w-lg text-lg leading-8 text-neutral-300 lg:justify-self-end">We know how important customer experience is for a business and therefore, we strive to make your company excel in this.</p>
          </Reveal>
          <dl className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {[['330+', 'Active Clients', 'users', '+12%', 82], ['85+', 'Team Advisors', 'users', '+18%', 68], ['850+', 'Projects Done', 'content', '+24%', 92], ['15+', 'Glorious Years', 'trophy', '+10%', 58]].map(([value, label, icon, growth, progress], index) => (
              <Reveal key={label} delay={index * 0.08} className="group relative overflow-hidden rounded-2xl border border-[#d4af57]/20 bg-[#141411] p-6 shadow-[0_12px_35px_rgba(172,124,36,.08)] transition-all duration-300 hover:-translate-y-2 hover:border-[#c18b2c] hover:shadow-[0_20px_45px_rgba(172,124,36,.18)] sm:p-7">
                <div className="relative flex items-start justify-between gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#dcb65e]/50 bg-[#fff5d7] text-[#8c5e14] transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"><Icon name={icon} className="h-6 w-6" /></span><span className="rounded-full border border-[#e5c878] bg-[#fff8e5] px-3 py-1 text-xs font-bold text-[#9b6a19]">↑ {growth}</span></div>
                <dd className="mt-7 text-4xl font-black tracking-tight text-white sm:text-5xl">{value}</dd>
                <dt className="mt-2 text-sm font-semibold text-neutral-300">{label}</dt>
                <div className="mt-7 flex h-10 items-end gap-1.5" aria-hidden="true">{[18, 24, 30, 38, 45, 56, 70, progress].map((height, barIndex) => <Motion.span key={barIndex} initial={{ height: 0 }} whileInView={{ height: `${height}%` }} viewport={{ once: true }} transition={{ duration: 0.6, delay: barIndex * 0.06 }} className={'flex-1 rounded-t-full ' + (barIndex > 5 ? 'bg-gradient-to-t from-[#b57919] to-[#f1d88f]' : 'bg-[#66512b]')} />)}</div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* 07 — Team */}
      <section aria-labelledby="team-title" className="relative isolate overflow-hidden border-y border-[#d4af57]/20 bg-[#141411] py-14 lg:py-20">
        <div className="pointer-events-none absolute -left-24 top-24 h-48 w-48 rounded-full border border-[#d4af57]/15" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-24 bottom-16 h-64 w-64 rounded-full bg-[#d4af57]/10 blur-2xl" aria-hidden="true" />
        <div className={container}>
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 id="team-title" className={heading + ' max-w-3xl'}>Meet Our <span className="bg-gradient-to-b from-[#f0d486] via-[#e0bd68] to-[#d5ac52] bg-clip-text text-transparent">Professional Team</span></h2>
            </div>
          </Reveal>
          <TeamShowcase members={team} />
          <p className="mt-10 text-center text-xl font-semibold text-[#e0bd68]">Work with a Dedicated SEO Company</p>
        </div>
      </section>

      {/* 08 — Testimonials */}
      <section aria-labelledby="reviews-title" className="relative overflow-hidden border-y border-[#d4af57]/20 bg-[#141411] py-14 lg:py-20">
        <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-32 h-64 w-64 rounded-full bg-[#d4af57]/10 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 bottom-8 h-56 w-56 rounded-full border border-[#d4af57]/15" />
        <div className={container}>
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 id="reviews-title" className={heading}>1,000&apos;s of Happy Customers Love Us And <span className="bg-gradient-to-b from-[#f0d486] via-[#e0bd68] to-[#d5ac52] bg-clip-text text-transparent">Now You Can Too</span></h2>
            <p className="mt-6 text-lg leading-8 text-neutral-300">We know how important customer experience is for a business and therefore, we strive to make your company excel in this.</p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reviews.map(([name, role, quote], index) => (
              <Reveal key={name} delay={index * 0.08} className={'group flex flex-col rounded-[1.35rem] border bg-[#141411] p-6 shadow-[0_18px_40px_rgba(172,124,36,.1)] transition duration-300 hover:-translate-y-2 hover:border-[#c18b2c] hover:shadow-[0_24px_50px_rgba(172,124,36,.2)] sm:p-7 ' + (index === 1 ? 'border-[#c18b2c] lg:-translate-y-4' : 'border-[#d4af57]/20')}>
                <span aria-hidden="true" className="h-12 text-6xl font-serif text-white">“</span>
                <blockquote className="my-7 flex-1 leading-7 text-neutral-300">{quote}</blockquote>
                <div className="flex items-center gap-4 border-t border-[#d4af57]/20 pt-6">
                  <img src={'/testimonial' + (index + 1) + '.webp'} alt="" loading="lazy" width="48" height="48" className="h-12 w-12 rounded-full border-2 border-[#e0bd68] object-cover" />
                  <div><p className="font-bold text-white">{name}</p><p className="mt-1 text-xs font-medium text-[#e0bd68]">{role}</p></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 09 — Join us */}
      {/* <section aria-labelledby="join-title" className="relative overflow-hidden bg-[#070707] py-14 text-white lg:py-20">
        <Reveal className={container + ' relative overflow-hidden rounded-[2rem] border border-[#c18b2c]/60 bg-[radial-gradient(circle_at_85%_0%,rgba(193,139,44,.16),transparent_32%),linear-gradient(135deg,#11100d,#030303)] px-7 py-14 shadow-[0_0_80px_rgba(193,139,44,.12)] sm:px-12 sm:py-20 lg:px-20 lg:py-24'}>
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-32 h-[34rem] w-[34rem] rounded-full border border-[#e0bd68]/35 bg-[#e0bd68]/[.03] shadow-[0_0_80px_rgba(224,189,104,.18)]" />
          <div aria-hidden="true" className="pointer-events-none absolute -right-8 -top-20 h-72 w-72 rounded-full border-[28px] border-[#e0bd68]/10" />
          <div className="relative max-w-5xl">
            <h2 id="join-title" className={heading + ' max-w-5xl text-4xl sm:text-5xl lg:text-7xl'}>You Want to Showcase Your Business in <span className="bg-gradient-to-r from-[#f0d486] via-[#e0bd68] to-[#d5ac52] bg-clip-text text-transparent">Top?</span> Join With Us</h2>
            <Link to="/contact-us" className="group mt-10 inline-flex min-h-14 items-center gap-5 rounded-full bg-gradient-to-r from-[#f0d486] via-[#e0bd68] to-[#b77d20] px-8 py-4 text-base font-bold text-[#17120a] shadow-[0_0_32px_rgba(224,189,104,.3)] transition hover:-translate-y-1 hover:shadow-[0_0_42px_rgba(224,189,104,.48)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e0bd68]">Join Us <Icon name="arrow" className="h-5 w-5 transition-transform group-hover:translate-x-1" /></Link>
          </div>
        </Reveal>
      </section> */}
    </main>
  )
}

export default Home
