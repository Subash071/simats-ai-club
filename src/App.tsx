import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Events } from './pages/Events';
import { Projects } from './pages/Projects';
import { Team } from './pages/Team';
import { LearningHub } from './pages/LearningHub';
import { IdeaLab } from './pages/IdeaLab';
import { Join } from './pages/Join';
import { Contact } from './pages/Contact';

function PageMetadataManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Dynamic page title management for Google Search and Browser tabs
    const titles: Record<string, string> = {
      '/': 'SIMATS ENGINEERING AI CLUB - Saveetha University',
      '/projects': 'AI Projects | AI CLUB SIMATS',
      '/events': 'Events & Workshops | AI CLUB SIMATS',
      '/learning': 'Learning Hub | AI CLUB SIMATS',
      '/idea-lab': 'Idea Lab | AI CLUB SIMATS',
    };

    document.title = titles[pathname] || 'SIMATS ENGINEERING AI CLUB';

    // Dynamic canonical URL update
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      const fullUrl = pathname === '/' 
        ? 'https://simats-ai-club.netlify.app/' 
        : `https://simats-ai-club.netlify.app${pathname}`;
      canonical.setAttribute('href', fullUrl);
    }

    // Scroll to top or anchor
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <PageMetadataManager />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="events" element={<Events />} />
          <Route path="learning" element={<LearningHub />} />
          <Route path="idea-lab" element={<IdeaLab />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
