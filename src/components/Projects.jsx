import React, { useState } from 'react';
import TiltCard from './TiltCard';
import ProjectModal from './ProjectModal';
import { ExternalLink, Eye } from 'lucide-react';
import MagneticButton from './MagneticButton';
import { GithubIcon } from './SocialIcons';

export default function Projects({ externalSelectedProject, onClearExternalProject }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const activeProject = externalSelectedProject || selectedProject;
  const handleClose = () => {
    setSelectedProject(null);
    if (onClearExternalProject) onClearExternalProject();
  };

  const projectsData = [
    {
      id: 'unifyed',
      title: 'unifyED',
      subtitle: 'Centralized Digital Platform for Comprehensive College Management',
      description: 'A centralized college management platform designed to bring academic, administrative, student, faculty, and fee-related activities into one digital platform.',
      problem: 'Colleges often struggle with fragmented administrative software, dispersed fee management systems, and disconnected student-faculty communication channels.',
      solution: 'unifyED unifies student records, faculty allocation, fee collection, and administrative oversight under a high-security, role-based backend architecture.',
      roles: ['Student', 'Professor', 'HOD', 'VC', 'Admin', 'Fees Manager'],
      tech: ['React.js', 'JavaScript', 'Node.js', 'MySQL', 'CSS3', 'HTML5'],
      liveDemo: 'https://unifyed-wt02.onrender.com/',
      github: 'https://github.com/vikaramkumawatRajawas/-UnifyEd',
      image: '/assets/unifyed.jpg',
    },
    {
      id: 'viora',
      title: 'Viora',
      subtitle: 'Music & Video Streaming Platform',
      description: 'A modern music and video streaming platform with a custom user experience for discovering and consuming digital media.',
      problem: 'Delivering seamless audio/video streaming media without lag or buffer issues while preserving visual aesthetics and intuitive navigation.',
      solution: 'Engineered an optimized media playback UI with playlist management, dynamic search filters, and audio waveform visualization.',
      tech: ['React.js', 'JavaScript', 'Media APIs', 'CSS3', 'HTML5'],
      liveDemo: 'https://viora-n05s.onrender.com/',
      github: 'https://github.com/vikaramkumawatRajawas/Viora',
      image: '/assets/viora.jpg',
    },
    {
      id: 'neolibrary',
      title: 'NeoLibrary',
      subtitle: 'Digital Library Management Platform',
      description: 'A centralized digital library platform designed for organizing and managing digital library resources.',
      problem: 'Traditional libraries require automated book issuance, return tracking, search indexing, and real-time inventory updates.',
      solution: 'Built a clean database-backed cataloging platform with structured indexing, reading progress meters, and user book lists.',
      tech: ['JavaScript', 'Node.js', 'MySQL', 'HTML5', 'CSS3'],
      liveDemo: 'https://neolibrary.onrender.com/',
      github: 'https://github.com/vikaramkumawatRajawas/NeoLibrary',
      image: '/assets/neolibrary.jpg',
    },
    {
      id: 'lifeos',
      title: 'LifeOS',
      subtitle: 'Personal Digital Life Management Platform',
      description: 'A personal digital management platform focused on organizing productivity and personal digital activities through a centralized interface.',
      problem: 'Personal productivity tools are often scattered across multiple disjointed apps for tasks, calendar, habits, and goal tracking.',
      solution: 'Unified daily tasks, habit streaks, focus timers, and quarter goals into a single cohesive luxury dark dashboard UI.',
      tech: ['React.js', 'JavaScript', 'MySQL', 'HTML5', 'CSS3'],
      liveDemo: 'https://lifeos-22af.onrender.com/',
      github: 'https://github.com/vikaramkumawatRajawas/LifeOS-',
      image: '/assets/lifeos.jpg',
    },
    {
      id: 'urbannest',
      title: 'UrbanNest Lifestyle',
      subtitle: 'Lifestyle Web Platform',
      description: 'A modern lifestyle-oriented web platform with organized content, discovery-focused navigation, and a responsive user experience.',
      problem: 'Curating modern lifestyle products and interior decor content demands editorial elegance, responsive grids, and high performance.',
      solution: 'Created an editorial lifestyle marketplace with custom filtering, smooth transitions, and discovery-driven visual hierarchy.',
      tech: ['React.js', 'JavaScript', 'CSS3', 'HTML5'],
      liveDemo: 'https://urbannest-lifestyle-zm0w.onrender.com/',
      github: 'https://github.com/vikaramkumawatRajawas/urbannest-lifestyle',
      image: '/assets/urbannest.jpg',
    },
  ];

  return (
    <section id="projects" className="section-padding projects-section">
      <div className="container">
        <span className="section-number">03</span>
        <h2 className="section-title">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="section-subtitle">
          Real-world applications and software platforms I have built with practical backend logic and modern UI design.
        </p>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <TiltCard key={project.id} className="project-card" data-cursor="VIEW">
              <div className="project-thumb-container" onClick={() => setSelectedProject(project)} data-cursor="VIEW">
                <img src={project.image} alt={project.title} className="project-thumb" />
                <div className="project-thumb-overlay">
                  <span className="btn-gold view-details-btn">
                    <Eye size={16} /> View Details & Case Study
                  </span>
                </div>
              </div>

              <div className="project-content">
                <span className="project-subtitle-badge">{project.subtitle}</span>
                <h3 className="project-title-text" onClick={() => setSelectedProject(project)}>
                  {project.title}
                </h3>
                <p className="project-desc-text">{project.description}</p>

                <div className="project-tech-badges">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="p-tech-pill">{t}</span>
                  ))}
                </div>

                <div className="project-card-actions">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold project-action-btn"
                  >
                    Live Demo <ExternalLink size={14} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary project-action-btn"
                  >
                    <GithubIcon size={14} className="text-gold" /> GitHub
                  </a>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal project={activeProject} onClose={handleClose} />

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
          gap: 32px;
        }

        .project-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          border-color: var(--bg-glass-border);
        }

        .project-thumb-container {
          position: relative;
          height: 220px;
          overflow: hidden;
          cursor: pointer;
        }

        .project-thumb {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .project-card:hover .project-thumb {
          transform: scale(1.08);
        }

        .project-thumb-overlay {
          position: absolute;
          inset: 0;
          background: rgba(3, 3, 3, 0.68);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-thumb-container:hover .project-thumb-overlay {
          opacity: 1;
        }

        .view-details-btn {
          transform: translateY(10px);
          transition: transform 0.3s ease;
        }

        .project-thumb-container:hover .view-details-btn {
          transform: translateY(0);
        }

        .project-content {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .project-subtitle-badge {
          font-family: var(--font-code);
          font-size: 0.78rem;
          color: var(--gold-bright);
          margin-bottom: 8px;
          display: block;
        }

        .project-title-text {
          font-size: 1.45rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 10px;
          cursor: pointer;
          transition: color var(--transition-fast);
        }

        .project-title-text:hover {
          color: var(--gold-primary);
        }

        .project-desc-text {
          color: var(--text-muted);
          font-size: 0.92rem;
          line-height: 1.6;
          margin-bottom: 20px;
          flex-grow: 1;
        }

        .project-tech-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 24px;
        }

        .p-tech-pill {
          padding: 3px 8px;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--bg-glass-border);
          font-family: var(--font-code);
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .project-card-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .project-action-btn {
          flex: 1;
          padding: 10px 14px;
          font-size: 0.88rem;
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
