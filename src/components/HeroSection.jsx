import { motion } from 'framer-motion'
import BlurText from './BlurText'
import CartoonFace from './CartoonFace'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20, filter: 'blur(8px)' },
  animate: { opacity: 1, y: 0,  filter: 'blur(0px)' },
  transition: { duration: 0.65, ease: 'easeOut', delay },
})

export default function HeroSection() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      padding: '110px 64px 60px',
      maxWidth: 1200, margin: '0 auto',
      position: 'relative',
    }}>
      {/* Violet background glows */}
      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
      }}>
        <div style={{
          position: 'absolute',
          background: 'radial-gradient(ellipse 600px 500px at 70% 50%, rgba(124,58,237,0.08) 0%, transparent 70%)',
          inset: 0,
        }} />
        <div style={{
          position: 'absolute',
          background: 'radial-gradient(ellipse 400px 400px at 15% 60%, rgba(79,70,229,0.05) 0%, transparent 70%)',
          inset: 0,
        }} />
      </div>

      {/* Left column */}
      <div style={{ maxWidth: 580, flex: '1 1 auto', position: 'relative', zIndex: 1 }}>

        {/* Badge */}
        <motion.div {...fadeUp(0.3)} style={{ marginBottom: 28 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: 'var(--surface-1)', border: '1px solid var(--border-1)',
            borderRadius: 999, padding: '8px 16px',
          }}>
            <span style={{
              background: 'var(--accent)', color: '#fff',
              borderRadius: 999, padding: '3px 10px', fontSize: 12, fontWeight: 600,
            }}>Open</span>
            <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>Available for new projects in 2026</span>
          </div>
        </motion.div>

        {/* Kicker */}
        <motion.div {...fadeUp(0.25)} style={{ marginBottom: 16 }}>
          <p className="kicker" style={{ lineHeight: 1.9 }}>Creator driven by</p>
          <p className="kicker" style={{ color: 'rgba(255,255,255,0.5)' }}>Striking and unforgettable projects</p>
        </motion.div>

        {/* Headline */}
        <BlurText text="Hi, I'm Edwin." style={{
          fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
          fontSize: 'clamp(5rem, 9vw, 7.5rem)',
          letterSpacing: '-4px', lineHeight: 0.88,
          marginBottom: 18,
        }} />

        {/* Sub-headline */}
        <motion.p {...fadeUp(0.7)} style={{
          fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
          fontSize: 'clamp(1.4rem, 2.8vw, 2rem)',
          color: 'rgba(255,255,255,0.28)', marginBottom: 20,
        }}>
          Designer &amp; Creative Technologist
        </motion.p>

        {/* Body */}
        <motion.p {...fadeUp(0.82)} style={{
          fontWeight: 300, fontSize: 16, lineHeight: 1.8,
          color: 'var(--text-secondary)', maxWidth: 420, marginBottom: 32,
        }}>
          I design premium digital experiences — from Figma to live sites, with AI at the core.{' '}
          <span style={{ color: 'var(--text-muted)' }}>Figma · Framer · Lovable · Claude.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.98)} style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 36 }}>
          <a href="#" className="liquid-glass-strong" style={{
            borderRadius: 999, padding: '13px 26px',
            display: 'inline-flex', alignItems: 'center', gap: 8,
            color: '#fff', textDecoration: 'none',
            fontFamily: "'Barlow', sans-serif", fontWeight: 500, fontSize: 14,
            transition: 'transform 0.15s ease',
          }}
          onMouseEnter={e => e.currentTarget.style.transform='scale(1.03)'}
          onMouseLeave={e => e.currentTarget.style.transform='scale(1)'}>
            View My Work
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
            </svg>
          </a>
          <a href="#" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            color: 'rgba(255,255,255,0.6)', textDecoration: 'none',
            fontFamily: "'Barlow', sans-serif", fontWeight: 400, fontSize: 14,
          }}>
            Watch Reel
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </a>
        </motion.div>

        {/* Tools bar */}
        <motion.div {...fadeUp(1.2)} style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <span style={{
            background: 'var(--surface-1)', border: '1px solid var(--border-1)',
            borderRadius: 999, padding: '7px 14px',
            fontSize: 12, fontWeight: 500, color: 'var(--text-muted)',
          }}>Tools I ship with</span>
          {['Figma','Framer','Claude','Lovable','Webflow'].map((t, i, arr) => (
            <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 16 }}>
              <span style={{
                fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
                fontSize: 26, color: 'rgba(255,255,255,0.65)',
              }}>{t}</span>
              {i < arr.length - 1 && (
                <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 18 }}>·</span>
              )}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Right column — 3D face */}
      <div style={{
        flex: '0 0 auto', display: 'flex',
        justifyContent: 'center', alignItems: 'center',
        position: 'relative', marginLeft: 32, zIndex: 1,
      }}>
        {/* Violet glow orb behind face */}
        <div style={{
          position: 'absolute', width: 460, height: 460, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22,1,0.36,1], delay: 0.18 }}
        >
          <CartoonFace />
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 180,
        background: 'linear-gradient(to top, var(--bg-base) 0%, transparent 100%)',
        pointerEvents: 'none',
      }} />
    </section>
  )
}
