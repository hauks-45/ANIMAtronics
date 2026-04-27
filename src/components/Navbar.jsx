export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed', top: 16, left: 0, right: 0,
      zIndex: 50, padding: '0 64px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <div className="liquid-glass" style={{
        width: 48, height: 48, borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 24 }}>e</span>
      </div>

      <div className="liquid-glass" style={{
        borderRadius: 999, padding: '10px 20px',
        display: 'flex', alignItems: 'center', gap: 28,
      }}>
        {['Home','Services','Work','Process','Pricing'].map(l => (
          <a key={l} href="#" style={{
            color: '#fff', textDecoration: 'none',
            fontFamily: "'Barlow', sans-serif", fontWeight: 500, fontSize: 13,
            opacity: 0.75,
          }}>{l}</a>
        ))}
        <a href="#" style={{
          background: '#fff', color: '#000',
          borderRadius: 999, padding: '8px 18px',
          fontFamily: "'Barlow', sans-serif", fontWeight: 500, fontSize: 13,
          textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6,
        }}>
          Get Started
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
          </svg>
        </a>
      </div>

      <div style={{ width: 48 }} />
    </nav>
  )
}
