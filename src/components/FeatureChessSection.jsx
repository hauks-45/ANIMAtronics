import { motion } from 'framer-motion'
import BlurText from './BlurText'

const rows = [
  {
    title: 'Designed to convert. Built to perform.',
    body: 'Every pixel is intentional. Our AI studies what works across thousands of top sites — then builds yours to outperform them all.',
    cta: 'Learn more',
    gif: 'https://motionsites.ai/assets/hero-finlytic-preview-CV9g0FHP.gif',
    reverse: false,
  },
  {
    title: 'It gets smarter. Automatically.',
    body: 'Your site evolves on its own. AI monitors every click, scroll, and conversion — then optimizes in real time. No manual updates. Ever.',
    cta: 'See how it works',
    gif: 'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
    reverse: true,
  },
]

export default function FeatureChessSection() {
  return (
    <section style={{ background: 'var(--bg-base)', padding: '80px 64px' }}>
      <div style={{ textAlign: 'center', marginBottom: 80 }}>
        <motion.div
          initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }}
          viewport={{ once:true }} transition={{ duration:0.5 }}
          style={{ display:'flex', justifyContent:'center', marginBottom:24 }}
        >
          <span className="kicker" style={{
            background: 'var(--surface-1)', border: '1px solid var(--border-1)',
            borderRadius: 999, padding: '8px 20px',
          }}>Capabilities</span>
        </motion.div>
        <BlurText text="Pro features. Zero complexity." style={{
          fontFamily:"'Instrument Serif',serif", fontStyle:'italic',
          fontSize:'clamp(3rem,5.5vw,5rem)', letterSpacing:'-2.5px',
          justifyContent:'center',
        }} />
      </div>

      <div style={{ maxWidth:1100, margin:'0 auto' }}>
        {rows.map((row, i) => (
          <motion.div
            key={i}
            initial={{ opacity:0, y:40, filter:'blur(8px)' }}
            whileInView={{ opacity:1, y:0, filter:'blur(0px)' }}
            viewport={{ once:true }}
            transition={{ duration:0.65, ease:'easeOut' }}
            style={{
              display:'flex', flexDirection: row.reverse ? 'row-reverse' : 'row',
              alignItems:'center', gap:72, marginBottom:96,
            }}
          >
            <div style={{ flex:'1 1 auto' }}>
              <h3 style={{
                fontFamily:"'Instrument Serif',serif", fontStyle:'italic',
                fontSize:'clamp(2rem,3.5vw,2.75rem)', letterSpacing:'-1px',
                marginBottom:18, lineHeight:1.1,
              }}>{row.title}</h3>
              <p style={{
                fontWeight:300, fontSize:15, lineHeight:1.8,
                color:'var(--text-secondary)', marginBottom:28,
              }}>{row.body}</p>
              <a href="#" className="liquid-glass-strong" style={{
                borderRadius:999, padding:'12px 24px',
                display:'inline-flex', alignItems:'center', gap:8,
                color:'#fff', textDecoration:'none',
                fontFamily:"'Barlow',sans-serif", fontWeight:500, fontSize:14,
                transition:'transform 0.15s ease',
              }}
              onMouseEnter={e=>e.currentTarget.style.transform='scale(1.03)'}
              onMouseLeave={e=>e.currentTarget.style.transform='scale(1)'}>{row.cta}</a>
            </div>

            <div style={{
              flex:'0 0 auto', width:440,
              border:'1px solid rgba(255,255,255,0.06)',
              borderRadius:20, overflow:'hidden',
              boxShadow:'0 24px 64px rgba(0,0,0,0.6)',
              background:'linear-gradient(135deg, rgba(124,58,237,0.05), rgba(79,70,229,0.02))',
            }}>
              <img src={row.gif} alt="" style={{ width:'100%', display:'block' }} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
