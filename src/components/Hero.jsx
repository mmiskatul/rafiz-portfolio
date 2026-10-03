'use client';

import { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  Sparkles, 
  Mail, 
  MapPin, 
  Award,
  Globe
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, FacebookIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

const roles = [
  "Software Engineering Researcher",
  "Computer Vision & Deep Learning Specialist",
  "World Friends Korea (WFK) Fellow 2025",
  "IIT Bombay Summer School Alum",
  "HR Secretary @ DIU Data Science Club"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(80);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;

    if (!isDeleting && displayedRole.length < currentRole.length) {
      timer = setTimeout(() => {
        setDisplayedRole(currentRole.substring(0, displayedRole.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayedRole.length === currentRole.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
        setTypingSpeed(40);
      }, 2000);
    } else if (isDeleting && displayedRole.length > 0) {
      timer = setTimeout(() => {
        setDisplayedRole(currentRole.substring(0, displayedRole.length - 1));
      }, typingSpeed);
    } else if (isDeleting && displayedRole.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      setTypingSpeed(80);
    }

    return () => clearTimeout(timer);
  }, [displayedRole, isDeleting, roleIndex, typingSpeed]);

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '7.5rem',
        paddingBottom: '4rem',
        position: 'relative',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3.5rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column: Text & CTAs */}
          <div style={{ maxWidth: '680px' }}>
            {/* Status Pill */}
            <div
              id="hero-availability-pill"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.625rem',
                padding: '0.45rem 1.15rem',
                borderRadius: '9999px',
                background: 'rgba(37, 99, 235, 0.12)',
                border: '1px solid rgba(96, 165, 250, 0.35)',
                color: '#93c5fd',
                fontSize: '0.8125rem',
                fontWeight: 600,
                marginBottom: '1.5rem',
                boxShadow: '0 0 20px rgba(37, 99, 235, 0.25)',
              }}
            >
              <span
                style={{
                  width: '0.55rem',
                  height: '0.55rem',
                  borderRadius: '50%',
                  background: '#60a5fa',
                  boxShadow: '0 0 10px #60a5fa',
                }}
              />
              {portfolioData.personal.availabilityBadge}
            </div>

            {/* Main Headline */}
            <h1
              id="hero-main-title"
              style={{
                fontSize: '2.75rem',
                fontWeight: 900,
                lineHeight: 1.15,
                marginBottom: '1.25rem',
              }}
              className="hero-title"
            >
              Hi, I&apos;m <span className="gradient-text">{portfolioData.personal.name}</span>
            </h1>

            {/* Dynamic Rotating Role */}
            <div
              style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                minHeight: '2rem',
                color: 'var(--violet-light)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1.5rem',
                fontFamily: 'var(--font-mono)',
              }}
            >
              <span style={{ color: 'var(--primary-light)' }}>&gt;</span>
              <span>{displayedRole}</span>
              <span
                style={{
                  display: 'inline-block',
                  width: '2px',
                  height: '1.2rem',
                  background: 'var(--violet-light)',
                  animation: 'pulseGlow 1s infinite',
                }}
              />
            </div>

            {/* Bio summary */}
            <p
              id="hero-bio-text"
              style={{
                color: 'var(--text-muted)',
                fontSize: '1.0625rem',
                lineHeight: 1.75,
                marginBottom: '2rem',
              }}
            >
              {portfolioData.personal.bio}
            </p>

            {/* Location & Institution tags */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.25rem',
                alignItems: 'center',
                color: 'var(--text-dim)',
                fontSize: '0.875rem',
                marginBottom: '2.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <MapPin size={15} color="#60a5fa" />
                <span>Daffodil Smart City, Dhaka, Bangladesh</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Globe size={15} color="#c084fc" />
                <span>Daffodil International University (CGPA 3.48)</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center',
                marginBottom: '2.5rem',
              }}
            >
              <a
                href="#projects"
                id="hero-explore-projects-btn"
                className="btn btn-primary"
              >
                <span>Explore Technical Projects</span>
                <ArrowRight size={17} />
              </a>

              <a
                href="#milestones"
                id="hero-view-milestones-btn"
                className="btn btn-secondary"
              >
                <Award size={17} color="#c084fc" />
                <span>Events &amp; Certificates</span>
              </a>

              <a
                href={portfolioData.personal.cvUrl}
                download="Moshfiq_Ahmed_Rafi_CV_2026.pdf"
                id="hero-download-cv-btn"
                className="btn btn-secondary"
              >
                <Download size={17} color="#60a5fa" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Social Icons Bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '0.8125rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Connect With Me:
              </span>
              <div style={{ display: 'flex', gap: '0.625rem' }}>
                {[
                  { icon: GithubIcon, href: portfolioData.socials.github, id: 'hero-social-github', label: 'GitHub' },
                  { icon: LinkedinIcon, href: portfolioData.socials.linkedin, id: 'hero-social-linkedin', label: 'LinkedIn' },
                  { icon: FacebookIcon, href: portfolioData.socials.facebook, id: 'hero-social-facebook', label: 'Facebook' },
                  { icon: Mail, href: portfolioData.socials.email, id: 'hero-social-email', label: 'Email' },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.id}
                      id={item.id}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      style={{
                        width: '2.5rem',
                        height: '2.5rem',
                        borderRadius: '0.625rem',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(96, 165, 250, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--text-muted)',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#ffffff';
                        e.currentTarget.style.borderColor = 'var(--primary-light)';
                        e.currentTarget.style.background = 'rgba(37, 99, 235, 0.2)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--text-muted)';
                        e.currentTarget.style.borderColor = 'rgba(96, 165, 250, 0.2)';
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Hero Portrait Card */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            {/* Glowing Backdrop Frame */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '430px',
              }}
            >
              {/* Outer decorative glow ring */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-12px',
                  borderRadius: '2.25rem',
                  background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.55), rgba(139, 92, 246, 0.45), rgba(56, 189, 248, 0.35))',
                  filter: 'blur(24px)',
                  zIndex: 0,
                  opacity: 0.8,
                }}
              />

              {/* Main Card Surface */}
              <div
                className="glass-card"
                style={{
                  position: 'relative',
                  zIndex: 1,
                  padding: '1.35rem',
                  borderRadius: '2rem',
                  border: '1px solid rgba(139, 92, 246, 0.4)',
                  background: 'rgba(9, 14, 34, 0.88)',
                }}
              >
                {/* Photo container */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '1 / 1',
                    borderRadius: '1.5rem',
                    overflow: 'hidden',
                    marginBottom: '1.25rem',
                    border: '1px solid rgba(96, 165, 250, 0.2)',
                  }}
                >
                  <img
                    src={portfolioData.personal.avatarUrl}
                    alt="Moshfiq Ahmed Rafi"
                    id="hero-portrait-img"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                  {/* Floating Tag */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '0.875rem',
                      left: '0.875rem',
                      padding: '0.4rem 0.85rem',
                      borderRadius: '0.5rem',
                      background: 'rgba(5, 8, 20, 0.88)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(139, 92, 246, 0.45)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      color: '#ffffff',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
                    }}
                  >
                    <Sparkles size={14} color="#c084fc" />
                    <span>DIU Software Engineering</span>
                  </div>
                </div>

                {/* Quick Info Grid */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '0.75rem',
                  }}
                >
                  {portfolioData.stats.slice(0, 4).map((stat, i) => (
                    <div
                      key={i}
                      style={{
                        padding: '0.85rem',
                        borderRadius: '0.875rem',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(96, 165, 250, 0.1)',
                        textAlign: 'center',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '1.3rem',
                          fontWeight: 800,
                          fontFamily: 'var(--font-display)',
                          color: i === 1 ? '#38bdf8' : i === 0 ? '#60a5fa' : '#c084fc',
                        }}
                      >
                        {stat.value}
                      </div>
                      <div
                        style={{
                          fontSize: '0.75rem',
                          color: 'var(--text-dim)',
                          marginTop: '0.2rem',
                        }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 960px) {
          :global(.hero-grid) {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
          :global(.hero-title) {
            font-size: 3.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
