import { useEffect, useRef } from 'react'

export default function Hero({ darkMode }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (el) setTimeout(() => el.classList.add('visible'), 100)
  }, [])

  const border = darkMode ? '#ffffff' : '#000000'
  const bg = darkMode ? '#0a0a0a' : '#FDE047'
  const textPrimary = darkMode ? '#ffffff' : '#000000'

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        backgroundColor: bg,
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '64px',
      }}
    >
      {/* Grid background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.08,
          backgroundImage: `linear-gradient(${border} 1px, transparent 1px), linear-gradient(90deg, ${border} 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
          pointerEvents: 'none',
        }}
      />

      {/* Decorative shapes — desktop only */}
      <div className="deco-shapes">
        <div style={{
          position: 'absolute', top: '100px', right: '80px',
          width: '80px', height: '80px',
          backgroundColor: '#60A5FA',
          border: `3px solid ${border}`,
          boxShadow: `6px 6px 0px ${border}`,
        }} />
        <div style={{
          position: 'absolute', bottom: '120px', right: '160px',
          width: '48px', height: '48px',
          backgroundColor: '#F87171',
          border: `3px solid ${border}`,
          boxShadow: `6px 6px 0px ${border}`,
        }} />
        <div style={{
          position: 'absolute', top: '180px', right: '200px',
          width: '28px', height: '28px',
          backgroundColor: darkMode ? '#FDE047' : '#000000',
          border: `3px solid ${border}`,
        }} />
        <div style={{
          position: 'absolute', bottom: '200px', right: '60px',
          width: '20px', height: '60px',
          backgroundColor: '#a78bfa',
          border: `3px solid ${border}`,
        }} />
      </div>

      {/* Main content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px', width: '100%' }}>
        <div ref={ref} className="reveal">

          {/* Available badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            marginBottom: '32px',
            fontWeight: 700,
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            backgroundColor: darkMode ? '#FDE047' : '#000000',
            color: darkMode ? '#000000' : '#FDE047',
            border: `3px solid ${border}`,
            boxShadow: `4px 4px 0px ${border}`,
          }}>
            <span style={{
              width: '8px', height: '8px', borderRadius: '50%',
              backgroundColor: '#4ade80',
              animation: 'pulse 2s infinite',
            }} />
            Available for Work
          </div>

          {/* Name */}
          <h1 style={{
            fontWeight: 900,
            fontSize: 'clamp(2.8rem, 9vw, 7.5rem)',
            lineHeight: 1,
            letterSpacing: '-0.03em',
            color: textPrimary,
            marginBottom: '16px',
          }}>
            Reffki
            <br />
            <span style={{ color: darkMode ? '#60A5FA' : '#000000' }}>
              Andrea
            </span>
            <br />
            <span style={{
              display: 'inline-block',
              backgroundColor: darkMode ? '#1a1a1a' : '#ffffff',
              border: `3px solid ${border}`,
              boxShadow: `6px 6px 0px ${border}`,
              padding: '0 16px',
              color: darkMode ? '#FDE047' : '#000000',
            }}>
              Pratama
            </span>
          </h1>

          {/* Role tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '28px', marginTop: '24px' }}>
            {[
              { label: 'Fullstack Developer', bg: '#60A5FA' },
              { label: 'AI Enthusiast', bg: '#F87171' },
              { label: 'Informatics Student', bg: darkMode ? '#FDE047' : '#000000', color: darkMode ? '#000' : '#FDE047' },
            ].map((role) => (
              <span key={role.label} style={{
                padding: '8px 16px',
                fontWeight: 700,
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                backgroundColor: role.bg,
                color: role.color || '#000000',
                border: `3px solid ${border}`,
                boxShadow: `4px 4px 0px ${border}`,
              }}>
                {role.label}
              </span>
            ))}
          </div>

          {/* Tagline */}
          <p style={{
            fontWeight: 500,
            fontSize: '1.1rem',
            lineHeight: 1.7,
            color: darkMode ? '#cccccc' : '#222222',
            maxWidth: '520px',
            marginBottom: '40px',
          }}>
            🚀 Building intelligent systems that solve real-world problems — from web apps to AI-powered solutions.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '64px' }}>
            <a href="#projects" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 32px',
              fontWeight: 700,
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              backgroundColor: '#000000',
              color: '#FDE047',
              border: `3px solid ${border}`,
              boxShadow: `6px 6px 0px ${border}`,
              textDecoration: 'none',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-3px,-3px)'; e.currentTarget.style.boxShadow = `9px 9px 0px ${border}` }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translate(0,0)'; e.currentTarget.style.boxShadow = `6px 6px 0px ${border}` }}
            >
              View Projects →
            </a>
            <a href="#contact" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 32px',
              fontWeight: 700,
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              backgroundColor: '#ffffff',
              color: '#000000',
              border: `3px solid ${border}`,
              boxShadow: `6px 6px 0px ${border}`,
              textDecoration: 'none',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-3px,-3px)'; e.currentTarget.style.boxShadow = `9px 9px 0px ${border}` }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translate(0,0)'; e.currentTarget.style.boxShadow = `6px 6px 0px ${border}` }}
            >
              Hire Me ✦
            </a>
            <a href="https://github.com/ReffkiAndreaPratama" target="_blank" rel="noreferrer" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 32px',
              fontWeight: 700,
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              backgroundColor: darkMode ? '#1a1a1a' : '#FDE047',
              color: darkMode ? '#FDE047' : '#000000',
              border: `3px solid ${border}`,
              boxShadow: `6px 6px 0px ${border}`,
              textDecoration: 'none',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-3px,-3px)'; e.currentTarget.style.boxShadow = `9px 9px 0px ${border}` }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translate(0,0)'; e.currentTarget.style.boxShadow = `6px 6px 0px ${border}` }}
            >
              GitHub ⌥
            </a>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            {[
              { value: '4+', label: 'Projects Built' },
              { value: '2+', label: 'Years Coding' },
              { value: '3', label: 'AI Models' },
              { value: 'UNIB', label: 'Informatics' },
            ].map((stat) => (
              <div key={stat.label} style={{
                padding: '16px 24px',
                backgroundColor: darkMode ? '#1a1a1a' : '#ffffff',
                border: `3px solid ${border}`,
                boxShadow: `4px 4px 0px ${border}`,
                minWidth: '100px',
              }}>
                <div style={{ fontWeight: 900, fontSize: '1.8rem', color: darkMode ? '#FDE047' : '#000000', lineHeight: 1 }}>
                  {stat.value}
                </div>
                <div style={{ fontWeight: 600, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: darkMode ? '#888' : '#666', marginTop: '4px' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '32px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
      }}>
        <span style={{ fontWeight: 700, fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: darkMode ? '#666' : '#555' }}>
          Scroll
        </span>
        <div style={{
          width: '24px', height: '40px',
          border: `3px solid ${darkMode ? '#555' : '#555'}`,
          display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
          paddingTop: '6px',
        }}>
          <div style={{
            width: '4px', height: '10px',
            backgroundColor: darkMode ? '#555' : '#555',
            animation: 'bounce 1.5s infinite',
          }} />
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(6px)} }
        .deco-shapes { display: block; }
        @media (max-width: 768px) { .deco-shapes { display: none; } }
      `}</style>
    </section>
  )
}
