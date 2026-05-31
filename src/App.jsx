import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/custom.css';

// Context Providers
import { ThemeProvider } from './context/ThemeContext';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToHash from './components/ScrollToHash';

// Pages
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';

import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const scrollPercent = (window.scrollY / scrollHeight) * 100;
        const progressBar = document.getElementById('top-scroll-progress');
        if (progressBar) {
          progressBar.style.width = `${scrollPercent}%`;
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <ScrollToHash />
      <ThemeProvider>
        <div className="d-flex flex-column min-vh-100 position-relative">
          {/* Elite Scroll Progress Indicator */}
          <div id="top-scroll-progress" className="scroll-progress"></div>
          
          {/* Dynamic Cursor-Following Glow */}
          <div className="ambient-cursor-glow"></div>

          <Navbar />
          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
