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

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
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
      <ScrollToTop />
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
