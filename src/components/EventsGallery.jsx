'use client';

import { useState } from 'react';
import { 
  Award, 
  Calendar, 
  MapPin, 
  Maximize2, 
  X, 
  ExternalLink, 
  CheckCircle, 
  Globe, 
  Users 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function EventsGallery() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [filterCategory, setFilterCategory] = useState('All');

  const filteredEvents = filterCategory === 'All'
    ? portfolioData.events
    : portfolioData.events.filter((e) => e.category === filterCategory);

  return (
    <section id="milestones" className="section" style={{ background: 'rgba(7, 11, 25, 0.75)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <Award size={14} />
            Verified Milestones &amp; Events
          </span>
          <h2 className="section-title">
            International Experience &amp; <span className="gradient-accent">Event Gallery</span>
          </h2>
          <p className="section-subtitle">
            Authentic documentation of international IT volunteering, global academic summer schools, certified language proficiency, and national tech summits.
          </p>

          {/* Filter Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.625rem',
              marginTop: '1.75rem',
            }}
          >
            {['All', 'International Programs', 'Certificates', 'Summits & Bootcamps', 'Scouts & Leadership'].map((catLabel) => {
              const isActive = filterCategory === catLabel || (catLabel === 'All' && filterCategory === 'All');
              return (
                <button
                  key={catLabel}
                  onClick={() => {
                    if (catLabel === 'All') setFilterCategory('All');
                    else if (catLabel === 'International Programs') setFilterCategory('International Exchange');
                    else if (catLabel === 'Certificates') setFilterCategory('Language & Internationalization');
                    else if (catLabel === 'Summits & Bootcamps') setFilterCategory('Technical Conference');
                    else if (catLabel === 'Scouts & Leadership') setFilterCategory('Community & Leadership');
                  }}
                  style={{
                    padding: '0.5rem 1.25rem',
                    borderRadius: '9999px',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    border: '1px solid',
                    background: isActive ? 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)' : 'rgba(255, 255, 255, 0.04)',
                    borderColor: isActive ? 'transparent' : 'rgba(96, 165, 250, 0.2)',
                    color: isActive ? '#ffffff' : 'var(--text-muted)',
                    boxShadow: isActive ? '0 4px 18px rgba(37, 99, 235, 0.45)' : 'none',
                  }}
                >
                  {catLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* Events Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
          }}
          className="events-grid"
        >
          {filteredEvents.map((evt) => (
            <div
              key={evt.id}
              id={`event-card-${evt.id}`}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                cursor: evt.image ? 'pointer' : 'default',
              }}
              onClick={() => {
                if (evt.image) setSelectedEvent(evt);
              }}
            >
              {/* Photo / Graphic Container */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16 / 10',
                  background: '#070b19',
                  overflow: 'hidden',
                  borderBottom: '1px solid rgba(96, 165, 250, 0.15)',
                }}
              >
                {evt.image ? (
                  <>
                    <img
                      src={evt.image}
                      alt={evt.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.4s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(5, 8, 20, 0.8) 0%, transparent 60%)',
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'flex-end',
                        padding: '1rem',
                        opacity: 0.9,
                      }}
                    >
                      <span
                        style={{
                          padding: '0.35rem 0.75rem',
                          borderRadius: '0.5rem',
                          background: 'rgba(5, 8, 20, 0.88)',
                          backdropFilter: 'blur(8px)',
                          border: '1px solid rgba(96, 165, 250, 0.3)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          fontSize: '0.75rem',
                          color: '#ffffff',
                          fontWeight: 500,
                        }}
                      >
                        <Maximize2 size={12} color="#60a5fa" />
                        View Full Photo
                      </span>
                    </div>
                  </>
                ) : (
                  /* Graphic Header for non-photo events like IIT Bombay */
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      background: 'radial-gradient(circle at 50% 50%, #1e1b4b 0%, #070b19 100%)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.75rem',
                      color: '#818cf8',
                      padding: '1.5rem',
                      textAlign: 'center',
                    }}
                  >
                    <Globe size={40} color="#60a5fa" />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#ffffff' }}>
                        {evt.organizer}
                      </div>
                      <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                        {evt.tag}
                      </div>
                    </div>
                  </div>
                )}

                {/* Event Category Tag */}
                <div
                  style={{
                    position: 'absolute',
                    top: '0.875rem',
                    left: '0.875rem',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    background: 'rgba(5, 8, 20, 0.9)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(139, 92, 246, 0.45)',
                    color: '#c084fc',
                  }}
                >
                  {evt.badge}
                </div>
              </div>

              {/* Event Content Details */}
              <div
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.8125rem',
                    color: 'var(--primary-light)',
                    marginBottom: '0.5rem',
                    fontWeight: 600,
                  }}
                >
                  <Calendar size={13} />
                  <span>{evt.date}</span>
                </div>

                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    marginBottom: '0.5rem',
                    color: '#ffffff',
                    lineHeight: 1.3,
                  }}
                >
                  {evt.title}
                </h3>

                <div
                  style={{
                    fontSize: '0.8125rem',
                    color: 'var(--text-dim)',
                    marginBottom: '0.875rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                  }}
                >
                  <MapPin size={13} color="#60a5fa" />
                  <span>{evt.organizer}</span>
                </div>

                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.6,
                    marginBottom: '1rem',
                    flex: 1,
                  }}
                >
                  {evt.description}
                </p>

                {evt.image && (
                  <div
                    style={{
                      paddingTop: '0.75rem',
                      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '0.8125rem',
                      color: 'var(--violet-light)',
                      fontWeight: 600,
                    }}
                  >
                    <span>Click to inspect certificate / event capture</span>
                    <Maximize2 size={14} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* High-Resolution Photo Lightbox Modal */}
      {selectedEvent && (
        <div
          id="event-lightbox-backdrop"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            background: 'rgba(3, 6, 16, 0.94)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
          onClick={() => setSelectedEvent(null)}
        >
          <div
            id="event-lightbox-modal"
            className="glass-card"
            style={{
              width: '100%',
              maxWidth: '900px',
              maxHeight: '90vh',
              background: '#070c20',
              border: '1px solid rgba(96, 165, 250, 0.35)',
              borderRadius: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(37, 99, 235, 0.3)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1rem 1.5rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                background: 'rgba(12, 19, 44, 0.95)',
              }}
            >
              <div>
                <h4 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#ffffff' }}>
                  {selectedEvent.title}
                </h4>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                  {selectedEvent.organizer} • {selectedEvent.date}
                </p>
              </div>

              <button
                id="lightbox-close-btn"
                onClick={() => setSelectedEvent(null)}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(96, 165, 250, 0.2)',
                  borderRadius: '0.5rem',
                  padding: '0.4rem',
                  color: '#ffffff',
                  cursor: 'pointer',
                  display: 'flex',
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Image Area */}
            <div
              style={{
                flex: 1,
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: '#040711',
                padding: '1rem',
              }}
            >
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                style={{
                  maxWidth: '100%',
                  maxHeight: '62vh',
                  objectFit: 'contain',
                  borderRadius: '0.75rem',
                  border: '1px solid rgba(96, 165, 250, 0.2)',
                }}
              />

              {/* If secondary image exists, show thumbnail gallery */}
              {selectedEvent.secondaryImage && (
                <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <img
                    src={selectedEvent.secondaryImage}
                    alt={`${selectedEvent.title} secondary`}
                    style={{
                      maxHeight: '120px',
                      borderRadius: '0.5rem',
                      border: '1px solid rgba(96, 165, 250, 0.3)',
                    }}
                  />
                  <span style={{ fontSize: '0.8125rem', color: 'var(--text-dim)' }}>
                    Additional official photo from {selectedEvent.title}
                  </span>
                </div>
              )}
            </div>

            {/* Modal Footer Description */}
            <div
              style={{
                padding: '1.25rem 1.5rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                background: 'rgba(9, 14, 32, 0.98)',
              }}
            >
              <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                {selectedEvent.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
