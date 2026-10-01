import React from 'react';
import TiltCard from './TiltCard';
import { GraduationCap, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export default function About() {
  const sgpas = [
    { sem: 'Semester 1', sgpa: '8.46' },
    { sem: 'Semester 2', sgpa: '8.54' },
    { sem: 'Semester 3', sgpa: '8.16' },
    { sem: 'Semester 4', sgpa: '8.59' },
  ];

  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        <span className="section-number">01</span>
        <h2 className="section-title">
          About <span className="text-gradient">Me</span>
        </h2>
        <p className="section-subtitle">
          BCA student & aspiring backend software engineer based in Jaipur, Rajasthan.
        </p>

        <div className="about-grid">
          {/* Column 1: 3D Developer Workspace Visual Card */}
          <TiltCard className="about-visual-card">
            <div className="visual-card-content">
              <div className="visual-avatar-wrapper">
                <div className="avatar-ring" />
                <div className="avatar-core">
                  <span className="avatar-initials">VK</span>
                </div>
              </div>
              <h3 className="visual-name">Vikram Kumawat</h3>
              <p className="visual-role">Backend Developer</p>

              <div className="visual-location">
                <MapPin size={16} className="text-gold" /> Jaipur, Rajasthan, India
              </div>

              <div className="visual-stats-grid">
                <div className="stat-box">
                  <span className="stat-val text-gold">8.44</span>
                  <span className="stat-lbl">CGPA</span>
                </div>
                <div className="stat-box">
                  <span className="stat-val text-gold">5</span>
                  <span className="stat-lbl">Full-Stack Projects</span>
                </div>
                <div className="stat-box">
                  <span className="stat-val text-gold">2027</span>
                  <span className="stat-lbl">Graduation</span>
                </div>
              </div>

              <div className="visual-focus">
                <CheckCircle2 size={16} className="text-gold" /> Focus: Backend Systems & Scalable Tech
              </div>
            </div>
          </TiltCard>

          {/* Column 2: Biography & Tech Focus (Exact Text from Prompt) */}
          <TiltCard className="about-bio-card">
            <div className="bio-card-content">
              <h3 className="bio-heading">Backend & Software Development</h3>
              <p className="bio-paragraph">
                I am a BCA student at the <strong>University of Engineering and Management, Jaipur</strong>, graduating in 2027, with a strong interest in backend development and software engineering. I enjoy building practical web applications and solving real-world problems through technology.
              </p>
              <p className="bio-paragraph">
                I have experience working with <strong>Java, Python, JavaScript, React, MySQL</strong>, and modern development tools such as <strong>Git and GitHub</strong>.
              </p>
              <p className="bio-paragraph">
                I am continuously improving my backend development, problem-solving, and software engineering skills, with the goal of becoming a professional software engineer and building reliable, scalable, and impactful applications.
              </p>

              <div className="tech-pills">
                <span className="tech-pill">Java</span>
                <span className="tech-pill">Python</span>
                <span className="tech-pill">JavaScript</span>
                <span className="tech-pill">React.js</span>
                <span className="tech-pill">MySQL</span>
                <span className="tech-pill">Git & GitHub</span>
                <span className="tech-pill">VS Code</span>
                <span className="tech-pill">Antigravity</span>
              </div>
            </div>
          </TiltCard>

          {/* Column 3: Education & Academic Performance Timeline */}
          <TiltCard className="about-edu-card">
            <div className="edu-card-content">
              <div className="edu-card-header">
                <GraduationCap className="icon-gold" size={24} />
                <h3>Education & Academic Timeline</h3>
              </div>

              <div className="edu-item">
                <h4 className="edu-degree">Bachelor of Computer Applications (BCA)</h4>
                <p className="edu-univ">University of Engineering and Management, Jaipur</p>
                <div className="edu-meta">
                  <span><Calendar size={14} className="text-gold" /> Expected Graduation: 2027</span>
                  <span className="badge-cgpa">CGPA: 8.44 / 10</span>
                </div>
              </div>

              {/* Semester SGPA Breakdown */}
              <div className="sgpa-timeline">
                <h5 className="sgpa-title">Semester Performance (SGPA):</h5>
                <div className="sgpa-grid">
                  {sgpas.map((s, i) => (
                    <div key={i} className="sgpa-box animate-sgpa" style={{ animationDelay: `${i * 0.15}s` }}>
                      <span className="sgpa-sem">{s.sem}</span>
                      <span className="sgpa-val text-gold">{s.sgpa}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Schooling Details */}
              <div className="schooling-details">
                <div className="school-item">
                  <span className="school-label">Class XII (Senior Secondary):</span>
                  <span className="school-val text-gold">86.00%</span>
                </div>
                <div className="school-item">
                  <span className="school-label">Class X (Secondary):</span>
                  <span className="school-val text-gold">62.70%</span>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr 1.1fr;
          gap: 28px;
          align-items: stretch;
        }

        .about-visual-card, .about-bio-card, .about-edu-card {
          padding: 28px;
          height: 100%;
        }

        /* Visual Card */
        .visual-card-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .visual-avatar-wrapper {
          position: relative;
          width: 90px;
          height: 90px;
          margin-bottom: 18px;
        }

        .avatar-ring {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          background: var(--gold-gradient);
          animation: pulseGold 3s infinite;
        }

        .avatar-core {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: var(--bg-deep);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .avatar-initials {
          font-family: var(--font-heading);
          font-size: 2.2rem;
          font-weight: 800;
          background: var(--gold-gradient-text);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .visual-name {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .visual-role {
          color: var(--gold-primary);
          font-family: var(--font-code);
          font-size: 0.88rem;
          margin-bottom: 12px;
        }

        .visual-location {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 24px;
        }

        .visual-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          width: 100%;
          margin-bottom: 24px;
          padding-top: 16px;
          border-top: 1px solid var(--bg-glass-border);
        }

        .stat-box {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stat-val {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          font-weight: 800;
        }

        .stat-lbl {
          font-size: 0.72rem;
          color: var(--text-muted);
        }

        .visual-focus {
          font-size: 0.85rem;
          color: var(--text-main);
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(245, 197, 66, 0.08);
          padding: 8px 14px;
          border-radius: 20px;
          border: 1px solid var(--bg-glass-border);
        }

        /* Bio Card */
        .bio-heading {
          font-size: 1.35rem;
          margin-bottom: 16px;
          color: var(--gold-bright);
        }

        .bio-paragraph {
          color: var(--text-muted);
          font-size: 0.98rem;
          line-height: 1.7;
          margin-bottom: 16px;
        }

        .tech-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 24px;
        }

        .tech-pill {
          padding: 5px 12px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--bg-glass-border);
          font-family: var(--font-code);
          font-size: 0.8rem;
          color: var(--text-main);
        }

        /* Edu Card */
        .edu-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .edu-degree {
          font-size: 1.1rem;
          margin-bottom: 4px;
          color: var(--text-main);
        }

        .edu-univ {
          color: var(--text-muted);
          font-size: 0.9rem;
          margin-bottom: 10px;
        }

        .edu-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 20px;
        }

        .badge-cgpa {
          background: var(--gold-gradient);
          color: #050505;
          font-weight: 700;
          font-size: 0.8rem;
          padding: 3px 10px;
          border-radius: 12px;
        }

        .sgpa-timeline {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid var(--bg-glass-border);
        }

        .sgpa-title {
          font-size: 0.88rem;
          color: var(--text-muted);
          margin-bottom: 12px;
        }

        .sgpa-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          margin-bottom: 20px;
        }

        .sgpa-box {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--bg-glass-border);
          padding: 8px 12px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .sgpa-box:hover {
          transform: translateY(-2px);
          border-color: var(--gold-primary);
        }

        .sgpa-sem {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .sgpa-val {
          font-weight: 700;
          font-family: var(--font-code);
          font-size: 0.9rem;
        }

        .schooling-details {
          padding-top: 14px;
          border-top: 1px solid var(--bg-glass-border);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .school-item {
          display: flex;
          justify-content: space-between;
          font-size: 0.88rem;
        }

        .school-label {
          color: var(--text-muted);
        }

        .school-val {
          font-weight: 700;
          font-family: var(--font-code);
        }

        @keyframes pulseGold {
          0% { box-shadow: 0 0 0 0 rgba(245, 197, 66, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(245, 197, 66, 0); }
          100% { box-shadow: 0 0 0 0 rgba(245, 197, 66, 0); }
        }

        @media (max-width: 1100px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
