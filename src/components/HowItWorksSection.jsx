import { motion } from 'framer-motion'
import BlurText from './BlurText'
import HLSVideo from './HLSVideo'

export default function HowItWorksSection() {
  return (
    <section className="video-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <HLSVideo src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8" />
      <div className="video-fade-top" />
      <div className="video-fade-bottom" />

      <div className="video-content" style={{ textAlign: 'center', maxWidth: 760, padding: '0 32px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.55 }}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}
        >
          <span className="liquid-glass" style={{ borderRadius: 999, padding: '8px 20px', fontSize: 13, fontWeight: 500 }}>How It Works</span>
        </motion.div>

        <BlurText text="You dream it. We ship it." style={{
          fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
          fontSize: 'clamp(2.8rem, 6vw, 5rem)', letterSpacing: '-2px',
          justifyContent: 'center', marginBottom: 24,
        }} />

        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.2 }}
          style={{ fontWeight: 300, fontSize: 16, color: 'rgba(255,255,255,0.58)', lineHeight: 1.7, marginBottom: 36 }}
        >
          Share your vision. Our AI handles the rest — wireframes, design, code, launch. All in days, not quarters.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.35 }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <a href="#" className="liquid-glass-strong" style={{
            borderRadius: 999, padding: '14px 30px',
            display: 'inline-flex', alignItems: 'center', gap: 8,
            color: '#fff', textDecoration: 'none',
            fontFamily: "'Barlow', sans-serif", fontWeight: 500, fontSize: 14,
          }}>
            Get Started
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
