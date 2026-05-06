import { useEffect, useRef } from 'react'

const timeline = [
  { year: '2022', event: 'Started Informatics at University of Bengkulu', color: '#FDE047' },
  { year: '2023', event: 'Built first full-stack web application', color: '#60A5FA' },
  { year: '2024', event: 'Deployed CNN model for Kaganga recognition', color: '#F87171' },
  { year: '2024', event: 'Built NLP-based code similarity system', color: '#a78bfa' },
  { year: '2025', event: 'Open to full-time & freelance opportunities', color: '#34d399' },
]

const values = [
  { label: 'Clean Code', icon: '✦', color: '#FDE047' },
  { label: 'Bold Design', icon: '◈', color: '#60A5FA' },
  { label: 'AI-Driven', icon: '🧠', color: '#F87171' },
  { label: 'Open Source', icon: '◉', color: '#a78bfa' },
]

export default function About({ darkMode }) {
  const leftRef = useRef(null)
  const rightRef = useRef(null)

  useEffect(() => {
    [leftRef, rightRef].forEach((r, i) => {
      const el = r.current
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => el.classList.add('visible'), i * 200)
            observer.unobserve(el)
          }
        },
        { threshold: 0.1 }
      )
      observer.observe(el)
    })
  }, [])

  const border = darkMode ? '#ffffff' : '#000000'
  const bg = darkMode ? '#111111' : '#ffffff'
  const textPrimary = darkMode ? '#ffffff' : '#000000'
  const textSecondary = darkMode ? '#aaaaaa' : '#444444'
  const cardBg = darkMode ? '#1a1a1a' : '#f5f5f5'

  return (
    <section id="about" style={{ backgroundColor: bg, padding: '96px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        {/* Section label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <div style={{ width: '48px', height: '12px', backgroundColor: '#60A5FA', border: `2px solid ${border}` }} />
          <span style={{ fontWeight: 800, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: darkMode ? '#888' : '#555' }}>
            About Me
          </span>
        </div>

        {/* Title */}
        <h2 style={{
          fontWeight: 900,
          fontSize: 'clamp(2.2rem, 5vw, 4rem)',
          lineHeight: 1,
          letterSpacing: '-0.03em',
          color: textPrimary,
          marginBottom: '56px',
        }}>
          Who I{' '}
          <span style={{
            display: 'inline-block',
            backgroundColor: '#60A5FA',
            border: `3px solid ${border}`,
            boxShadow: `6px 6px 0px ${border}`,
            padding: '2px 16px',
            color: '#000000',
          }}>
            Actually Am
          </span>
        </h2>

        {/* Two column layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '48px',
          alignItems: 'start',
        }}>

          {/* LEFT — Bio */}
          <div ref={leftRef} className="reveal">

            {/* Quote box */}
            <div style={{
              padding: '24px',
              marginBottom: '28px',
              backgroundColor: darkMode ? '#1a1a1a' : '#FDE047',
              border: `3px solid ${border}`,
              boxShadow: `6px 6px 0px ${border}`,
            }}>
              <p style={{ fontWeight: 700, fontSize: '1rem', lineHeight: 1.7, color: '#000000' }}>
                👋 Hi, I'm <strong>Reffki Andrea Pratama</strong> — an Informatics student at University of Bengkulu with a strong focus on software engineering and artificial intelligence.
              </p>
            </div>

            <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: textSecondary, marginBottom: '16px' }}>
              I enjoy building systems that are not only functional but also practical and ready for real-world use. My experience includes developing web-based systems, machine learning models, and data-driven applications.
            </p>

            <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: textSecondary, marginBottom: '32px' }}>
              🎯 My goal is to become a professional software engineer specializing in AI-driven systems and scalable web applications, and contribute to impactful technology solutions.
            </p>

            {/* Values grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px',
            }}>
              {values.map((v) => (
                <div key={v.label} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 16px',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  backgroundColor: cardBg,
                  border: `2px solid ${border}`,
                  color: textPrimary,
                }}>
                  <span style={{
                    width: '28px', height: '28px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundColor: v.color,
                    border: `2px solid ${border}`,
                    fontSize: '0.85rem',
                    flexShrink: 0,
                  }}>
                    {v.icon}
                  </span>
                  {v.label}
                </div>
              ))}
            </div>

            {/* University badge */}
            <div style={{
              marginTop: '24px',
              padding: '16px 20px',
              backgroundColor: darkMode ? '#1a1a1a' : '#ffffff',
              border: `3px solid ${border}`,
              boxShadow: `4px 4px 0px ${border}`,
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}>
              <div style={{
                width: '48px', height: '48px',
                backgroundColor: '#60A5FA',
                border: `3px solid ${border}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 900, fontSize: '1.2rem', flexShrink: 0,
              }}>
                🎓
              </div>
              <div>
                <div style={{ fontWeight: 900, fontSize: '0.85rem', color: textPrimary }}>University of Bengkulu</div>
                <div style={{ fontWeight: 600, fontSize: '0.78rem', color: textSecondary, marginTop: '2px' }}>Informatics — Active Student</div>
              </div>
            </div>
          </div>

          {/* RIGHT — Timeline */}
          <div ref={rightRef} className="reveal">
            <h3 style={{
              fontWeight: 900,
              fontSize: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: textPrimary,
              marginBottom: '28px',
              paddingBottom: '12px',
              borderBottom: `3px solid ${border}`,
            }}>
              My Journey
            </h3>

            <div style={{ position: 'relative' }}>
              {/* Vertical line */}
              <div style={{
                position: 'absolute',
                left: '19px',
                top: 0,
                bottom: 0,
                width: '2px',
                backgroundColor: border,
              }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {timeline.map((item) => (
                  <div key={item.year + item.event} style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', paddingLeft: '52px', position: 'relative' }}>
                    {/* Year badge */}
                    <div style={{
                      position: 'absolute',
                      left: 0,
                      width: '40px',
                      height: '40px',
                      backgroundColor: item.color,
                      border: `3px solid ${border}`,
                      boxShadow: `3px 3px 0px ${border}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 900,
                      fontSize: '0.65rem',
                      color: '#000000',
                      flexShrink: 0,
                    }}>
                      {item.year.slice(2)}
                    </div>

                    {/* Event card */}
                    <div style={{
                      flex: 1,
                      padding: '12px 16px',
                      backgroundColor: darkMode ? '#1a1a1a' : '#ffffff',
                      border: `2px solid ${border}`,
                      boxShadow: `3px 3px 0px ${border}`,
                    }}>
                      <div style={{ fontWeight: 800, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: item.color, marginBottom: '4px' }}>
                        {item.year}
                      </div>
                      <div style={{ fontWeight: 600, fontSize: '0.88rem', color: textPrimary, lineHeight: 1.4 }}>
                        {item.event}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Download CV button */}
            <a href="#" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              marginTop: '32px',
              padding: '14px 24px',
              fontWeight: 700,
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              backgroundColor: '#F87171',
              color: '#000000',
              border: `3px solid ${border}`,
              boxShadow: `6px 6px 0px ${border}`,
              textDecoration: 'none',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-3px,-3px)'; e.currentTarget.style.boxShadow = `9px 9px 0px ${border}` }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translate(0,0)'; e.currentTarget.style.boxShadow = `6px 6px 0px ${border}` }}
            >
              Download Resume ↓
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
