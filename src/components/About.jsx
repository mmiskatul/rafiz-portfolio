'use client';

import { GraduationCap, Award, BookOpen, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="section" style={{ background: 'rgba(9, 14, 32, 0.5)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <GraduationCap size={14} />
            Background &amp; Academics
          </span>
          <h2 className="section-title">
            Engineering Foundations &amp; <span className="gradient-accent">Global Vision</span>
          </h2>
          <p className="section-subtitle">
            A 4th-year Software Engineering student driven by mathematical rigor, systems automation, computer vision, and cross-cultural technological cooperation.
          </p>
        </div>

        {/* Content Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Left Column: Narrative Card */}
          <div className="glass-card" style={{ padding: '2.25rem' }}>
            <h3
              style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.625rem',
              }}
            >
              <BookOpen size={22} color="#60a5fa" />
              <span>Profile &amp; Motivation</span>
            </h3>

            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              I am a 4th-year B.Sc. Software Engineering student at <strong>Daffodil International University (DIU)</strong>, Bangladesh, maintaining a <strong>3.48 / 4.00 CGPA</strong>. My technical journey is shaped by a deep fascination with machine learning pipelines, aerial satellite segmentation, and Linux system engineering.
            </p>

            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Through in-person academic exposure at the <strong>IIT Bombay Summer School 2026</strong> under Prof. Ajit Rajwade (Group Testing for Data Science) and representing Bangladesh as an <strong>International IT Volunteer in the 2025 World Friends Korea (WFK)</strong> program, I have cultivated both cutting-edge algorithmic thinking and international collaborative competence.
            </p>

            <div
              style={{
                padding: '1.25rem',
                borderRadius: '1rem',
                background: 'rgba(37, 99, 235, 0.09)',
                border: '1px solid rgba(96, 165, 250, 0.28)',
                marginBottom: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: '#93c5fd', marginBottom: '0.5rem' }}>
                <Award size={18} color="#60a5fa" />
                <span>Winter University 2026 Aspirant</span>
              </div>
              <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Having successfully completed the <strong>Russian Language &amp; Culture program BD-174</strong> with Saint Petersburg State University (СПбГУ), I am fully prepared for the intensive in-person academic program at the <em>Winter University in Engineering Sciences 2026</em> (23 Nov – 6 Dec 2026).
              </p>
            </div>

            {/* Core Coursework Badges */}
            <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.875rem' }}>
              Key University Coursework:
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem' }}>
              {[
                'Data Structures & Algorithms',
                'System Design',
                'Database Management',
                'Machine Learning',
                'Operating Systems & Linux',
                'Computer Networks',
                'Software Quality & Testing',
              ].map((course, idx) => (
                <span key={idx} className="badge badge-primary">
                  <CheckCircle2 size={12} color="#60a5fa" />
                  {course}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Education Timeline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h3
              style={{
                fontSize: '1.35rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '0.625rem',
              }}
            >
              <GraduationCap size={22} color="#c084fc" />
              <span>Academic Timeline</span>
            </h3>

            {portfolioData.education.map((edu, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '1.75rem',
                  borderLeft: idx === 0 ? '4px solid #2563eb' : '4px solid rgba(139, 92, 246, 0.4)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <h4 style={{ fontSize: '1.1875rem', fontWeight: 700, color: '#ffffff' }}>
                    {edu.degree}
                  </h4>
                  <span className={idx === 0 ? "badge badge-primary" : "badge badge-cyan"}>
                    {edu.score}
                  </span>
                </div>

                <div style={{ color: 'var(--violet-light)', fontWeight: 500, fontSize: '0.9375rem', marginBottom: '0.75rem' }}>
                  {edu.institution}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', fontSize: '0.8125rem', color: 'var(--text-dim)', marginBottom: '0.875rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Calendar size={13} />
                    <span>{edu.period}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <MapPin size={13} />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {edu.details.map((detail, dIdx) => (
                    <li
                      key={dIdx}
                      style={{
                        fontSize: '0.875rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.6,
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.5rem',
                        marginTop: '0.35rem',
                      }}
                    >
                      <span style={{ color: '#818cf8', marginTop: '0.15rem' }}>•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 960px) {
          :global(.about-grid) {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
