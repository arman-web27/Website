import { useEffect, useState } from 'react'
import { motion as Motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'

const benefits = [
  ['M4 20V14m5 6V10m5 10V6m5 14V2', 'Proven', 'ROI Growth'],
  ['M12 3 4 6v6c0 5 8 9 8 9s8-4 8-9V6Zm-4 9 3 3 5-6', 'Transparent', 'Reporting'],
  ['M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM2 21v-3a5 5 0 0 1 10 0v3m4-17a4 4 0 0 1 0 8m1 3a5 5 0 0 1 5 5', 'Dedicated', 'Experts'],
  ['m12 2 3 7 8 1-6 5 2 8-7-4-7 4 2-8-6-5 8-1Z', 'Results', 'That Last'],
]

function AnimatedValue({ value, prefix = '', suffix = '', decimals = 0 }) {
  const [display, setDisplay] = useState(0)
  useEffect(() => {
    let frame
    const start = performance.now()
    const duration = 2200
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Number((value * eased).toFixed(decimals)))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [value, decimals])
  return <>{prefix}{display.toLocaleString('en-IN', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}{suffix}</>
}

export default function GrowthHero({ slide = 0 }) {
  const reduced = useReducedMotion()
  return (
    <section aria-labelledby="hero-title" className={'growth-hero' + (slide === 2 ? ' growth-hero--conversion' : '')}>
      <div className="growth-hero__layout">
        <Motion.div className="growth-hero__copy" initial={reduced ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55 }}>
          {slide === 1 ? <h1 id="hero-title" className="growth-hero__title">Get Your Business to<br />The <em className="growth-hero__underline">Top of Google<svg viewBox="0 0 260 18" aria-hidden="true"><path d="M4 13Q110-5 253 11Q133 3 5 17" fill="#d6ac54" /></svg></em></h1> : <>
          {slide === 2 ? <h1 id="hero-title" className="growth-hero__title">Turn Clicks<br />Into <em>Customers</em></h1> : <h1 id="hero-title" className="growth-hero__title">Get a <em>22%</em> Higher<br />ROI for Your<br /><span className="growth-hero__underline">Ad Dollars<svg viewBox="0 0 260 18" aria-hidden="true"><path d="M4 13Q110-5 253 11Q133 3 5 17" fill="#d6ac54" /></svg></span></h1>}
          </>}
          {slide === 2 ? <div className="growth-hero__description conversion-description"><p><MarketingIcon type="ads" />Get more Leads, Clicks, Sales and Signups From Facebook Ads</p><p><MarketingIcon type="search" />Get Your Business to The Top of Google</p></div> : <p className="growth-hero__description">Data-driven marketing that turns ad spend into real revenue.<br />Paid ads. SEO. Strategy. Results.</p>}
          {slide !== 2 && <div className="growth-hero__actions">
            <Link to="/contact-us" className="growth-hero__button">Let’s grow your business</Link>
            <a href="#home-results" className="growth-hero__results">See the results</a>
          </div>}
          {slide === 2 ? <div className="conversion-stats">{[[500, '', '+', 'Businesses Scaled'], [3.2, '', 'M+', 'Leads Generated'], [98, '', '%', 'Client Satisfaction']].map(([value, prefix, suffix, label]) => <div key={label}><strong><AnimatedValue value={value} prefix={prefix} suffix={suffix} decimals={value % 1 ? 1 : 0} /></strong><span>{label}</span></div>)}</div> : <ul className="growth-hero__benefits">
            {benefits.map(([path, top, bottom]) => <li key={top}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={path} /></svg><span>{top}<br />{bottom}</span></li>)}
          </ul>}
          {slide === 0 && <div className="growth-hero__partners"><span className="growth-hero__partners-label">TRUSTED ADVERTISING PARTNERS</span><div><strong><img className="meta-icon" src="/meta.svg" alt="" width="42" height="28" />Meta Ads</strong><i /><strong><img className="google-icon" src="/google.svg" alt="" width="30" height="30" />Google Partner</strong></div></div>}
        </Motion.div>
        <Motion.div className="growth-hero__visual" initial={reduced ? false : { opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .55 }}>
          {slide === 1 ? <SearchDashboard /> : slide === 2 ? <ConversionDashboard reduced={reduced} /> : <PerformanceDashboard reduced={reduced} />}
        </Motion.div>
      </div>
    </section>
  )
}

function PerformanceDashboard({ reduced }) {
  const bars = [28, 38, 34, 52, 46, 63, 58, 76, 70, 88]
  return <div className="performance-dashboard" aria-label="Illustrative campaign performance dashboard">
    <div className="performance-dashboard__head"><span><i /> Live campaign performance</span><b>Last 30 days</b></div>
    <div className="performance-dashboard__metrics">{[[12480, '$', 'Ad Spend', '↑ 12%'], [42360, '$', 'Revenue', '↑ 32%'], [22, '', 'ROI Increase', '↑ 22%']].map(([value, prefix, label, change]) => <div key={label}><strong><AnimatedValue value={value} prefix={prefix} suffix={label === 'ROI Increase' ? '%' : ''} /></strong><span>{label}</span><em>{change}</em></div>)}<div className="performance-dashboard__tag"><small>Turn clicks into</small><strong>Customers</strong><i /></div></div>
    <div className="performance-dashboard__chart"><div className="performance-dashboard__bars">{bars.map((height, index) => <Motion.i key={index} initial={reduced ? false : { height: 0 }} animate={{ height: `${height}%` }} transition={{ duration: 2.2, delay: index * .08 }} />)}</div><svg viewBox="0 0 600 180" preserveAspectRatio="none" aria-hidden="true"><Motion.path initial={reduced ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.2, ease: 'easeInOut' }} d="M0 160 C70 142 100 105 160 120 S225 78 280 92 S350 40 405 63 S490 20 600 5" fill="none" stroke="#f6d77c" strokeWidth="4" /></svg><span>+22% ROI</span></div>
    <div className="performance-dashboard__cards">{[[1248, '', 'New Leads'], [6.8, '', 'Conversion Rate'], [34, '$', 'Cost per Lead']].map(([value, prefix, label]) => <div key={label}><b><AnimatedValue value={value} prefix={prefix} suffix={label === 'Conversion Rate' ? '%' : ''} decimals={value % 1 ? 1 : 0} /></b><span>{label}</span><em>↑ 28%</em></div>)}</div>
  </div>
}

const marketingCards = [
  ['ads', 'Facebook Ads', 'More People. More Results.', '428%', 'ROAS Increase'],
  ['search', 'Google SEO', 'Get Your Business to The Top.', '#1', 'Average Ranking'],
  ['users', 'Leads', 'Real People. Real Opportunities.', '12.4K', 'New Leads'],
  ['click', 'Clicks', 'More Traffic. More Potential.', '301K', 'Ad Clicks'],
  ['cart', 'Sales', 'Turn Interest Into Revenue.', '$287K', 'Revenue Generated'],
  ['users', 'Signups', 'Grow Your Audience Faster.', '8.1K', 'New Signups'],
]

function MarketingIcon({ type }) {
  const paths = { ads: 'M14 21V12h3l1-4h-4V6c0-2 2-2 4-2V1h-3c-4 0-5 2-5 5v2H7v4h3v9', search: 'M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14m5 12 6 6', users: 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M2 21v-3a7 7 0 0 1 14 0v3m1-17a4 4 0 0 1 0 8m2 3a5 5 0 0 1 3 5', click: 'M4 3l5 18 4-7 7-4Z m9 11 6 7', cart: 'M2 3h3l3 13h11l3-10H6M10 21h.01M18 21h.01' }
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[type]} /></svg>
}

function TrendIcon() {
  return <svg className="trend-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m4 17 6-6 4 4 6-10M14 5h6v6" /></svg>
}

function ConversionDashboard({ reduced }) {
  return <div className="conversion-dashboard" aria-label="Illustrative digital marketing performance">
    {marketingCards.map(([icon, title, subtitle, metric, label], index) => <Motion.article key={title} className="conversion-card" initial={reduced ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * .08, duration: .4 }}>
      <div className="conversion-card__header"><span className="conversion-card__icon"><MarketingIcon type={icon} /></span><div><h2>{title}</h2><p>{subtitle}</p></div><span className="conversion-card__dots" aria-hidden="true">···</span></div>
      <div className="conversion-card__result"><div><strong><AnimatedValue value={Number(metric.replace(/[^0-9.]/g, ''))} prefix={metric.startsWith('$') ? '$' : ''} suffix={metric.includes('%') ? '%' : metric.includes('K') ? 'K' : metric.includes('#') ? '' : ''} decimals={metric.includes('.') ? 1 : 0} /> <TrendIcon /></strong><p>{label}</p></div>
        {index % 3 === 0 || index === 5 ? <div className="conversion-bars" aria-hidden="true">{[20,32,44,59,73,94].map((height, bar) => <Motion.i key={height} style={{ height: `${height}%`, transformOrigin: 'bottom' }} initial={reduced ? false : { scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 2.2, delay: bar * .08, ease: 'easeInOut' }} />)}</div> : <svg viewBox="0 0 140 75" className="conversion-line" aria-hidden="true"><Motion.path initial={reduced ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.2, ease: 'easeInOut' }} d="M3 68C20 40 28 70 44 45S65 57 81 31 104 40 136 7" fill="none" stroke="#e7c573" strokeWidth="2.5" /><Motion.circle initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: reduced ? 0 : 2.2 }} cx="136" cy="7" r="3" fill="#ffe3a0" /></svg>}
      </div>
    </Motion.article>)}
    <span className="conversion-dashboard__caption">Illustrative performance</span>
  </div>
}

function SearchDashboard() {
  const reduced = useReducedMotion()
  return <div className="search-dashboard" aria-label="Illustrative search growth dashboard">
    <div className="search-dashboard__chrome" aria-hidden="true"><span>● ● ●</span><i /></div>
    <div className="search-dashboard__heading"><div><h2>Search Growth</h2><p>More visibility. More customers. More revenue.</p></div><span>Last 12 months</span></div>
    <div className="search-dashboard__metric"><span>Organic Traffic</span><strong>+<AnimatedValue value={278} suffix="%" /> <TrendIcon /></strong><small>vs. previous period · illustrative results</small></div>
    <svg className="search-dashboard__chart" viewBox="0 0 600 175" role="img" aria-label="Illustrative organic traffic growth chart">
      <defs><linearGradient id="search-area" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#eec862" stopOpacity=".5" /><stop offset="1" stopColor="#eec862" stopOpacity="0" /></linearGradient></defs>
      {[30,70,110,150].map(y=><path key={y} d={`M0 ${y}H600`} stroke="#ffffff12" />)}
      <defs><clipPath id="search-reveal"><Motion.rect x="0" y="0" height="155" initial={reduced ? false : { width: 0 }} animate={{ width: 600 }} transition={{ duration: 2.2, ease: 'easeInOut' }} /></clipPath></defs>
      <g clipPath="url(#search-reveal)">
        <path d="M10 143 60 140 110 128 160 116 210 112 260 90 310 105 360 70 410 72 460 40 510 54 560 22 590 10V155H10Z" fill="url(#search-area)" />
        <path d="M10 143 60 140 110 128 160 116 210 112 260 90 310 105 360 70 410 72 460 40 510 54 560 22 590 10" fill="none" stroke="#f6d77c" strokeWidth="3" strokeLinejoin="round" />
        {[[10,143],[60,140],[110,128],[160,116],[210,112],[260,90],[310,105],[360,70],[410,72],[460,40],[510,54],[560,22],[590,10]].map(([x,y]) => <circle key={x} cx={x} cy={y} r="3" fill="#ffe6a3" />)}
      </g>
      {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].map((m,i)=><text key={m} x={10+i*50} y="172" fill="#bfbba9" fontSize="10">{m}</text>)}
    </svg>
    <div className="search-dashboard__cards"><div><h3>▥ Keyword Rankings</h3>{[['#1','digital marketing agency'],['#3','seo services'],['#4','paid ads management'],['#6','grow my business']].map(([n,t])=><p key={n}><b>{n}</b><span>{t}</span></p>)}</div><div><h3>◎ Campaign Overview</h3>{[['Clicks','124K'],['Conversions','8.4K'],['Cost per Lead','₹412'],['Revenue','₹28.6L']].map(([t,n])=><p key={t}><span>{t}</span><strong>{n}</strong></p>)}</div><div className="search-dashboard__award"><span aria-hidden="true">☆</span><h3>Top of Google</h3><small>Real Businesses. Real Results.</small></div></div>
  </div>
}
