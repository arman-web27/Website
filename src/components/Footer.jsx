import '@fontsource/inter/400.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/800.css'
import '@fontsource/inter/900.css'

const links = [['About', '/about-us'], ['Services', '/services'], ['Case Studies', '/testimonial'], ['Blog', '#'], ['FAQs', '/faqs'], ['Contact', '/contact-us']]
const socials = [['LinkedIn', 'https://linkedin.com'], ['Instagram', 'https://instagram.com'], ['YouTube', 'https://youtube.com'], ['X', 'https://x.com']]

function ContactIcon({ type }) { const paths = { pin: 'M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z M12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z', mail: 'M4 6h16v12H4z M4 7l8 6 8-6', phone: 'M7 3l3 2-2 3a14 14 0 0 0 8 8l3-2 2 3-2 3c-8 0-15-7-15-15l3-2Z' }; return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true"><path d={paths[type]} /></svg> }
function SocialIcon({ label }) {
  if (label === 'LinkedIn') return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.4 3a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2ZM3.6 9H7v12H3.6V9Zm5.6 0h3.3v1.6c.6-1.1 1.7-1.9 3.5-1.9 3.5 0 4.1 2.3 4.1 5.3v7h-3.5v-6.2c0-1.5 0-3.3-2-3.3s-2.1 1.6-2.1 3.2V21H9.2V9Z" /></svg>
  if (label === 'YouTube') return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="4" fill="currentColor" /><path d="m10 8.5 6 3.5-6 3.5v-7Z" fill="#11100f" /></svg>
  const paths = { LinkedIn: 'M6 9v9M6 6v.01M10 18v-5a3 3 0 0 1 6 0v5M10 9v9', Instagram: 'M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Z M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm5.5-.5h.01', YouTube: 'm10 8 6 4-6 4V8Zm11 4c0 4-1 5-5 5H8c-4 0-5-1-5-5s1-5 5-5h8c4 0 5 1 5 5Z', X: 'm5 4 14 16M19 4 5 20' }
  if (label === 'X') return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 4 19 20M19 4 5 20" /></svg>
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true"><path d={paths[label]} /></svg>
}


function Footer() {
  return (
    <>
    <footer className="compact-footer">
      <div className="compact-footer__upper">
        <div className="compact-footer__heading">
          <a href="/" aria-label="AdyGuru home"><img src="/AdyGuru%20Logo.png" alt="AdyGuru" width="72" height="72" loading="lazy" /></a>
          <h2 className="section-heading">Let’s build what’s next<span>.</span></h2>
        </div>
        <p className="compact-footer__description section-subheading">Turn your ambition into measurable momentum with a strategy built around your goals.</p>
        <div className="compact-footer__links">
          <nav aria-label="Footer navigation">{links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</nav>
          <div className="compact-footer__socials">{socials.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}><SocialIcon label={label} /></a>)}</div>
        </div>
        <div className="compact-footer__contact">
          <div><ContactIcon type="pin" /><p>Pink City, Jaipur, India</p></div>
          <div><ContactIcon type="mail" /><a href="mailto:info@adyguru.com">info@adyguru.com</a></div>
          <div><ContactIcon type="phone" /><a href="tel:+918003850652">+91 80038 50652</a></div>
        </div>
      </div>
      <div className="compact-footer__copyright">
        Copyright © 2026 AdyGuru Private Limited <span>|</span> Privacy Policy <span>|</span> Terms and Conditions
      </div>
      <style>{`
.compact-footer { --footer-border:1px solid #d4af5740; background:#11100f; color:#fff; overflow:hidden; font-family:Inter,Arial,sans-serif; }
.compact-footer__upper { position:relative; text-align:center; padding:34px 5vw 42px; background:radial-gradient(circle at 50% 30%,#2a2418 0%,#171513 28%,#11100f 64%); }
.compact-footer__heading { display:flex; align-items:center; justify-content:center; gap:18px; }
.compact-footer__heading>a { flex-shrink:0; }
.compact-footer__heading img { width:clamp(68px,7vw,96px); height:clamp(68px,7vw,96px); object-fit:contain; border:0; padding:0; filter:brightness(0) invert(1); }
.compact-footer h2 { margin:0; font-weight:800; letter-spacing:-.055em; }
.compact-footer .section-heading { max-width:none; font-size:clamp(2.25rem,4.2vw,4.5rem); line-height:1.04; }
.compact-footer h2 span { color:#d8ad3b; }
.compact-footer__description { margin:6px auto 0; max-width:1000px; font-size:clamp(15px,1.5vw,22px); line-height:1.35; }
.compact-footer .section-subheading { margin:16px auto 0; max-width:1000px; color:#f2f2f2; font-size:clamp(1rem,1.25vw,1.2rem); line-height:1.6; }
.compact-footer__cta { display:inline-flex; align-items:center; justify-content:center; gap:22px; margin-top:18px; padding:12px 32px; border-radius:999px; background:linear-gradient(115deg,#d7b973,#c5a052); color:#100e08; font-size:clamp(17px,1.5vw,22px); box-shadow:inset 0 1px 0 #fff6; }
.compact-footer__cta svg { width:24px; height:24px; flex-shrink:0; transition:transform .2s; }
.compact-footer__cta:hover svg { transform:translateX(4px); }
.compact-footer__links { display:flex; align-items:center; justify-content:center; gap:28px; margin:42px auto 0; position:relative; z-index:1; }
.compact-footer nav { display:flex; align-items:center; gap:0; padding:0 24px; border:var(--footer-border); border-radius:999px; box-shadow:none; }
.compact-footer nav a { text-transform:uppercase; font-size:clamp(13px,1.25vw,18px); white-space:nowrap; }
.compact-footer nav a + a { border-left:var(--footer-border); margin-left:clamp(16px,2.3vw,34px); padding-left:clamp(16px,2.3vw,34px); }
.compact-footer__socials { display:flex; align-items:center; gap:18px; border-left:var(--footer-border); padding-left:30px; }
.compact-footer__socials a { display:grid; place-items:center; min-width:32px; min-height:40px; }
.compact-footer__socials svg { width:26px; height:26px; }
.compact-footer__contact { display:flex; justify-content:center; align-items:center; margin:36px auto 0; padding-top:28px; border-top:var(--footer-border); position:relative; z-index:1; }
.compact-footer__contact>div { display:flex; align-items:center; gap:16px; padding:6px 2.8vw; }
.compact-footer__contact>div+div { border-left:var(--footer-border); }
.compact-footer__contact p { margin:0; }
.compact-footer__contact p,.compact-footer__contact a { font-size:clamp(14px,1.25vw,19px); white-space:nowrap; }
.compact-footer__contact svg { color:#e0b83f; width:26px; height:26px; flex-shrink:0; }
.compact-footer__copyright { padding:18px 5vw 22px; border-top:var(--footer-border); color:#aaa49a; text-align:center; font-size:clamp(11px,1vw,14px); line-height:1.5; }
.compact-footer__copyright span { margin:0 10px; color:#b78b2d; }
.compact-footer a { text-decoration:none; transition:color .2s,box-shadow .2s; }
.compact-footer a:hover { color:#997123; }
.compact-footer__cta:hover { color:#090909; box-shadow:0 6px 20px #bf974c38; }
.compact-footer a:focus-visible { outline:2px solid #b88d36; outline-offset:5px; }
@media(max-width:1000px) {
.compact-footer__links { flex-wrap:wrap; gap:16px; }
.compact-footer nav { flex-wrap:wrap; justify-content:center; gap:12px 24px; }
.compact-footer__contact { flex-wrap:wrap; gap:12px; }
.compact-footer__contact>div { padding:5px 14px; gap:10px; }
}
@media(max-width:600px) {
.compact-footer__upper { padding:24px 5vw 36px; }
.compact-footer__heading { gap:10px; }
.compact-footer h2 { font-size:clamp(27px,6vw,36px); text-align:left; }
.compact-footer__description { margin-top:12px; }
.compact-footer__cta { padding:12px 22px; }
.compact-footer__socials { border-left:0; padding:0; gap:20px; }
.compact-footer nav { padding:12px 16px; border-radius:22px; }
.compact-footer nav a + a { margin-left:10px; padding-left:10px; }
.compact-footer__contact { flex-direction:column; gap:8px; margin-top:16px; }
.compact-footer__contact>div+div { border-left:0; }
.compact-footer__copyright { padding-top:16px; font-size:11px; }
.compact-footer__copyright span { margin:0 5px; }
}
@media(prefers-reduced-motion:reduce) { .compact-footer a,.compact-footer svg { transition:none; } }
`}</style>
    </footer>
    <a className="whatsapp-float" href="https://chat.whatsapp.com/J4xvJNgZOhEJJlD48gAODT" target="_blank" rel="noreferrer" aria-label="Join AdyGuru on WhatsApp">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.2 1.7 6L.2 24l6.4-1.7a11.8 11.8 0 0 0 5.5 1.4h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.3-6.2-3.5-8.4ZM12.2 21.6h-.1c-1.7 0-3.4-.5-4.8-1.3l-.3-.2-3.8 1 1-3.7-.2-.3a9.7 9.7 0 0 1-1.5-5.2c0-5.4 4.4-9.8 9.8-9.8 2.6 0 5.1 1 6.9 2.9a9.7 9.7 0 0 1 2.9 6.9c0 5.4-4.4 9.7-9.9 9.7Zm5.4-7.3c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.6-1.8-1.8-2.1-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.4.3-.6.1-.2 0-.5 0-.7-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.6s1.1 3 1.2 3.2c.2.2 2.2 3.4 5.3 4.7.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.1-1.4-.1-.1-.3-.2-.6-.3Z" /></svg>
    </a>
    </>
  )
}

export default Footer
