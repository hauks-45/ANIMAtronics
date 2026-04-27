import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={scrolled ? 'navbar-scrolled' : ''}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        zIndex: 50, padding: '16px 64px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        transition: 'background 0.3s ease, border-color 0.3s ease',
      }}
    >
      {/* Logo */}
      <div style={{
        width: 48, height: 48, borderRadius: '50%',
        background: 'var(--surface-2)',
        border: '1px solid var(--border-1)',
        boxShadow: '0 0 20px rgba(124,58,237,0.3)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 24 }}>e</span>
      </div>

      {/* Center pill */}
      <div style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 9999,
        padding: '10px 22px',
        display: 'flex', alignItems: 'center', gap: 28,
      }}>
        {['Home','Services','Work','Process','Pricing'].map(l => (
          <a key={l} href="#" style={{
            color: '#fff', textDecoration: 'none',
            fontFamily: "'Barlow', sans-serif", fontWeight: 500, fontSize: 13,
            opacity: 0.65,
            transition: 'opacity 0.15s',
          }}
          onMouseEnter={e => e.target.style.opacity = 1}
          onMouseLeave={e => e.target.style.opacity = 0.65}
          >{l}</a>
        ))}
        <a href="#" className="btn-violet" style={{ padding: '8px 18px', fontSize: 13 }}>
          Get Started
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
          </svg>
        </a>
      </div>

      <div style={{ width: 48 }} />
    </nav>
  )
}
