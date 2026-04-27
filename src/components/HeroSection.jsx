import { motion } from 'framer-motion'
import BlurText from './BlurText'
import CartoonFace from './CartoonFace'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20, filter: 'blur(8px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 0.65, ease: 'easeOut', delay },
})

export default function HeroSection() {
  return (
    <section style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '130px 64px 80px', maxWidth: 1200, margin: '0 auto',
      position: 'relative',
    }}>
      {/* Left column */}
      <div style={{ maxWidth: 560, flex: '1 1 auto' }}>

        {/* Badge */}
        <motion.div {...fadeUp(0.3)} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28 }}>
          <div className="liquid-glass" style={{ borderRadius: 999, padding: '8px 16px', display: 'inline-flex', alignItems: 'center', gap: 10 }}>
            <span style={{ background: '#fff', color: '#000', borderRadius: 999, padding: '3px 10px', fontSize: 12, fontWeight: 600 }}>Open</span>
            <span style={{ fontSize: 13, opacity: 0.68 }}>Available for new projects in 2026</span>
          </div>
        </motion.div>

        {/* Label */}
        <motion.div {...fadeUp(0.25)} style={{ marginBottom: 18 }}>
          <p style={{ fontSize: 11, letterSpacing: 4, color: 'rgba(255,255,255,0.38)', textTransform: 'uppercase', lineHeight: 1.8 }}>Creator driven by</p>
          <p style={{ fontSize: 11, letterSpacing: 4, color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase' }}>Striking and unforgettable projects</p>
        </motion.div>

        {/* Headline */}
        <BlurText text="Hi, I'm Edwin." style={{
          fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
          fontSize: 'clamp(3.8rem, 7.5vw, 6rem)', letterSpacing: '-3px', lineHeight: 0.88,
          marginBottom: 20,
        }} />

        {/* Sub-headline */}
        <motion.p {...fadeUp(0.7)} style={{
          fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
          fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
          color: 'rgba(255,255,255,0.38)', marginBottom: 20,
        }}>
          Designer &amp; Creative Technologist
        </motion.p>

        {/* Body */}
        <motion.p {...fadeUp(0.82)} style={{
          fontWeight: 300, fontSize: 15,
          color: 'rgba(255,255,255,0.6)', maxWidth: 400, lineHeight: 1.65, marginBottom: 32,
        }}>
          I design premium digital experiences — from Figma to live sites, with AI at the core.{' '}
          <span style={{ opacity: 0.45 }}>Figma · Framer · Lovable · Claude.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.98)} style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 40 }}>
          <a href="#" className="liquid-glass-strong" style={{
            borderRadius: 999, padding: '13px 26px',
            display: 'inline-flex', alignItems: 'center', gap: 8,
            color: '#fff', textDecoration: 'none',
            fontFamily: "'Barlow', sans-serif", fontWeight: 500, fontSize: 14,
          }}>
            View My Work
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
            </svg>
          </a>
          <a href="#" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            color: 'rgba(255,255,255,0.72)', textDecoration: 'none',
            fontFamily: "'Barlow', sans-serif", fontWeight: 400, fontSize: 14,
          }}>
            Watch Reel
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
          </a>
        </motion.div>

        {/* Tools bar */}
        <motion.div {...fadeUp(1.2)} style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <span className="liquid-glass" style={{ borderRadius: 999, padding: '7px 14px', fontSize: 12, fontWeight: 500, opacity: 0.7 }}>Tools I ship with</span>
          {['Figma','Framer','Claude','Lovable','Webflow'].map(t => (
            <span key={t} style={{
              fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
              fontSize: 22, color: 'rgba(255,255,255,0.65)',
            }}>{t}</span>
          ))}
        </motion.div>
      </div>

      {/* Right column */}
      <div style={{ flex: '0 0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', marginLeft: 40 }}>
        <div style={{
          position: 'absolute', width: 380, height: 380, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200,120,60,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.18 }}
        >
          <CartoonFace />
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 220,
        background: 'linear-gradient(to top, #000 0%, transparent 100%)',
        pointerEvents: 'none',
      }} />
    </section>
  )
}
