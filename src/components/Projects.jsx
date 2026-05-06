import { useEffect, useRef } from 'react'

const projects = [
  {
    id: 1,
    title: 'Asset Management System',
    description:
      'Web-based system for tracking and managing assets using QR code integration. Features role-based access, real-time asset monitoring, and automated reporting.',
    tech: ['Laravel', 'MySQL', 'JavaScript', 'REST API', 'QR Code'],
    color: '#FDE047',
    featured: true,
    demo: '#',
    github: 'https://github.com/ReffkiAndreaPratama',
    tag: '★ Featured',
    emoji: '📦',
  },
  {
    id: 2,
    title: 'Kaganga Character Recognition',
    description:
      'Deep learning CNN model for detecting and classifying traditional Kaganga script characters. Includes a web interface for real-time image inference.',
    tech: ['Python', 'TensorFlow', 'CNN', 'OpenCV', 'Flask'],
    color: '#60A5FA',
    featured: false,
    demo: '#',
    github: 'https://github.com/ReffkiAndreaPratama',
    tag: 'AI / ML',
    emoji: '🧠',
  },
  {
    id: 3,
    title: 'Code Similarity Detection',
    description:
      'NLP-based plagiarism detection system using TF-IDF and cosine similarity. Supports multiple programming languages with detailed similarity reports.',
    tech: ['Python', 'NLP', 'TF-IDF', 'FastAPI', 'React'],
    color: '#F87171',
    featured: false,
    demo: '#',
    github: 'https://github.com/ReffkiAndreaPratama',
    tag: 'NLP',
    emoji: '🔍',
  },
  {
    id: 4,
    title: 'Recommendation System',
    description:
      'Content-based recommendation engine for personalized suggestions. Analyzes user preferences and item features to deliver accurate recommendations.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Flask', 'JavaScript'],
    color: '#a78bfa',
    featured: false,
    demo: '#',
    github: 'https://github.com/ReffkiAndreaPratama',
    tag: 'Data Science',
    emoji: '🎯',
  },
]

function SectionLabel({ color, text, border }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
      <div style={{ width: '48px', height: '12px', backgroundColor: color, border: `2px solid ${border}` }} />
      <span style={{ fontWeight: 800, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: border === '#ffffff' ? '#888' : '#555' }}>
        {text}
      </span>
    </div>
  )
}

function ProjectCard({ project, darkMode, index, featured }) {
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
  const cardBg = darkMode ? '#1a1a1a' : '#ffffff'

  return (
    <div
      ref={ref}
      className="reveal"
      style={{
        backgroundColor: cardBg,
        border: `3px solid ${border}`,
        boxShadow: `6px 6px 0px ${border}`,
        display: 'flex',
        flexDirection: featured ? 'row' : 'column',
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
      {/* Color stripe / header */}
      <div style={{
        backgroundColor: project.color,
        borderBottom: featured ? 'none' : `3px solid ${border}`,
        borderRight: featured ? `3px solid ${border}` : 'none',
        padding: featured ? '32px 28px' : '20px 24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minWidth: featured ? '220px' : 'auto',
        flexShrink: 0,
      }}>
        <div>
          <div style={{ fontSize: featured ? '3rem' : '2rem', marginBottom: '12px' }}>{project.emoji}</div>
          <span style={{
            display: 'inline-block',
            padding: '4px 10px',
            fontWeight: 800,
            fontSize: '0.7rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            backgroundColor: '#000000',
            color: '#ffffff',
            border: '2px solid #000',
          }}>
            {project.tag}
          </span>
        </div>
        {featured && (
          <div style={{ marginTop: '24px', fontWeight: 900, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#000' }}>
            🔥 Featured Project
          </div>
        )}
      </div>

      {/* Body */}
      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{
          fontWeight: 900,
          fontSize: featured ? '1.5rem' : '1.2rem',
          color: darkMode ? '#ffffff' : '#000000',
          marginBottom: '12px',
          lineHeight: 1.2,
        }}>
          {project.title}
        </h3>

        <p style={{
          fontSize: '0.9rem',
          lineHeight: 1.7,
          color: darkMode ? '#aaaaaa' : '#444444',
          marginBottom: '20px',
          flex: 1,
        }}>
          {project.description}
        </p>

        {/* Tech stack */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
          {project.tech.map((t) => (
            <span key={t} style={{
              padding: '4px 10px',
              fontWeight: 700,
              fontSize: '0.72rem',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              backgroundColor: darkMode ? '#2a2a2a' : '#f0f0f0',
              color: darkMode ? '#FDE047' : '#000000',
              border: `2px solid ${border}`,
            }}>
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '12px' }}>
          <a href={project.demo} style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '10px 16px',
            fontWeight: 700,
            fontSize: '0.78rem',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            backgroundColor: '#000000',
            color: '#FDE047',
            border: `3px solid ${border}`,
            boxShadow: `4px 4px 0px ${border}`,
            textDecoration: 'none',
            transition: 'all 0.15s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-2px,-2px)'; e.currentTarget.style.boxShadow = `6px 6px 0px ${border}` }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translate(0,0)'; e.currentTarget.style.boxShadow = `4px 4px 0px ${border}` }}
          >
            Live Demo ↗
          </a>
          <a href={project.github} target="_blank" rel="noreferrer" style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '10px 16px',
            fontWeight: 700,
            fontSize: '0.78rem',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            backgroundColor: darkMode ? '#2a2a2a' : '#f5f5f5',
            color: darkMode ? '#ffffff' : '#000000',
            border: `3px solid ${border}`,
            boxShadow: `4px 4px 0px ${border}`,
            textDecoration: 'none',
            transition: 'all 0.15s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-2px,-2px)'; e.currentTarget.style.boxShadow = `6px 6px 0px ${border}` }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translate(0,0)'; e.currentTarget.style.boxShadow = `4px 4px 0px ${border}` }}
          >
            GitHub ⌥
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects({ darkMode }) {
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
  const bg = darkMode ? '#111111' : '#ffffff'

  return (
    <section id="projects" style={{ backgroundColor: bg, padding: '96px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div ref={titleRef} className="reveal" style={{ marginBottom: '64px' }}>
          <SectionLabel color="#F87171" text="My Work" border={border} />
          <h2 style={{
            fontWeight: 900,
            fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            lineHeight: 1,
            letterSpacing: '-0.03em',
            color: darkMode ? '#ffffff' : '#000000',
          }}>
            Selected{' '}
            <span style={{
              display: 'inline-block',
              backgroundColor: '#FDE047',
              border: `3px solid ${border}`,
              boxShadow: `6px 6px 0px ${border}`,
              padding: '2px 16px',
              color: '#000000',
            }}>
              Projects
            </span>
          </h2>
        </div>

        {/* Featured — full width */}
        <div style={{ marginBottom: '24px' }}>
          <ProjectCard project={projects[0]} darkMode={darkMode} index={0} featured={true} />
        </div>

        {/* Grid 2 cols */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
        }}>
          {projects.slice(1).map((project, i) => (
            <ProjectCard key={project.id} project={project} darkMode={darkMode} index={i + 1} featured={false} />
          ))}
        </div>

      </div>
    </section>
  )
}
