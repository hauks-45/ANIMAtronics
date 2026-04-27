import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function BlurText({ text, style = {} }) {
  const ref      = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const words = text.split(' ')

  return (
    <div ref={ref} style={{ display: 'flex', flexWrap: 'wrap', rowGap: '0.08em', ...style }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ filter: 'blur(10px)', opacity: 0, y: 48 }}
          animate={visible ? {
            filter: ['blur(10px)', 'blur(4px)', 'blur(0px)'],
            opacity: [0, 0.5, 1],
            y: [48, -4, 0],
          } : {}}
          transition={{ duration: 0.72, ease: 'easeOut', times: [0, 0.5, 1], delay: i * 0.12 }}
          style={{ display: 'inline-block', marginRight: '0.22em' }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}
