import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Container, Nav, Navbar as BSNavbar, Button } from 'react-bootstrap';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  const handleNavLinkClick = (e, href) => {
    e.preventDefault();
    setExpanded(false);

    if (location.pathname === '/' && location.hash === href) {
      const element = document.getElementById(href.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      navigate('/' + href);
    }
  };

  return (
    <BSNavbar
      expand="lg"
      sticky="top"
      expanded={expanded}
      className="custom-navbar py-3"
    >
      <Container>
        <BSNavbar.Brand as={Link} to="/" onClick={() => setExpanded(false)} className="fs-3">
          Shaheer
        </BSNavbar.Brand>

        <div className="d-flex align-items-center gap-2 d-lg-none">
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <BSNavbar.Toggle
            aria-controls="navbar-nav"
            onClick={() => setExpanded(!expanded)}
            className="border-0 bg-transparent p-1"
          >
            {expanded ? <X size={24} className="text-primary" /> : <Menu size={24} className="text-primary" />}
          </BSNavbar.Toggle>
        </div>

        <BSNavbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center gap-2 mt-3 mt-lg-0">
            {navLinks.map((link) => (
              <Nav.Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                active={location.pathname === '/' && (location.hash === link.href || (link.href === '#home' && !location.hash))}
                className="nav-link"
              >
                {link.name}
              </Nav.Link>
            ))}



            <button
              onClick={toggleTheme}
              className="theme-toggle-btn d-none d-lg-flex ms-2"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
