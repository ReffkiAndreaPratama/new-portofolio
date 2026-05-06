import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ darkMode, toggleDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const bg = darkMode ? '#0a0a0a' : '#FDE047'
  const border = darkMode ? '#ffffff' : '#000000'
  const textColor = darkMode ? '#ffffff' : '#000000'

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: bg,
        borderBottom: scrolled ? `3px solid ${border}` : '3px solid transparent',
        boxShadow: scrolled ? `0 4px 0px ${border}` : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
          {/* Logo */}
          <a
            href="#hero"
            style={{
              fontWeight: 900,
              fontSize: '1.4rem',
              color: darkMode ? '#FDE047' : '#000000',
              textDecoration: 'none',
              letterSpacing: '-0.02em',
            }}
          >
            &lt;RAP/&gt;
          </a>

          {/* Desktop links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  padding: '6px 16px',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: textColor,
                  textDecoration: 'none',
                  border: '2px solid transparent',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.border = `2px solid ${border}`
                  e.currentTarget.style.backgroundColor = darkMode ? '#ffffff' : '#000000'
                  e.currentTarget.style.color = darkMode ? '#000000' : '#FDE047'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.border = '2px solid transparent'
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = textColor
                }}
              >
                {link.label}
              </a>
            ))}

            {/* Dark mode toggle */}
            <button
              onClick={toggleDark}
              aria-label="Toggle dark mode"
              style={{
                marginLeft: '12px',
                width: '40px',
                height: '40px',
                fontWeight: 900,
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: `3px solid ${border}`,
                boxShadow: `3px 3px 0px ${border}`,
                backgroundColor: darkMode ? '#FDE047' : '#000000',
                color: darkMode ? '#000000' : '#FDE047',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              {darkMode ? '☀' : '☾'}
            </button>
          </div>

          {/* Mobile buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className="mobile-nav">
            <button
              onClick={toggleDark}
              aria-label="Toggle dark mode"
              style={{
                width: '36px',
                height: '36px',
                fontWeight: 900,
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: `3px solid ${border}`,
                boxShadow: `3px 3px 0px ${border}`,
                backgroundColor: darkMode ? '#FDE047' : '#000000',
                color: darkMode ? '#000000' : '#FDE047',
                cursor: 'pointer',
              }}
            >
              {darkMode ? '☀' : '☾'}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{
                width: '36px',
                height: '36px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '5px',
                border: `3px solid ${border}`,
                boxShadow: `3px 3px 0px ${border}`,
                backgroundColor: 'transparent',
                cursor: 'pointer',
              }}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    display: 'block',
                    width: '18px',
                    height: '2px',
                    backgroundColor: border,
                    transition: 'all 0.2s ease',
                    transform:
                      menuOpen && i === 0 ? 'rotate(45deg) translate(5px, 5px)' :
                      menuOpen && i === 1 ? 'scaleX(0)' :
                      menuOpen && i === 2 ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
                    opacity: menuOpen && i === 1 ? 0 : 1,
                  }}
                />
              ))}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{ backgroundColor: bg, borderTop: `3px solid ${border}` }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                padding: '14px 24px',
                fontWeight: 700,
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: textColor,
                textDecoration: 'none',
                borderBottom: `2px solid ${border}`,
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        .desktop-nav { display: flex !important; }
        .mobile-nav { display: none !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
