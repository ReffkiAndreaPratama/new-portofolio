export default function Footer({ darkMode }) {
  const border = darkMode ? '#ffffff' : '#000000'

  return (
    <footer style={{
      backgroundColor: '#000000',
      borderTop: `3px solid ${border}`,
      padding: '40px 0',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        {/* Top row */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          paddingBottom: '28px',
          borderBottom: '2px solid #222',
          marginBottom: '24px',
        }}>
          {/* Logo + name */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontWeight: 900, fontSize: '1.5rem', color: '#FDE047' }}>
              &lt;RAP/&gt;
            </span>
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#ffffff' }}>Reffki Andrea Pratama</div>
              <div style={{ fontWeight: 500, fontSize: '0.75rem', color: '#666', marginTop: '2px' }}>Fullstack Developer & AI Enthusiast</div>
            </div>
          </div>

          {/* Nav links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
            {['Home', 'Projects', 'Skills', 'About', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} style={{
                padding: '6px 14px',
                fontWeight: 700,
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#888',
                textDecoration: 'none',
                border: '2px solid transparent',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#FDE047'
                e.currentTarget.style.borderColor = '#FDE047'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = '#888'
                e.currentTarget.style.borderColor = 'transparent'
              }}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '10px' }}>
            {[
              { label: 'GH', href: 'https://github.com/ReffkiAndreaPratama', color: '#60A5FA' },
              { label: 'LI', href: 'https://www.linkedin.com/in/reffki-andrea-pratama-851857282', color: '#F87171' },
              { label: 'IG', href: 'https://instagram.com/tama2290s', color: '#a78bfa' },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" style={{
                width: '36px', height: '36px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 900, fontSize: '0.7rem',
                color: '#ffffff',
                border: '2px solid #333',
                textDecoration: 'none',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = s.color
                e.currentTarget.style.color = '#000000'
                e.currentTarget.style.borderColor = s.color
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = '#ffffff'
                e.currentTarget.style.borderColor = '#333'
              }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
        }}>
          <p style={{ fontWeight: 500, fontSize: '0.75rem', color: '#555', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            © 2025 Reffki Andrea Pratama — All rights reserved
          </p>
          <p style={{ fontWeight: 700, fontSize: '0.75rem', color: '#444', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Built with React + Tailwind + NeoBrutalism
          </p>
        </div>

      </div>
    </footer>
  )
}
