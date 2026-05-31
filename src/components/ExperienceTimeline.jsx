import React from 'react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const ExperienceTimeline = ({ experiences }) => {
  if (!experiences || experiences.length === 0) {
    return (
      <div className="text-center py-4 text-secondary">
        No journey elements recorded yet. Add them in the Admin Dashboard!
      </div>
    );
  }

  return (
    <div className="position-relative py-4 max-w-3xl mx-auto" style={{ maxWidth: '800px' }}>
      {/* Centered timeline vertical line (Desktop) */}
      <div 
        className="position-absolute top-0 bottom-0 d-none d-md-block" 
        style={{ left: '50%', width: '2px', background: 'var(--border-color)', transform: 'translateX(-50%)', zIndex: 1 }}
      />
      
      {/* Left-aligned timeline vertical line (Mobile) */}
      <div 
        className="position-absolute top-0 bottom-0 d-block d-md-none" 
        style={{ left: '23px', width: '2px', background: 'var(--border-color)', zIndex: 1 }}
      />

      {experiences.map((exp, index) => {
        const isCurrent = exp.current || exp.role?.toLowerCase().includes('present') || exp.duration?.toLowerCase().includes('present') || exp.duration?.toLowerCase().includes('2026');
        const isLeft = index % 2 === 0;

        return (
          <div 
            key={exp._id} 
            className={`d-flex flex-column flex-md-row align-items-start mb-5 position-relative z-2 ${
              isLeft ? 'flex-md-row' : 'flex-md-row-reverse'
            }`}
          >
            {/* Timeline Dot (Alternates position on desktop, static left on mobile) */}
            <div className={`timeline-dot-responsive rounded-circle ${isCurrent ? 'current-pulse' : ''}`} />

            {/* Empty space for opposite side layout spacing on desktop */}
            <div className="d-none d-md-block flex-grow-1" style={{ width: '45%' }} />

            {/* Content card */}
            <div 
              className={`glass-card timeline-card-responsive shadow-sm p-4 ${
                isLeft ? 'md-margin-right' : 'md-margin-left'
              }`}
            >
              <div 
                className="d-flex align-items-center justify-content-between mb-3 border-bottom border-color pb-2"
                style={{ direction: 'ltr' }} // Reset alignment for internal headers
              >
                <div className="d-flex align-items-center gap-2 text-accent fw-bold small">
                  {exp.isEducation ? <GraduationCap size={16} /> : <Briefcase size={16} />}
                  <span className="text-uppercase tracking-wider" style={{ fontSize: '0.75rem' }}>
                    {exp.isEducation ? 'Education' : 'Experience'}
                  </span>
                </div>
                <span 
                  className="badge px-3 py-1.5 fw-semibold text-secondary border border-color d-flex align-items-center gap-1 small"
                  style={{ background: 'rgba(99, 102, 241, 0.04)', borderRadius: '8px', fontSize: '0.75rem' }}
                >
                  <Calendar size={12} />
                  {exp.duration}
                </span>
              </div>

              <h4 className="fw-extrabold mb-1 gradient-text fs-5 font-headings">{exp.role}</h4>
              <p className="text-secondary fw-semibold mb-2 small">{exp.company}</p>
              <p className="text-secondary small mb-0 leading-relaxed" style={{ lineHeight: '1.6' }}>
                {exp.description}
              </p>

              {isCurrent && (
                <span 
                  className="badge mt-3 px-3 py-1 fw-semibold text-primary"
                  style={{ background: 'rgba(99, 102, 241, 0.15)', borderRadius: '100px', fontSize: '0.72rem' }}
                >
                  Currently Pursuing
                </span>
              )}
            </div>

            {/* Balancing spacing block on desktop */}
            <div className="d-none d-md-block flex-grow-0" style={{ width: '5%' }} />
          </div>
        );
      })}
    </div>
  );
};

export default ExperienceTimeline;
