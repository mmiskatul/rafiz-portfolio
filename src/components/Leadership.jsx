'use client';

import { Users, Award, Shield, Compass, Calendar, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Leadership() {
  const getRoleIcon = (role) => {
    if (role.includes('HR')) return Users;
    if (role.includes('Software')) return Award;
    if (role.includes('Rover') || role.includes('Scout')) return Compass;
    return Shield;
  };

  return (
    <section id="leadership" className="section" style={{ background: 'rgba(10, 15, 29, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <Users size={14} />
            Campus &amp; Community Impact
          </span>
          <h2 className="section-title">
            Leadership &amp; <span className="gradient-accent">Involvement</span>
          </h2>
          <p className="section-subtitle">
            Demonstrated initiative in executive talent screening, organizing technical summits, scouting expeditions, and fostering collaborative peer communities.
          </p>
        </div>

        {/* Leadership Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {portfolioData.leadership.map((item, idx) => {
            const Icon = getRoleIcon(item.role);
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Header Icon + Role */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div
                    style={{
                      width: '3rem',
                      height: '3rem',
                      borderRadius: '0.75rem',
                      background: idx === 0 
                        ? 'rgba(99, 102, 241, 0.15)' 
                        : idx === 1 
                        ? 'rgba(6, 182, 212, 0.15)' 
                        : 'rgba(16, 185, 129, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: idx === 0 ? '#818cf8' : idx === 1 ? '#06b6d4' : '#10b981',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    <Icon size={22} />
                  </div>

                  <span className="badge badge-primary">
                    <Calendar size={12} />
                    {item.period}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '0.25rem',
                  }}
                >
                  {item.role}
                </h3>

                <div
                  style={{
                    fontSize: '0.9375rem',
                    color: 'var(--cyan)',
                    fontWeight: 600,
                    marginBottom: '1rem',
                  }}
                >
                  {item.organization}
                </div>

                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.65,
                    flex: 1,
                  }}
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
