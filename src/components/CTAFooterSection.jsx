import { motion } from 'framer-motion'
import BlurText from './BlurText'
import HLSVideo from './HLSVideo'

export default function CTAFooterSection() {
  return (
    <section className="video-section" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <HLSVideo src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8" />
      <div className="video-fade-top" />
      <div className="video-fade-bottom" />

      <div className="video-content" style={{ textAlign: 'center', maxWidth: 760, padding: '0 32px' }}>
        <BlurText text="Your next website starts here." style={{
          fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
          fontSize: 'clamp(3.5rem, 7vw, 6rem)', letterSpacing: '-2.5px',
          justifyContent: 'center', marginBottom: 24,
        }} />

        <motion.p
          initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.55, delay:0.2 }}
          style={{
            fontWeight:300, fontSize:16, lineHeight:1.8,
            color:'var(--text-secondary)', marginBottom:40,
          }}
        >
          Book a free strategy call. See what AI-powered design can do.
          No commitment, no pressure. Just possibilities.
        </motion.p>

        <motion.div
          initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.55, delay:0.35 }}
          style={{ display:'flex', justifyContent:'center', gap:16, flexWrap:'wrap' }}
        >
          <a href="#" className="btn-violet" style={{ padding:'14px 30px', fontSize:14 }}>
            Book a Call
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
            </svg>
          </a>
          <a href="#" style={{
            borderRadius:999, padding:'14px 30px',
            background:'#fff', color:'#000', textDecoration:'none',
            fontFamily:"'Barlow',sans-serif", fontWeight:500, fontSize:14,
            display:'inline-flex', alignItems:'center',
            transition:'transform 0.15s ease',
          }}
          onMouseEnter={e=>e.currentTarget.style.transform='scale(1.03)'}
          onMouseLeave={e=>e.currentTarget.style.transform='scale(1)'}>
            View Pricing
          </a>
        </motion.div>
      </div>

      {/* Footer bar */}
      <div className="video-content" style={{
        marginTop:128, width:'100%', maxWidth:1200, padding:'24px 64px',
        borderTop:'1px solid rgba(255,255,255,0.08)',
        display:'flex', justifyContent:'space-between', alignItems:'center',
        flexWrap:'wrap', gap:12,
      }}>
        <p style={{ fontSize:12, color:'var(--text-muted)' }}>© 2026 Edwin Alex. All rights reserved.</p>
        <div style={{ display:'flex', gap:32 }}>
          {['Privacy','Terms','Contact'].map(l => (
            <a key={l} href="#"
              style={{
                fontSize:12, color:'var(--text-muted)',
                textDecoration:'none', fontFamily:"'Barlow',sans-serif",
                transition:'color 0.2s ease',
              }}
              onMouseEnter={e=>e.target.style.color='rgba(255,255,255,0.7)'}
              onMouseLeave={e=>e.target.style.color='var(--text-muted)'}
            >{l}</a>
          ))}
        </div>
      </div>
    </section>
  )
}
