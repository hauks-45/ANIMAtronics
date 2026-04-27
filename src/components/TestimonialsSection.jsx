import { motion } from 'framer-motion'
import BlurText from './BlurText'

const testimonials = [
  {
    quote: "A complete rebuild in five days. The result outperformed everything we'd spent months building before.",
    name: 'Sarah Chen', role: 'CEO, Luminary',
  },
  {
    quote: "Conversions up 4x. That's not a typo. The design just works differently when it's built on real data.",
    name: 'Marcus Webb', role: 'Head of Growth, Arcline',
  },
  {
    quote: "They didn't just design our site. They defined our brand. World-class doesn't begin to cover it.",
    name: 'Elena Voss', role: 'Brand Director, Helix',
  },
]

export default function TestimonialsSection() {
  return (
    <section style={{ background: 'var(--bg-base)', padding: '100px 64px' }}>
      <div style={{ textAlign:'center', marginBottom:64 }}>
        <motion.div
          initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }}
          viewport={{ once:true }} transition={{ duration:0.5 }}
          style={{ display:'flex', justifyContent:'center', marginBottom:24 }}
        >
          <span className="kicker" style={{
            background:'var(--surface-1)', border:'1px solid var(--border-1)',
            borderRadius:999, padding:'8px 20px',
          }}>What They Say</span>
        </motion.div>
        <BlurText text="Don't take our word for it." style={{
          fontFamily:"'Instrument Serif',serif", fontStyle:'italic',
          fontSize:'clamp(3rem,5.5vw,5rem)', letterSpacing:'-2.5px',
          justifyContent:'center',
        }} />
      </div>

      <div style={{
        maxWidth:1100, margin:'0 auto',
        display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24,
      }}>
        {testimonials.map((t,i) => (
          <motion.div
            key={i}
            className="bento-card"
            initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            transition={{ duration:0.55, delay: i * 0.14 }}
            style={{
              padding:34,
              borderLeft:'2px solid rgba(124,58,237,0.4)',
            }}
          >
            {/* Decorative quote mark */}
            <div style={{
              fontFamily:"'Instrument Serif',serif", fontSize:48,
              color:'rgba(124,58,237,0.3)', lineHeight:1, marginBottom:8,
            }}>“</div>
            <p style={{
              fontWeight:300, fontSize:14, fontStyle:'italic',
              color:'rgba(255,255,255,0.78)', lineHeight:1.75, marginBottom:24,
            }}>{t.quote}</p>
            <p style={{ fontWeight:500, fontSize:14, color:'#fff', marginBottom:4 }}>{t.name}</p>
            <p style={{ fontWeight:300, fontSize:12, color:'var(--text-muted)' }}>{t.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
