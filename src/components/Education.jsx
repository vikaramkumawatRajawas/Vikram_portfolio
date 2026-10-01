import React from 'react';
import TiltCard from './TiltCard';
import { GraduationCap, Award, Calendar, CheckCircle, Bookmark } from 'lucide-react';

export default function Education() {
  const certifications = [
    {
      title: 'Soft Skill Development',
      issuer: 'NPTEL (National Programme on Technology Enhanced Learning)',
      date: 'Completed',
      skills: ['Interpersonal Communication', 'Leadership', 'Professional Ethics'],
    },
    {
      title: 'Introduction to Relational Database',
      issuer: 'Coursera',
      date: 'Completed',
      skills: ['Relational Data Modeling', 'SQL Queries', 'Database Normalization'],
    },
    {
      title: 'Python Basics',
      issuer: 'Coursera',
      date: 'Completed',
      skills: ['Core Python Syntax', 'Data Structures', 'Functions & OOP'],
    },
  ];

  return (
    <section id="education" className="section-padding education-section">
      <div className="container">
        <span className="section-number">04</span>
        <h2 className="section-title">
          Education & <span className="text-gradient">Certifications</span>
        </h2>
        <p className="section-subtitle">
          Academic foundation and verified professional technical certifications.
        </p>

        <div className="edu-cert-grid">
          {/* Card 1: Education Timeline */}
          <TiltCard className="edu-main-card">
            <div className="card-header-flex">
              <div className="icon-badge">
                <GraduationCap size={24} className="icon-gold" />
              </div>
              <div>
                <h3 className="card-heading">Education History</h3>
                <span className="card-subheading">Degree & Academic Qualifications</span>
              </div>
            </div>

            <div className="vertical-timeline">
              {/* College */}
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <div className="timeline-time">
                    <Calendar size={14} className="text-gold" /> 2024 – 2027
                  </div>
                  <h4 className="item-title">Bachelor of Computer Applications (BCA)</h4>
                  <p className="item-institution">University of Engineering and Management, Jaipur</p>

                  <div className="cgpa-highlight-box">
                    <span className="lbl">Current CGPA:</span>
                    <span className="val text-gold">8.44 / 10</span>
                  </div>
                </div>
              </div>

              {/* Class XII */}
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <h4 className="item-title">Class XII (Senior Secondary)</h4>
                  <div className="marks-badge">
                    <span>Aggregate Score:</span>
                    <span className="val text-gold">86.00%</span>
                  </div>
                </div>
              </div>

              {/* Class X */}
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <h4 className="item-title">Class X (Secondary)</h4>
                  <div className="marks-badge">
                    <span>Aggregate Score:</span>
                    <span className="val text-gold">62.70%</span>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>

          {/* Card 2: Certifications */}
          <TiltCard className="cert-main-card">
            <div className="card-header-flex">
              <div className="icon-badge">
                <Award size={24} className="icon-gold" />
              </div>
              <div>
                <h3 className="card-heading">Certifications</h3>
                <span className="card-subheading">Verified Industry Skill Badges</span>
              </div>
            </div>

            <div className="cert-list">
              {certifications.map((cert, idx) => (
                <div key={idx} className="cert-item-box">
                  <div className="cert-top">
                    <Bookmark size={18} className="text-gold" />
                    <div>
                      <h4 className="cert-title">{cert.title}</h4>
                      <span className="cert-issuer">{cert.issuer}</span>
                    </div>
                  </div>

                  <div className="cert-skills-tags">
                    {cert.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="cert-skill-pill">
                        <CheckCircle size={12} className="text-gold" /> {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TiltCard>
        </div>
      </div>

      <style>{`
        .edu-cert-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }

        .edu-main-card, .cert-main-card {
          padding: 32px;
          height: 100%;
        }

        .card-header-flex {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 32px;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--bg-glass-border);
        }

        .icon-badge {
          width: 50px;
          height: 50px;
          border-radius: 14px;
          background: rgba(245, 197, 66, 0.08);
          border: 1px solid var(--bg-glass-border);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card-heading {
          font-size: 1.35rem;
          color: var(--text-main);
        }

        .card-subheading {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        /* Timeline */
        .vertical-timeline {
          position: relative;
          padding-left: 20px;
        }

        .vertical-timeline::before {
          content: '';
          position: absolute;
          top: 8px;
          bottom: 8px;
          left: 6px;
          width: 2px;
          background: linear-gradient(180deg, var(--gold-bright), var(--bg-glass-border));
        }

        .timeline-item {
          position: relative;
          margin-bottom: 28px;
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-dot {
          position: absolute;
          left: -20px;
          top: 6px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--gold-gradient);
          box-shadow: 0 0 10px var(--gold-bright);
        }

        .timeline-content {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--bg-glass-border);
          padding: 18px;
          border-radius: var(--radius-md);
          transition: transform 0.3s ease;
        }

        .timeline-content:hover {
          transform: translateX(4px);
        }

        .timeline-time {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-code);
          font-size: 0.8rem;
          color: var(--gold-bright);
          margin-bottom: 6px;
        }

        .item-title {
          font-size: 1.1rem;
          margin-bottom: 4px;
        }

        .item-institution {
          color: var(--text-muted);
          font-size: 0.9rem;
          margin-bottom: 12px;
        }

        .cgpa-highlight-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(245, 197, 66, 0.1);
          border: 1px solid var(--bg-glass-border);
          padding: 8px 14px;
          border-radius: 8px;
          font-size: 0.88rem;
        }

        .cgpa-highlight-box .val {
          font-weight: 800;
          font-family: var(--font-code);
        }

        .marks-badge {
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
          margin-top: 6px;
        }

        .marks-badge .val {
          font-weight: 700;
          font-family: var(--font-code);
        }

        /* Certifications List */
        .cert-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .cert-item-box {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--bg-glass-border);
          padding: 20px;
          border-radius: var(--radius-md);
          transition: all var(--transition-fast);
        }

        .cert-item-box:hover {
          border-color: var(--gold-primary);
          background: rgba(245, 197, 66, 0.05);
          transform: translateX(6px);
        }

        .cert-top {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 12px;
        }

        .cert-title {
          font-size: 1.1rem;
          color: var(--text-main);
        }

        .cert-issuer {
          font-size: 0.85rem;
          color: var(--gold-bright);
        }

        .cert-skills-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 10px;
        }

        .cert-skill-pill {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.78rem;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.04);
          padding: 3px 10px;
          border-radius: 6px;
          border: 1px solid var(--bg-glass-border);
        }

        @media (max-width: 992px) {
          .edu-cert-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
