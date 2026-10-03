'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Download, Terminal, Palette, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const themeOptions = [
  { id: 'cobalt', name: 'Royal Cobalt', color: '#2563eb', secondary: '#8b5cf6' },
  { id: 'emerald', name: 'Emerald Matrix', color: '#10b981', secondary: '#06b6d4' },
  { id: 'gold', name: 'Champagne Gold', color: '#f59e0b', secondary: '#d97706' },
  { id: 'crimson', name: 'Crimson Sunset', color: '#f43f5e', secondary: '#fb923c' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('cobalt');
  const [paletteMenuOpen, setPaletteMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeTheme = (themeId) => {
    setCurrentTheme(themeId);
    if (themeId === 'cobalt') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', themeId);
    }
    setPaletteMenuOpen(false);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Milestones & Events', href: '#milestones' },
    { name: 'Skills', href: '#skills' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        background: isScrolled ? 'rgba(5, 8, 20, 0.9)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(96, 165, 250, 0.15)' : '1px solid transparent',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '4.5rem',
        }}
      >
        {/* Brand Logo */}
        <a
          href="#"
          id="nav-brand-logo"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.625rem',
            fontSize: '1.25rem',
            fontWeight: 800,
            letterSpacing: '-0.02em',
          }}
        >
          <div
            style={{
              width: '2.25rem',
              height: '2.25rem',
              borderRadius: '0.625rem',
              background: 'linear-gradient(135deg, var(--primary) 0%, var(--violet) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              boxShadow: '0 0 15px var(--primary-glow)',
            }}
          >
            <Terminal size={18} />
          </div>
          <span style={{ color: '#ffffff' }}>
            Moshfiq<span style={{ color: 'var(--violet-light)' }}>.Rafi</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav
          id="desktop-nav"
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '2rem',
          }}
          className="desktop-menu"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              id={`nav-link-${link.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              style={{
                fontSize: '0.9375rem',
                fontWeight: 500,
                color: 'var(--text-muted)',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button & Theme Switcher */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', position: 'relative' }}>
          {/* Palette Selector Button */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setPaletteMenuOpen(!paletteMenuOpen)}
              id="theme-palette-btn"
              title="Change Color Theme"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.5rem 0.75rem',
                borderRadius: '0.625rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(96, 165, 250, 0.2)',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                fontSize: '0.8125rem',
                fontWeight: 600,
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--primary-light)';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(96, 165, 250, 0.2)';
                e.currentTarget.style.color = 'var(--text-muted)';
              }}
            >
              <Palette size={15} color="var(--violet-light)" />
              <span className="theme-text">Theme</span>
            </button>

            {/* Dropdown Menu */}
            {paletteMenuOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '120%',
                  right: 0,
                  width: '200px',
                  background: 'rgba(9, 14, 32, 0.96)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(96, 165, 250, 0.25)',
                  borderRadius: '0.875rem',
                  padding: '0.5rem',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.7)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.35rem',
                  zIndex: 60,
                }}
              >
                <div style={{ padding: '0.35rem 0.5rem', fontSize: '0.75rem', color: 'var(--text-dim)', fontWeight: 600, textTransform: 'uppercase' }}>
                  Palette Presets
                </div>
                {themeOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => changeTheme(opt.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.5rem 0.75rem',
                      borderRadius: '0.5rem',
                      background: currentTheme === opt.id ? 'rgba(37, 99, 235, 0.2)' : 'transparent',
                      border: currentTheme === opt.id ? '1px solid rgba(96, 165, 250, 0.35)' : '1px solid transparent',
                      color: currentTheme === opt.id ? '#ffffff' : 'var(--text-muted)',
                      cursor: 'pointer',
                      fontSize: '0.8125rem',
                      fontWeight: 500,
                      textAlign: 'left',
                      transition: 'background 0.15s ease',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span
                        style={{
                          width: '12px',
                          height: '12px',
                          borderRadius: '50%',
                          background: `linear-gradient(135deg, ${opt.color}, ${opt.secondary})`,
                          display: 'inline-block',
                          boxShadow: `0 0 8px ${opt.color}`,
                        }}
                      />
                      <span>{opt.name}</span>
                    </div>
                    {currentTheme === opt.id && <Check size={14} color="var(--primary-light)" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            href={portfolioData.personal.cvUrl}
            download="Moshfiq_Ahmed_Rafi_CV_2026.pdf"
            id="nav-download-cv-btn"
            className="btn btn-primary cv-button"
            style={{
              padding: '0.6rem 1.2rem',
              fontSize: '0.875rem',
              display: 'none',
            }}
          >
            <Download size={15} />
            <span>Download CV</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '0.5rem',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#ffffff',
              cursor: 'pointer',
            }}
            className="mobile-toggle"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          style={{
            background: 'rgba(5, 8, 20, 0.98)',
            borderBottom: '1px solid rgba(96, 165, 250, 0.25)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              id={`mobile-nav-${link.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '1.0625rem',
                fontWeight: 600,
                color: 'var(--text-main)',
                padding: '0.5rem 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href={portfolioData.personal.cvUrl}
            download="Moshfiq_Ahmed_Rafi_CV_2026.pdf"
            className="btn btn-primary"
            style={{ marginTop: '0.5rem', width: '100%' }}
          >
            <Download size={16} />
            Download Complete CV
          </a>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 900px) {
          :global(.desktop-menu) {
            display: flex !important;
          }
          :global(.cv-button) {
            display: inline-flex !important;
          }
          :global(.mobile-toggle) {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
