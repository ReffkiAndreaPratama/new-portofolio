import { useEffect, useRef } from 'react'

const skillGroups = [
  {
    category: 'Programming',
    color: '#FDE047',
    icon: '💻',
    skills: ['C', 'C++', 'Java', 'Kotlin', 'Python', 'JavaScript', 'PHP'],
  },
  {
    category: 'Web & Frameworks',
    color: '#60A5FA',
    icon: '🌐',
    skills: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'Laravel', 'Flask'],
  },
  {
    category: 'AI & Data',
    color: '#F87171',
    icon: '🤖',
    skills: ['TensorFlow', 'Scikit-learn', 'OpenCV', 'CNN', 'NLP', 'TF-IDF', 'Pandas'],
  },
  {
    category: 'Database & Tools',
    color: '#a78bfa',
    icon: '🗄️',
    skills: ['MySQL', 'MongoDB', 'Git', 'REST API', 'AWS', 'Cloudflare'],
  },
]

function SkillCard({ group, darkMode, index }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), index * 120)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [index])

  const border = darkMode ? '#ffffff' : '#000000'

  return (
    <div
      ref={ref}
      className="reveal"
      style={{
        border: `3px solid ${border}`,
        boxShadow: `6px 6px 0px ${border}`,
        backgroundColor: darkMode ? '#1a1a1a' : '#ffffff',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        overflow: 'hidden',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translate(-4px,-4px)'
        e.currentTarget.style.boxShadow = `10px 10px 0px ${border}`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translate(0,0)'
        e.currentTarget.style.boxShadow = `6px 6px 0px ${border}`
      }}
    >
      {/* Header */}
      <div style={{
        backgroundColor: group.color,
        borderBottom: `3px solid ${border}`,
        padding: '16px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
      }}>
        <span style={{ fontSize: '1.4rem' }}>{group.icon}</span>
        <h3 style={{ fontWeight: 900, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#000000' }}>
          {group.category}
        </h3>
      </div>

      {/* Skills */}
      <div style={{ padding: '20px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {group.skills.map((skill) => (
          <span
            key={skill}
            style={{
              padding: '6px 12px',
              fontWeight: 700,
              fontSize: '0.8rem',
              backgroundColor: darkMode ? '#2a2a2a' : '#f5f5f5',
              color: darkMode ? '#ffffff' : '#000000',
              border: `2px solid ${border}`,
              cursor: 'default',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = group.color
              e.currentTarget.style.color = '#000000'
              e.currentTarget.style.transform = 'translate(-2px,-2px)'
              e.currentTarget.style.boxShadow = `3px 3px 0px ${border}`
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = darkMode ? '#2a2a2a' : '#f5f5f5'
              e.currentTarget.style.color = darkMode ? '#ffffff' : '#000000'
              e.currentTarget.style.transform = 'translate(0,0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills({ darkMode }) {
  const titleRef = useRef(null)

  useEffect(() => {
    const el = titleRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); observer.unobserve(el) } },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const border = darkMode ? '#ffffff' : '#000000'

  return (
    <section id="skills" style={{ backgroundColor: darkMode ? '#0a0a0a' : '#60A5FA', padding: '96px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div ref={titleRef} className="reveal" style={{ marginBottom: '64px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '48px', height: '12px', backgroundColor: '#FDE047', border: `2px solid ${border}` }} />
            <span style={{ fontWeight: 800, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: darkMode ? '#888' : '#000' }}>
              Expertise
            </span>
          </div>
          <h2 style={{
            fontWeight: 900,
            fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            lineHeight: 1,
            letterSpacing: '-0.03em',
            color: '#000000',
          }}>
            Tech{' '}
            <span style={{
              display: 'inline-block',
              backgroundColor: '#000000',
              border: `3px solid #000`,
              boxShadow: `6px 6px 0px ${darkMode ? '#ffffff' : '#FDE047'}`,
              padding: '2px 16px',
              color: '#FDE047',
            }}>
              Stack
            </span>
          </h2>
        </div>

        {/* 2x2 Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '32px',
        }}>
          {skillGroups.map((group, i) => (
            <SkillCard key={group.category} group={group} darkMode={darkMode} index={i} />
          ))}
        </div>

        {/* Bottom tagline bar */}
        <div style={{
          padding: '20px 28px',
          backgroundColor: '#000000',
          border: `3px solid ${border}`,
          boxShadow: `6px 6px 0px ${border}`,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
        }}>
          <p style={{ fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#ffffff' }}>
            ✨ "Consistency beats intensity. Keep building."
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {['Open Source', 'Agile', 'Clean Code', 'AI-Driven'].map((tag) => (
              <span key={tag} style={{
                padding: '4px 12px',
                fontWeight: 700,
                fontSize: '0.72rem',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                backgroundColor: '#FDE047',
                color: '#000000',
                border: '2px solid #FDE047',
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
