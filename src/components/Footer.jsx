import '@fontsource/inter/400.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/800.css'
import '@fontsource/inter/900.css'

const links = [['About', '/about-us'], ['Services', '/services'], ['Case Studies', '/testimonial'], ['Blog', '#'], ['FAQs', '/faqs'], ['Contact', '/contact-us']]
const socials = [['LinkedIn', 'https://linkedin.com'], ['Instagram', 'https://instagram.com'], ['YouTube', 'https://youtube.com'], ['X', 'https://x.com']]

function ContactIcon({ type }) { const paths = { pin: 'M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z M12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z', mail: 'M4 6h16v12H4z M4 7l8 6 8-6', phone: 'M7 3l3 2-2 3a14 14 0 0 0 8 8l3-2 2 3-2 3c-8 0-15-7-15-15l3-2Z' }; return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true"><path d={paths[type]} /></svg> }
function SocialIcon({ label }) {
  if (label === 'LinkedIn') return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.4 3a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2ZM3.6 9H7v12H3.6V9Zm5.6 0h3.3v1.6c.6-1.1 1.7-1.9 3.5-1.9 3.5 0 4.1 2.3 4.1 5.3v7h-3.5v-6.2c0-1.5 0-3.3-2-3.3s-2.1 1.6-2.1 3.2V21H9.2V9Z" /></svg>
  if (label === 'YouTube') return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.6.5a2.8 2.8 0 0 0-2 2C2 9 2 12 2 12s0 3 .4 4.8a2.8 2.8 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.8 2.8 0 0 0 2-2C22 15 22 12 22 12s0-3-.4-4.8Z" /><path fill="#f6f2e9" d="m10 8 6 4-6 4Z" /></svg>
  const paths = { LinkedIn: 'M6 9v9M6 6v.01M10 18v-5a3 3 0 0 1 6 0v5M10 9v9', Instagram: 'M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Z M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm5.5-.5h.01', YouTube: 'm10 8 6 4-6 4V8Zm11 4c0 4-1 5-5 5H8c-4 0-5-1-5-5s1-5 5-5h8c4 0 5 1 5 5Z', X: 'm5 4 14 16M19 4 5 20' }
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true"><path d={paths[label]} /></svg>
}


function Footer() {
  return (
    <footer className="compact-footer">
      <div className="compact-footer__upper">
        <div className="compact-footer__heading">
          <a href="/" aria-label="AdyGuru home"><img src="/AdyGuru%20Logo.webp" alt="AdyGuru" width="72" height="72" loading="lazy" /></a>
          <h2>Let’s build what’s next<span>.</span></h2>
        </div>
        <p className="compact-footer__description">Turn your ambition into measurable momentum with a strategy built around your goals.</p>
        <a className="compact-footer__cta" href="/contact-us">Book a Strategy Call
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M4 12h16m-7-7 7 7-7 7" /></svg>
        </a>
        <div className="compact-footer__links">
          <nav aria-label="Footer navigation">{links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</nav>
          <div className="compact-footer__socials">{socials.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}><SocialIcon label={label} /></a>)}</div>
        </div>
        <div className="compact-footer__contact">
          <div><ContactIcon type="pin" /><p>Pink City, Jaipur, India</p></div>
          <div><ContactIcon type="mail" /><a href="mailto:info@adyguru.com">info@adyguru.com</a></div>
          <div><ContactIcon type="phone" /><a href="tel:+918003850652">+91 80038 50652</a></div>
        </div>
        <svg className="compact-footer__curve" viewBox="0 0 1466 105" preserveAspectRatio="none" fill="none" aria-hidden="true">
          <path d="M-5 3Q733 203 1471 3V106H-5Z" fill="#fff" />
          <path d="M-5 3Q733 203 1471 3" stroke="#caa44f" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
      <svg className="compact-footer__wordmark" viewBox="-30 -35 1526 270" role="img" aria-label="ADYGURU">
        {[
          ['A', 107, 172, 230, 7],
          ['D', 316, 187, 190, 5],
          ['Y', 525, 191, 163, 3],
          ['G', 733, 194, 148, 0],
          ['U', 942, 191, 163, -3],
          ['R', 1150, 187, 190, -5],
          ['U', 1359, 172, 230, -7],
        ].map(([letter, x, y, size, angle]) => (
          <text key={x} x={x} y={y} textAnchor="middle" fontSize={size} transform={`rotate(${angle} ${x} ${y})`}>{letter}</text>
        ))}
      </svg>
      <style>{`
.compact-footer { background:#fff; color:#090909; overflow:hidden; font-family:Georgia,'Times New Roman',serif; }
.compact-footer__upper { position:relative; text-align:center; padding:18px 5vw 42px; background:#f0f0f0; }
.compact-footer__heading { display:flex; align-items:center; justify-content:center; gap:18px; }
.compact-footer__heading>a { flex-shrink:0; }
.compact-footer__heading img { width:clamp(48px,5vw,72px); height:auto; object-fit:contain; }
.compact-footer h2 { margin:0; font:400 clamp(32px,4.6vw,68px)/1.05 Georgia,'Times New Roman',serif; letter-spacing:-.04em; }
.compact-footer h2 span { color:#c4a056; }
.compact-footer__description { margin:6px auto 0; max-width:1000px; font-size:clamp(15px,1.5vw,22px); line-height:1.35; }
.compact-footer__cta { display:inline-flex; align-items:center; justify-content:center; gap:22px; margin-top:18px; padding:12px 32px; border-radius:999px; background:linear-gradient(115deg,#d7b973,#c5a052); color:#100e08; font-size:clamp(17px,1.5vw,22px); box-shadow:inset 0 1px 0 #fff6; }
.compact-footer__cta svg { width:24px; height:24px; flex-shrink:0; transition:transform .2s; }
.compact-footer__cta:hover svg { transform:translateX(4px); }
.compact-footer__links { display:flex; align-items:center; justify-content:center; gap:30px; margin:22px auto 0; position:relative; z-index:1; }
.compact-footer nav { display:flex; align-items:center; gap:clamp(18px,2.6vw,40px); }
.compact-footer nav a { text-transform:uppercase; font-size:clamp(13px,1.25vw,18px); white-space:nowrap; }
.compact-footer__socials { display:flex; align-items:center; gap:18px; border-left:1px solid #c7a04f; padding-left:30px; }
.compact-footer__socials a { display:grid; place-items:center; min-width:32px; min-height:40px; }
.compact-footer__socials svg { width:26px; height:26px; }
.compact-footer__contact { display:flex; justify-content:center; align-items:center; margin:20px auto 0; position:relative; z-index:1; }
.compact-footer__contact>div { display:flex; align-items:center; gap:16px; padding:6px 2.8vw; }
.compact-footer__contact>div+div { border-left:1px solid #c7a04f; }
.compact-footer__contact p { margin:0; }
.compact-footer__contact p,.compact-footer__contact a { font-size:clamp(14px,1.25vw,19px); white-space:nowrap; }
.compact-footer__contact svg { color:#c19b4c; width:26px; height:26px; flex-shrink:0; }
.compact-footer__curve { position:absolute; left:0; bottom:0; width:100%; height:95px; pointer-events:none; }
.compact-footer__wordmark { display:block; width:100%; height:auto; margin:0 auto; padding:0 1vw 14px; overflow:visible; font-family:Georgia,'Times New Roman',serif; font-weight:400; fill:#090909; }
.compact-footer__wordmark text { filter:drop-shadow(0 7px 5px rgb(0 0 0 / 18%)); }
.compact-footer a { text-decoration:none; transition:color .2s,box-shadow .2s; }
.compact-footer a:hover { color:#997123; }
.compact-footer__cta:hover { color:#090909; box-shadow:0 6px 20px #bf974c38; }
.compact-footer a:focus-visible { outline:2px solid #b88d36; outline-offset:5px; }
@media(max-width:1000px) {
.compact-footer__links { flex-wrap:wrap; gap:16px; }
.compact-footer nav { flex-wrap:wrap; justify-content:center; gap:12px 24px; }
.compact-footer__contact { flex-wrap:wrap; gap:12px; }
.compact-footer__contact>div { padding:5px 14px; gap:10px; }
.compact-footer__curve { height:55px; }
.compact-footer__wordmark { margin-top:0; }
}
@media(max-width:600px) {
.compact-footer__upper { padding:24px 5vw 36px; }
.compact-footer__heading { gap:10px; }
.compact-footer h2 { font-size:clamp(27px,6vw,36px); text-align:left; }
.compact-footer__description { margin-top:12px; }
.compact-footer__cta { padding:12px 22px; }
.compact-footer__socials { border-left:0; padding:0; gap:20px; }
.compact-footer__contact { flex-direction:column; gap:8px; margin-top:16px; }
.compact-footer__contact>div+div { border-left:0; }
.compact-footer__wordmark { margin-top:0; padding-bottom:12px; }
.compact-footer__curve { height:32px; }
}
@media(prefers-reduced-motion:reduce) { .compact-footer a,.compact-footer svg { transition:none; } }
`}</style>
    </footer>
  )
}

export default Footer
