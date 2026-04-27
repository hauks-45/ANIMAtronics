import { useEffect, useRef } from 'react'

export default function CartoonFace() {
  const wrapRef    = useRef(null)
  const leftIris   = useRef(null)
  const rightIris  = useRef(null)
  const leftPupil  = useRef(null)
  const rightPupil = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      const el = wrapRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width  / 2
      const cy = rect.top  + rect.height / 2
      const dx = (e.clientX - cx) / (window.innerWidth  / 2)
      const dy = (e.clientY - cy) / (window.innerHeight / 2)
      el.style.transform = `perspective(900px) rotateX(${-dy * 14}deg) rotateY(${dx * 14}deg)`

      const faceCX = rect.left + rect.width  * (180 / 360)
      const faceCY = rect.top  + rect.height * (235 / 440)
      const angle  = Math.atan2(e.clientY - faceCY, e.clientX - faceCX)
      const dist   = Math.min(9, Math.hypot(e.clientX - faceCX, e.clientY - faceCY) / 20)
      const ox = Math.cos(angle) * dist
      const oy = Math.sin(angle) * dist

      const apply = (el, bx, by) => {
        if (!el) return
        el.setAttribute('cx', bx + ox)
        el.setAttribute('cy', by + oy)
      }
      apply(leftIris.current,   132, 218)
      apply(leftPupil.current,  132, 218)
      apply(rightIris.current,  228, 218)
      apply(rightPupil.current, 228, 218)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div ref={wrapRef} style={{
      width: 360, height: 440,
      transition: '0.12s cubic-bezier(0.25,0.46,0.45,0.94)',
      animation: 'float 4.5s ease-in-out infinite',
      filter: 'drop-shadow(0 50px 90px rgba(0,0,0,0.85))',
    }}>
      <svg viewBox="0 0 360 440" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
        <defs>
          <radialGradient id="skin" cx="50%" cy="40%" r="60%">
            <stop offset="0%"   stopColor="#F2B07A" />
            <stop offset="55%"  stopColor="#E0955A" />
            <stop offset="100%" stopColor="#C97840" />
          </radialGradient>
          <radialGradient id="iris-l" cx="40%" cy="35%" r="65%">
            <stop offset="0%"   stopColor="#6B4A30" />
            <stop offset="100%" stopColor="#1C0E08" />
          </radialGradient>
          <radialGradient id="iris-r" cx="40%" cy="35%" r="65%">
            <stop offset="0%"   stopColor="#6B4A30" />
            <stop offset="100%" stopColor="#1C0E08" />
          </radialGradient>
          <filter id="blush-blur">
            <feGaussianBlur stdDeviation="8" />
          </filter>
          <clipPath id="eye-left-clip">
            <ellipse cx="132" cy="218" rx="22" ry="16" />
          </clipPath>
          <clipPath id="eye-right-clip">
            <ellipse cx="228" cy="218" rx="22" ry="16" />
          </clipPath>
        </defs>

        {/* Neck */}
        <rect x="148" y="368" width="64" height="48" rx="8" fill="#D48A55" />
        <ellipse cx="180" cy="416" rx="42" ry="14" fill="#C97840" />

        {/* Face */}
        <ellipse cx="180" cy="235" rx="134" ry="148" fill="url(#skin)" />

        {/* Ears */}
        <ellipse cx="47"  cy="242" rx="18" ry="22" fill="#D48A55" />
        <ellipse cx="47"  cy="242" rx="10" ry="13" fill="#C07845" />
        <ellipse cx="313" cy="242" rx="18" ry="22" fill="#D48A55" />
        <ellipse cx="313" cy="242" rx="10" ry="13" fill="#C07845" />

        {/* Hoop earrings */}
        <circle cx="47"  cy="268" r="10" stroke="#aaa" strokeWidth="3" fill="none" />
        <circle cx="313" cy="268" r="10" stroke="#aaa" strokeWidth="3" fill="none" />

        {/* Hair base */}
        <path d="M 68 200 Q 62 110 180 88 Q 298 110 292 200 Q 275 148 180 142 Q 85 148 68 200 Z" fill="#12121e" />
        <path d="M 100 140 Q 88 105 96 75 Q 104 55 116 68 Q 110 85 118 100 Q 128 80 122 55 Q 132 45 142 62 Q 138 82 148 96" stroke="#0a0a14" strokeWidth="14" fill="none" strokeLinecap="round" />
        <path d="M 240 140 Q 255 108 246 76 Q 238 54 224 66 Q 232 86 222 102 Q 212 82 220 56 Q 210 44 198 62 Q 204 84 192 98" stroke="#0a0a14" strokeWidth="14" fill="none" strokeLinecap="round" />
        <path d="M 165 90 Q 180 72 195 90" stroke="#1a1a2e" strokeWidth="10" fill="none" strokeLinecap="round" />

        {/* Cheek blush */}
        <ellipse cx="112" cy="268" rx="38" ry="22" fill="#E0705A" opacity="0.18" filter="url(#blush-blur)" />
        <ellipse cx="248" cy="268" rx="38" ry="22" fill="#E0705A" opacity="0.18" filter="url(#blush-blur)" />

        {/* Eyebrows */}
        <path d="M 112 198 Q 132 190 152 196" stroke="#2E1E14" strokeWidth="6.5" fill="none" strokeLinecap="round" />
        <path d="M 208 196 Q 228 190 248 198" stroke="#2E1E14" strokeWidth="6.5" fill="none" strokeLinecap="round" />

        {/* Eyes white base */}
        <ellipse cx="132" cy="218" rx="22" ry="16" fill="#fff" />
        <ellipse cx="228" cy="218" rx="22" ry="16" fill="#fff" />

        {/* Left eye iris/pupil */}
        <g clipPath="url(#eye-left-clip)">
          <circle ref={leftIris}  cx="132" cy="218" r="11" fill="url(#iris-l)" />
          <circle ref={leftPupil} cx="132" cy="218" r="5.5" fill="#0a0404" />
          <circle cx="136" cy="214" r="3"   fill="#fff" opacity="0.85" />
          <circle cx="128" cy="220" r="1.5" fill="#fff" opacity="0.5" />
        </g>

        {/* Right eye iris/pupil */}
        <g clipPath="url(#eye-right-clip)">
          <circle ref={rightIris}  cx="228" cy="218" r="11" fill="url(#iris-r)" />
          <circle ref={rightPupil} cx="228" cy="218" r="5.5" fill="#0a0404" />
          <circle cx="232" cy="214" r="3"   fill="#fff" opacity="0.85" />
          <circle cx="224" cy="220" r="1.5" fill="#fff" opacity="0.5" />
        </g>

        {/* Eyelid lines */}
        <path d="M 110 208 Q 132 202 154 208" stroke="#2E1E14" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M 206 208 Q 228 202 250 208" stroke="#2E1E14" strokeWidth="2.5" fill="none" strokeLinecap="round" />

        {/* Nose */}
        <path d="M 176 240 Q 168 268 172 278 Q 180 284 188 278 Q 192 268 184 240" stroke="#B8744A" strokeWidth="1.8" fill="none" opacity="0.45" strokeLinecap="round" />
        <ellipse cx="170" cy="276" rx="7"  ry="4.5" fill="#B8744A" opacity="0.35" />
        <ellipse cx="190" cy="276" rx="7"  ry="4.5" fill="#B8744A" opacity="0.35" />

        {/* Mouth */}
        <path d="M 156 308 Q 168 303 180 306 Q 192 303 204 308" stroke="#A0623A" strokeWidth="3" fill="none" strokeLinecap="round" />

        {/* Freckles */}
        {[[118,258],[126,264],[136,256],[158,252],[202,252],[224,256],[234,264],[242,258]].map(([x,y],i) => (
          <circle key={i} cx={x} cy={y} r="2.8" fill="#C07850" opacity="0.45" />
        ))}
      </svg>
    </div>
  )
}
