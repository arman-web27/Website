import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const spring = { damping: 30, stiffness: 100, mass: 2 }

export default function TiltedCard({ imageSrc, altText, children }) {
  const ref = useRef(null)
  const rotateX = useSpring(0, spring)
  const rotateY = useSpring(0, spring)
  const scale = useSpring(1, spring)
  const glowX = useMotionValue('50%')
  const glowY = useMotionValue('50%')
  const move = (event) => { if (!ref.current) return; const rect = ref.current.getBoundingClientRect(); const point = event.touches?.[0] || event; const x = point.clientX - rect.left; const y = point.clientY - rect.top; rotateX.set(((y / rect.height) - .5) * -12); rotateY.set(((x / rect.width) - .5) * 14); glowX.set(`${x}px`); glowY.set(`${y}px`) }
  const reset = () => { rotateX.set(0); rotateY.set(0); scale.set(1) }
  return <article ref={ref} className="tilted-card" onPointerMove={move} onPointerEnter={() => scale.set(1.05)} onPointerLeave={reset} onTouchMove={move} onTouchEnd={reset}><motion.div className="tilted-card__surface" style={{ rotateX, rotateY, scale, '--glow-x': glowX, '--glow-y': glowY }}><img src={imageSrc} alt={altText} className="tilted-card__avatar" /><div className="tilted-card__content">{children}</div></motion.div></article>
}
