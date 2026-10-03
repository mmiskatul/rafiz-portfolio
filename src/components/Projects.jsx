'use client';

import { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Terminal, 
  Eye, 
  Layers, 
  Cpu, 
  Globe2, 
  Check 
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import TerminalModal from './TerminalModal';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [terminalOpen, setTerminalOpen] = useState(false);

  const categories = ['All', 'AI & Computer Vision', 'Web & Databases', 'Systems & Linux'];

  const filteredProjects = activeCategory === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter((p) => p.tag === activeCategory);

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <Cpu size={14} />
            Engineering Portfolio
          </span>
          <h2 className="section-title">
            Featured <span className="gradient-accent">Technical Projects</span>
          </h2>
          <p className="section-subtitle">
            From automated aerial computer vision pipelines to full-stack transactional architectures and POSIX-compliant Linux shell systems.
          </p>

          {/* Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.625rem',
              marginTop: '2rem',
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                id={`project-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  border: '1px solid',
                  background: activeCategory === cat ? 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)' : 'rgba(255, 255, 255, 0.04)',
                  borderColor: activeCategory === cat ? 'transparent' : 'rgba(96, 165, 250, 0.2)',
                  color: activeCategory === cat ? '#ffffff' : 'var(--text-muted)',
                  boxShadow: activeCategory === cat ? '0 4px 18px rgba(37, 99, 235, 0.5)' : 'none',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '2rem',
          }}
          className="projects-grid"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              {/* Media Preview Box */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16 / 9',
                  background: '#070b19',
                  overflow: 'hidden',
                  borderBottom: '1px solid rgba(96, 165, 250, 0.15)',
                }}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                ) : project.isTerminal ? (
                  /* Terminal Simulation Preview */
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      background: '#090e24',
                      padding: '1.25rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8125rem',
                      color: '#a7f3d0',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    <div style={{ color: '#94a3b8', marginBottom: '0.35rem' }}>$ dargibari --auth sha256</div>
                    <div style={{ color: '#60a5fa', marginBottom: '0.35rem' }}>[OK] Master key verified. Access granted.</div>
                    <div style={{ color: '#c084fc' }}>$ ./calculate_invoice.sh --vat 5%</div>
                    <div style={{ color: '#38bdf8', marginTop: '0.35rem' }}>Generated INV-2026-0891 [CSV Synced]</div>
                  </div>
                ) : (
                  /* Generic Algorithmic Banner */
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(135deg, #0b132e 0%, #1e1b4b 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      gap: '0.5rem',
                      color: '#818cf8',
                    }}
                  >
                    <Layers size={36} color="#60a5fa" />
                    <span style={{ fontSize: '0.875rem', fontFamily: 'var(--font-mono)', color: '#c084fc' }}>IIT Bombay Summer School</span>
                  </div>
                )}

                {/* Floating Tag */}
                <div
                  style={{
                    position: 'absolute',
                    top: '0.875rem',
                    right: '0.875rem',
                    padding: '0.3rem 0.75rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    background: 'rgba(5, 8, 20, 0.88)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(139, 92, 246, 0.4)',
                    color: '#e2e8f0',
                  }}
                >
                  {project.category}
                </div>
              </div>

              {/* Card Body */}
              <div
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                }}
              >
                <h3
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    marginBottom: '0.75rem',
                    color: '#ffffff',
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.9375rem',
                    lineHeight: 1.65,
                    marginBottom: '1.25rem',
                  }}
                >
                  {project.description}
                </p>

                {/* Highlights List */}
                <div style={{ marginBottom: '1.5rem', flex: 1 }}>
                  {project.highlights.map((h, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.5rem',
                        fontSize: '0.8125rem',
                        color: 'var(--text-dim)',
                        lineHeight: 1.5,
                        marginBottom: '0.4rem',
                      }}
                    >
                      <Check size={14} color="#60a5fa" style={{ marginTop: '0.15rem', flexShrink: 0 }} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Chips */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.375rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  {project.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      style={{
                        padding: '0.2rem 0.6rem',
                        borderRadius: '0.375rem',
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        background: 'rgba(37, 99, 235, 0.12)',
                        border: '1px solid rgba(96, 165, 250, 0.25)',
                        color: '#bfdbfe',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  }}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`btn-github-${project.id}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: 'var(--text-muted)',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                  >
                    <GithubIcon size={16} />
                    <span>Source Code</span>
                  </a>

                  {project.isTerminal ? (
                    <button
                      id="btn-launch-terminal"
                      onClick={() => setTerminalOpen(true)}
                      className="btn"
                      style={{
                        padding: '0.5rem 1.1rem',
                        fontSize: '0.8125rem',
                        background: 'linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)',
                        color: '#ffffff',
                        boxShadow: '0 4px 15px rgba(124, 58, 237, 0.4)',
                      }}
                    >
                      <Terminal size={14} />
                      <span>Launch Live Terminal</span>
                    </button>
                  ) : (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{
                        padding: '0.5rem 1.1rem',
                        fontSize: '0.8125rem',
                      }}
                    >
                      <span>Explore Repo</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Terminal Modal */}
      <TerminalModal isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />
    </section>
  );
}
