import React from 'react';
import TiltCard from './TiltCard';
import { Code, Layout, Database, Wrench } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code size={26} className="icon-gold" />,
      skills: [
        { name: 'Java', level: 'Backend Core', desc: 'Object-Oriented Programming, Data Structures & Algorithms' },
        { name: 'Python', level: 'Scripting & Backend', desc: 'Automation, Data Handling, Backend Logic' },
        { name: 'JavaScript', level: 'Full Stack Logic', desc: 'ES6+, Async Programming, DOM Manipulation' },
      ],
    },
    {
      title: 'Frontend Development',
      icon: <Layout size={26} className="icon-gold" />,
      skills: [
        { name: 'HTML5', level: 'Semantic Structure', desc: 'Accessibility, Clean Markup, SEO Optimization' },
        { name: 'CSS3', level: 'Modern Styling', desc: 'Flexbox, Grid, Glassmorphism, Animations' },
        { name: 'React.js', level: 'UI Library', desc: 'Component Architecture, Hooks, State Management' },
      ],
    },
    {
      title: 'Database Management',
      icon: <Database size={26} className="icon-gold" />,
      skills: [
        { name: 'MySQL', level: 'Relational Database', desc: 'Schema Design, SQL Queries, Joins, Indexing, Data Integrity' },
      ],
    },
    {
      title: 'Tools & Ecosystem',
      icon: <Wrench size={26} className="icon-gold" />,
      skills: [
        { name: 'Git', level: 'Version Control', desc: 'Branching, Commits, Merging Workflows' },
        { name: 'GitHub', level: 'Code Hosting', desc: 'Repositories, Pull Requests, Open Source' },
        { name: 'VS Code', level: 'Primary IDE', desc: 'Extensions, Debugging, Environment Setup' },
        { name: 'Antigravity', level: 'AI Engineering', desc: 'Agentic Workflows, AI-Assisted System Design' },
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding skills-section">
      <div className="container">
        <span className="section-number">02</span>
        <h2 className="section-title">
          My <span className="text-gradient">Skills</span>
        </h2>
        <p className="section-subtitle">
          Core technical competencies, programming languages, databases, and software engineering tools.
        </p>

        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <TiltCard key={idx} className="skill-cat-card" data-cursor="SKILLS">
              {/* Gold Sweep Light Animation Line */}
              <div className="card-gold-sweep" />

              <div className="cat-header">
                <div className="cat-icon-box">{cat.icon}</div>
                <h3 className="cat-title">{cat.title}</h3>
              </div>

              <div className="skill-items-list">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <div className="skill-item-top">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level-badge">{skill.level}</span>
                    </div>
                    <p className="skill-desc">{skill.desc}</p>
                    <div className="skill-progress-bar">
                      <div className="progress-fill" style={{ width: `${82 + ((sIdx * 7) % 15)}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
        }

        .skill-cat-card {
          padding: 32px;
          height: 100%;
          position: relative;
        }

        .card-gold-sweep {
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #FFD966, transparent);
          transition: left 0.75s ease;
        }

        .skill-cat-card:hover .card-gold-sweep {
          left: 150%;
        }

        .cat-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 28px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--bg-glass-border);
        }

        .cat-icon-box {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: rgba(245, 197, 66, 0.08);
          border: 1px solid var(--bg-glass-border);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease, background 0.3s ease;
        }

        .skill-cat-card:hover .cat-icon-box {
          transform: scale(1.08) rotate(5deg);
          background: rgba(245, 197, 66, 0.18);
          box-shadow: 0 0 20px var(--gold-glow);
        }

        .cat-title {
          font-size: 1.35rem;
          color: var(--text-main);
        }

        .skill-items-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .skill-item {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 16px;
          border-radius: var(--radius-md);
          transition: all var(--transition-fast);
        }

        .skill-item:hover {
          border-color: var(--gold-primary);
          background: rgba(245, 197, 66, 0.06);
          transform: translateX(6px);
        }

        .skill-item-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 6px;
        }

        .skill-name {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--text-main);
          transition: color 0.2s ease;
        }

        .skill-item:hover .skill-name {
          color: var(--gold-bright);
        }

        .skill-level-badge {
          font-family: var(--font-code);
          font-size: 0.75rem;
          color: var(--gold-bright);
          background: rgba(245, 197, 66, 0.1);
          padding: 2px 10px;
          border-radius: 12px;
          border: 1px solid var(--bg-glass-border);
        }

        .skill-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
          margin-bottom: 10px;
        }

        .skill-progress-bar {
          width: 100%;
          height: 4px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 2px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: var(--gold-gradient);
          border-radius: 2px;
          box-shadow: 0 0 10px var(--gold-glow);
        }

        @media (max-width: 992px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
