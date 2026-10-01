import React from 'react';
import TiltCard from './TiltCard';
import { ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon, InstagramIcon } from './SocialIcons';

export default function Profiles() {
  const profiles = [
    {
      name: 'GitHub',
      handle: '@vikaramkumawatRajawas',
      desc: 'Explore open-source repositories, backend code, full-stack college management systems, and streaming apps.',
      icon: <GithubIcon size={28} className="icon-gold" />,
      link: 'https://github.com/vikaramkumawatRajawas',
      badge: 'Code Repositories',
    },
    {
      name: 'LinkedIn',
      handle: 'Vikram Kumawat',
      desc: 'Connect professionally for software engineering opportunities, internships, and backend collaborations.',
      icon: <LinkedinIcon size={28} className="icon-gold" />,
      link: 'https://www.linkedin.com/in/vikram-kumawat-8267922b9/',
      badge: 'Professional Network',
    },
    {
      name: 'LeetCode',
      handle: 'vikramkumawat9351',
      desc: 'Review algorithmic problem-solving practice, data structure challenges, and computational logic.',
      icon: <LeetcodeIcon size={28} className="icon-gold" />,
      link: 'https://leetcode.com/u/vikramkumawat9351/',
      badge: 'Problem Solving',
    },
    {
      name: 'Instagram',
      handle: '@my_lord_hanuman_123',
      desc: 'Follow tech journey updates, project milestones, and personal development posts.',
      icon: <InstagramIcon size={28} className="icon-gold" />,
      link: 'https://www.instagram.com/my_lord_hanuman_123',
      badge: 'Social Updates',
    },
  ];

  return (
    <section id="profiles" className="section-padding profiles-section">
      <div className="container">
        <span className="section-number">05</span>
        <h2 className="section-title">
          Connect <span className="text-gradient">With Me</span>
        </h2>
        <p className="section-subtitle">
          Find me across developer platforms and professional social networks.
        </p>

        <div className="profiles-grid">
          {profiles.map((profile, idx) => (
            <TiltCard key={idx} className="profile-card" data-cursor="LINK">
              <div className="profile-card-top">
                <div className="profile-icon-box">{profile.icon}</div>
                <span className="profile-badge-pill">{profile.badge}</span>
              </div>

              <h3 className="profile-name">{profile.name}</h3>
              <p className="profile-handle">{profile.handle}</p>
              <p className="profile-desc">{profile.desc}</p>

              <a
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold profile-link-btn"
              >
                View Profile <ExternalLink size={16} />
              </a>
            </TiltCard>
          ))}
        </div>
      </div>

      <style>{`
        .profiles-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .profile-card {
          padding: 28px;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .profile-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .profile-icon-box {
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

        .profile-card:hover .profile-icon-box {
          transform: scale(1.1) rotate(6deg);
          background: rgba(245, 197, 66, 0.18);
          box-shadow: 0 0 20px var(--gold-glow);
        }

        .profile-badge-pill {
          font-family: var(--font-code);
          font-size: 0.72rem;
          color: var(--gold-bright);
          background: rgba(255, 255, 255, 0.04);
          padding: 3px 10px;
          border-radius: 10px;
          border: 1px solid var(--bg-glass-border);
        }

        .profile-name {
          font-size: 1.35rem;
          margin-bottom: 4px;
          color: var(--text-main);
        }

        .profile-handle {
          font-family: var(--font-code);
          font-size: 0.85rem;
          color: var(--gold-primary);
          margin-bottom: 12px;
        }

        .profile-desc {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 24px;
          flex-grow: 1;
        }

        .profile-link-btn {
          width: 100%;
        }

        @media (max-width: 1100px) {
          .profiles-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .profiles-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
