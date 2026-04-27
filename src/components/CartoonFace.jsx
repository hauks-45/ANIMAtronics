import { useEffect, useRef } from 'react'

// Uses the uploaded 3D rendered face image.
// The whole image smoothly follows the cursor (lerp translate + subtle tilt).
export default function CartoonFace() {
  const wrapRef = useRef(null)
  const target  = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })
  const rafRef  = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      const vw = window.innerWidth
      const vh = window.innerHeight
      // Normalise -1 … +1
      target.current.x = (e.clientX / vw - 0.5) * 2
      target.current.y = (e.clientY / vh - 0.5) * 2
    }
    window.addEventListener('mousemove', onMove)

    const animate = () => {
      const lerp = 0.07
      current.current.x += (target.current.x - current.current.x) * lerp
      current.current.y += (target.current.y - current.current.y) * lerp

      const el = wrapRef.current
      if (el) {
        // Translate the face up to ±28px horizontally, ±18px vertically
        const tx = current.current.x * 28
        const ty = current.current.y * 18
        // Subtle 3-D tilt
        const rx = -current.current.y * 10
        const ry =  current.current.x * 12
        el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translate(${tx}px, ${ty}px)`
      }
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div
      ref={wrapRef}
      style={{
        width: 420,
        height: 500,
        animation: 'float 5s ease-in-out infinite',
        filter: 'drop-shadow(0 40px 80px rgba(124,58,237,0.25)) drop-shadow(0 60px 120px rgba(0,0,0,0.8))',
        willChange: 'transform',
        transformOrigin: 'center center',
      }}
    >
      <img
        src="/face.jpg"
        alt="Edwin Alex"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          borderRadius: '50% 50% 42% 42% / 48% 48% 38% 38%',
          display: 'block',
        }}
      />
    </div>
  )
}
