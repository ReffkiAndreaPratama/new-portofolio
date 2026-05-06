import { useEffect, useRef, useState } from 'react'

const socials = [
  {
    label: 'Email',
    value: 'reffkip@gmail.com',
    href: 'mailto:reffkip@gmail.com',
    icon: '✉',
    color: '#FDE047',
  },
  {
    label: 'GitHub',
    value: 'github.com/ReffkiAndreaPratama',
    href: 'https://github.com/ReffkiAndreaPratama',
    icon: '⌥',
    color: '#60A5FA',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/reffki-andrea-pratama',
    href: 'https://www.linkedin.com/in/reffki-andrea-pratama-851857282',
    icon: '◈',
    color: '#F87171',
  },
  {
    label: 'Instagram',
    value: '@tama2290s',
    href: 'https://instagram.com/tama2290s',
    icon: '◉',
    color: '#a78bfa',
  },
]

export default function Contact({ darkMode }) {
  const leftRef = useRef(null)
  const rightRef = useRef(null)
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

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

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3500)
    setFormState({ name: '', email: '', message: '' })
  }

  const border = darkMode ? '#ffffff' : '#000000'
  const bg = darkMode ? '#0a0a0a' : '#F87171'
  const textPrimary = darkMode ? '#ffffff' : '#000000'
  const formBg = darkMode ? '#1a1a1a' : '#ffffff'

  const inputStyle = {
    display: 'block',
    width: '100%',
    padding: '12px 16px',
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 600,
    fontSize: '0.92rem',
    backgroundColor: darkMode ? '#2a2a2a' : '#ffffff',
    color: textPrimary,
    border: `3px solid ${border}`,
    boxShadow: `4px 4px 0px ${border}`,
    outline: 'none',
    transition: 'transform 0.15s ease, box-shadow 0.15s ease',
  }

  return (
    <section id="contact" style={{ backgroundColor: bg, padding: '96px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <div style={{ width: '48px', height: '12px', backgroundColor: '#000000', border: `2px solid ${border}` }} />
          <span style={{ fontWeight: 800, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#000' }}>
            Get In Touch
          </span>
        </div>

        <h2 style={{
          fontWeight: 900,
          fontSize: 'clamp(2.2rem, 5vw, 4rem)',
          lineHeight: 1,
          letterSpacing: '-0.03em',
          color: '#000000',
          marginBottom: '56px',
        }}>
          Let's{' '}
          <span style={{
            display: 'inline-block',
            backgroundColor: '#000000',
            border: `3px solid #000`,
            boxShadow: `6px 6px 0px ${darkMode ? '#ffffff' : '#FDE047'}`,
            padding: '2px 16px',
            color: '#FDE047',
          }}>
            Work Together
          </span>
        </h2>

        {/* Two columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '48px',
          alignItems: 'start',
        }}>

          {/* LEFT — info + socials */}
          <div ref={leftRef} className="reveal">
            <p style={{ fontWeight: 600, fontSize: '0.95rem', lineHeight: 1.8, color: '#000000', marginBottom: '36px', maxWidth: '420px' }}>
              I'm currently open to freelance projects, full-time roles, and interesting collaborations. If you have something in mind — let's talk.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '14px 18px',
                    backgroundColor: s.color,
                    border: '3px solid #000000',
                    boxShadow: '5px 5px 0px #000000',
                    color: '#000000',
                    textDecoration: 'none',
                    fontWeight: 700,
                    transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translate(-3px,-3px)'
                    e.currentTarget.style.boxShadow = '8px 8px 0px #000000'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translate(0,0)'
                    e.currentTarget.style.boxShadow = '5px 5px 0px #000000'
                  }}
                >
                  <span style={{
                    width: '36px', height: '36px',
                    backgroundColor: '#000000',
                    color: s.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 900, fontSize: '1rem',
                    border: '2px solid #000',
                    flexShrink: 0,
                  }}>
                    {s.icon}
                  </span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 900, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      {s.label}
                    </div>
                    <div style={{ fontWeight: 600, fontSize: '0.82rem', marginTop: '2px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {s.value}
                    </div>
                  </div>
                  <span style={{ fontWeight: 900, fontSize: '1rem', flexShrink: 0 }}>→</span>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT — form */}
          <div ref={rightRef} className="reveal">
            <div style={{
              padding: '32px',
              backgroundColor: formBg,
              border: `3px solid ${border}`,
              boxShadow: `8px 8px 0px ${border}`,
            }}>
              <h3 style={{
                fontWeight: 900,
                fontSize: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: textPrimary,
                marginBottom: '28px',
                paddingBottom: '16px',
                borderBottom: `3px solid ${border}`,
              }}>
                Send a Message
              </h3>

              {submitted ? (
                <div style={{
                  padding: '32px',
                  textAlign: 'center',
                  backgroundColor: '#34d399',
                  border: `3px solid ${border}`,
                  boxShadow: `4px 4px 0px ${border}`,
                }}>
                  <div style={{ fontWeight: 900, fontSize: '2rem', marginBottom: '8px' }}>✓</div>
                  <div style={{ fontWeight: 900, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#000' }}>
                    Message Sent! I'll get back to you soon.
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {[
                    { key: 'name', label: 'Name', type: 'text', placeholder: 'Your full name' },
                    { key: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
                  ].map((field) => (
                    <div key={field.key}>
                      <label style={{
                        display: 'block',
                        fontWeight: 800,
                        fontSize: '0.72rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        color: textPrimary,
                        marginBottom: '8px',
                      }}>
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        required
                        placeholder={field.placeholder}
                        value={formState[field.key]}
                        onChange={e => setFormState({ ...formState, [field.key]: e.target.value })}
                        style={inputStyle}
                        onFocus={e => { e.target.style.transform = 'translate(-2px,-2px)'; e.target.style.boxShadow = `6px 6px 0px ${border}` }}
                        onBlur={e => { e.target.style.transform = 'translate(0,0)'; e.target.style.boxShadow = `4px 4px 0px ${border}` }}
                      />
                    </div>
                  ))}

                  <div>
                    <label style={{
                      display: 'block',
                      fontWeight: 800,
                      fontSize: '0.72rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: textPrimary,
                      marginBottom: '8px',
                    }}>
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell me about your project or idea..."
                      value={formState.message}
                      onChange={e => setFormState({ ...formState, message: e.target.value })}
                      style={{ ...inputStyle, resize: 'vertical' }}
                      onFocus={e => { e.target.style.transform = 'translate(-2px,-2px)'; e.target.style.boxShadow = `6px 6px 0px ${border}` }}
                      onBlur={e => { e.target.style.transform = 'translate(0,0)'; e.target.style.boxShadow = `4px 4px 0px ${border}` }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      padding: '14px 24px',
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: '0.88rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      backgroundColor: '#000000',
                      color: '#FDE047',
                      border: `3px solid ${border}`,
                      boxShadow: `6px 6px 0px ${border}`,
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-3px,-3px)'; e.currentTarget.style.boxShadow = `9px 9px 0px ${border}` }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'translate(0,0)'; e.currentTarget.style.boxShadow = `6px 6px 0px ${border}` }}
                    onMouseDown={e => { e.currentTarget.style.transform = 'translate(2px,2px)'; e.currentTarget.style.boxShadow = `3px 3px 0px ${border}` }}
                    onMouseUp={e => { e.currentTarget.style.transform = 'translate(-3px,-3px)'; e.currentTarget.style.boxShadow = `9px 9px 0px ${border}` }}
                  >
                    Send Message ✦
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
