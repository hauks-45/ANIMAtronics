import { motion } from 'framer-motion'
import HLSVideo from './HLSVideo'

const stats = [
  { value: '200+',   label: 'Sites launched' },
  { value: '98%',    label: 'Client satisfaction' },
  { value: '3.2x',   label: 'More conversions' },
  { value: '5 days', label: 'Average delivery' },
]

export default function StatsSection() {
  return (
    <section className="video-section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <HLSVideo src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8" grayscale={true} />
      <div className="video-fade-top" style={{ height: 200 }} />
      <div className="video-fade-bottom" style={{ height: 200 }} />

      <motion.div
        className="liquid-glass video-content"
        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.65 }}
        style={{
          borderRadius: 30, padding: '52px 72px',
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 48, textAlign: 'center',
        }}
      >
        {stats.map((s, i) => (
          <div key={i}>
            <div style={{
              fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
              fontSize: 'clamp(2.5rem, 4.5vw, 3.8rem)',
              letterSpacing: '-2px', lineHeight: 1, marginBottom: 10,
            }}>{s.value}</div>
            <div style={{ fontWeight: 300, fontSize: 13, color: 'rgba(255,255,255,0.52)' }}>{s.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
