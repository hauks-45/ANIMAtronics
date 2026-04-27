import { motion } from 'framer-motion'
import BlurText from './BlurText'
import HLSVideo from './HLSVideo'

export default function HowItWorksSection() {
  return (
    <section className="video-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <HLSVideo src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8" />
      <div className="video-fade-top" />
      <div className="video-fade-bottom" />

      {/* Frosted content card */}
      <motion.div
        className="video-content"
        initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true }} transition={{ duration: 0.65 }}
        style={{
          background: 'rgba(0,0,0,0.45)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: 24,
          padding: '56px 64px',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          textAlign: 'center', maxWidth: 760,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
          <span style={{
            background: 'var(--surface-2)', border: '1px solid var(--border-1)',
            borderRadius: 999, padding: '8px 20px',
            fontSize: 13, fontWeight: 500, color: 'var(--text-secondary)',
          }}>How It Works</span>
        </div>

        <BlurText text="You dream it. We ship it." style={{
          fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
          fontSize: 'clamp(2.8rem, 6vw, 5rem)', letterSpacing: '-2px',
          justifyContent: 'center', marginBottom: 24,
        }} />

        <p style={{
          fontWeight: 300, fontSize: 16, lineHeight: 1.8,
          color: 'var(--text-secondary)', marginBottom: 36,
        }}>
          Share your vision. Our AI handles the rest — wireframes, design, code, launch. All in days, not quarters.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <a href="#" className="btn-violet">
            Get Started
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  )
}
