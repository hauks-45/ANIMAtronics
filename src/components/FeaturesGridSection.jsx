import { motion } from 'framer-motion'
import BlurText from './BlurText'

const cards = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
    title: 'Days, Not Months',
    body: "Concept to launch at a pace that redefines fast. Because waiting isn't a strategy.",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r="2.5"/><circle cx="19" cy="17" r="2.5"/><circle cx="6.5" cy="17" r="2.5"/><line x1="13.5" y1="9" x2="13.5" y2="14.5"/><line x1="11.3" y1="7.6" x2="8.2" y2="15.4"/><line x1="15.7" y1="7.6" x2="18" y2="14.8"/></svg>,
    title: 'Obsessively Crafted',
    body: 'Every detail considered. Every element refined. Design so precise, it feels inevitable.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
    title: 'Built to Convert',
    body: 'Layouts informed by data. Decisions backed by performance. Results you can measure.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: 'Secure by Default',
    body: 'Enterprise-grade protection comes standard. SSL, DDoS mitigation, compliance. All included.',
  },
]

export default function FeaturesGridSection() {
  return (
    <section style={{ background: '#000', padding: '100px 64px' }}>
      <div style={{ textAlign: 'center', marginBottom: 64 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}
        >
          <span className="liquid-glass" style={{ borderRadius: 999, padding: '8px 20px', fontSize: 13, fontWeight: 500 }}>Why Us</span>
        </motion.div>
        <BlurText text="The difference is everything." style={{
          fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
          fontSize: 'clamp(2.4rem, 5vw, 4rem)', letterSpacing: '-2px',
          justifyContent: 'center',
        }} />
      </div>

      <div style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24,
      }}>
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="liquid-glass"
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.1 }}
            style={{ borderRadius: 22, padding: 28 }}
          >
            <div className="liquid-glass-strong" style={{
              width: 46, height: 46, borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 20,
            }}>
              {card.icon}
            </div>
            <h4 style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: 15, marginBottom: 10, color: '#fff' }}>{card.title}</h4>
            <p style={{ fontWeight: 300, fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.65 }}>{card.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
