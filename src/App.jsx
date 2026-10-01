import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';
import BackToTop from './components/BackToTop';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Profiles from './components/Profiles';
import Contact from './components/Contact';
import Footer from './components/Footer';

// 3D Experience World & Section Indicator
import ExperienceWorld from './components/3d/ExperienceWorld';
import SectionIndicator from './components/SectionIndicator';

const PROJECTS_DATA = [
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

export default function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('vk_portfolio_theme') || 'dark';
  });

  const [scrollProgress, setScrollProgress] = useState(0);
  const [externalSelectedProject, setExternalSelectedProject] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('vk_portfolio_theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handle3DProjectSelect = (projectId) => {
    const proj = PROJECTS_DATA.find((p) => p.id === projectId);
    if (proj) {
      setExternalSelectedProject(proj);
    }
  };

  return (
    <div className="portfolio-app">
      {/* Initial 3D / Brand Loading Screen */}
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* 3D Continuous WebGL World Canvas */}
      <ExperienceWorld
        scrollProgress={scrollProgress}
        onSelectProject={handle3DProjectSelect}
      />

      {/* Interactive 2D Particle Background overlay */}
      <ParticleBackground />

      {/* Top Gold Scroll Progress Bar */}
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />

      {/* Vertical Section Indicator Sidebar (01 HERO .. 06 CONTACT) */}
      <SectionIndicator scrollProgress={scrollProgress} />

      {/* Glass Floating Navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main UI Overlay Sections */}
      <main className="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects
          externalSelectedProject={externalSelectedProject}
          onClearExternalProject={() => setExternalSelectedProject(null)}
        />
        <Education />
        <Profiles />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back-To-Top Button */}
      <BackToTop />

      <style>{`
        .portfolio-app {
          position: relative;
          min-height: 100vh;
          background-color: var(--bg-deep);
        }

        .main-content {
          position: relative;
          z-index: 1;
        }

        .scroll-progress-bar {
          position: fixed;
          top: 0;
          left: 0;
          height: 3px;
          background: var(--gold-gradient);
          z-index: 2001;
          box-shadow: 0 0 12px var(--gold-bright);
          transition: width 0.1s ease-out;
        }
      `}</style>
    </div>
  );
}
