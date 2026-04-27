import { motion } from 'framer-motion'
import BlurText from './BlurText'

const testimonials = [
  {
    quote: "A complete rebuild in five days. The result outperformed everything we'd spent months building before.",
    name: 'Sarah Chen',
    role: 'CEO, Luminary',
  },
  {
    quote: "Conversions up 4x. That's not a typo. The design just works differently when it's built on real data.",
    name: 'Marcus Webb',
    role: 'Head of Growth, Arcline',
  },
  {
    quote: "They didn't just design our site. They defined our brand. World-class doesn't begin to cover it.",
    name: 'Elena Voss',
    role: 'Brand Director, Helix',
  },
]

export default function TestimonialsSection() {
  return (
    <section style={{ background: '#000', padding: '100px 64px' }}>
      <div style={{ textAlign: 'center', marginBottom: 64 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}
        >
          <span className="liquid-glass" style={{ borderRadius: 999, padding: '8px 20px', fontSize: 13, fontWeight: 500 }}>What They Say</span>
        </motion.div>
        <BlurText text="Don't take our word for it." style={{
          fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
          fontSize: 'clamp(2.4rem, 5vw, 4rem)', letterSpacing: '-2px',
          justifyContent: 'center',
        }} />
      </div>

      <div style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24,
      }}>
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="liquid-glass"
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.14 }}
            style={{ borderRadius: 22, padding: 34 }}
          >
            <p style={{ fontWeight: 300, fontSize: 14, fontStyle: 'italic', color: 'rgba(255,255,255,0.78)', lineHeight: 1.7, marginBottom: 24 }}>
              “{t.quote}”
            </p>
            <p style={{ fontWeight: 500, fontSize: 14, color: '#fff', marginBottom: 4 }}>{t.name}</p>
            <p style={{ fontWeight: 300, fontSize: 12, color: 'rgba(255,255,255,0.42)' }}>{t.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
