import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import gsap from 'gsap'

export default function TeamShowcase({ members }) {
  const [active, setActive] = useState(0)
  const reducedMotion = useReducedMotion()
  const stack = useRef(null)
  const previous = useRef(0)

  useEffect(() => {
    if (reducedMotion) return
    const timer = window.setInterval(() => setActive(index => (index + 1) % members.length), 5000)
    return () => window.clearInterval(timer)
  }, [reducedMotion, members.length])

  useEffect(() => {
    const cards = Array.from(stack.current.children)
    const outgoing = previous.current
    const changed = outgoing !== active
    const timeline = gsap.timeline()
    cards.forEach((card, index) => {
      const slot = (index - active + members.length) % members.length
      const position = {
        xPercent: Math.min(slot, 3) * 7,
        yPercent: -Math.min(slot, 3) * 7,
        z: -slot * 65,
        rotation: slot === 0 ? -3 : slot * 2,
        opacity: slot < 4 ? 1 : 0,
      }
      if (reducedMotion || !changed) {
        gsap.set(card, { ...position, zIndex: members.length - slot })
      } else if (index === outgoing) {
        timeline.to(card, { yPercent: 95, opacity: 0, duration: .45, ease: 'power2.in' }, 0)
        timeline.set(card, { zIndex: members.length - slot }, .45)
        timeline.to(card, { ...position, duration: 1.2, ease: 'elastic.out(0.6,0.9)' }, .45)
      } else {
        timeline.set(card, { zIndex: members.length - slot }, .3)
        timeline.to(card, { ...position, duration: 1.2, ease: 'elastic.out(0.6,0.9)' }, .3)
      }
    })
    previous.current = active
    return () => timeline.kill()
  }, [active, members.length, reducedMotion])

  return (
    <div className="team-showcase">
      <div className="team-showcase__roster">
        <p className="team-showcase__intro">The minds, creativity and expertise behind your next stage of growth.</p>
        <div className="team-showcase__names" aria-label="Choose a team member">
          {members.map(([name, role], index) => (
            <button key={name} type="button" aria-pressed={active === index} onClick={() => setActive(index)} className="team-showcase__member">
              <span className="team-showcase__number">0{index + 1}</span>
              <span><strong>{name}</strong><small>{role}</small></span>
            </button>
          ))}
        </div>
      </div>
      <div className="team-showcase__stage">
        <div className="team-showcase__halo" aria-hidden="true" />
        <div ref={stack} className="team-showcase__stack">
          {members.map(([name, role, file], index) => (
            <article className="team-showcase__card" key={name} aria-hidden={active !== index}>
              <div className="team-showcase__card-top"><span>ADYGURU / THE TEAM</span><span>0{index + 1}</span></div>
              <div className="team-showcase__portrait"><span aria-hidden="true">AG</span><img src={'/team' + file + '.webp'} alt={name} loading="lazy" /></div>
              <div className="team-showcase__caption"><div><h3>{name}</h3><p>{role}</p></div></div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
