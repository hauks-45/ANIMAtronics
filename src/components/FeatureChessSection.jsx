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
    <section style={{ background: '#000', padding: '100px 64px' }}>
      <div style={{ textAlign: 'center', marginBottom: 80 }}>
        <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.5 }}
          style={{ display:'flex', justifyContent:'center', marginBottom: 24 }}>
          <span className="liquid-glass" style={{ borderRadius:999, padding:'8px 20px', fontSize:13, fontWeight:500 }}>Capabilities</span>
        </motion.div>
        <BlurText text="Pro features. Zero complexity." style={{
          fontFamily:"'Instrument Serif',serif", fontStyle:'italic',
          fontSize:'clamp(2.4rem,5vw,4rem)', letterSpacing:'-2px',
          justifyContent:'center',
        }} />
      </div>

      <div style={{ maxWidth:1100, margin:'0 auto' }}>
        {rows.map((row, i) => (
          <motion.div
            key={i}
            initial={{ opacity:0, y:50 }} whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }} transition={{ duration:0.65, ease:'easeOut' }}
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
              <p style={{ fontWeight:300, fontSize:15, color:'rgba(255,255,255,0.6)', lineHeight:1.7, marginBottom:28 }}>
                {row.body}
              </p>
              <a href="#" className="liquid-glass-strong" style={{
                borderRadius:999, padding:'12px 24px',
                display:'inline-flex', alignItems:'center', gap:8,
                color:'#fff', textDecoration:'none',
                fontFamily:"'Barlow',sans-serif", fontWeight:500, fontSize:14,
              }}>{row.cta}</a>
            </div>
            <div className="liquid-glass" style={{ flex:'0 0 auto', borderRadius:20, overflow:'hidden', width:440 }}>
              <img src={row.gif} alt="" style={{ width:'100%', display:'block' }} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
